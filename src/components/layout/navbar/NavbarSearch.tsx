import SearchInput from "@/components/ui/SearchInput";

const NavbarSearch = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <SearchInput
          placeholder="Search students, invoices, payments..."
          className="w-[320px]"
        />
      </div>

      {/* Mobile */}
      <div className="border-t border-slate-100 px-4 py-3 md:hidden">
        <SearchInput placeholder="Search..." />
      </div>
    </>
  );
};

export default NavbarSearch;
