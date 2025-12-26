export interface PortfolioItem {
  id: number;
  title: string;
  category: string[];
  skills: string[];
  description: string;
  longDescription: string;
  images: string[];
  githubUrl: string | null;
  colors: {
    primary: string;
    secondary: string;
  };
  liveUrl?: string | null;
  featured: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Community Youth Management System",
    category: ["Frontend"],
    skills: ["React", "TypeScript", "Material-UI", "RTK Query"],
    description:
      "A management system for Community SK (Sangguniang Kabataan) that helps organize youth activities, track members, and manage community projects. Built with React and TypeScript for easy use.",
    longDescription:
      "This system helps Community SK leaders manage their youth organization better. It tracks member information, schedules activities, and keeps records of community projects. The interface is simple and works on phones and computers. Leaders can add new members, plan events, and see reports on their activities.",
    images: ["/assets/MSK-Dashboard.png", "/assets/kassey-profile.jpg"],
    githubUrl: "",
    colors: {
      primary: "bg-[var(--primary-dark)]",
      secondary: "bg-[var(--secondary-main)]",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Health Management System",
    category: ["Frontend"],
    skills: ["React", "TypeScript", "Tailwind CSS", "RTK Query"],
    description:
      "A health management system for community to track residents' health records, schedule check-ups, and manage health programs. Helps health workers organize their work better.",
    longDescription:
      "This system helps community health workers keep track of residents' health information. They can record check-ups, schedule vaccinations, and manage health programs. The system stores patient records safely and helps health workers remember appointments and follow-ups. It makes health services more organized and accessible to the community.",
    images: ["/assets/MedAccess.png", "/assets/kassey-profile.jpg"],
    githubUrl: "",
    colors: {
      primary: "bg-[var(--secondary-main)]",
      secondary: "bg-[var(--primary-dark)]",
    },
    featured: true,
  },
  {
    id: 3,
    title: "Design System Component Library",
    category: ["Frontend"],
    skills: ["React", "TypeScript", "Tailwind CSS", "NPM", "Design System"],
    description:
      "A company-wide component library built collaboratively by three developers and deployed as an NPM package to support multiple microservices. I contributed to core components and took ownership of deploying, versioning, and maintaining the library.",
    longDescription:
      "This project involved developing a company-wide design system with two other developers, deployed as an NPM package for use across microservices. I contributed to building reusable UI components—such as buttons, navigation, and modals—as shown in the image, while also handling deployment, versioning, and updates. The image highlights the components I personally designed and implemented.",
    images: [
      "/assets/global-1.png",
      "/assets/global-2.png",
      "/assets/global-3.png",
    ],
    githubUrl: "",
    colors: {
      primary: "bg-[var(--secondary-main)]",
      secondary: "bg-[var(--primary-dark)]",
    },
    featured: true,
  },
  {
    id: 4,
    title: "Sproutly Homepage",
    category: ["Frontend"],
    skills: ["React", "TypeScript", "Tailwind CSS"],
    description:
      "A simple homepage for an ecommerce website that sells plants and flowers.",
    longDescription:
      "This project involved building a simple homepage for an ecommerce website that sells plants and flowers. The homepage is designed to be simple and easy to use, with a focus on showcasing the products and making it easy for customers to find what they are looking for.",
    images: ["/assets/Sproutly-UI.png"],
    githubUrl: "https://github.com/mijekassandra/sproutly",
    liveUrl: "https://sproutly-ten.vercel.app/",
    colors: {
      primary: "bg-[var(--secondary-main)]",
      secondary: "bg-[var(--primary-dark)]",
    },
    featured: true,
  },
  {
    id: 5,
    title: "Monstercat Clone UI",
    category: ["Frontend"],
    skills: ["React", "TypeScript", "Tailwind CSS"],
    description: "Cloned the Monstercat Cloe UI with React using Tailwind CSS.",
    longDescription:
      "Cloned the Monstercat Cloe UI with React and Tailwind CSS, using the project as my practice ground to master Tailwind.",
    images: ["/assets/Monstercat-UI.png"],
    githubUrl: "https://github.com/mijekassandra/album-release-page",
    liveUrl: "https://monstercat-ui-clone.vercel.app/",
    colors: {
      primary: "bg-[var(--secondary-main)]",
      secondary: "bg-[var(--primary-dark)]",
    },
    featured: true,
  },
  {
    id: 6,
    title: "Explora Books Website UX/UI",
    category: ["UX/UI"],
    skills: ["Figma"],
    description:
      "A welcoming landing page for a publishing company that helps small authors showcase their books. The design focuses on easy book discovery, author profiles, and simple browsing for readers looking for new stories.",
    longDescription:
      "This publishing platform was designed to give small authors a place to shine. The landing page features a clean, book-focused design that makes it easy for readers to discover new authors and their works. Key features include author spotlights, book previews, and simple navigation that helps readers find their next favorite book. The design emphasizes readability and creates a warm, inviting atmosphere for book lovers.",
    images: ["/assets/Explora.png"],
    githubUrl: "",
    colors: {
      primary: "bg-[var(--primary-dark)]",
      secondary: "bg-[var(--secondary-main)]",
    },
    featured: true,
  },
  {
    id: 7,
    title: "Rotary Club Website UX/UI ",
    category: ["UX/UI"],
    skills: ["Figma"],
    description:
      "A website design for a Rotary Club that showcases their community service projects, events, and membership information. Clean and professional design that helps the club connect with the community.",
    longDescription:
      "This website design helps Rotary Clubs present their work to the community. It includes sections for upcoming events, past projects, member information, and ways to get involved. The design is clean and professional, making it easy for visitors to learn about the club's activities and how to join or support their cause.",
    githubUrl: "",
    colors: {
      primary: "bg-[var(--primary-dark)]",
      secondary: "bg-[var(--secondary-main)]",
    },
    featured: true,
    images: ["/assets/RCK.png"],
  },
  {
    id: 8,
    title: "Applicant Tracking System (ATS)",
    category: ["Full Stack", "Low-Code"],
    skills: ["Bubble.io", "Workflow Automation", "Database Design"],
    description:
      "A full-stack applicant tracking system built with Bubble.io that helps companies manage job postings, track applicants, and streamline the hiring process through automated workflows.",
    longDescription:
      "This applicant tracking system, built with Bubble.io, streamlines end-to-end recruitment workflows. It features a Kanban-style hiring board for managing candidates and automated processes that reduce manual work. The system is fully scalable and easy to update without traditional backend coding.",
    githubUrl: "",
    colors: {
      primary: "bg-[var(--primary-dark)]",
      secondary: "bg-[var(--secondary-main)]",
    },
    featured: false,
    images: [
      "/assets/bubble-dashboard.png",
      "/assets/bubble-jobs.png",
      "/assets/bubble-kanban.png",
      "/assets/bubble-applicant.png",
    ],
  },
  {
    id: 9,
    title: "ATS Revamp with Replit AI",
    category: ["AI", "Full Stack", "Low-Code"],
    skills: ["Replit AI", "Bubble.io", "AI-Assisted Development"],
    description:
      "An AI-assisted revamp of an existing Bubble.io applicant tracking system, focused on improving usability, workflows, and feature scalability.",
    longDescription:
      "This project revamped a Bubble.io-based applicant tracking system with the help of Replit AI. AI-assisted development optimized data structures, hiring workflows, and the Kanban-based candidate flow for a smoother user experience. The project showcases how AI can accelerate feature improvements and system refinement while maintaining full control over business logic.",
    githubUrl: "",
    colors: {
      primary: "bg-[var(--primary-dark)]",
      secondary: "bg-[var(--secondary-main)]",
    },
    featured: false,
    images: [
      "/assets/replit-dashboard.png",
      "/assets/replit-jobs.png",
      "/assets/replit-kanban.png",
      "/assets/replit-applicant.png",
      "/assets/replit-reports.png",
    ],
  },

  {
    id: 10,
    title: "Job Board Backend Server",
    category: ["Backend"],
    skills: ["Node.js", "Express", "REST API", "MongoDB"],
    description:
      "A simple backend server for a job board application that provides RESTful APIs for managing job listings and related data.",
    longDescription:
      "This project is a backend server built to support a basic job board application. It exposes RESTful APIs for creating, retrieving, updating, and deleting job listings, with data stored in a database for persistence. The server is structured with clear routes and controllers to keep the codebase organized and maintainable. This project demonstrates backend fundamentals such as API design, request handling, data modeling, and integration readiness for frontend applications.",
    githubUrl: "https://github.com/mijekassandra/job-board-server",
    colors: {
      primary: "bg-[var(--primary-dark)]",
      secondary: "bg-[var(--secondary-main)]",
    },
    featured: false,
    images: ["/assets/job-board-server.png"],
  },
];
