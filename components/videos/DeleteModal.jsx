"use client";

import { deleteVideo } from "@/services/video.service";

export default function DeleteModal({
  video,
  close,
  refresh,
}) {

  const remove = async () => {

    await deleteVideo(video._id);

    refresh();

    close();

  };

  return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

      <div className="bg-white rounded-xl p-8 w-96">

        <h2 className="text-2xl font-bold">
          Delete Video?
        </h2>

        <p className="mt-4">
          This action cannot be undone.
        </p>

        <div className="flex gap-4 mt-8">

          <button
            onClick={close}
            className="border px-5 py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={remove}
            className="bg-red-600 text-white px-5 py-2 rounded"
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  );
}