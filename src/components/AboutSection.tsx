import React, { type ReactNode } from "react";

interface AboutSectionProps {
  title: string;
  linkText: string;
  linkHref?: string;
  content: string | string[] | ReactNode;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  linkText,
  linkHref = "#",
  content,
}) => {
  return (
    <div className="group relative">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="relative z-10 h-4 w-4 rounded-full border-2 border-white bg-black"></div>
          <h4 className="text-[1.25rem] font-semibold">{title}</h4>
        </div>
        <a
          href={linkHref}
          className="text-sm underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          {linkText}
        </a>
      </div>
      <div className="mt-5 pl-8">
        <p className="text-base">{content}</p>
      </div>
    </div>
  );
};

export default AboutSection;
