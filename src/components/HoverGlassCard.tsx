import { ReactNode } from "react";

interface HoverGlassCardProps {
  children: ReactNode;
  className?: string;
}

const HoverGlassCard = ({ 
  children, 
  className = ""
}: HoverGlassCardProps) => {
  return (
    <div className={`rounded-2xl transition-[background,backdrop-filter,shadow] duration-500 transition-[border-color,border-width] duration-0 ${className}`}>
      {children}
    </div>
  );
};

export default HoverGlassCard;

