function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-[#DCE7E7] bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;