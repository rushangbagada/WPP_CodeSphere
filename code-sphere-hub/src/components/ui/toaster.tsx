
import React, { useEffect, useState } from "react";
import { useToast, ToasterToast } from "./use-toast";

export function Toaster() {
  const [toasts, setToasts] = useState<ToasterToast[]>([]);
  const { addListener } = useToast();

  useEffect(() => {
    return addListener((newToasts) => {
      setToasts(newToasts);
    });
  }, [addListener]);

  return (
    <div className="fixed top-0 right-0 z-50 flex flex-col p-4 space-y-2 max-w-xs">
      {toasts.map(({ id, title, description, variant }) => (
        <div
          key={id}
          className={`rounded-md p-4 shadow-md ${
            variant === "destructive"
              ? "bg-red-600 text-white"
              : "bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100"
          } animate-fade-in`}
        >
          {title && <h3 className="font-semibold">{title}</h3>}
          {description && <p className="text-sm opacity-90">{description}</p>}
          <button
            onClick={() => {
              const { dismissToast } = useToast();
              dismissToast(id);
            }}
            className="absolute top-1 right-1 p-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
