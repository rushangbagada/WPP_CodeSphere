
import React, { createContext, useContext, useState } from "react";

interface ToggleGroupContextType {
  value: string | string[];
  onChange: (value: string) => void;
  type: "single" | "multiple";
}

const ToggleGroupContext = createContext<ToggleGroupContextType | undefined>(undefined);

interface ToggleGroupProps {
  value: string | string[];
  onValueChange: (value: string | string[]) => void;
  type?: "single" | "multiple";
  className?: string;
  children: React.ReactNode;
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({
  value,
  onValueChange,
  type = "single",
  className = "",
  children,
}) => {
  const handleChange = (itemValue: string) => {
    if (type === "single") {
      onValueChange(itemValue);
    } else {
      const values = value as string[];
      if (values.includes(itemValue)) {
        onValueChange(values.filter((v) => v !== itemValue));
      } else {
        onValueChange([...values, itemValue]);
      }
    }
  };

  return (
    <ToggleGroupContext.Provider
      value={{
        value,
        onChange: handleChange,
        type,
      }}
    >
      <div className={`inline-flex items-center justify-center gap-1 ${className}`}>{children}</div>
    </ToggleGroupContext.Provider>
  );
};

interface ToggleGroupItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export const ToggleGroupItem: React.FC<ToggleGroupItemProps> = ({
  value,
  className = "",
  children,
}) => {
  const context = useContext(ToggleGroupContext);
  
  if (!context) {
    throw new Error("ToggleGroupItem must be used within a ToggleGroup");
  }

  const { value: groupValue, onChange, type } = context;
  
  const isActive = type === "single" 
    ? groupValue === value 
    : (groupValue as string[]).includes(value);

  return (
    <button
      className={`px-3 py-1.5 text-sm font-medium rounded transition-colors
                ${isActive 
                  ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100" 
                  : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"}
                ${className}`}
      onClick={() => onChange(value)}
    >
      {children}
    </button>
  );
};
