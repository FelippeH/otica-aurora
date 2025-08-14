import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import SideMenu from "@/components/SideMenu";

export const metadata: Metadata = {
  title: "Aurora",
  description: "Ótica Aurora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-navbar fixed top-0 w-full flex items-center py-4 px-8 z-50">
          <div className="flex-1 flex justify-center">
            <Link className="text-center items-center" href="/">
              <Image
                src="/logo.png"
                alt="Ótica Aurora"
                width={70}
                height={70}
              />
            </Link>
          </div>
          <div className="absolute left-7">
            <SideMenu />
          </div>
        </nav>
        <main className="bg-primary h-screen p-12">{children}</main>
      </body>
    </html>
  );
}
