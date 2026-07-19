import { CopyCode } from "./copy-code"
import { ReactNode, ComponentPropsWithoutRef } from "react"

type PreProps = ComponentPropsWithoutRef<"pre"> & {
  children?: ReactNode
}

export const mdxComponents = {
  pre: ({ children, className, ...props }: PreProps) => {
    // Extract text content from the inner code block if possible
    let text = ""
    if (children && typeof children === "object" && "props" in children) {
      const codeProps = (children as any).props
      if (codeProps && typeof codeProps.children === "string") {
        text = codeProps.children
      }
    }

    return (
      <div className="relative group not-prose my-6">
        <pre
          className={`overflow-x-auto p-4 rounded-xl bg-neutral-900 text-neutral-100 text-sm ${className || ""}`}
          {...props}
        >
          {children}
        </pre>
        {text && <CopyCode text={text} />}
      </div>
    )
  },
}
