// import { ImagePlus } from "lucide-react";
// import { useState } from "react";
// import { Controller, type Control } from "react-hook-form";

// interface ImageUploadFieldProps {
//   control: Control<any>;
//   name: string;
// }

// const ImageUploadField = ({ control, name }: ImageUploadFieldProps) => {
//   const [preview, setPreview] = useState<string>();

//   return (
//     <Controller
//       control={control}
//       name={name}
//       render={({ field: { onChange } }) => (
//         <div className="space-y-3">
//           <label className="text-sm font-medium text-slate-700">
//             Student Photo
//           </label>

//           <label className="flex h-52 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 transition hover:border-violet-500">
//             {preview ? (
//               <img
//                 src={preview}
//                 alt="Student"
//                 className="h-full w-full rounded-2xl object-cover"
//               />
//             ) : (
//               <>
//                 <ImagePlus size={40} className="text-slate-400" />

//                 <p className="mt-3 text-sm text-slate-500">
//                   Click to upload student photo
//                 </p>
//               </>
//             )}

//             <input
//               hidden
//               type="file"
//               accept="image/*"
//               onChange={(event) => {
//                 const file = event.target.files?.[0];

//                 if (!file) return;

//                 onChange(file);

//                 setPreview(URL.createObjectURL(file));
//               }}
//             />
//           </label>
//         </div>
//       )}
//     />
//   );
// };

// export default ImageUploadField;

import { ImagePlus } from "lucide-react";
import { useState } from "react";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

// 1. Turn the interface into a generic that extends FieldValues
interface ImageUploadFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>; // This ensures the name prop must match a valid key in the form
}

// 2. Convert the component into a generic function
const ImageUploadField = <TFieldValues extends FieldValues>({
  control,
  name,
}: ImageUploadFieldProps<TFieldValues>) => {
  const [preview, setPreview] = useState<string>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange } }) => (
        <div className="space-y-3">
          <label className="text-sm font-medium text-slate-700">
            Student Photo
          </label>

          <label className="flex h-52 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 transition hover:border-violet-500">
            {preview ? (
              <img
                src={preview}
                alt="Student"
                className="h-full w-full rounded-2xl object-cover"
              />
            ) : (
              <>
                <ImagePlus size={40} className="text-slate-400" />
                <p className="mt-3 text-sm text-slate-500">
                  Click to upload student photo
                </p>
              </>
            )}

            <input
              hidden
              type="file"
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (!file) return;

                onChange(file);
                setPreview(URL.createObjectURL(file));
              }}
            />
          </label>
        </div>
      )}
    />
  );
};

export default ImageUploadField;
