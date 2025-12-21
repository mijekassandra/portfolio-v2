export interface PortfolioItem {
  id: number;
  title: string;
  category: string[];
  skills: string[];
  description: string;
  longDescription: string;
  image: string;
  githubUrl: string | null;
  liveUrl: string | null;
  colors: {
    primary: string;
    secondary: string;
  };
  featured: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Barangay SK Management System",
    category: ["Frontend"],
    skills: ["React", "TypeScript", "Material-UI", "RTK Query"],
    description:
      "A management system for Barangay SK (Sangguniang Kabataan) that helps organize youth activities, track members, and manage community projects. Built with React and TypeScript for easy use.",
    longDescription:
      "This system helps Barangay SK leaders manage their youth organization better. It tracks member information, schedules activities, and keeps records of community projects. The interface is simple and works on phones and computers. Leaders can add new members, plan events, and see reports on their activities.",
    image: "/assets/MSK-Dashboard.png",
    githubUrl: "https://github.com/yourusername/barangay-management",
    liveUrl: null,
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
      "A health management system for barangays to track residents' health records, schedule check-ups, and manage health programs. Helps health workers organize their work better.",
    longDescription:
      "This system helps barangay health workers keep track of residents' health information. They can record check-ups, schedule vaccinations, and manage health programs. The system stores patient records safely and helps health workers remember appointments and follow-ups. It makes health services more organized and accessible to the community.",
    image: "/assets/MedAccess.png",
    githubUrl: "https://github.com/yourusername/enrollment-portal",
    liveUrl: null,
    colors: {
      primary: "bg-[var(--secondary-main)]",
      secondary: "bg-[var(--primary-dark)]",
    },
    featured: true,
  },
  {
    id: 3,
    title: "Explora Books Website UX/UI",
    category: ["UX/UI"],
    skills: ["Figma"],
    description:
      "A welcoming landing page for a publishing company that helps small authors showcase their books. The design focuses on easy book discovery, author profiles, and simple browsing for readers looking for new stories.",
    longDescription:
      "This publishing platform was designed to give small authors a place to shine. The landing page features a clean, book-focused design that makes it easy for readers to discover new authors and their works. Key features include author spotlights, book previews, and simple navigation that helps readers find their next favorite book. The design emphasizes readability and creates a warm, inviting atmosphere for book lovers.",
    image: "/assets/Explora.png",
    githubUrl: "https://github.com/yourusername/ecommerce-landing",
    liveUrl: null,
    colors: {
      primary: "bg-[var(--primary-dark)]",
      secondary: "bg-[var(--secondary-main)]",
    },
    featured: true,
  },
];
