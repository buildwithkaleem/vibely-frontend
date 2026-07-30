"use client";

import VideoRow from "./VideoRow";

export default function VideoTable({
  videos,
  loading,
  refresh,
}) {

  const tableHead = ["Preview", "Caption", "Status", "Date","Actions"]

  if (loading)
    return <p>Loading...</p>;

  if (!videos.length)
    return (
      <p>
        No videos uploaded yet.
      </p>
    );

  return (

    <div className="overflow-x-auto">

      <table className="w-full border rounded-xl">

        <thead className="bg-gray-100">
          {tableHead.map((index,item)=>(
            <tr key={index}>
              <th className="p-4">
                {item}
              </th>
            </tr>
          ))}
          
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