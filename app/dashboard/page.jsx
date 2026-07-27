


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import api from "@/services/axios";
// import Link from "next/link";

// export default function Dashboard() {
//   const router = useRouter();

//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       router.replace("/");
//       return;
//     }

//     getProfile();
//   }, []);

//   const getProfile = async () => {
//     try {
//       const { data } = await api.get("/api/users/me");

//       setUser(data.user);
//     } catch (error) {
//       localStorage.removeItem("token");
//       router.replace("/");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     router.replace("/");
//   };

//   if (loading) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <main className="max-w-5xl mx-auto p-10">
//       <div className="flex items-center justify-around gap-10">
//       <div className="flex items-center gap-5">

//         <img
//           src={user.avatar}
//           alt={user.displayName}
//           className="w-20 h-20 rounded-full"
//         />

//         <div>
//           <h1 className="text-3xl font-bold">
//             {user.displayName}
//           </h1>

//           <p>{user.openId}</p>
//         </div>

//       </div>

//       <button
//         onClick={logout}
//         className="mt-10 rounded bg-red-500 px-5 py-2 text-white"
//       >
//         Logout
//       </button>
//       </div>
//       <div className="mt-14 flex items-center justify-between">
//       <Link
//         href="/upload"
//         className="bg-blue-600 text-white px-5 py-2 rounded-lg"
//       >
//         Upload Video
//       </Link>

//         <Link href="/videos">
//           My Videos
//         </Link>
//       </div>
//     </main>
//   );
// }


















// "use client";

// import DashboardLayout from "@/components/layout/DashboardLayout";

// export default function Dashboard() {
//   return (
//     <DashboardLayout>

//       <h1 className="text-4xl font-bold">
//         Dashboard
//       </h1>

//       <p className="mt-4">
//         Welcome to Vibely
//       </p>

//     </DashboardLayout>
//   );
// }







"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import api from "@/services/axios";

export default function Dashboard() {

  const [user, setUser] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {

    load();

  }, []);

  async function load() {

    const me = await api.get("api/users/me");

    setUser(me.data.user);

    const list = await api.get("/videos");

    setVideos(list.data.videos);

  }

  return (

    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-10">

        Welcome
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

            {/* <p>{user.openId}</p> */}
          </div>

        </div>
        {/* {user?.displayName} */}

      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <StatCard
          title="Total Videos"
          value={videos.length}
        />

        <StatCard
          title="TikTok"
          value="Connected"
        />

        <StatCard
          title="Draft Status"
          value="Ready"
        />

      </div>

    </DashboardLayout>

  );

}