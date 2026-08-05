


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







// "use client";

// import { useEffect, useState } from "react";
// // import DashboardLayout from "@/components/layout/DashboardLayout";
// import StatCard from "@/components/dashboard/StatCard";
// import api from "@/services/axios";

// export default function Dashboard() {

//   const [user, setUser] = useState(null);
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {

//     load();

//   }, []);

//   async function load() {

//     const me = await api.get("api/users/me");

//     setUser(me.data.user);

//     const list = await api.get("/api/videos/");

//     setVideos(list.data.videos);

//   }

//   return (

//     // <DashboardLayout>

//       <>
//         <div className="flex items-center gap-5 mb-5">

//         {/* <h1 className="text-4xl font-bold mb-10">

//           Welcome
//         </h1> */}

//           <img
//             src={user?.avatar}
//             alt={user?.displayName}
//             className="w-15 h-15 rounded-full"
//           />

//           <div>
//             <h1 className="text-3xl font-bold mb-2">
//               {user?.displayName}
//             </h1>

//             <p>{user?.openId}</p>
//           </div>

//         </div>


     

//       <div className="grid md:grid-cols-3 gap-6">

//         <StatCard
//           title="Total Videos"
//           value={videos.length}
//         />

//         <StatCard
//           title="TikTok"
//           value="Connected"
//         />

//         <StatCard
//           title="Draft Status"
//           value="Ready"
//         />

//       </div>
//     </>
//     // </DashboardLayout> 

//   );

// }





"use client";

import { useEffect, useState } from "react";
import {
  Video,
  CheckCircle2,
  FileVideo,
  UserCircle2,
} from "lucide-react";

import StatCard from "@/components/dashboard/StatCard";
import api from "@/services/axios";

// export const metadata = {
//   title: "Dashboard",
// };

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const me = await api.get("/api/users/me");
      
      setUser(me.data.user);

      const list = await api.get("/api/videos");
      setVideos(list.data.videos);
    } catch (err) {
      console.log(err);
    }
  }

  const totalVideos = videos.length;

  const publishedVideos = videos.filter(
    (v) => v.status === "Published"
  ).length;

  const draftVideos = videos.filter(
    (v) => v.status === "Draft"
  ).length;

  return (
    <div className="space-y-8">

      {/* Welcome */}

      <div className="rounded-2xl bg-gradient-to-r from-black to-gray-800 p-8 text-white">

        <div className="flex items-center gap-5">

          {/* <img
            src={user?.avatar}
            alt={user?.displayName}
            className="h-20 w-20 rounded-full border-4 border-white object-cover"
          /> */}

          <img
            src={user?.avatar || "/assets/tiktok_video_7E3fo.jpeg"}
            alt={user?.displayName}
            className="h-20 w-20 rounded-full border-4 border-white object-cover"
            onError={(e) => {
              e.currentTarget.src = "/assets/tiktok_video_7E3fo.jpeg";
            }}
          />

          <div>

            <h1 className="text-3xl font-bold">
              Welcome, {user?.displayName}
            </h1>

            <p className="mt-2 text-gray-300">
              Your TikTok account is connected successfully.
            </p>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Videos"
          value={totalVideos}
          icon={<Video size={24} />}
        />

        <StatCard
          title="Published"
          value={publishedVideos}
          icon={<CheckCircle2 size={24} />}
        />

        <StatCard
          title="Draft"
          value={draftVideos}
          icon={<FileVideo size={24} />}
        />

        <StatCard
          title="TikTok"
          value="Connected"
          icon={<UserCircle2 size={24} />}
        />

      </div>

      {/* Recent Uploads */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <h2 className="mb-6 text-2xl font-bold">
          Recent Uploads
        </h2>

        {videos.length === 0 ? (

          <p className="text-gray-500">
            No videos uploaded yet.
          </p>

        ) : (

          <div className="space-y-4">

            {videos.slice(0, 5).map((video) => (

              <div
                key={video._id}
                className="flex items-center justify-between rounded-xl border p-4"
              >

                <div className="flex items-center gap-4">

                  <video
                    src={video.cloudinaryUrl}
                    className="h-16 w-24 rounded-lg object-cover"
                  />

                  <div>

                    <h3 className="font-semibold">
                      {video.caption || "Untitled Video"}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {new Date(
                        video.createdAt
                      ).toLocaleDateString()}
                    </p>

                  </div>

                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                  {video.status}
                </span>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}