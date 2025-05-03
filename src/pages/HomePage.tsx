
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
      
      <section className="py-16 bg-green-50">
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
                  <h3 className="text-xl font-bold text-green-700 mb-2">{highlight.title}</h3>
                  <p className="text-gray-700">{highlight.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
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
              <p className="text-gray-100">View all upcoming matches</p>
            </Link>
            <Link to="/teams" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-5xl font-bold mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Teams</h3>
              <p className="text-gray-100">Learn about all TPL teams</p>
            </Link>
            <Link to="/players" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-5xl font-bold mb-4">👤</div>
              <h3 className="text-xl font-bold mb-2">Players</h3>
              <p className="text-gray-100">Explore player profiles</p>
            </Link>
            <Link to="/previous-seasons" className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-5xl font-bold mb-4">🗓️</div>
              <h3 className="text-xl font-bold mb-2">History</h3>
              <p className="text-gray-100">Previous seasons and champions</p>
            </Link>
          </div>
        </div>
      </section>
      
      {/* New featured section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">Experience Elite Football</h2>
              <p className="text-gray-700 mb-6">
                The Thorkulam Premier League brings together the region's most talented footballers for an unforgettable tournament experience. With elite competition, passionate fans, and a legacy of excellence, TPL has become the premier football event of the year.
              </p>
              <p className="text-gray-700 mb-8">
                Join us at Kavil Arena to witness skillful play, dramatic moments, and the crowning of champions in an atmosphere of pure footballing excitement.
              </p>
              <Link to="/about" className="btn-primary">Learn More About TPL</Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Football action" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics section */}
      <section className="py-16 bg-green-50">
        <div className="container-custom">
          <SectionHeading 
            title="TPL by the Numbers" 
            subtitle="The growing legacy of our premier tournament"
            alignment="center"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">6</div>
              <p className="text-gray-700">Teams</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">120+</div>
              <p className="text-gray-700">Players</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10K</div>
              <p className="text-gray-700">Spectators</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5</div>
              <p className="text-gray-700">Seasons</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
