import Sidebar from "@/components/dashboard/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[220px,_1fr] gap-4 p-4">
      <Sidebar />
      {children}
    </div>
  );
};
export default DashboardLayout;
