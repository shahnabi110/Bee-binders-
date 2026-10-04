"use client";
import { useEffect } from "react";

export function SuppressErrors() {
  useEffect(() => {
    // Intercept console.error to silence the React hydration warnings caused by Bitdefender
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      const msg = typeof args[0] === 'string' ? args[0] : '';
      if (
        msg.includes('bis_skin_checked') ||
        msg.includes('Warning: Expected server HTML to contain a matching') ||
        msg.includes('A tree hydrated but some attributes') ||
        msg.includes('Hydration failed') ||
        msg.includes('react-hydration-error')
      ) {
        return; // Zap the error
      }
      originalConsoleError.apply(console, args);
    };

    // Intercept the window error event to stop the Next.js Error Overlay from popping up
    const preventErrorOverlay = (e: ErrorEvent) => {
      if (
        e.message?.includes('bis_skin_checked') ||
        e.message?.includes('Hydration failed') || 
        e.message?.includes('A tree hydrated')
      ) {
        e.stopImmediatePropagation();
        e.preventDefault();
      }
    };

    window.addEventListener('error', preventErrorOverlay, true);

    return () => {
      console.error = originalConsoleError;
      window.removeEventListener('error', preventErrorOverlay, true);
    };
  }, []);

  return null;
}
