import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layout/NavigationMenu";

export const metadata: Metadata = {
  title: "Aurora",
  description: "Ótica Aurora",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        <main className="bg-primary min-h-screen">{children}</main>
      </body>
    </html>
  );
}
