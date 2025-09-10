"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { animateWithGsap } from "@/utils/animateWithGsap";

// Image constants
const LEFT_IMAGES = [
  { src: "/images/left-thumb-1.png", alt: "Content 1" },
  { src: "/images/left-thumb-2.png", alt: "Content 2" },
  { src: "/images/left-thumb-3.png", alt: "Content 3" },
  { src: "/images/left-thumb-4.png", alt: "Content 4" },
];

const RIGHT_IMAGES = [
  { src: "/images/right-thumb-1.png", alt: "Content 1" },
  { src: "/images/right-thumb-2.png", alt: "Content 2" },
  { src: "/images/right-thumb-3.png", alt: "Content 3" },
  { src: "/images/right-thumb-4.png", alt: "Content 4" },
];

const IMAGE_DIMENSIONS = {
  width: 457,
  height: 603,
};

const Content = () => {
  const leftSectionRef = useRef<HTMLElement>(null);
  const rightSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Set initial state for all images - hidden
    gsap.set(".animate-image", { opacity: 0, y: -100 });

    // Animate left column images with stagger
    const leftImages = document.querySelectorAll("#leftSection .animate-image");
    leftImages.forEach((image, index) => {
      animateWithGsap(
        image,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.15, // Stagger delay based on left column index
        },
        {
          start: "top 85%",
        }
      );
    });

    // Animate right column images with stagger (starting from 0)
    const rightImages = document.querySelectorAll(
      "#rightSection .animate-image"
    );
    rightImages.forEach((image, index) => {
      animateWithGsap(
        image,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.15, // Stagger delay based on right column index
        },
        {
          start: "top 85%",
        }
      );
    });
  }, []);

  return (
    <div className="flex-1 ml-[40px]">
      <div className="flex gap-8">
        <section
          ref={leftSectionRef}
          className="flex-1 flex flex-col gap-8"
          id="leftSection"
        >
          {LEFT_IMAGES.map((image, index) => (
            <Image
              key={`left-${index}`}
              src={image.src}
              alt={image.alt}
              width={IMAGE_DIMENSIONS.width}
              height={IMAGE_DIMENSIONS.height}
              className="animate-image"
              style={{ opacity: 0 }}
            />
          ))}
        </section>
        <section
          ref={rightSectionRef}
          className="flex-1 flex flex-col gap-8"
          id="rightSection"
        >
          {RIGHT_IMAGES.map((image, index) => (
            <Image
              key={`right-${index}`}
              src={image.src}
              alt={image.alt}
              width={IMAGE_DIMENSIONS.width}
              height={IMAGE_DIMENSIONS.height}
              className="animate-image"
              style={{ opacity: 0 }}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Content;
