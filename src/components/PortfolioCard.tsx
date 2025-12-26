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
            className="relative h-48 w-full cursor-pointer overflow-hidden"
            onClick={handleImageClick}
          >
            <img
              src={images[0]}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="pointer-events-none absolute bottom-4 left-4 flex gap-2">
              {category.map((cat, index) => (
                <span
                  key={index}
                  className="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
            {images.length > 1 && (
              <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur-sm">
                {images.length} images
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex flex-1 flex-col justify-between gap-3 p-6">
            <div className="space-y-3">
              <h3 className="text-[1.15rem] font-semibold tracking-wider text-white">
                {title}
              </h3>
              <p
                className={`${
                  lineClampClasses[lineClamp] || lineClampClasses[4]
                } text-sm text-white/80`}
              >
                {useLongDescription && longDescription
                  ? longDescription
                  : description}
              </p>
            </div>
            <div className="space-y-3">
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
              <div className="ml-1 mt-2 flex gap-4">
                {githubUrl && githubUrl.trim() !== "" && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 transition-colors hover:text-white"
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
                      className="text-sm text-white/70 transition-colors hover:text-white"
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
