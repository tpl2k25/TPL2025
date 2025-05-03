
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { tournamentInfo } from "@/data/mockData";

const AboutPage = () => {
  return (
    <div>
      <HeroSection 
        title="About TPL" 
        subtitle="Learn about the history, format, and rules of the Thorkulam Premier League"
        ctaText=""
        ctaLink=""
        bgImage="https://images.unsplash.com/photo-1486286701208-1d58e9338013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <SectionHeading 
                  title="History" 
                  subtitle="The origins and growth of the TPL"
                />
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {tournamentInfo.history}
                </p>
              </div>
              
              <div>
                <SectionHeading 
                  title="Tournament Format" 
                  subtitle="How the competition is structured"
                />
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {tournamentInfo.format}
                </p>
              </div>
              
              <div>
                <SectionHeading 
                  title="Rules" 
                  subtitle="Official regulations governing the TPL"
                />
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {tournamentInfo.rules}
                </p>
              </div>
            </div>
            
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-tpl-navy mb-4">Venues</h3>
                <p className="text-gray-700 leading-relaxed">
                  {tournamentInfo.venues}
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-tpl-navy mb-4">Teams & Players</h3>
                <p className="text-gray-700 leading-relaxed">
                  {tournamentInfo.teams}
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-tpl-navy to-blue-800 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Key Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-tpl-orange mr-2">•</span>
                    <span>Founded in 2015 with 6 teams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tpl-orange mr-2">•</span>
                    <span>8-week tournament during summer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tpl-orange mr-2">•</span>
                    <span>Main venue: Thorkulam Stadium (10,000 capacity)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tpl-orange mr-2">•</span>
                    <span>Record attendance: 9,800 (2024 Final)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tpl-orange mr-2">•</span>
                    <span>4 individual awards each season</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-tpl-navy mb-6">Join The TPL Community</h2>
            <p className="text-lg text-gray-700 mb-8">
              Be part of the excitement and passion that makes the Thorkulam Premier League special. 
              Follow your favorite teams, cheer for the players, and experience the thrill of top-quality football.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary">Become a Volunteer</button>
              <button className="btn-secondary">Subscribe to Newsletter</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
