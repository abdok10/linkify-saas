import AccountToggle from "@/components/dashboard/AccountToggle";
import RouteSelect from "@/components/dashboard/RouteSelect";
import Search from "@/components/dashboard/Search";
import Plan from "@/components/dashboard/Plan";

const Sidebar = () => {
  return (
    <main>
      <div className="sticky top-4 h-[calc(100vh-32px-48px)] overflow-y-scroll scrollbar-hide">
        <AccountToggle />
        <Search />
        <RouteSelect />
      </div>

      <Plan />
    </main>
  );
};

export default Sidebar;
