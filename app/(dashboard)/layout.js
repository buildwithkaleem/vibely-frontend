// import DashboardLayout from "@/components/dashboard/DashboardLayout";

// export default function Layout({ children }) {
//   return (
//     <DashboardLayout>
//       {children}
//     </DashboardLayout>
//   );
// }



"use client";

import { useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardLayout({
  children,
}) {
  // Desktop collapse state
  const [collapsed, setCollapsed] = useState(false);

  // Mobile sidebar state
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gray-100">

        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <div className="flex flex-1 flex-col">

          {/* <Header
            collapsed={collapsed}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          /> */}

          <Header
            collapsed={collapsed}
            setMobileOpen={setMobileOpen}
          />

          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>

        </div>

      </div>
    </ProtectedRoute>
  );
}