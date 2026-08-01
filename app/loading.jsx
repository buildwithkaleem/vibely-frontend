export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">

      <div className="text-center">

        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>

        <h2 className="mt-6 text-2xl font-bold">
          Loading...
        </h2>

        <p className="mt-2 text-gray-500">
          Please wait a moment.
        </p>

      </div>

    </main>
  );
}