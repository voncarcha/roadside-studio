"use client";

import React, { useState, useEffect, useMemo } from "react";

interface ImagePreloaderProps {
  children: React.ReactNode;
  onLoadingComplete?: () => void;
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ children, onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  // All images used in the application - memoized to prevent recreation
  const imageList = useMemo(() => [
    "/images/logo.png",
    "/images/left-thumb-1.png",
    "/images/left-thumb-2.png",
    "/images/left-thumb-3.png",
    "/images/left-thumb-4.png",
    "/images/left-thumb-5.png",
    "/images/left-thumb-6.png",
    "/images/left-thumb-7.png",
    "/images/left-thumb-8.png",
    "/images/right-thumb-1.png",
    "/images/right-thumb-2.png",
    "/images/right-thumb-3.png",
    "/images/right-thumb-4.png",
    "/images/right-thumb-5.png",
    "/images/right-thumb-6.png",
    "/images/right-thumb-7.png",
    "/images/right-thumb-8.png",
  ], []);

  useEffect(() => {
    console.log("Starting image preload with", imageList.length, "images");
    setTotalImages(imageList.length);
    
    const preloadImages = async () => {
      const imagePromises = imageList.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          
          img.onload = () => {
            console.log(`Successfully loaded: ${src}`);
            setLoadedImages(prev => {
              const newCount = prev + 1;
              console.log(`Images loaded: ${newCount}/${imageList.length}`);
              return newCount;
            });
            resolve();
          };
          
          img.onerror = () => {
            console.warn(`Failed to load image: ${src}`);
            setLoadedImages(prev => {
              const newCount = prev + 1;
              console.log(`Images processed (with error): ${newCount}/${imageList.length}`);
              return newCount;
            }); // Still count as "loaded" to avoid hanging
            resolve();
          };
          
          img.src = src;
        });
      });

      try {
        await Promise.all(imagePromises);
        console.log("All images processed, starting transition");
        // Start fade out transition
        setIsTransitioning(true);
        
        // Complete the transition after animation
        setTimeout(() => {
          console.log("Setting loading to false");
          setIsLoading(false);
          // Call the completion callback after a small delay to ensure DOM is settled
          setTimeout(() => {
            onLoadingComplete?.();
          }, 100);
        }, 800); // Increased duration for smoother transition
      } catch (error) {
        console.error("Error preloading images:", error);
        setIsTransitioning(true);
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => {
            onLoadingComplete?.();
          }, 100);
        }, 500);
      }
    };

    // Add a maximum timeout to prevent infinite loading
    const maxTimeout = setTimeout(() => {
      console.warn("Maximum loading time reached, forcing content display");
      setIsTransitioning(true);
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          onLoadingComplete?.();
        }, 100);
      }, 500);
    }, 10000); // 10 seconds max

    preloadImages();

    return () => {
      clearTimeout(maxTimeout);
    };
  }, [imageList, onLoadingComplete]);

  const progressPercentage = totalImages > 0 ? (loadedImages / totalImages) * 100 : 0;

  if (isLoading) {
    return (
      <div className={`fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-50 transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <div className="text-center text-white animate-pulse px-4 sm:px-6 md:px-8 w-full max-w-lg mx-auto">
          <div className="mb-8 sm:mb-12">
            {/* Enhanced spinner with multiple rotating elements */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6">
              <div className="absolute inset-0 border-3 sm:border-4 border-white/20 rounded-full"></div>
              <div className="absolute inset-0 border-3 sm:border-4 border-transparent border-t-[#9E1717] border-r-[#9E1717] rounded-full animate-spin"></div>
              <div className="absolute inset-1 sm:inset-2 border-2 border-transparent border-t-white border-r-white rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent px-2">
              Loading Roadside Studio
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-light tracking-wide px-2">
              Preparing your music experience...
            </p>
          </div>
          
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto px-4">
            {/* Enhanced progress bar */}
            <div className="bg-gray-800 rounded-full h-2 sm:h-3 mb-2 sm:mb-3 shadow-inner border border-gray-700">
              <div 
                className="bg-gradient-to-r from-[#9E1717] via-[#C41E1E] to-[#7C0D0D] h-2 sm:h-3 rounded-full transition-all duration-500 ease-out shadow-lg relative overflow-hidden"
                style={{ width: `${progressPercentage}%` }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              </div>
            </div>
            
            <div className="flex justify-center items-center text-xs sm:text-sm">
              {/* <p className="text-gray-400 font-medium">
                {loadedImages} / {totalImages} images
              </p> */}
              <p className="text-white font-semibold">
                {Math.round(progressPercentage)}%
              </p>
            </div>
            
            {/* Loading dots indicator */}
            <div className="flex justify-center mt-3 sm:mt-4 space-x-1">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#9E1717] rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#9E1717] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#9E1717] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
};

export default ImagePreloader;
