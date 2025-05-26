"use client"

import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4 text-center space-y-4">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/madhurima-dutta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors transform hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/madhu-rima-dutta/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors transform hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <p className="text-gray-400">© 2025 Madhurima Dutta - Delivering Data Excellence with Blinkit Speed! 🚀</p>
      </div>
    </footer>
  )
}
