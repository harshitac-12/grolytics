import {
  FileText,
  Upload,
  X,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

import { useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Badge from "../../components/ui/Badge";
import BillPreview from "../../components/bills/BillPreview";

function UploadBills() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessed, setIsProcessed] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setSelectedFile(file);
    setIsProcessed(false);
    setIsSaved(false);
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setIsProcessed(false);
    setIsSaved(false);
  };

  const handleProcess = () => {
    if (!selectedFile) return;

    setIsProcessed(true);
    setIsSaved(false);
  };

  const handleSave = (billData) => {
    console.log("Bill data ready to save:", billData);

    setIsSaved(true);
  };

  return (
    <DashboardLayout>

      {/* Page Header */}

      <div className="mb-8">

        <button
          onClick={() => window.history.back()}
          className="mb-4 flex items-center gap-2 text-sm font-medium text-[#64748B] transition hover:text-[#0F766E]"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <h1 className="text-2xl font-bold text-[#102A43] md:text-3xl">
          Upload Bills
        </h1>

        <p className="mt-1 text-sm text-[#64748B]">
          Upload your grocery bills to organize your purchase history.
        </p>

      </div>

      {/* Saved Message */}

      {isSaved && (

        <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">

          <CheckCircle2
            size={20}
            className="text-emerald-600"
          />

          <div>

            <p className="text-sm font-semibold text-emerald-800">
              Purchase saved successfully
            </p>

            <p className="mt-1 text-xs text-emerald-700">
              The bill is ready to be added to your purchase history.
            </p>

          </div>

        </div>

      )}

      {!isProcessed ? (

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Upload Section */}

          <Card className="lg:col-span-2">

            <div className="mb-6">

              <h2 className="text-lg font-semibold text-[#102A43]">
                Upload a Grocery Bill
              </h2>

              <p className="mt-1 text-sm text-[#64748B]">
                Supported formats: PDF, JPG, JPEG and PNG
              </p>

            </div>

            {!selectedFile ? (

              <label className="flex min-h-[300px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#DCE7E7] bg-[#F0FAFA] px-6 text-center transition hover:border-[#0F766E] hover:bg-[#CCFBF1]">

                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#CCFBF1] text-[#0F766E]">
                  <Upload size={28} />
                </div>

                <h3 className="text-lg font-semibold text-[#102A43]">
                  Upload your grocery bill
                </h3>

                <p className="mt-2 max-w-md text-sm text-[#64748B]">
                  Drag and drop your bill here, or click to browse files
                </p>

                <span className="mt-5 rounded-xl bg-[#0F766E] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#115E59]">
                  Choose File
                </span>

                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={handleFileSelect}
                />

              </label>

            ) : (

              <div className="rounded-2xl border border-[#DCE7E7] bg-[#F0FAFA] p-5">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0F766E]">
                      <FileText size={22} />
                    </div>

                    <div>

                      <p className="max-w-[300px] truncate text-sm font-semibold text-[#102A43]">
                        {selectedFile.name}
                      </p>

                      <p className="mt-1 text-xs text-[#64748B]">
                        {(selectedFile.size / 1024).toFixed(1)} KB
                      </p>

                    </div>

                  </div>

                  <button
                    onClick={handleRemove}
                    className="rounded-lg p-2 text-[#94A3B8] transition hover:bg-red-50 hover:text-red-500"
                  >
                    <X size={18} />
                  </button>

                </div>

                <div className="mt-6 flex justify-end">

                  <Button onClick={handleProcess}>
                    Process Bill
                  </Button>

                </div>

              </div>

            )}

          </Card>

          {/* Information */}

          <Card>

            <div className="mb-5">

              <h2 className="text-lg font-semibold text-[#102A43]">
                How it works
              </h2>

              <p className="mt-1 text-sm text-[#64748B]">
                Organize your grocery purchases in a few steps.
              </p>

            </div>

            <div className="space-y-5">

              <div className="flex gap-3">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#CCFBF1] text-sm font-semibold text-[#0F766E]">
                  1
                </div>

                <div>

                  <h3 className="text-sm font-semibold text-[#102A43]">
                    Upload your bill
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#64748B]">
                    Select a grocery receipt or bill from your device.
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E6F6F4] text-sm font-semibold text-[#0F766E]">
                  2
                </div>

                <div>

                  <h3 className="text-sm font-semibold text-[#102A43]">
                    Organize the data
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#64748B]">
                    Bill information is converted into structured purchase data.
                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF4D6] text-sm font-semibold text-[#B77900]">
                  3
                </div>

                <div>

                  <h3 className="text-sm font-semibold text-[#102A43]">
                    Review and save
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#64748B]">
                    Check the extracted information before adding it to your history.
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-6 border-t border-[#DCE7E7] pt-5">

              <Badge variant="info">
                Your data stays organized
              </Badge>

            </div>

          </Card>

        </div>

      ) : (

        <BillPreview onSave={handleSave} />

      )}

    </DashboardLayout>
  );
}

export default UploadBills;