// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-12">

//       <div className="max-w-6xl mx-auto px-6">

//         <div className="flex flex-wrap justify-center gap-8">

//           <Link href="/">
//             Home
//           </Link>

//           <Link href="/about">
//             About
//           </Link>

//           <Link href="/privacy-policy">
//             Privacy Policy
//           </Link>

//           <Link href="/terms-of-service">
//             Terms of Service
//           </Link>

//           <Link href="/contact">
//             Contact
//           </Link>

//         </div>

//         <p className="text-center text-gray-400 mt-8">
//           © 2026 Vibely. All rights reserved.
//         </p>

//       </div>

//     </footer>
//   );
// }





"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-950 text-gray-300">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}

        <div>

          <Link
            href="/"
            className="text-3xl font-bold text-white"
          >
            Vibeli
          </Link>

          <p className="mt-5 leading-7 text-gray-400">
            Vibeli is a modern TikTok publishing platform that helps creators
            and businesses securely upload and manage videos using the official
            TikTok API.
          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="mb-5 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link href="/">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about">
                About
              </Link>
            </li>

            <li>
              <a href="/#features">
                Features
              </a>
            </li>

            <li>
              <a href="/#faq">
                FAQ
              </a>
            </li>

            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* Legal */}

        <div>

          <h3 className="mb-5 text-lg font-semibold text-white">
            Legal
          </h3>

          <ul className="space-y-3">

            <li>
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link href="/terms-of-service">
                Terms of Service
              </Link>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="mb-5 text-lg font-semibold text-white">
            Contact
          </h3>

          <div className="space-y-4">

            <div>

              <p className="text-sm text-gray-500">
                Support Email
              </p>

              <a
                href="mailto:support@egrif.online"
                className="hover:text-white"
              >
                support@egrif.online
              </a>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Website
              </p>

              <a
                href="https://vibeli.egrif.online"
                target="_blank"
                rel="noopener noreferrer"
                className="break-all hover:text-white"
              >
                vibeli.egrif.online
              </a>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Response Time
              </p>

              <p>
                24–48 Business Hours
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row">

          <p>
            © {year} Vibeli. All rights reserved.
          </p>

          <p>
            Powered by the Official TikTok Content Posting API.
          </p>

          <p>
            Built using the Official TikTok API.
          </p>

        </div>

      </div>

    </footer>
  );
}