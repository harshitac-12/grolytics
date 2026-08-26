function StatCard({
  title,
  value,
  subtitle,
  icon,
  className = "",
}) {
  return (
    <div
      className={`rounded-2xl border border-[#DCE7E7] bg-white p-5 shadow-sm ${className}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-[#64748B]">
            {title}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-[#102A43]">
            {value}
          </h3>

          {subtitle && (
            <p className="mt-1 text-xs text-[#64748B]">
              {subtitle}
            </p>
          )}
        </div>

        {icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0F766E]">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}

export default StatCard;