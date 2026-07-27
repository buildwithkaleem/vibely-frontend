// "use client";

// import { useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// export default function CallbackPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const token = searchParams.get("token");

//     if (token) {
//       localStorage.setItem("token", token);
//       router.replace("/dashboard");
//     } else {
//       router.replace("/");
//     }
//   }, [router, searchParams]);

//   return (
//     <main className="flex min-h-screen items-center justify-center">
//       <h1>Signing in...</h1>
//     </main>
//   );
// }






"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);
      router.replace("/dashboard");
    } else {
      router.replace("/");
    }
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1>Signing in...</h1>
    </main>
  );
}