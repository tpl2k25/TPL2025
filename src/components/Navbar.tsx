
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Previous Seasons", path: "/previous-seasons" },
    { name: "Fixtures", path: "/fixtures" },
    { name: "Teams", path: "/teams" },
    { name: "Players", path: "/players" },
    { name: "Gallery", path: "/gallery" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-tpl-navy text-white sticky top-0 z-50 shadow-md">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-full bg-white p-1">
            <div className="w-8 h-8 rounded-full bg-tpl-navy flex items-center justify-center">
              <span className="font-bold text-tpl-orange">TPL</span>
            </div>
          </div>
          <span className="font-montserrat font-bold text-xl hidden sm:block">
            Thorkulam <span className="text-tpl-orange">Premier</span> League
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`hover:text-tpl-orange transition-colors ${
                    location.pathname === item.path ? "text-tpl-orange font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-tpl-navy border-t border-blue-800">
          <div className="container-custom py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`block py-2 hover:text-tpl-orange transition-colors ${
                      location.pathname === item.path ? "text-tpl-orange font-semibold" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
