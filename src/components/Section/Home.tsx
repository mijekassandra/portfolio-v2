import { useState, useEffect, useRef } from "react";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Header from "../Header";

import profile from "/assets/kassey-profile.jpg";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = (e.clientX - centerX) / rect.width;
        const y = (e.clientY - centerY) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Header />
      <main className="space-y-12 py-4 sm:space-y-16 sm:py-6 md:space-y-20 md:py-8">
        {/* Hero Section */}
        <section
          id="hero"
          className="flex min-h-[65vh] flex-col items-center justify-between gap-8 md:min-h-[80vh] md:flex-row md:items-center"
        >
          {/* Introduction Section */}
          <div className="flex w-full flex-col items-start justify-center gap-6 md:w-[55%] md:gap-10">
            <div className="space-y-[0.1rem]">
              <h6 className="text-base font-semibold text-primary sm:text-lg md:text-[1.25rem]">
                Hi! my name is{" "}
              </h6>
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-[4rem]">
                Kassandra Mije
              </h1>{" "}
            </div>
            <p className="text-sm leading-normal sm:text-base md:text-lg">
              I'm a passionate Web Developer focused on creating seamless
              digital experiences through clean code, interactive design, and a
              love for details. I build responsive and user-friendly
              applications across various platforms using modern technologies,
              and I enjoy solving problems and learning new things along the
              way.
            </p>
          </div>
          {/* Profile Image Section */}
          <div
            ref={imageRef}
            className="profile-image-container flex justify-center md:justify-end"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="profile-image-wrapper relative">
              {/* Animated gradient border */}
              <div className="profile-border animate-spin-slow absolute inset-0 rounded-full">
                <div className="profile-border-inner absolute inset-[4px] rounded-full bg-black"></div>
              </div>
              {/* Glow effect */}
              <div
                className={`profile-glow absolute inset-0 rounded-full transition-all duration-500 ${
                  isHovered ? "scale-110 opacity-100" : "scale-100 opacity-60"
                }`}
                style={{
                  transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
                }}
              ></div>
              {/* Image */}
              <img
                src={profile}
                alt="profile"
                className="profile-image relative z-20 h-[250px] w-[250px] rounded-full transition-all duration-500 sm:h-[300px] sm:w-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px]"
                style={{
                  transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
                }}
              />
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about">
          <About />
        </section>

        {/* Tech Stacks Section */}
        <section id="tech-stacks">
          <Skills />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <Portfolio />
        </section>

        {/* Contact Me Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Home;
