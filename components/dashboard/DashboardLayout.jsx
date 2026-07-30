"use client";

import Sidebar from "../dashboard/Sidebar";
import Header from "./Header";
// import Navbar from "../public/Navbar";

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        {/* <Navbar /> */}
        <Header/>

        <main className="p-8 bg-gray-100 min-h-screen">
          {children}
        </main>

      </div>

    </div>
  );
}