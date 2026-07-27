"use client";

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-8">

      <h2 className="text-xl font-semibold">
        Vibely Dashboard
      </h2>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
        className="bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>

    </header>
  );
}