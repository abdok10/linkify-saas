import StatCards from "@/components/dashboard/StatCards";
// import ActivityGraph from "@components/Dashboard/ActivityGraph";
// import UsageRadar from "@components/Dashboard/UsageRadar";
// import RecentTransactions from "@components/Dashboard/RecentTransactions";

const DashboardPage = () => {
  return (
    <section className="grid grid-cols-12 gap-3 px-4">
      <StatCards />
      {/* <ActivityGraph />
      <UsageRadar />
      <RecentTransactions /> */}
    </section>
  );
};
export default DashboardPage;
