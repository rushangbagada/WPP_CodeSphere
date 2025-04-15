
import React from "react";

interface ToastProps {
  id?: string;
  className?: string;
  variant?: "default" | "destructive";
  children?: React.ReactNode;
}

const Toast: React.FC<ToastProps> = ({ className, variant = "default", children, ...props }) => {
  return (
    <div
      className={`rounded-md border p-4 shadow-md ${
        variant === "destructive" 
          ? "border-red-600 bg-red-600 text-white" 
          : "border-gray-200 bg-white text-gray-900 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-100"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const ToastTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className, ...props }) => (
  <h3 className={`font-semibold ${className}`} {...props} />
);

const ToastDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ className, ...props }) => (
  <p className={`text-sm opacity-90 ${className}`} {...props} />
);

const ToastClose: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => (
  <button
    className={`absolute top-1 right-1 p-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 ${className}`}
    {...props}
  >
    ×
  </button>
);

const ToastViewport: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => (
  <div
    className={`fixed top-0 right-0 z-50 flex flex-col p-4 space-y-2 max-w-xs ${className}`}
    {...props}
  />
);

const ToastProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

const ToastAction: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => (
  <button
    className={`inline-flex items-center justify-center px-3 py-1 text-sm font-medium rounded bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 ${className}`}
    {...props}
  />
);

export type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  ToastProvider,
  ToastViewport
};
