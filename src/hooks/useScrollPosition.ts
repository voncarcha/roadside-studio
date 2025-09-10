"use client";

import { useState, useEffect } from "react";

export const useScrollPosition = (targetId?: string) => {
  const [isAtTop, setIsAtTop] = useState(true); // Start as true since we begin at top

  useEffect(() => {
    const handleScroll = () => {
      if (targetId) {
        // Original behavior - check if target element is at top
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        const rect = targetElement.getBoundingClientRect();
        const threshold = 100;
        setIsAtTop(rect.top <= threshold);
      } else {
        // New behavior - check if page is at top
        const threshold = 50; // Small threshold for page top
        setIsAtTop(window.scrollY <= threshold);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetId]);

  return isAtTop;
};
