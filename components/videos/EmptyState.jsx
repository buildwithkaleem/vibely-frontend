import Link from "next/link";
import { Video } from "lucide-react";

export default function EmptyState() {
  return (

    <div className="rounded-2xl border bg-white p-16 text-center">

      <Video
        className="mx-auto mb-6 text-gray-400"
        size={60}
      />

      <h2 className="text-2xl font-bold">

        No Videos Yet

      </h2>

      <p className="mt-3 text-gray-500">

        Upload your first TikTok video.

      </p>

      <Link
        href="/upload"
        className="mt-8 inline-block rounded-xl bg-black px-6 py-3 text-white"
      >
        Upload Video
      </Link>

    </div>

  );
}