import React, { useEffect, useState } from "react";

interface ImageGalleryModalProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({
  images,
  initialIndex,
  isOpen,
  onClose,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/80 p-2 backdrop-blur-sm sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-full w-full max-w-7xl flex-col items-center justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 z-20 rounded-full bg-white/10 p-2 text-white transition-all hover:bg-white/20 sm:-top-10 sm:p-2.5 md:-top-12 md:p-3"
          aria-label="Close gallery"
        >
          <svg
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Container with Navigation Buttons */}
        <div className="relative flex w-full flex-1 items-center justify-center gap-2 overflow-hidden sm:gap-4 md:gap-6">
          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={handlePrevious}
              className="flex-shrink-0 rounded-full bg-white/10 p-2 text-white transition-all hover:bg-white/20 sm:p-2.5 md:p-3"
              aria-label="Previous image"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Main Image */}
          <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl">
            <img
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              className="max-h-[calc(100vh-12rem)] w-auto max-w-full object-contain sm:max-h-[calc(100vh-14rem)] md:max-h-[calc(100vh-16rem)]"
            />
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={handleNext}
              className="flex-shrink-0 rounded-full bg-white/10 p-2 text-white transition-all hover:bg-white/20 sm:p-2.5 md:p-3"
              aria-label="Next image"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="mt-2 flex-shrink-0 text-center text-white/80 sm:mt-3 md:mt-4">
            <span className="text-xs sm:text-sm">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        )}

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="scrollbar-hide mt-2 flex flex-shrink-0 justify-center gap-1.5 overflow-x-auto pb-2 sm:mt-3 sm:gap-2 md:mt-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative flex-shrink-0 overflow-hidden rounded-md border-2 transition-all sm:rounded-lg ${
                  index === currentIndex
                    ? "scale-110 border-white/60"
                    : "border-white/20 opacity-60 hover:scale-105 hover:opacity-100"
                } h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGalleryModal;
