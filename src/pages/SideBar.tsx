import { Menu, LayoutDashboard, Users, Settings, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SideBar = ({ menuOpen, setOpenMenu }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-gray-900 text-white p-4 ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <Button variant="ghost" className="w-full justify-start">
            <LayoutDashboard className="mr-2" /> Overview
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2" /> Users
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2" /> Settings
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-6">
          <Button variant="outline" className="md:hidden" onClick={() => setOpenMenu(!menuOpen)}>
            <Menu />
          </Button>
        <h1 className="text-3xl font-bold text-center">Welcome to Dashboard</h1>

        {/* Large Search Bar */}
        <div className="relative flex items-center w-full max-w-7xl mt-4">
          <Search className="absolute left-4 top-1/2 transform  -translate-y-1/2 mr-2 text-gray-500" />
          <Input type="text" placeholder="Search Products..." className="w-full h-12 text-lg px-12 bg-transparent focus:outline-none " />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
