"use client";

import { useState } from "react";
import { updateVideo } from "@/services/video.service";

export default function EditModal({
  video,
  close,
  refresh,
}) {

  const [caption, setCaption] =
    useState(video.caption);

  const save = async () => {

    await updateVideo(video._id, {
      caption,
    });

    refresh();

    close();

  };

  return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

      <div className="bg-white rounded-xl p-8 w-[450px]">

        <h2 className="text-2xl font-bold">
          Edit Caption
        </h2>

        <textarea
          value={caption}
          onChange={(e) =>
            setCaption(e.target.value)
          }
          rows={5}
          className="border rounded-lg w-full mt-6 p-3"
        />

        <div className="flex gap-4 mt-8">

          <button
            onClick={close}
            className="border px-5 py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={save}
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Save
          </button>

        </div>

      </div>

    </div>

  );
}