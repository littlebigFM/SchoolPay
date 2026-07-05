import NavbarSearch from "@/components/layout/navbar/NavbarSearch";
import NotificationDropdown from "@/components/layout/navbar/NotificationDropdown";
import ProfileDropdown from "@/components/layout/navbar/ProfileDropdown";
import { Menu } from "lucide-react";

// import NavbarSearch from "./navbar/NavbarSearch";
// import NotificationDropdown from "./navbar/NotificationDropdown";
// import ProfileDropdown from "./navbar/ProfileDropdown";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          {/* Left */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuClick}
              className="rounded-xl border border-slate-200 p-2 lg:hidden"
            >
              <Menu size={20} />
            </button>

            <div className="hidden md:block">
              <NavbarSearch />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <NotificationDropdown />

            <ProfileDropdown />
          </div>
        </div>
      </header>

      {/* Mobile Search */}
      <div className="md:hidden">
        <NavbarSearch />
      </div>
    </>
  );
};

export default Navbar;
