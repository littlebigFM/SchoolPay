import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "@/components/layout/sidebar/Sidebar";
import MobileSidebar from "@/components/layout/sidebar/MobileSidebar";
import Navbar from "@/components/layout/navbar/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useLockBodyScroll(isSidebarOpen);

  return (
    <div className="min-h-screen bg-slate-50">
      <ScrollToTop />

      <Sidebar />

      <MobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="lg:pl-70">
        <Navbar onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
