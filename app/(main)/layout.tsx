import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-[220px,_1fr] gap-4 p-4 bg-zinc-950">
      <Sidebar />
      <main className="rounded-xl dark:bg-zinc-900 shadow">
        <TopBar />
        {children}
      </main>
    </div>
  );
};
export default DashboardLayout;
