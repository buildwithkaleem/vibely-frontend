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






// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function CallbackPage() {
//   const router = useRouter();

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get("token");

//     if (token) {
//       localStorage.setItem("token", token);
//       router.replace("/dashboard");
//     } else {
//       router.replace("/");
//     }
//   }, [router]);

//   return (
//     <main className="flex min-h-screen items-center justify-center">
//       <h1>Signing in...</h1>
//     </main>
//   );
// }






"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

export default function CallbackPage() {
  const router = useRouter();

  // Hook component ke top level par call hoga
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      login(token);
      toast.success(
        "Successfully logged in."
      );
      router.replace("/dashboard");
    } else {
      router.replace("/");
    }
  }, [login, router]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1>Signing in...</h1>
    </main>
  );
}