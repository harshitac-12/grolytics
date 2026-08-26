import { Upload } from "lucide-react";

function UploadBox({
  onFileSelect,
  accept = ".pdf,.jpg,.jpeg,.png",
}) {
  return (
    <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center transition hover:border-blue-400 hover:bg-blue-50">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
        <Upload size={22} />
      </div>

      <h3 className="font-semibold text-slate-800">
        Upload your grocery bill
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        Drag & drop or click to browse
      </p>

      <p className="mt-2 text-xs text-slate-400">
        PDF, JPG, JPEG or PNG
      </p>

      <input
        type="file"
        accept={accept}
        className="hidden"
        onChange={onFileSelect}
      />
    </label>
  );
}

export default UploadBox;