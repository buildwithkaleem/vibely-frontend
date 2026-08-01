import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-6">

      <div className="max-w-xl text-center">

        <h1 className="text-8xl font-extrabold text-black">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-4 leading-7 text-gray-600">
          Sorry, the page you are looking for doesn't exist or may have been
          moved.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/"
            className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Go Home
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
          >
            Dashboard
          </Link>

        </div>

      </div>

    </main>
  );
}