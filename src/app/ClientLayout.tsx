"use client";

import React, { createContext, useContext } from "react";
import ImagePreloader from "@/components/ImagePreloader";
import { usePreloaderComplete } from "@/hooks/usePreloaderComplete";

// Create context for preloader state
const PreloaderContext = createContext<{
  isPreloaderComplete: boolean;
  handlePreloaderComplete: () => void;
} | null>(null);

export const usePreloaderContext = () => {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error("usePreloaderContext must be used within a PreloaderProvider");
  }
  return context;
};

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const { isPreloaderComplete, handlePreloaderComplete } = usePreloaderComplete();

  return (
    <PreloaderContext.Provider value={{ isPreloaderComplete, handlePreloaderComplete }}>
      <ImagePreloader onLoadingComplete={handlePreloaderComplete}>
        {children}
      </ImagePreloader>
    </PreloaderContext.Provider>
  );
};

export default ClientLayout;
