export default function Button({
  children,
  onClick,
  type = "button",
  loading = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`bg-black text-white rounded-lg px-5 py-3 hover:bg-gray-800 disabled:opacity-50 ${className}`}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}