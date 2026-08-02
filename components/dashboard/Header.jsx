// "use client";

// import { Bell, Search, LogOut } from "lucide-react";
// import { useAuth } from "@/hooks/useAuth";

// export default function Header() {
//   const { logout } = useAuth();

//   return (
//     <header className="h-16 w-full border-b bg-white px-6 flex items-center justify-between">

//       {/* Left */}
//       <div>
//         <h1 className="text-2xl font-bold text-gray-900">
//           Dashboard
//         </h1>
//         <p className="text-sm text-gray-500">
//           Welcome back 👋
//         </p>
//       </div>

//       {/* Center */}
//       <div className="hidden lg:flex items-center w-96 relative">
//         <Search
//           size={18}
//           className="absolute left-3 text-gray-400"
//         />

//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full rounded-lg border pl-10 pr-4 py-2 outline-none focus:border-black"
//         />
//       </div>

//       {/* Right */}
//       <div className="flex items-center gap-4">

//         <button className="relative p-2 cursor-pointer rounded-lg hover:bg-gray-100">
//           <Bell size={20} />

//           <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500"></span>
//         </button>

//         {/* <div className="flex items-center gap-3">

//           <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold">
//             V
//           </div>

//           <div className="hidden md:block">

//             <h3 className="font-semibold">
//               Vibely User
//             </h3>

//             <p className="text-xs text-gray-500">
//               Connected
//             </p>

//           </div>

//         </div> */}

//         <button
//           onClick={logout}
//           className="flex items-center gap-2 cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
//         >
//           <LogOut size={18} />
//           Logout
//         </button>

//       </div>

//     </header>
//   );
// }







"use client";

import {
  Bell,
  Menu,
  Search,
  LogOut,
} from "lucide-react";

import { useAuth } from "@/hooks/useAuth";

export default function Header({
  collapsed,
  setMobileOpen,
}) {
  const { logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-6">

      {/* Left */}

      <div className="flex items-center gap-4">

        {/* Mobile Hamburger */}

        <button
          onClick={() => setMobileOpen(true)}
          className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <div>

          <h1 className="text-xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="hidden text-sm text-gray-500 md:block">
            Welcome back 👋
          </p>

        </div>

      </div>

      {/* Center */}

      <div className="hidden w-full max-w-md lg:flex">

        <div className="relative w-full">

          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-xl border bg-gray-50 py-2 pl-10 pr-4 outline-none transition focus:border-black"
          />

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-3">

        {/* Notification */}

        <button className="relative rounded-lg p-2 hover:bg-gray-100">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

        </button>

        {/* User */}

        <div className="flex items-center gap-3 rounded-xl border px-3 py-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black font-bold text-white">

            V

          </div>

          <div className="hidden md:block">

            <p className="font-semibold">
              Vibely User
            </p>

            <p className="text-xs text-gray-500">
              Connected
            </p>

          </div>

        </div>

        {/* Logout */}

        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >

          <LogOut size={18} />

          <span className="hidden lg:block">
            Logout
          </span>

        </button>

      </div>

    </header>
  );
}