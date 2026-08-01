"use client";

export default function DashboardError({
  error,
  reset,
}) {
  return (
    <div className="rounded-2xl border bg-white p-10 text-center shadow">

      <h2 className="text-3xl font-bold text-red-600">
        Dashboard Error
      </h2>

      <p className="mt-4 text-gray-600">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="mt-6 rounded-xl bg-black px-6 py-3 text-white"
      >
        Reload Dashboard
      </button>

    </div>
  );
}