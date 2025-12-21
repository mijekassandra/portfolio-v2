import React from "react";
import GlassCard from "./GlassCard";

interface PortfolioCardProps {
  id: number;
  title: string;
  category: string[];
  skills: string[];
  description: string;
  image: string;
  githubUrl: string | null;
  liveUrl: string | null;
  colors: {
    primary: string;
    secondary: string;
  };
  featured: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  category,
  skills,
  description,
  image,
  githubUrl,
  liveUrl,
  colors,
}) => {
  return (
    <GlassCard variant="elevated" hover className="overflow-hidden">
      <div className="flex flex-col">
        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            {category.map((cat, index) => (
              <span
                key={index}
                className="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-4 p-6">
          <h3 className="text-[1.15rem] font-semibold tracking-wider text-white">
            {title}
          </h3>
          <p className="line-clamp-4 text-sm text-white/80">{description}</p>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="rounded-md bg-white/10 px-2 py-1 text-xs text-white/70"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-2 flex gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                GitHub →
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default PortfolioCard;
