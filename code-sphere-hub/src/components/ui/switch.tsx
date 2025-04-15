
import * as React from "react"

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, ...props }, ref) => {
    return (
      <label className="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          ref={ref}
          {...props}
        />
        <div className={`w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 
                        peer-focus:ring-blue-500 rounded-full peer
                        peer-checked:after:translate-x-full peer-checked:bg-blue-500
                        after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                        after:bg-white after:rounded-full after:h-5 after:w-5 
                        after:transition-all dark:bg-gray-600 dark:peer-checked:bg-blue-500
                        ${className}`}>
        </div>
      </label>
    )
  }
)
Switch.displayName = "Switch"

export { Switch }
