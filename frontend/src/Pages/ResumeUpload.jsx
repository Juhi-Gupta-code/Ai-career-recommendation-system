import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function ResumeUpload() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("");
  const [error, setError] = useState("");

  const allowedTypes = [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword",
  ];

  const maxSize = 5 * 1024 * 1024;

  const validateFile = (selectedFile) => {
    setError("");

    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Please upload a PDF or DOC/DOCX resume.");
      return false;
    }

    if (selectedFile.size > maxSize) {
      setError("File size must be less than 5 MB.");
      return false;
    }

    return true;
  };

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    if (!validateFile(selectedFile)) {
      return;
    }

    setFile(selectedFile);
    setUploadProgress(0);
    setUploadStatus("");
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    handleFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];

    handleFile(droppedFile);
  };

  const handleUpload = () => {
    if (!file) {
      setError("Please select a resume first.");
      return;
    }

    setError("");
    setUploadStatus("Uploading...");
    setUploadProgress(0);

    let progress = 0;

    const interval = setInterval(() => {
      progress += 10;

      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setUploadStatus("Upload successful");
      }
    }, 150);
  };

  const handleRemove = () => {
    setFile(null);
    setUploadProgress(0);
    setUploadStatus("");
    setError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">

      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-8">

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Upload Your Resume
          </h1>

          <p className="text-gray-500 mt-3">
            Upload your resume to get personalized career recommendations.
          </p>

        </div>


        <div className="bg-white rounded-2xl shadow-md p-8">

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => {
              setIsDragging(false);
            }}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current.click()}
            className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition ${
              isDragging
                ? "border-blue-600 bg-blue-50"
                : "border-gray-300 hover:border-blue-500 hover:bg-blue-50"
            }`}
          >

            <div className="text-5xl mb-4">
              ↑
            </div>

            <h2 className="text-xl font-semibold text-gray-800">
              Drag & Drop your Resume
            </h2>

            <p className="text-gray-500 mt-2">
              or click to browse files
            </p>

            <p className="text-sm text-gray-400 mt-4">
              Supported formats: PDF, DOC, DOCX
            </p>

            <p className="text-sm text-gray-400">
              Maximum file size: 5 MB
            </p>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />

          </div>


          {error && (
            <div className="mt-5 bg-red-50 border border-red-200 text-red-600 rounded-xl p-4">
              {error}
            </div>
          )}


          {file && (
            <div className="mt-6 border border-gray-200 rounded-xl p-5">

              <div className="flex items-center justify-between gap-4">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold">
                    PDF
                  </div>

                  <div>

                    <p className="font-semibold text-gray-800 break-all">
                      {file.name}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>

                  </div>

                </div>


                <button
                  type="button"
                  onClick={handleRemove}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Remove
                </button>

              </div>


              {uploadProgress > 0 && (
                <div className="mt-6">

                  <div className="flex justify-between text-sm mb-2">

                    <span className="text-gray-600">
                      {uploadStatus}
                    </span>

                    <span className="font-medium text-blue-600">
                      {uploadProgress}%
                    </span>

                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">

                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all duration-200"
                      style={{
                        width: `${uploadProgress}%`,
                      }}
                    />

                  </div>

                </div>
              )}


              {uploadProgress === 0 && (
                <button
                  type="button"
                  onClick={handleUpload}
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                >
                  Upload Resume
                </button>
              )}

            </div>
          )}


          {uploadProgress === 100 && (
            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-5">

              <h3 className="text-lg font-bold text-green-700">
                Resume Uploaded Successfully
              </h3>

              <p className="text-green-600 text-sm mt-2">
                Your resume has been uploaded and is ready for analysis.
              </p>

            </div>
          )}

        </div>


        {uploadProgress === 100 && (
          <div className="bg-white rounded-2xl shadow-md p-8 mt-6">

            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Resume Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  File Name
                </p>

                <p className="font-semibold text-gray-800 mt-1 break-all">
                  {file.name}
                </p>
              </div>


              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  File Size
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>


              <div className="bg-gray-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  File Type
                </p>

                <p className="font-semibold text-gray-800 mt-1">
                  Resume Document
                </p>
              </div>


              <div className="bg-green-50 rounded-xl p-5">
                <p className="text-sm text-gray-500">
                  Upload Status
                </p>

                <p className="font-semibold text-green-600 mt-1">
                  Successfully Uploaded
                </p>

                <h2 className="text-xl font-bold mb-4">
                  Extracted Skills
                </h2>
              </div>

            </div>


            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <button
                onClick={() => navigate("/assessment")}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Continue to Assessment
              </button>

              <button
                onClick={handleRemove}
                className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold transition"
              >
                Upload Another Resume
              </button>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default ResumeUpload;