import React from "react";

interface SharkIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function SharkIcon({ 
  size = 24, 
  className = "", 
  color = "currentColor" 
}: SharkIconProps) {
  return (
    <div 
      className={`shark-icon ${className}`}
      style={{ 
        width: size, 
        height: size,
        backgroundColor: color,
        maskImage: "url('/assets/image.png')",
        maskRepeat: "no-repeat",
        maskSize: "contain",
        maskPosition: "center",
        WebkitMaskImage: "url('/assets/image.png')",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        WebkitMaskPosition: "center",
        display: "inline-block",
        flexShrink: 0
      }}
    />
  );
}
