"use client";

export default function Home() {
  const handleLogin = () => {
    window.location.href =
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`;
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-center">Vibely</h1>
        <p className="mt-2 text-center text-gray-600">
          Connect your TikTok account and publish videos.
        </p>

        <button
          onClick={handleLogin}
          className="mt-6 w-full rounded-xl bg-black px-4 py-3 text-white font-medium hover:bg-gray-800"
        >
          Continue with TikTok
        </button>

        <div className="mt-6 text-center text-sm text-gray-500 space-x-4">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </main>
  );
}





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