function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-[#0F766E] text-white hover:bg-[#115E59]",

    secondary:
      "bg-[#CCFBF1] text-[#0F766E] hover:bg-[#99F6E4]",

    outline:
      "border border-[#DCE7E7] bg-white text-[#102A43] hover:bg-[#F0FAFA]",

    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;