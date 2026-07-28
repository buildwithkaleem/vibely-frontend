"use client";

import { useState } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function VideoRow({
  video,
  refresh,
}) {

  const [showDelete, setShowDelete] =
    useState(false);

  const [showEdit, setShowEdit] =
    useState(false);

  return (

    <>

      <tr className="border-t ">

        <td className="p-4">

          <video
            src={video.cloudinaryUrl}
            className="w-32 rounded"
            controls
          />

        </td>

        <td className="p-4">
          {video.caption || "-"}
        </td>

        <td className="p-4">

          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">

            {video.status || "Draft"}

          </span>

        </td>

        <td className="p-4">

          {new Date(
            video.createdAt
          ).toLocaleDateString()}

        </td>

        <td className="p-4 flex items-center gap-3">

          <button
            onClick={() =>
              setShowEdit(true)
            }
            className="text-blue-600"
          >
            Edit
          </button>

          <button
            onClick={() =>
              setShowDelete(true)
            }
            className="text-red-600"
          >
            Delete
          </button>

        </td>

      </tr>

      {showEdit && (

        <EditModal
          video={video}
          refresh={refresh}
          close={() =>
            setShowEdit(false)
          }
        />

      )}

      {showDelete && (

        <DeleteModal
          video={video}
          refresh={refresh}
          close={() =>
            setShowDelete(false)
          }
        />

      )}

    </>

  );
}