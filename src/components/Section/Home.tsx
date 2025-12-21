import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home = () => {
  return (
    <main className="space-y-20 py-8">
      {/* Hero Section */}
      <section
        id="hero"
        className="flex min-h-[80vh] items-center justify-between"
      >
        {/* Introduction Section */}
        <div className="flex w-[100%] flex-col items-start justify-center gap-10 md:w-[55%]">
          <div className="space-y-1">
            <h6 className="text-primary text-[1.5rem] font-semibold">
              Hi! my name is{" "}
            </h6>
            <h1 className="text-[4rem] font-bold">Kassandra Mije</h1>{" "}
          </div>
          <p className="leading-normal">
            I'm a passionate Frontend Developer focused on creating seamless
            digital experiences through clean code, interactive design, and a
            love for details. I build responsive and user-friendly web
            applications using modern technologies, and I enjoy solving problems
            and learning new things along the way.
          </p>
        </div>
        {/* Profile Image Section */}
        <div>
          <div className="h-[200px] w-[200px] rounded-full bg-white/10"></div>
          {/* <img src={profile} alt="profile" /> */}
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
  );
};

export default Home;
