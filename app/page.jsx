// "use client";

// export default function Home() {
//   const handleLogin = () => {
//     window.location.href =
//       `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`;
//   };

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
//         <h1 className="text-3xl font-bold text-center">Vibely</h1>
//         <p className="mt-2 text-center text-gray-600">
//           Connect your TikTok account and publish videos.
//         </p>

//         <button
//           onClick={handleLogin}
//           className="mt-6 w-full rounded-xl bg-black px-4 py-3 text-white font-medium hover:bg-gray-800"
//         >
//           Continue with TikTok
//         </button>

//         <div className="mt-6 text-center text-sm text-gray-500 space-x-4">
//           <a href="/privacy-policy" className="hover:underline">
//             Privacy Policy
//           </a>
//           <a href="/terms-of-service" className="hover:underline">
//             Terms of Service
//           </a>
//           <a href="/contact" className="hover:underline">
//             Contact
//           </a>
//         </div>
//       </div>
//     </main>
//   );
// }





// export default function Home() {
//   return (
//     <main className="flex min-h-screen items-center justify-center">
//       <a
//         href="https://vibely-api.egrif.online/api/auth/login"
//         className="rounded bg-black px-6 py-3 text-white"
//       >
//         Continue with TikTok
//       </a>
//     </main>
//   );
// }




import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <header className="border-b">

        <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6">

          <h1 className="text-3xl font-bold">
            Vibely
          </h1>

          <nav className="flex gap-8">

            <Link href="/">Home</Link>

            <Link href="/about">About</Link>

            <Link href="/privacy-policy">
              Privacy
            </Link>

            <Link href="/terms-of-service">
              Terms
            </Link>

            <Link href="/contact">
              Contact
            </Link>

          </nav>

        </div>

      </header>

      <section className="max-w-6xl mx-auto text-center py-28 px-6">

        <h2 className="text-6xl font-bold">

          Publish TikTok Videos

          <br />

          Faster Than Ever

        </h2>

        <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto">

          Vibely helps creators upload videos to TikTok securely using the official TikTok API.

        </p>

        <a
          href="https://vibely-api.egrif.online/api/auth/login"
          className="inline-block mt-10 bg-black text-white px-8 py-4 rounded-xl text-lg"
        >
          Continue with TikTok
        </a>

      </section>

      <section className="max-w-6xl mx-auto py-20 grid md:grid-cols-3 gap-8">

        <div className="border rounded-xl p-8">

          <h3 className="text-2xl font-bold">
            Secure Login
          </h3>

          <p className="mt-4 text-gray-600">
            Official TikTok OAuth authentication.
          </p>

        </div>

        <div className="border rounded-xl p-8">

          <h3 className="text-2xl font-bold">
            Cloud Upload
          </h3>

          <p className="mt-4 text-gray-600">
            Upload videos through Cloudinary with fast delivery.
          </p>

        </div>

        <div className="border rounded-xl p-8">

          <h3 className="text-2xl font-bold">
            Official API
          </h3>

          <p className="mt-4 text-gray-600">
            Uses TikTok's official Content Posting API.
          </p>

        </div>

      </section>

      <footer className="border-t">

        <div className="max-w-6xl mx-auto py-10 flex flex-wrap gap-8 justify-center">

          <Link href="/about">
            About
          </Link>

          <Link href="/privacy-policy">
            Privacy Policy
          </Link>

          <Link href="/terms-of-service">
            Terms of Service
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </div>

      </footer>

    </main>
  );
}