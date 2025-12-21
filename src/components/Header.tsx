import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "portfolio", label: "Portfolio", path: "/portfolio" },
    { id: "resume", label: "Resume", path: "/resume" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 mb-8">
      <nav className="flex items-center justify-between py-4">
        {/* Logo placeholder - you can add your logo here */}
        <Link to="/" className="font-heading text-xl font-bold text-white">
          Portfolio
        </Link>

        {/* Navigation items */}
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`rounded-lg px-4 py-2 transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-white/10 text-white backdrop-blur-sm"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
