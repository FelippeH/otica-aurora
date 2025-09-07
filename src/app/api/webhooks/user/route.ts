import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from "svix";
import { getPrisma } from "@/lib/getPrisma";

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || "";

type EventType = "user.created" | "user.updated" | "*";

type Event = {
  data: EventDataType;
  object: "event";
  type: EventType;
};

type EventDataType = {
  id: string;
  first_name: string;
  last_name: string;
  email_addresses: EmailAddressType[];
  primary_email_address_id: string;
  attributes: Record<string, string | number>;
};

type EmailAddressType = {
  id: string;
  email_address: string;
};

async function handler(req: Request) {
  const prisma = await getPrisma();

  const payload = await req.text();
  const headerList = await headers();

  // Garantindo que todos os headers obrigatórios existam
  const svixId = headerList.get("svix-id");
  const svixTimestamp = headerList.get("svix-timestamp");
  const svixSignature = headerList.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return NextResponse.json(
      { error: "Missing Svix headers" },
      { status: 400 }
    );
  }

  const heads: WebhookRequiredHeaders = {
    "svix-id": svixId,
    "svix-timestamp": svixTimestamp,
    "svix-signature": svixSignature,
  };

  const wh = new Webhook(webhookSecret);
  let evt: Event;

  try {
    evt = wh.verify(payload, heads) as Event;
  } catch (err) {
    console.error((err as Error).message);
    return NextResponse.json({ error: "Invalid webhook" }, { status: 400 });
  }

  const eventType: EventType = evt.type;

  if (eventType === "user.created" || eventType === "user.updated") {
    const { id, ...attributes } = evt.data;

    await prisma.user.upsert({
      where: { externalId: id },
      create: {
        externalId: id,
        attributes,
      },
      update: {
        attributes,
      },
    });
  }

  return NextResponse.json({}, { status: 200 });
}

export const POST = handler;
export const GET = handler;
export const PUT = handler;
