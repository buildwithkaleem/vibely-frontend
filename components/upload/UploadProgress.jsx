// export default function UploadProgress({
//   progress,
// }) {
//   return (
//     <div className="mt-5">

//       <div className="h-3 bg-gray-200 rounded">

//         <div
//           style={{
//             width: `${progress}%`,
//           }}
//           className="h-3 rounded bg-blue-600"
//         />

//       </div>

//       <p className="mt-2">
//         {progress}%
//       </p>

//     </div>
//   );
// }





import { memo } from "react";

function UploadProgress({ progress }) {
  return (
    <div className="mt-5">
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-150"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-2 text-sm">
        {progress}%
      </p>
    </div>
  );
}

export default memo(UploadProgress);