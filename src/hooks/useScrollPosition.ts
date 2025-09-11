"use client";

import { useState, useEffect } from "react";

export const useScrollPosition = (targetId?: string, scrollOffset?: number) => {
  const [isAtTop, setIsAtTop] = useState(targetId ? false : scrollOffset ? false : true); // Hidden initially when checking target element or scroll offset

  useEffect(() => {
    const handleScroll = () => {
      if (scrollOffset !== undefined) {
        // Check if scroll position is past the specified offset
        setIsAtTop(window.scrollY >= scrollOffset);
      } else if (targetId) {
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
    }, [targetId, scrollOffset]);

  return isAtTop;
};
