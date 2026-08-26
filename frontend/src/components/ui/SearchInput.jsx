import { Search } from "lucide-react";

function SearchInput({
  placeholder = "Search...",
  value,
  onChange,
  className = "",
}) {
  return (
    <div className={`relative ${className}`}>
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]"
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[#DCE7E7] bg-white py-2.5 pl-10 pr-4 text-sm text-[#102A43] outline-none transition placeholder:text-[#94A3B8] focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1]"
      />
    </div>
  );
}

export default SearchInput;