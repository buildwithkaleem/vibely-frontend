// "use client";

// export default function Navbar() {
//   return (
//     <header className="h-16 bg-white border-b flex items-center justify-between px-8">

//       <h2 className="text-xl font-semibold">
//         Vibely Dashboard
//       </h2>

//       <button
//         onClick={() => {
//           localStorage.removeItem("token");
//           window.location.href = "/";
//         }}
//         className="bg-red-500 text-white px-4 py-2 rounded-lg"
//       >
//         Logout
//       </button>

//     </header>
//   );
// }






"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Vibely
        </Link>

        <nav className="hidden gap-8 md:flex">

          <Link href="/">
            Home
          </Link>

          <Link href="/#features">
            Features
          </Link>

          <Link href="/#faq">
            FAQ
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </nav>

        <a
          href="https://vibely-api.egrif.online/api/auth/login"
          className="rounded-lg bg-black px-5 py-2 text-white"
        >
          Login with TikTok
        </a>

      </div>
    </header>
  );
}