
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import TeamCard from "@/components/TeamCard";
import { teams } from "@/data/mockData";

const TeamsPage = () => {
  return (
    <div>
      <HeroSection 
        title="Teams" 
        subtitle="Meet the teams competing in the Thorkulam Premier League"
        ctaText=""
        ctaLink=""
        bgImage="https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="Participating Teams" 
            subtitle="The 6 teams competing in the current TPL season"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-10">
            {teams.map((team) => (
              <TeamCard 
                key={team.id}
                id={team.id}
                name={team.name}
                logo={team.logo}
                shortName={team.shortName}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-tpl-navy mb-6">Team Selection Process</h2>
            <p className="text-lg text-gray-700 mb-8">
              Teams participating in the Thorkulam Premier League are selected based on their performance in qualifying tournaments and their standing in local football. Each team must meet strict criteria related to player development, facilities, and community engagement.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl text-tpl-navy font-bold mb-3">01</div>
                <h3 className="text-lg font-bold mb-2">Qualification</h3>
                <p className="text-gray-600">Teams must qualify through regional tournaments</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl text-tpl-navy font-bold mb-3">02</div>
                <h3 className="text-lg font-bold mb-2">Standards</h3>
                <p className="text-gray-600">Meet infrastructure and youth development requirements</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl text-tpl-navy font-bold mb-3">03</div>
                <h3 className="text-lg font-bold mb-2">Selection</h3>
                <p className="text-gray-600">Final selection by the TPL committee</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamsPage;
