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
    <div className="flex flex-col items-center justify-center gap-12 py-12">
      <div className="space-y-4 text-center">
        <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-4xl font-bold text-transparent">
          Skills and Tech Stacks
        </h2>
        <p className="max-w-2xl text-white/90">
          Technologies and tools I use to build modern, scalable, and beautiful
          web applications
        </p>
      </div>

      <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-4">
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
