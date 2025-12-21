import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "subtle";
  hover?: boolean;
}

const GlassCard = ({
  children,
  className = "",
  variant = "default",
  hover = false,
}: GlassCardProps) => {
  const baseStyles =
    "rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-300";

  const variantStyles = {
    default:
      "bg-gradient-to-br from-white/5 to-white/0 shadow-lg shadow-black/20",
    elevated:
      "bg-gradient-to-br from-white/10 to-white/5 shadow-2xl shadow-black/30",
    subtle:
      "bg-gradient-to-br from-white/3 to-white/0 shadow-md shadow-black/10",
  };

  const hoverStyles = hover
    ? "hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 hover:shadow-xl hover:shadow-black/30 hover:border-white/20 hover:-translate-y-1"
    : "";

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
