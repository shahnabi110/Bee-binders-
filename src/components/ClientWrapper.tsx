"use client";
import React, { useState, useEffect } from "react";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // By returning null on the server, we completely bypass Server-Side Rendering (SSR).
  // This physically prevents Bitdefender from causing a hydration mismatch, 
  // because there is no server HTML for it to modify!
  if (!mounted) {
    return null;
  }
  
  return <>{children}</>;
}
