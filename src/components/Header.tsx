import { useState } from "react";

const Header = () => {
  const [activeNav, setActiveNav] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Portfolio" },
    { id: "resume", label: "Resume" },
  ];

  return (
    <header className="sticky top-0 z-50 mb-8">
      <nav className="flex items-center justify-between py-4">
        {/* Logo placeholder - you can add your logo here */}
        <div className="font-heading text-xl font-bold text-white">
          Portfolio
        </div>

        {/* Navigation items */}
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveNav(item.id)}
                className={`rounded-lg px-4 py-2 transition-all duration-300 ${
                  activeNav === item.id
                    ? "bg-white/10 text-white backdrop-blur-sm"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
