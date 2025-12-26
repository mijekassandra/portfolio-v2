import React from "react";
import HoverGlassCard from "./HoverGlassCard";

interface TechStackSectionProps {
  title: string;
  icon: React.ReactNode;
  colorVariant: "blue" | "red" | "yellow" | "green" | "purple";
}

const TechStackSection: React.FC<TechStackSectionProps> = ({
  title,
  icon,
  colorVariant,
}) => {
  const colorStyles = {
    blue: "from-blue-500/20 to-blue-500/5 border-blue-500/20",
    red: "from-red-500/20 to-red-500/5 border-red-500/20",
    yellow: "from-yellow-500/20 to-yellow-500/5 border-yellow-500/20",
    green: "from-green-500/20 to-green-500/5 border-green-500/20",
    purple: "from-purple-500/20 to-purple-500/5 border-purple-500/20",
  };

  const iconBgStyles = {
    blue: "bg-blue-500/10 group-hover:bg-blue-500/20",
    red: "bg-red-500/10 group-hover:bg-red-500/20",
    yellow: "bg-yellow-500/10 group-hover:bg-yellow-500/20",
    green: "bg-green-500/10 group-hover:bg-green-500/20",
    purple: "bg-purple-500/10 group-hover:bg-purple-500/20",
  };

  const iconColorStyles = {
    blue: "text-blue-400/70 group-hover:text-blue-400",
    red: "text-red-400/70 group-hover:text-red-400",
    yellow: "text-yellow-400/70 group-hover:text-yellow-400",
    green: "text-green-400/70 group-hover:text-green-400",
    purple: "text-purple-400/70 group-hover:text-purple-400",
  };

  return (
    <div className="group cursor-pointer">
      <HoverGlassCard
        className={`relative flex min-h-[140px] items-center justify-center overflow-hidden p-4 sm:min-h-[160px] sm:p-5 md:min-h-[180px] md:p-6 ${
          // Default: completely plain, no styling
          ""
        } ${
          // Hover: show glass effect with color variant
          `group-hover:bg-gradient-to-br group-hover:backdrop-blur-xl ${colorStyles[colorVariant]} group-hover:border group-hover:shadow-lg group-hover:shadow-black/20`
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6">
          {/* Circular Icon Background */}
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full sm:h-12 sm:w-12 md:h-14 md:w-14 ${iconBgStyles[colorVariant]} transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
          >
            <div
              className={`${iconColorStyles[colorVariant]} text-lg transition-transform duration-300 sm:text-xl md:text-[1.25rem] group-hover:scale-110`}
            >
              {icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-center text-sm font-semibold tracking-wider text-white transition-colors duration-300 sm:text-base md:text-[1.15rem] group-hover:text-white">
            {title}
          </h3>
        </div>
      </HoverGlassCard>
    </div>
  );
};

export default TechStackSection;
