"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">

      <div className="max-w-lg rounded-2xl border bg-white p-10 text-center shadow">

        <h1 className="text-5xl font-bold text-red-600">
          Oops!
        </h1>

        <h2 className="mt-4 text-2xl font-semibold">
          Something went wrong
        </h2>

        <p className="mt-4 text-gray-600">
          {error?.message ||
            "An unexpected error occurred."}
        </p>

        <button
          onClick={reset}
          className="mt-8 rounded-xl bg-black px-6 py-3 text-white transition hover:bg-gray-800"
        >
          Try Again
        </button>

      </div>

    </main>
  );
}