import React from "react";

interface HoverGlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const HoverGlassCard: React.FC<HoverGlassCardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`rounded-2xl transition-[background,backdrop-filter,shadow,border-color,border-width] duration-500 ${className}`}
    >
      {children}
    </div>
  );
};

export default HoverGlassCard;
