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
    <header className="sticky top-0 z-50 mb-4 sm:mb-6 md:mb-8">
      <nav className="flex items-center justify-between py-4 font-heading sm:py-5 md:py-6">
        {/* Logo placeholder - you can add your logo here */}
        <Link to="/" className="text-lg font-bold text-white sm:text-xl">
          KCM.
        </Link>

        {/* Navigation items */}
        <ul className="flex items-center gap-2 sm:gap-4 md:gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`rounded-lg px-2 py-1.5 text-xs transition-all duration-300 sm:px-3 sm:py-2 sm:text-sm md:px-4 ${
                  isActive(item.path)
                    ? "bg-white/10 font-semibold text-white backdrop-blur-sm"
                    : "font-medium text-white/70 hover:bg-white/5 hover:text-white"
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
