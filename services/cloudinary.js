import axios from "axios";

export const uploadToCloudinary = async (
  file,
  onProgress
) => {
  const formData = new FormData();

  formData.append("file", file);

  formData.append(
    "upload_preset",
    process.env
      .NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
  );

  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${process.env
      .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    }/video/upload`,
    formData,
    {
      onUploadProgress: (event) => {
        const progress = Math.round(
          (event.loaded * 100) / event.total
        );

        onProgress(progress);
      },
    }
  );

  return response.data;
};