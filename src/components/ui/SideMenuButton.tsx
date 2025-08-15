"use client";
import { Menu } from "lucide-react";

type Props = {
  openSidebar: () => void;
};

export default function SideMenuButton({ openSidebar }: Props) {
  return (
    <button
      onClick={openSidebar}
      className="p-2 text-white rounded-md md:hidden"
    >
      <Menu size={28} />
    </button>
  );
}
