import TechStackSection from "../TechStackSection";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiFigma,
  SiGithub,
  SiReplit,
  SiCloudflare,
} from "react-icons/si";

const Skills = () => {
  const techStacks = [
    // Frontend Technologies
    {
      title: "React",
      icon: <SiReact />,
      colorVariant: "blue" as const,
    },
    {
      title: "TypeScript",
      icon: <SiTypescript />,
      colorVariant: "green" as const,
    },
    {
      title: "JavaScript",
      icon: <SiJavascript />,
      colorVariant: "yellow" as const,
    },
    {
      title: "HTML5",
      icon: <SiHtml5 />,
      colorVariant: "red" as const,
    },
    {
      title: "CSS3",
      icon: <SiCss3 />,
      colorVariant: "purple" as const,
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss />,
      colorVariant: "red" as const,
    },
    {
      title: "MUI",
      icon: <SiMui />,
      colorVariant: "blue" as const,
    },

    // Backend & Tools
    {
      title: "Node.js",
      icon: <SiNodedotjs />,
      colorVariant: "green" as const,
    },
    {
      title: "MongoDB",
      icon: <SiMongodb />,
      colorVariant: "green" as const,
    },
    {
      title: "MySQL",
      icon: <SiMysql />,
      colorVariant: "blue" as const,
    },

    // Additional Technologies
    {
      title: "Figma",
      icon: <SiFigma />,
      colorVariant: "red" as const,
    },
    {
      title: "Github",
      icon: <SiGithub />,
      colorVariant: "purple" as const,
    },
    {
      title: "Bubble.io",
      icon: <SiCloudflare />,
      colorVariant: "blue" as const,
    },
    {
      title: "Replit",
      icon: <SiReplit />,
      colorVariant: "yellow" as const,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-8 sm:gap-10 sm:py-10 md:gap-12 md:py-12">
      <div className="space-y-3 text-center sm:space-y-4">
        <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
          Skills and Tech Stacks
        </h2>
        <p className="max-w-2xl px-4 text-sm text-white/90 sm:px-0 sm:text-base">
          Technologies and tools I use to build modern, scalable, and beautiful
          web applications
        </p>
      </div>

      <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
        {techStacks.map((stack, index) => {
          const isLastTwo = index >= techStacks.length - 2;
          const isOddLastRow = techStacks.length % 4 === 2 && isLastTwo;

          return (
            <div
              key={index}
              className={
                isOddLastRow && index === techStacks.length - 2
                  ? "md:col-start-2"
                  : ""
              }
            >
              <TechStackSection
                title={stack.title}
                icon={stack.icon}
                colorVariant={stack.colorVariant}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
