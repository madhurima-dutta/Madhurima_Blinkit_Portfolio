"use client"

import { Sun, Moon } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/ThemeProvider"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4 text-yellow-500" />
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} className="data-[state=checked]:bg-gray-600" />
      <Moon className="h-4 w-4 text-blue-500" />
    </div>
  )
}
