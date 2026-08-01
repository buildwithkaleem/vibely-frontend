// export default function StatCard({
//   title,
//   value,
// }) {
//   return (
//     <div className="bg-white rounded-xl shadow p-6 border">
//       <h3 className="text-gray-500 text-sm">
//         {title}
//       </h3>

//       <p className="text-4xl font-bold mt-3">
//         {value}
//       </p>
//     </div>
//   );
// }





export default function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>

        </div>

        <div className="rounded-xl bg-black p-3 text-white">
          {icon}
        </div>

      </div>

    </div>
  );
}