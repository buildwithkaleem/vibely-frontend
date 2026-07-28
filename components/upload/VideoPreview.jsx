export default function VideoPreview({
  file,
}) {
  if (!file) return null;

  return (
    <video
      controls
      // className="rounded-lg "
      className="w-full mt-5 max-w-sm h-64 object-cover rounded-xl border"
      src={URL.createObjectURL(file)}
    />
  );
}