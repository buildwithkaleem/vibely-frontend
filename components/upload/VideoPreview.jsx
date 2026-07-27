export default function VideoPreview({
  file,
}) {
  if (!file) return null;

  return (
    <video
      controls
      className="rounded-lg mt-5"
      src={URL.createObjectURL(file)}
    />
  );
}