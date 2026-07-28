"use client";

import VideoRow from "./VideoRow";

export default function VideoTable({
  videos,
  loading,
  refresh,
}) {

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

          <tr>

            <th className="p-4">
              Preview
            </th>

            <th className="p-4">
              Caption
            </th>

            <th className="p-4">
              Status
            </th>

            <th className="p-4">
              Date
            </th>

            <th className="p-4">
              Actions
            </th>

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