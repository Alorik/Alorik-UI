"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type DocsContextType = {
  activeItem: string;
  setActiveItem: (item: string) => void;
};

const DocsContext = createContext<DocsContextType | undefined>(undefined);

export function DocsProvider({ children }: { children: ReactNode }) {
  // Default to Introduction
  const [activeItem, setActiveItem] = useState("Introduction");

  return (
    <DocsContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </DocsContext.Provider>
  );
}

export function useDocs() {
  const context = useContext(DocsContext);
  if (!context) {
    throw new Error("useDocs must be used within a DocsProvider");
  }
  return context;
}
