function Select({
  label,
  options = [],
  className = "",
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-[#102A43]">
          {label}
        </label>
      )}

      <select
        className={`w-full rounded-xl border border-[#DCE7E7] bg-white px-4 py-2.5 text-sm text-[#102A43] outline-none transition focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1] ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;