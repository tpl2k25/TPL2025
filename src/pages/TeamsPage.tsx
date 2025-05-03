
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
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
    </div>
  );
};

export default TeamsPage;
