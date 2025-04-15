
import React, { useState } from "react";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ 
  content, 
  children, 
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
      </div>
      
      {isVisible && (
        <div className={`absolute z-50 px-3 py-2 text-sm bg-black text-white rounded 
                       shadow-md animate-fade-in -mt-10 -translate-y-full left-1/2 
                       -translate-x-1/2 ${className}`}>
          {content}
          <div className="absolute border-4 border-t-black border-x-transparent border-b-transparent 
                        left-1/2 -translate-x-1/2 top-full"></div>
        </div>
      )}
    </div>
  );
};

export const TooltipProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return <>{children}</>;
};

export const TooltipTrigger: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  children, 
  ...props 
}) => {
  return <div {...props}>{children}</div>;
};

export const TooltipContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ 
  children, 
  className = "",
  ...props 
}) => {
  return (
    <div 
      className={`z-50 px-3 py-2 text-sm bg-black text-white rounded shadow-md ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};
