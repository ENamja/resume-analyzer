"use client";
import { useState } from "react";

function FileUploadComponent() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescFile, setJobDescFile] = useState(null);

  const handleResumeUpload = (event) => {
    setResumeFile(event.target.files[0]);
  };

  const handleJobDescUpload = (event) => {
    setJobDescFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!resumeFile || !jobDescFile) {
      alert("Please upload both files");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("jobDescription", jobDescFile);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      // Handle analysis results
      console.log(data);
    } catch (error) {
      console.log("Error uploading files:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 w-full max-w-md"
    >
      <div className="w-full">
        <label className="block text-sm font-medium mb-2">Upload Resume</label>
        <input
          type="file"
          onChange={handleResumeUpload}
          className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2"
          accept=".pdf,.docx,.txt"
        />
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium mb-2">
          Upload Job Description
        </label>
        <input
          type="file"
          onChange={handleJobDescUpload}
          className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2"
          accept=".pdf,.docx,.txt"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Analyze
      </button>
    </form>
  );
}

export default FileUploadComponent;
