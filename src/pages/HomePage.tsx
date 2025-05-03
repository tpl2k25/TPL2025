
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import SectionHeading from "@/components/SectionHeading";
import { highlights } from "@/data/mockData";

const HomePage = () => {
  // Set the target date for the next match
  const nextMatchDate = new Date(2025, 6, 15, 19, 30); // July 15, 2025, 7:30 PM

  return (
    <div>
      <HeroSection 
        title="Welcome to Thorkulam Premier League" 
        subtitle="The ultimate football tournament showcasing the best talent in the region"
        ctaText="View Fixtures"
        ctaLink="/fixtures"
        bgImage="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <CountdownTimer targetDate={nextMatchDate} eventName="Next Match" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="Season Highlights" 
            subtitle="Key moments and achievements from the current TPL season"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.title} 
                className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={highlight.image} 
                  alt={highlight.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tpl-navy mb-2">{highlight.title}</h3>
                  <p className="text-tpl-gray">{highlight.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-tpl-navy to-blue-900 text-white">
        <div className="container-custom">
          <SectionHeading 
            title="Quick Access" 
            subtitle="Navigate to the most popular sections of our website"
            alignment="center"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <Link to="/fixtures" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-5xl font-bold mb-4">⚽</div>
              <h3 className="text-xl font-bold mb-2">Fixtures</h3>
              <p className="text-gray-300">View all upcoming matches</p>
            </Link>
            <Link to="/teams" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-5xl font-bold mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Teams</h3>
              <p className="text-gray-300">Learn about all TPL teams</p>
            </Link>
            <Link to="/players" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-5xl font-bold mb-4">👤</div>
              <h3 className="text-xl font-bold mb-2">Players</h3>
              <p className="text-gray-300">Explore player profiles</p>
            </Link>
            <Link to="/previous-seasons" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-5xl font-bold mb-4">🗓️</div>
              <h3 className="text-xl font-bold mb-2">History</h3>
              <p className="text-gray-300">Previous seasons and champions</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
