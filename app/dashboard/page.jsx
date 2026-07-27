// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function Dashboard() {
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       router.replace("/");
//     }
//   }, [router]);

//   return (
//     <main className="p-10">
//       <h1 className="text-3xl font-bold">
//         Dashboard
//       </h1>

//       <p>You are logged in.</p>
//     </main>
//   );
// }








"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/axios";

export default function Dashboard() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/");
      return;
    }

    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const { data } = await api.get("/users/me");

      setUser(data.user);
    } catch (error) {
      localStorage.removeItem("token");
      router.replace("/");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    router.replace("/");
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto p-10">
      <div className="flex items-center gap-5">

        <img
          src={user.avatar}
          alt={user.displayName}
          className="w-20 h-20 rounded-full"
        />

        <div>
          <h1 className="text-3xl font-bold">
            {user.displayName}
          </h1>

          <p>{user.openId}</p>
        </div>

      </div>

      <button
        onClick={logout}
        className="mt-10 rounded bg-red-500 px-5 py-2 text-white"
      >
        Logout
      </button>
    </main>
  );
}