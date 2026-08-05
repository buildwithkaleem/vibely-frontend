// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const links = [
//   {
//     name: "Dashboard",
//     href: "/dashboard",
//   },
//   {
//     name: "Upload",
//     href: "/upload",
//   },
//   {
//     name: "Videos",
//     href: "/videos",
//   },
//   // {
//   //   name: "Privacy",
//   //   href: "/privacy-policy",
//   // },
//   // {
//   //   name: "Terms",
//   //   href: "/terms-of-service",
//   // },
//   // {
//   //   name: "Contact",
//   //   href: "/contact",
//   // },
// ];

// export default function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <aside className="w-64 min-h-screen bg-gray-900 text-white">

//       <div className="text-3xl font-bold p-6 border-b border-gray-700">
//         {/* Vibely */}
//         <Link href="/" className="flex items-center">
        
//                   <Image
//                     src="/vibely-logo.png"
//                     alt="Vibely Logo"
//                     width={42}
//                     height={42}
//                     priority
//                   />
        
//                   <span className="text-2xl font-bold">
//                     Vibely
//                   </span>
        
//                 </Link>
//       </div>

//       <nav className="flex flex-col">

//         {links.map((link) => (
//           <Link
//             key={link.href}
//             href={link.href}
//             className={`px-6 py-4 transition ${pathname === link.href
//                 ? "bg-blue-600"
//                 : "hover:bg-gray-800"
//               }`}
//           >
//             {link.name}
//           </Link>
//         ))}

//       </nav>

//     </aside>
//   );
// }






"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Upload,
  Video,
  User,
  Settings,
  Menu,
  X,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Upload",
    href: "/upload",
    icon: Upload,
  },
  {
    name: "Videos",
    href: "/videos",
    icon: Video,
  },
  // {
  //   name: "Profile",
  //   href: "/profile",
  //   icon: User,
  // },
  // {
  //   name: "Settings",
  //   href: "/settings",
  //   icon: Settings,
  // },
];

export default function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          h-screen
          bg-gray-900
          text-white
          transition-all
          duration-300

          ${collapsed
            ? "w-20"
            : "w-64"
          }

          ${mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
          }

          lg:translate-x-0
        `}
      >
        {/* Top */}

        <div className="flex items-center justify-between border-b border-gray-800 p-5">

          <Link
            href="/"
            className="flex items-center gap-2 overflow-hidden"
          >
            <Image
              src="/vibely-logo.png"
              alt="Vibely"
              width={40}
              height={40}
            />

            {!collapsed && (
              <span className="text-2xl font-bold whitespace-nowrap">
                Vibely
              </span>
            )}
          </Link>

          {/* Desktop Collapse */}

          <button
            onClick={() =>
              setCollapsed(!collapsed)
            }
            className="hidden rounded-lg p-2 hover:bg-gray-800 lg:block"
          >
            <Menu size={20} />
          </button>

          {/* Mobile Close */}

          <button
            onClick={() =>
              setMobileOpen(false)
            }
            className="rounded-lg p-2 hover:bg-gray-800 lg:hidden"
          >
            <X size={20} />
          </button>

        </div>

        {/* Links */}

        <nav className="mt-5 flex flex-col gap-2 px-3">

          {links.map((link) => {
            const Icon = link.icon;

            const active =
              pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() =>
                  setMobileOpen(false)
                }
                className={`
                  flex
                  items-center
                  rounded-xl
                  px-4
                  py-3
                  transition-all

                  ${active
                    ? "bg-blue-600"
                    : "hover:bg-gray-800"
                  }

                  ${collapsed
                    ? "justify-center"
                    : "gap-4"
                  }
                `}
              >
                <Icon size={22} />

                {!collapsed && (
                  <span>
                    {link.name}
                  </span>
                )}
              </Link>
            );
          })}

        </nav>
      </aside>

      {/* Desktop Spacer */}

      <div
        className={`
          hidden
          transition-all
          duration-300
          lg:block

          ${collapsed
            ? "w-20"
            : "w-64"
          }
        `}
      />
    </>
  );
}