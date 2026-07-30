"use client";

import { Bell, Search, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const { logout } = useAuth();

  return (
    <header className="h-16 w-full border-b bg-white px-6 flex items-center justify-between">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Welcome back 👋
        </p>
      </div>

      {/* Center */}
      <div className="hidden lg:flex items-center w-96 relative">
        <Search
          size={18}
          className="absolute left-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-lg border pl-10 pr-4 py-2 outline-none focus:border-black"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        <button className="relative p-2 cursor-pointer rounded-lg hover:bg-gray-100">
          <Bell size={20} />

          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500"></span>
        </button>

        {/* <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold">
            V
          </div>

          <div className="hidden md:block">

            <h3 className="font-semibold">
              Vibely User
            </h3>

            <p className="text-xs text-gray-500">
              Connected
            </p>

          </div>

        </div> */}

        <button
          onClick={logout}
          className="flex items-center gap-2 cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </header>
  );
}







// "use client";

// import {
//   Bell,
//   LogOut,
//   Upload,
// } from "lucide-react";

// import Link from "next/link";
// import { useAuth } from "@/hooks/useAuth";

// export default function Header() {
//   const { logout } = useAuth();

//   return (
//     <header className="sticky top-0 z-30 h-16 bg-white border-b">

//       <div className="h-full flex items-center justify-between px-8">

//         {/* Left */}

//         <div>

//           <h1 className="text-2xl font-bold text-gray-900">
//             Dashboard
//           </h1>

//           <p className="text-sm text-gray-500">
//             Manage your TikTok videos
//           </p>

//         </div>

//         {/* Right */}

//         <div className="flex items-center gap-4">

//           {/* <Link
//             href="/upload"
//             className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-900 transition"
//           >
//             <Upload size={18} />
//             Upload Video
//           </Link> */}

//           <button className="relative rounded-lg border p-2 hover:bg-gray-100 transition">

//             <Bell size={20} />

//             <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

//           </button>

//           <div className="flex items-center gap-3 rounded-xl border px-3 py-2">

//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-black to-gray-700 font-bold text-white">
//               V
//             </div>

//             <div className="hidden md:block">

//               <h3 className="font-semibold leading-none">
//                 Vibely User
//               </h3>

//               <span className="text-xs text-green-600">
//                 ● Connected
//               </span>

//             </div>

//           </div>

//           <button
//             onClick={logout}
//             className="flex items-center gap-2 rounded-lg border border-red-500 px-4 py-2 text-red-500 hover:bg-red-500 hover:text-white transition"
//           >
//             <LogOut size={18} />
//             Logout
//           </button>

//         </div>

//       </div>

//     </header>
//   );
// }