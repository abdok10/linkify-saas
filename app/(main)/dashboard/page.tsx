import Grid from "@/components/dashboard/Grid";
import TopBar from "@/components/dashboard/TopBar";

export default function DashboardPage() {
  return (
    <main className="rounded-xl pb-4 dark:bg-muted shadow">
      <TopBar />
      <Grid />
    </main>
  );
}