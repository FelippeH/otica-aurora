import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layout/NavigationMenu";
import Cover from "@/components/layout/Cover";
import Info from "@/components/layout/Info";

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
        <Cover />
        <Info />
        <main className="bg-primary min-h-screen p-12 pt-20">{children}</main>
      </body>
    </html>
  );
}
