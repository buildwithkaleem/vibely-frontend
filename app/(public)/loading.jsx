export default function PublicLoading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center">

      <div className="text-center">

        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>

        <p className="mt-5 text-gray-500">
          Loading page...
        </p>

      </div>

    </main>
  );
}