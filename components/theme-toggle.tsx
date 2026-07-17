"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        className="border-[3px] border-black dark:border-white rounded-sm h-12 w-12 flex-shrink-0 bg-white dark:bg-neutral-900"
        aria-label="Toggle theme"
      >
        <Sun className="w-5 h-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="border-[3px] border-black dark:border-white rounded-sm h-12 w-12 flex-shrink-0 bg-white dark:bg-neutral-900 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-white" />
      ) : (
        <Moon className="w-5 h-5 text-black" />
      )}
    </Button>
  )
}
