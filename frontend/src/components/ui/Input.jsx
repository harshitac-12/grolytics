function Input({
  label,
  error,
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

      <input
        className={`w-full rounded-xl border border-[#DCE7E7] bg-white px-4 py-2.5 text-sm text-[#102A43] outline-none transition placeholder:text-[#94A3B8] focus:border-[#0F766E] focus:ring-2 focus:ring-[#CCFBF1] ${
          error ? "border-red-400" : ""
        } ${className}`}
        {...props}
      />

      {error && (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;