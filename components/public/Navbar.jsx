
// "use client";

// import Link from "next/link";
// import { useAuth } from "@/hooks/useAuth";
// import { usePathname, useRouter } from "next/navigation";
// import Image from "next/image";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();

//   const {
//     isAuthenticated,
//     logout,
//     loading,
//   } = useAuth();

//   const scrollToSection = (id) => {
//     if (pathname !== "/" || pathname === "/" ) {
//       router.push(`/#${id}`);
//       return;
//     }

//     document.getElementById(id)?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   if (loading) return null;

//   return (


//     <header className="sticky top-0 bg-white border-b">

//       <div className="mx-auto max-w-7xl h-16 flex justify-between items-center px-6">

//         <Link href="/" className="flex items-center">

//           <Image
//             src="/vibely-logo.png"
//             alt="Vibely Logo"
//             width={42}
//             height={42}
//             priority
//           />

//           <span className="text-2xl font-bold">
//             Vibely
//           </span>

//         </Link>

//         <nav className="hidden md:flex gap-8">

//           <Link
//             href="/"
//             onClick={() => {
//               if (window.location.pathname === "/") {
//                 window.scrollTo({
//                   top: 0,
//                   behavior: "smooth",
//                 });
//               }
//             }}
//           >
//             Home
//           </Link>


//           {/* <a href="/#home">
//             Home
//           </a> */}

//           <Link href="/about">
//             About
//           </Link>


//           <button className="cursor-pointer" onClick={() => scrollToSection("features")}>Features</button>

//           <button className="cursor-pointer" onClick={() => scrollToSection("faq")}>FAQ</button>

//           {/* <Link href="/#features">
//             Features
//           </Link>

//           <a href="/#faq">
//             FAQ
//           </a> */}

//           <Link href="/contact">
//             Contact
//           </Link>

//         </nav>

//         {!isAuthenticated ? (

//           <a
//             href="https://vibely-api.egrif.online/api/auth/login"
//             className="bg-black text-white px-5 py-2 rounded-lg"
//           >
//             Login with TikTok
//           </a>

//         ) : (

//           <div className="flex gap-3">

//             <Link
//               href="/dashboard"
//               className="border rounded-lg px-4 py-2"
//             >
//               Dashboard
//             </Link>

//             <button
//               onClick={logout}
//               className="bg-red-500 text-white rounded-lg px-4 py-2"
//             >
//               Logout
//             </button>

//           </div>

//         )}

//       </div>

//     </header>

//   );
// }






"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const {
    isAuthenticated,
    logout,
    loading,
  } = useAuth();

  if (loading) return null;

  return (
    <header className="sticky top-0 z-50 border-b bg-white">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src="/vibely-logo.png"
            alt="Vibely"
            width={40}
            height={40}
          />

          <span className="text-2xl font-bold">
            Vibely
          </span>
        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 md:flex">

          <Link href="/">Home</Link>

          <Link href="/about">About</Link>

          <Link href="/#features">Features</Link>

          <Link href="/#faq">FAQ</Link>

          <Link href="/contact">Contact</Link>

        </nav>

        <div className="hidden md:flex items-center gap-3">

          {!isAuthenticated ? (

            <a
              href="https://vibely-api.egrif.online/api/auth/login"
              className="rounded-lg bg-black px-5 py-2 text-white"
            >
              Login
            </a>

          ) : (

            <>
              <Link
                href="/dashboard"
                className="rounded-lg border px-4 py-2"
              >
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="rounded-lg bg-red-500 px-4 py-2 text-white"
              >
                Logout
              </button>
            </>

          )}

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="border-t bg-white md:hidden">

          <nav className="flex flex-col p-6">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="py-3"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="py-3"
            >
              About
            </Link>

            <Link
              href="/#features"
              onClick={() => setOpen(false)}
              className="py-3"
            >
              Features
            </Link>

            <Link
              href="/#faq"
              onClick={() => setOpen(false)}
              className="py-3"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="py-3"
            >
              Contact
            </Link>

            <hr className="my-4" />

            {!isAuthenticated ? (

              <a
                href="https://vibely-api.egrif.online/api/auth/login"
                className="rounded-lg bg-black py-3 text-center text-white"
              >
                Login with TikTok
              </a>

            ) : (

              <>
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="rounded-lg border py-3 text-center"
                >
                  Dashboard
                </Link>

                <button
                  onClick={logout}
                  className="mt-3 rounded-lg bg-red-500 py-3 text-white"
                >
                  Logout
                </button>
              </>

            )}

          </nav>

        </div>

      )}

    </header>
  );
}