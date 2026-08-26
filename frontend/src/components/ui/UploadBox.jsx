import { Upload } from "lucide-react";

function UploadBox({
  onFileSelect,
  accept = ".pdf,.jpg,.jpeg,.png",
}) {
  return (
    <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#DCE7E7] bg-[#F0FAFA] px-6 py-12 text-center transition hover:border-[#0F766E] hover:bg-[#CCFBF1]">
      
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0F766E]">
        <Upload size={22} />
      </div>

      <h3 className="font-semibold text-[#102A43]">
        Upload your grocery bill
      </h3>

      <p className="mt-1 text-sm text-[#64748B]">
        Drag & drop or click to browse
      </p>

      <p className="mt-2 text-xs text-[#94A3B8]">
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