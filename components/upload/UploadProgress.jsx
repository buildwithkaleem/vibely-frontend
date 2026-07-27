export default function UploadProgress({
  progress,
}) {
  return (
    <div className="mt-5">

      <div className="h-3 bg-gray-200 rounded">

        <div
          style={{
            width: `${progress}%`,
          }}
          className="h-3 rounded bg-blue-600"
        />

      </div>

      <p className="mt-2">
        {progress}%
      </p>

    </div>
  );
}