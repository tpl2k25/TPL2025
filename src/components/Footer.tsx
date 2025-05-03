
import { Link } from "react-router-dom";
import Logo from "../../public/lovable-uploads/e6222346-045b-4a68-8a9f-351d3d809586.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-green-100 pt-10 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={Logo} alt="TPL Logo" className="w-12 h-12" />
              <span className="font-montserrat font-bold text-xl text-green-600">TPL</span>
            </Link>
            <p className="text-gray-600 text-sm">
              The premier football tournament bringing together the best teams and players for unforgettable matches.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-green-700">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-green-700">About</Link></li>
              <li><Link to="/previous-seasons" className="text-gray-600 hover:text-green-700">Previous Seasons</Link></li>
              <li><Link to="/fixtures" className="text-gray-600 hover:text-green-700">Fixtures</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600">Teams & Players</h3>
            <ul className="space-y-2">
              <li><Link to="/teams" className="text-gray-600 hover:text-green-700">Teams</Link></li>
              <li><Link to="/players" className="text-gray-600 hover:text-green-700">Players</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600">Contact</h3>
            <p className="text-gray-600">Kavil Arena</p>
            <p className="text-gray-600">info@tpl-league.com</p>
            <p className="text-gray-600">+91 9876543210</p>
          </div>
        </div>

        <div className="border-t border-green-100 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© 2025 Thorkulam Premier League. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
