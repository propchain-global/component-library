import React from 'react'
interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
   isActive: boolean
}
export const Tab = ({isActive, className, children, ...props}: TabProps) => {
   const activeClass = isActive ? 'bg-darks text-weak hover:text-weaker hover:bg-weak' : 'bg-weak text-weak hover:bg-darks hover:text-weaker'
   const fontClass = isActive ? 'text-body-s-medium' : 'text-body-s-strong'
  return (
    <div className={`w-8x h-8x cursor-pointer flex items-center justify-center p-[10px] rounded-sm ${activeClass} ${className}`} {...props}>
      <p className={fontClass}>{children}</p>
    </div>
  )
}
