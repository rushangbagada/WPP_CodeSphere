
// A simplified toast implementation
interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
}

export type ToasterToast = Toast;

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 5000;

let toasts: Toast[] = [];
let listeners: ((toasts: Toast[]) => void)[] = [];

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

export const useToast = () => {
  const notifyListeners = () => {
    listeners.forEach((listener) => {
      listener(toasts);
    });
  };

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = generateId();
    toasts = [...toasts, { id, ...toast }].slice(-TOAST_LIMIT);
    
    notifyListeners();

    setTimeout(() => {
      toasts = toasts.filter(t => t.id !== id);
      notifyListeners();
    }, TOAST_REMOVE_DELAY);
    
    return id;
  };

  const dismissToast = (toastId: string) => {
    toasts = toasts.filter(t => t.id !== toastId);
    notifyListeners();
  };

  const addListener = (listener: (toasts: Toast[]) => void) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  return {
    toasts,
    addToast,
    dismissToast,
    addListener
  };
};

export const toast = (props: Omit<Toast, "id">) => {
  const { addToast } = useToast();
  return addToast(props);
};
