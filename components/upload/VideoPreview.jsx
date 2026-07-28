// export default function VideoPreview({
//   file,
// }) {
//   if (!file) return null;

//   return (
//     <video
//       controls
//       className="rounded-lg mt-5"
//       src={URL.createObjectURL(file)}
//     />
//   );
// }





"use client";

import { memo, useEffect, useState } from "react";

function VideoPreview({ file }) {
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (!file) {
      setPreviewUrl("");
      return;
    }

    const url = URL.createObjectURL(file);

    setPreviewUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  if (!previewUrl) return null;

  return (
    <div className="mt-5 max-h-sm">
      <video
        src={previewUrl}
        controls
        className="w-full max-w-md rounded-xl border object-contain bg-black"
      />
    </div>

    // <video
    //   src={previewUrl}
    //   controls
    //   className="w-full max-w-sm rounded-xl border bg-black"
    //   style={{
    //     maxHeight: "320px",
    //   }}
    // />
  );
}

export default memo(VideoPreview);