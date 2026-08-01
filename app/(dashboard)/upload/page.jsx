// "use client";

// import { useState } from "react";
// import api from "@/services/axios";

// export default function UploadPage() {
//   const [videoUrl, setVideoUrl] = useState("");
//   const [caption, setCaption] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [response, setResponse] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     try {
//       const { data } = await api.post("/api/videos/publish", {
//         videoUrl,
//         caption,
//       });

//       setResponse(data);
//     } catch (error) {
//       alert(
//         error.response?.data?.message || "Upload failed"
//       );
//     }

//     setLoading(false);
//   };

//   return (
//     <main className="max-w-2xl mx-auto py-10">

//       <h1 className="text-3xl font-bold mb-8">
//         Upload Video
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="space-y-5"
//       >

//         <input
//           type="text"
//           placeholder="Video URL"
//           value={videoUrl}
//           onChange={(e) =>
//             setVideoUrl(e.target.value)
//           }
//           className="w-full border rounded-lg p-3"
//         />

//         <textarea
//           placeholder="Caption"
//           value={caption}
//           onChange={(e) =>
//             setCaption(e.target.value)
//           }
//           className="w-full border rounded-lg p-3"
//           rows={5}
//         />

//         <button
//           disabled={loading}
//           className="bg-black text-white px-6 py-3 rounded-lg"
//         >
//           {loading
//             ? "Uploading..."
//             : "Publish to TikTok"}
//         </button>

//       </form>

//       {response && (
//         <div className="mt-10 border rounded-lg p-5">

//           <h2 className="font-bold mb-3">
//             Response
//           </h2>

//           <pre>
//             {JSON.stringify(response, null, 2)}
//           </pre>

//         </div>
//       )}

//     </main>
//   );
// }











// "use client";

// import DashboardLayout from "@/components/layout/DashboardLayout";
// import { useState } from "react";
// import api from "@/services/axios";

// export default function UploadPage() {
//   const [videoUrl, setVideoUrl] = useState("");
//   const [caption, setCaption] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [response, setResponse] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     try {
//       const { data } = await api.post("/api/videos/publish", {
//         videoUrl,
//         caption,
//       });

//       setResponse(data);
//     } catch (error) {
//       alert(
//         error.response?.data?.message || "Upload failed"
//       );
//     }

//     setLoading(false);
//   };

//   return (
//     <DashboardLayout>


//       <main className="max-w-2xl mx-auto py-10">

//         <h1 className="text-3xl font-bold mb-8">
//           Upload Video
//         </h1>

//         <form
//           onSubmit={handleSubmit}
//           className="space-y-5"
//         >

//           <input
//             type="text"
//             placeholder="Video URL"
//             value={videoUrl}
//             onChange={(e) =>
//               setVideoUrl(e.target.value)
//             }
//             className="w-full border rounded-lg p-3"
//           />

//           <textarea
//             placeholder="Caption"
//             value={caption}
//             onChange={(e) =>
//               setCaption(e.target.value)
//             }
//             className="w-full border rounded-lg p-3"
//             rows={5}
//           />

//           <button
//             disabled={loading}
//             className="bg-black text-white px-6 py-3 rounded-lg"
//           >
//             {loading
//               ? "Uploading..."
//               : "Publish to TikTok"}
//           </button>

//         </form>

//         {response && (
//           <div className="mt-10 border rounded-lg p-5">

//             <h2 className="font-bold mb-3">
//               Response
//             </h2>

//             <pre>
//               {JSON.stringify(response, null, 2)}
//             </pre>

//           </div>
//         )}

//       </main>
//     </DashboardLayout>
//   );
// }






"use client";

// import DashboardLayout from "@/components/layout/DashboardLayout";
import UploadForm from "@/components/upload/UploadForm";

export const metadata = {
  title: "Upload Video",
};

export default function UploadPage() {
  return (
    // <DashboardLayout>
    <>
      <h1 className="text-3xl font-bold mb-8">
        Upload Video
      </h1>

      <UploadForm />
    </>
    // </DashboardLayout>
  );
}