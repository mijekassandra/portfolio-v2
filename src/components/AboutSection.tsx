import React, { type ReactNode } from "react";

interface AboutSectionProps {
  title: string;
  content: string | string[] | ReactNode;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, content }) => {
  return (
    <div className="group relative">
      <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-start sm:gap-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative z-10 h-3 w-3 rounded-full border-2 border-white bg-black sm:h-4 sm:w-4"></div>
          <h4 className="text-lg font-semibold sm:text-xl md:text-[1.25rem]">
            {title}
          </h4>
        </div>
      </div>
      <div className="mt-4 pl-6 sm:mt-5 sm:pl-8">
        <p className="text-sm sm:text-base">{content}</p>
      </div>
    </div>
  );
};

export default AboutSection;
