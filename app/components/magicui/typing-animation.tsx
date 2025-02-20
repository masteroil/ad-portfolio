"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text?: string; // Make text optional
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text = "", // Set a default value for text
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text]); // Add text as a dependency

  return (
    <h1
      className={cn(
        "text-center font-display  font-bold tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]",
        className
      )}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}
