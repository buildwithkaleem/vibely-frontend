// "use client";

// import { useEffect, useState } from "react";
// import api from "@/services/axios";
// import DashboardLayout from "@/components/layout/DashboardLayout";

// export default function VideosPage() {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     getVideos();
//   }, []);

//   const getVideos = async () => {
//     try {
//       const { data } = await api.get("/api/videos");
//       setVideos(data.videos);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const deleteVideo = async (id) => {
//     if (!confirm("Delete this video?")) return;

//     await api.delete(`/api/videos/${id}`);

//     setVideos(videos.filter((v) => v._id !== id));
//   };

//   return (
//     <DashboardLayout>
//     <main className="max-w-6xl mx-auto p-10">
//       <h1 className="text-3xl font-bold mb-8">
//         My Videos
//       </h1>

//       <div className="grid gap-6">
//         {videos.map((video) => (
//           <div
//             key={video._id}
//             className="border rounded-xl p-5"
//           >
//             <video
//               src={video.cloudinaryUrl}
//               controls
//               className="w-full rounded-lg"
//             />

//             <p className="mt-4">
//               {video.caption}
//             </p>

//             <button
//               onClick={() => deleteVideo(video._id)}
//               className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </main>
     

//   </DashboardLayout>
//   );
// }











"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import VideoTable from "@/components/videos/VideoTable";
import { getVideos } from "@/services/video.service";

export default function VideosPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadVideos = async () => {
    try {
      const { data } = await getVideos();
      setVideos(data.videos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-8">
        My Videos
      </h1>

      <VideoTable
        videos={videos}
        loading={loading}
        refresh={loadVideos}
      />

    </DashboardLayout>
  );
}