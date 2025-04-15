
import { Toast } from "@/components/ui/toast";

// Define a simple ToastProps type since it's not exported from the original component
export interface ToastProps {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
}

// Create a singleton instance to track toasts
const toastInstance = {
  toasts: [] as ToastProps[],
  listeners: [] as ((toasts: ToastProps[]) => void)[],
  
  addToast: (toast: Omit<ToastProps, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    toastInstance.toasts = [...toastInstance.toasts, { id, ...toast }].slice(-5);
    toastInstance.notifyListeners();
    setTimeout(() => {
      toastInstance.dismissToast(id);
    }, 5000);
    return id;
  },
  
  dismissToast: (toastId: string) => {
    toastInstance.toasts = toastInstance.toasts.filter(t => t.id !== toastId);
    toastInstance.notifyListeners();
  },
  
  addListener: (listener: (toasts: ToastProps[]) => void) => {
    toastInstance.listeners.push(listener);
    return () => {
      toastInstance.listeners = toastInstance.listeners.filter(l => l !== listener);
    };
  },
  
  notifyListeners: () => {
    toastInstance.listeners.forEach(listener => {
      listener(toastInstance.toasts);
    });
  }
};

// Export the useToast hook with the correct types
export const useToast = () => {
  return {
    ...toastInstance,
    toast: {
      success: (message: string) => {
        return toastInstance.addToast({
          title: "Success",
          description: message,
        });
      },
      error: (message: string) => {
        return toastInstance.addToast({
          title: "Error",
          description: message,
          variant: "destructive",
        });
      },
      info: (message: string) => {
        return toastInstance.addToast({
          description: message,
        });
      }
    }
  };
};

// Export toast function for direct usage
export const toast = {
  success: (message: string) => {
    return toastInstance.addToast({
      title: "Success",
      description: message,
    });
  },
  error: (message: string) => {
    return toastInstance.addToast({
      title: "Error",
      description: message,
      variant: "destructive",
    });
  },
  info: (message: string) => {
    return toastInstance.addToast({
      description: message,
    });
  }
};
