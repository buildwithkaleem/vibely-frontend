"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Upload",
    href: "/upload",
  },
  {
    name: "Videos",
    href: "/videos",
  },
  {
    name: "Privacy",
    href: "/privacy-policy",
  },
  {
    name: "Terms",
    href: "/terms-of-service",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white">

      <div className="text-3xl font-bold p-6 border-b border-gray-700">
        Vibely
      </div>

      <nav className="flex flex-col">

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-6 py-4 transition ${pathname === link.href
                ? "bg-blue-600"
                : "hover:bg-gray-800"
              }`}
          >
            {link.name}
          </Link>
        ))}

      </nav>

    </aside>
  );
}