"use client"

import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

export default function ResumeDownloadButton() {
  const handleDownload = () => {
    // Open Google Drive link in new tab
    window.open(
      "https://drive.google.com/file/d/13wOIrjVEBoLy6ppR8WQzQ7cM38rsfMl3/view?usp=drive_link",
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <Button
      size="lg"
      className="bg-gray-800 hover:bg-gray-900 text-white group transition-all duration-300 transform hover:scale-105"
      onClick={handleDownload}
    >
      <div className="flex items-center space-x-2">
        <FileText className="h-5 w-5 group-hover:animate-bounce" />
        <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
        <span>Download Resume</span>
      </div>
    </Button>
  )
}
