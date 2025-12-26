import { useEffect, useRef, useState } from "react";
import AboutSection from "../AboutSection";

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

  const [titleVisible, setTitleVisible] = useState(false);
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [section5Visible, setSection5Visible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = entry.target.getAttribute("data-section-id");
            switch (targetId) {
              case "title":
                setTitleVisible(true);
                break;
              case "section1":
                setSection1Visible(true);
                break;
              case "section2":
                setSection2Visible(true);
                break;
              case "section3":
                setSection3Visible(true);
                break;
              case "section4":
                setSection4Visible(true);
                break;
              case "section5":
                setSection5Visible(true);
                break;
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const refs = [
      { ref: titleRef, id: "title" },
      { ref: section1Ref, id: "section1" },
      { ref: section2Ref, id: "section2" },
      { ref: section3Ref, id: "section3" },
      { ref: section4Ref, id: "section4" },
      { ref: section5Ref, id: "section5" },
    ];

    refs.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.setAttribute("data-section-id", id);
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="relative py-10">
      {/* Purple grid background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 0.5px, transparent 0.5px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <h1
        ref={titleRef}
        className={`mb-8 text-2xl font-bold transition-all duration-700 sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl ${
          titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        About Me.
      </h1>

      <div className="relative flex flex-col gap-8 sm:gap-12 md:gap-16">
        {/* Vertical connecting line */}
        <div className="absolute bottom-6 left-[5px] top-6 block w-0.5 bg-white opacity-30 sm:left-[7px]"></div>

        <div
          ref={section1Ref}
          className={`transition-all duration-700 ${
            section1Visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <AboutSection
            title="Introduction"
            content={
              <>
                I'm a developer based in the{" "}
                <span className="text-primary underline decoration-[1px] underline-offset-4">
                  Philippines
                </span>
                , with a degree in{" "}
                <span className="text-primary underline decoration-[1px] underline-offset-4">
                  Information Technology
                </span>
                . Frontend is where I spend most of my time, but I've also
                dabbled in backend work, UX/UI design, and building full apps
                from scratch. I'm always learning and staying curious about new
                technologies and approaches to solve problems better.
              </>
            }
          />
        </div>

        <div
          ref={section2Ref}
          className={`transition-all duration-700 ${
            section2Visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <AboutSection
            title="Frontend Development"
            content={
              <>
                This is my main thing — where I spend most of my time and what I
                enjoy the most. I build websites and apps using{" "}
                <span className="text-primary underline decoration-[1px] underline-offset-4">
                  React
                </span>
                , making sure they look good, work smoothly, and feel nice to
                use. I've also tried my hand at mobile development, which helped
                me see how people interact with apps differently on various
                devices.
              </>
            }
          />
        </div>

        <div
          ref={section3Ref}
          className={`transition-all duration-700 ${
            section3Visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <AboutSection
            title="Backend Development"
            content={
              <>
                I've worked on{" "}
                <span className="text-primary underline decoration-[1px] underline-offset-4">
                  backend development
                </span>{" "}
                before, handling things like APIs, databases, and how servers
                work. This experience helps me understand how the whole app fits
                together, which makes me better at building frontends that
                actually work well with the backend.
              </>
            }
          />
        </div>

        <div
          ref={section4Ref}
          className={`transition-all duration-700 ${
            section4Visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <AboutSection
            title="AI/No code"
            content={
              <>
                I've built complete apps from start to finish using{" "}
                <span className="text-primary underline decoration-[1px] underline-offset-4">
                  Bubble.io
                </span>{" "}
                and{" "}
                <span className="text-primary underline decoration-[1px] underline-offset-4">
                  Replit
                </span>
                . These platforms let me work on both the front and back of
                applications, which taught me a lot about how everything
                connects and how to build things that actually work end-to-end.
              </>
            }
          />
        </div>

        <div
          ref={section5Ref}
          className={`transition-all duration-700 ${
            section5Visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <AboutSection
            title="UX/UI Design"
            content={
              <>
                I also do{" "}
                <span className="text-primary underline decoration-[1px] underline-offset-4">
                  UX/UI design
                </span>
                , which pairs nicely with my frontend work. It helps me turn
                designs into actual code without losing what the designer
                intended, and I can work better with designers since I
                understand both sides of the process.
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;
