import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Header from "@/components/dashboard/Header";

export default function Layout({ children }) {
  return (
    <DashboardLayout>
      <Header/>
      {children}
    </DashboardLayout>
  );
}