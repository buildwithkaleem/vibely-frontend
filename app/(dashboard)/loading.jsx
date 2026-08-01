export default function DashboardLoading() {
  return (
    <div className="space-y-6">

      <div className="h-40 animate-pulse rounded-2xl bg-gray-200"></div>

      <div className="grid gap-6 md:grid-cols-4">

        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-32 animate-pulse rounded-2xl bg-gray-200"
          />
        ))}

      </div>

      <div className="h-80 animate-pulse rounded-2xl bg-gray-200"></div>

    </div>
  );
}