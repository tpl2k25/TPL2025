
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-tpl-navy text-white pt-10 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/assets/tpl-logo.png" alt="TPL Logo" className="w-12 h-12" />
              <span className="font-montserrat font-bold text-xl">TPL</span>
            </Link>
            <p className="text-gray-300 text-sm">
              The premier football tournament bringing together the best teams and players for unforgettable matches.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-tpl-orange">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-tpl-orange">About</Link></li>
              <li><Link to="/previous-seasons" className="text-gray-300 hover:text-tpl-orange">Previous Seasons</Link></li>
              <li><Link to="/fixtures" className="text-gray-300 hover:text-tpl-orange">Fixtures</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Teams & Players</h3>
            <ul className="space-y-2">
              <li><Link to="/teams" className="text-gray-300 hover:text-tpl-orange">Teams</Link></li>
              <li><Link to="/players" className="text-gray-300 hover:text-tpl-orange">Players</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Kavil Arena</p>
            <p className="text-gray-300">info@tpl-league.com</p>
            <p className="text-gray-300">+91 9876543210</p>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© 2025 Thorkulam Premier League. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
