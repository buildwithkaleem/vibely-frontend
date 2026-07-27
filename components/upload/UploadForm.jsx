"use client";

import { useState } from "react";
import api from "@/services/axios";
import { uploadToCloudinary } from "@/services/cloudinary";
import VideoPreview from "./VideoPreview";
import UploadProgress from "./UploadProgress";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    if (!file) {
      alert("Please select a video");
      return;
    }

    try {
      setLoading(true);

      // Upload to Cloudinary
      const cloudinary = await uploadToCloudinary(
        file,
        setProgress
      );

      // Send URL to backend
      const { data } = await api.post(
        "/api/videos/publish",
        {
          videoUrl: cloudinary.secure_url,
          caption,
        }
      );

      alert("Video sent to TikTok successfully!");

      console.log(data);

      setFile(null);
      setCaption("");
      setProgress(0);
    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
        "Upload failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <input
        type="file"
        accept="video/*"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <VideoPreview file={file} />

      <textarea
        placeholder="Caption..."
        className="w-full border rounded-lg p-3 mt-5"
        rows={4}
        value={caption}
        onChange={(e) =>
          setCaption(e.target.value)
        }
      />

      {progress > 0 && (
        <UploadProgress progress={progress} />
      )}

      <button
        onClick={handlePublish}
        disabled={loading}
        className="mt-6 bg-black text-white px-6 py-3 rounded-lg w-full"
      >
        {loading
          ? "Uploading..."
          : "Publish to TikTok"}
      </button>

    </div>
  );
}