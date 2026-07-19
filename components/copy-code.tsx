"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

export function CopyCode({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <button
      onClick={copy}
      className="absolute top-2 right-2 p-2 rounded-md bg-neutral-200/50 hover:bg-neutral-200 dark:bg-neutral-800/50 dark:hover:bg-neutral-700 transition-colors opacity-0 group-hover:opacity-100"
      aria-label="Copy code"
    >
      {isCopied ? (
        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
      ) : (
        <Copy className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
      )}
    </button>
  )
}
