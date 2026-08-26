import {
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

function Navbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-[#DCE7E7] bg-white px-4 md:px-8">

      {/* Search */}
      <div className="relative hidden w-full max-w-md md:block">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
        />

        <input
          type="text"
          placeholder="Search purchases, products..."
          className="w-full rounded-xl border border-[#DCE7E7] bg-[#F8FCFC] py-2.5 pl-10 pr-4 text-sm text-[#102A43] outline-none transition placeholder:text-[#94A3B8] focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
        />
      </div>

      {/* Right Side */}
      <div className="ml-auto flex items-center gap-4">

        {/* Notification */}
        <button
          className="relative rounded-xl p-2.5 text-[#64748B] transition hover:bg-[#F0FAFA] hover:text-[#0F766E]"
        >
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#F4B942]" />
        </button>

        {/* Divider */}
        <div className="hidden h-8 w-px bg-[#DCE7E7] sm:block" />

        {/* Profile */}
        <button className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#CCFBF1] font-semibold text-[#0F766E]">
            H
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-[#102A43]">
              Harshita
            </p>

            <p className="text-xs text-[#64748B]">
              Personal
            </p>
          </div>

          <ChevronDown
            size={16}
            className="hidden text-[#64748B] sm:block"
          />

        </button>

      </div>
    </header>
  );
}

export default Navbar;