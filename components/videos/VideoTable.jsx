// "use client";

// import VideoRow from "./VideoRow";

// export default function VideoTable({
//   videos,
//   loading,
//   refresh,
// }) {

//   const tableHead = ["Preview", "Caption", "Status", "Date","Actions"]

//   if (loading)
//     return <p>Loading...</p>;

//   if (!videos.length)
//     return (
//       <p>
//         No videos uploaded yet.
//       </p>
//     );

//   return (

//     <div className="overflow-x-auto">

//       <table className="w-full border rounded-xl">

//             <thead  className="bg-gray-100">
//             <tr >
//           {tableHead.map((item)=>(
//             <th key={item} className="p-4">
//                 {item}
//               </th>
//           ))}
//             </tr>
          
//         </thead>

//         <tbody>

//           {videos.map((video) => (

//             <VideoRow
//               key={video._id}
//               video={video}
//               refresh={refresh}
//             />

//           ))}

//         </tbody>

//       </table>

//     </div>

//   );
// }






"use client";

import VideoRow from "./VideoRow";

export default function VideoTable({
  videos,
  loading,
  refresh,
}) {
  const tableHead = [
    "Preview",
    "Caption",
    "Status",
    "Date",
    "Actions",
  ];

  if (loading) return <p>Loading...</p>;

  if (!videos.length) {
    return <p>No videos uploaded yet.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">

      <table className="w-full border-collapse">

        <thead className="bg-gray-100">

          <tr>

            {/* {tableHead.map((item) => (

              <th
                key={item}
                className={`p-4 font-semibold text-gray-700
                  ${item === "Preview" || item === "Caption"
                    ? "text-left"
                    : "text-center"
                  }`}
              >
                {item}
              </th>

            ))} */}

            {tableHead.map((item) => (

              <th
                key={item}
                className={`py-4 font-semibold text-gray-700 ${item === "Preview"
                  ? "text-left pl-12"
                  : item === "Caption"
                    ? "text-left pr-12"
                    : "text-center pr-7"
                  }`}
              >
                {item}
              </th>

            ))}

            

          </tr>

          

        </thead>

        <tbody>

          {videos.map((video) => (

            <VideoRow
              key={video._id}
              video={video}
              refresh={refresh}
            />

          ))}

        </tbody>

      </table>

    </div>
  );
}