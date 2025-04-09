import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      // Check if window is defined (for SSR compatibility)
      if (typeof window !== 'undefined') {
        const storedValue = window.localStorage.getItem(key);
        // Handle case where storedValue might be "undefined" string
        if (storedValue === 'undefined' || storedValue === null) {
          return initialValue;
        }
        return JSON.parse(storedValue);
      }
      return initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(`Error saving to localStorage key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue];
}