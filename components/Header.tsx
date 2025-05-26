"use client"

import { Package } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import ThemeToggle from "@/components/ThemeToggle"

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
  cartItems: string[]
}

export default function Header({ activeSection, setActiveSection, cartItems }: HeaderProps) {
  const navItems = [
    { id: "home", label: "🏠 Home" },
    { id: "inventory", label: "📦 Inventory" },
    { id: "billing", label: "🧾 Billing" },
    { id: "products", label: "🛍️ Products" },
    { id: "why-blinkit", label: "❤️ Why Blinkit" },
    { id: "support", label: "📞 Support" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border-b-4 border-yellow-400">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-400 p-2 rounded-full animate-pulse">
              <Package className="h-6 w-6 text-gray-800" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">DataBlinkit</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">Madhurima's Portfolio</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSection === id
                    ? "bg-yellow-400 text-gray-800 shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:bg-yellow-100 dark:hover:bg-gray-700"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Badge variant="secondary" className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Online
            </Badge>
            {cartItems.length > 0 && <Badge className="bg-red-500 text-white">{cartItems.length}</Badge>}
          </div>
        </div>
      </div>
    </header>
  )
}
