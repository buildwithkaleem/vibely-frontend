export default function Card({
  children,
}) {
  return (
    <div className="bg-white rounded-xl shadow border p-6">
      {children}
    </div>
  );
}