"use client";

import { useState, useCallback } from "react";

export const usePreloaderComplete = () => {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    console.log("Preloader completed, triggering animations refresh");
    setIsPreloaderComplete(true);
  }, []);

  return {
    isPreloaderComplete,
    handlePreloaderComplete,
  };
};
