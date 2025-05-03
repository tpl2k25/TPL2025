
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
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-green-600 sticky top-0 z-50 shadow-md">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="" style={{ width: "65px", height: "65px" }}>
            <img 
              src="/lovable-uploads/e6222346-045b-4a68-8a9f-351d3d809586.png" 
              alt="TPL Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`hover:text-green-800 transition-colors ${
                    location.pathname === item.path ? "text-green-800 font-semibold" : ""
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
            <X size={24} className="text-green-600" />
          ) : (
            <Menu size={24} className="text-green-600" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-green-100">
          <div className="container-custom py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`block py-2 hover:text-green-800 transition-colors ${
                      location.pathname === item.path ? "text-green-800 font-semibold" : ""
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
