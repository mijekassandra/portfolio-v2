import React, { useState } from "react";
import GlassCard from "./GlassCard";
import ImageGalleryModal from "./ImageGalleryModal";

const lineClampClasses: Record<number, string> = {
  2: "line-clamp-2",
  3: "line-clamp-3",
  4: "line-clamp-4",
  5: "line-clamp-5",
  6: "line-clamp-6",
  7: "line-clamp-7",
  8: "line-clamp-8",
  9: "line-clamp-9",
  10: "line-clamp-10",
};

interface PortfolioCardProps {
  id: number;
  title: string;
  category: string[];
  skills: string[];
  description: string;
  longDescription?: string;
  images: string[];
  githubUrl: string | null;
  liveUrl?: string | null;
  featured: boolean;
  useLongDescription?: boolean;
  lineClamp?: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  category,
  skills,
  description,
  longDescription,
  images,
  githubUrl,
  liveUrl,
  useLongDescription = false,
  lineClamp = 4,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = () => {
    setSelectedImageIndex(0);
    setIsModalOpen(true);
  };

  return (
    <>
      <GlassCard variant="elevated" hover className="overflow-hidden">
        <div className="flex h-full flex-col">
          {/* Image Section */}
          <div
            className="relative h-40 w-full cursor-pointer overflow-hidden sm:h-44 md:h-48"
            onClick={handleImageClick}
          >
            <img
              src={images[0]}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="pointer-events-none absolute bottom-3 left-3 flex gap-1.5 sm:bottom-4 sm:left-4 sm:gap-2">
              {category.map((cat, index) => (
                <span
                  key={index}
                  className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs"
                >
                  {cat}
                </span>
              ))}
            </div>
            {images.length > 1 && (
              <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-white/20 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm sm:right-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs">
                {images.length} images
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex flex-1 flex-col justify-between gap-2.5 p-4 sm:gap-3 sm:p-5 md:p-6">
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-base font-semibold tracking-wider text-white sm:text-lg md:text-[1.15rem]">
                {title}
              </h3>
              <p
                className={`${
                  lineClampClasses[lineClamp] || lineClampClasses[4]
                } text-xs text-white/80 sm:text-sm`}
              >
                {useLongDescription && longDescription
                  ? longDescription
                  : description}
              </p>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] text-white/70 sm:px-2 sm:py-1 sm:text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {/* Links */}
              <div className="ml-0.5 mt-1.5 flex gap-3 sm:ml-1 sm:mt-2 sm:gap-4">
                {githubUrl && githubUrl.trim() !== "" && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/70 transition-colors sm:text-sm hover:text-white"
                  >
                    GitHub →
                  </a>
                )}
                {liveUrl &&
                  typeof liveUrl === "string" &&
                  liveUrl.trim() !== "" && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/70 transition-colors sm:text-sm hover:text-white"
                    >
                      Live Demo →
                    </a>
                  )}
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      <ImageGalleryModal
        images={images}
        initialIndex={selectedImageIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
      />
    </>
  );
};

export default PortfolioCard;
