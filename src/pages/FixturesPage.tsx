
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import FixtureCard from "@/components/FixtureCard";
import { fixtures } from "@/data/mockData";

type StageFilter = "All" | "Group Stage" | "Quarterfinals" | "Semifinals" | "Final";

const FixturesPage = () => {
  const [activeStage, setActiveStage] = useState<StageFilter>("All");
  
  const stages: StageFilter[] = ["All", "Group Stage", "Quarterfinals", "Semifinals", "Final"];
  
  const filteredFixtures = activeStage === "All" 
    ? fixtures 
    : fixtures.filter(fixture => fixture.stage === activeStage);

  return (
    <div>
      <HeroSection 
        title="Fixtures" 
        subtitle="All matches for the current TPL season"
        ctaText=""
        ctaLink=""
        bgImage="https://images.unsplash.com/photo-1510051661079-9155218fadc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="Match Schedule" 
            subtitle="All upcoming matches for the current season"
          />
          
          <div className="mt-8 flex flex-wrap gap-3 mb-8">
            {stages.map((stage) => (
              <button
                key={stage}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeStage === stage 
                    ? "bg-tpl-navy text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveStage(stage)}
              >
                {stage}
              </button>
            ))}
          </div>
          
          {filteredFixtures.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
              {filteredFixtures.map((fixture) => (
                <FixtureCard 
                  key={fixture.id}
                  date={fixture.date}
                  venue={fixture.venue}
                  homeTeam={fixture.homeTeam}
                  awayTeam={fixture.awayTeam}
                  stage={fixture.stage}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-600">No fixtures found for {activeStage}</p>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-tpl-navy text-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Tournament Format</h3>
                <p className="text-gray-200 mb-6">
                  The TPL follows a mixed format with both group and knockout stages. The tournament begins with a group stage where the 6 teams are divided into two groups of 3. Each team plays against the other teams in their group once. The top two teams from each group advance to the semifinals, followed by a final to determine the champion.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 p-4 rounded">
                    <span className="block text-2xl font-bold">6</span>
                    <span className="text-sm">Teams</span>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <span className="block text-2xl font-bold">15</span>
                    <span className="text-sm">Matches</span>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <span className="block text-2xl font-bold">8</span>
                    <span className="text-sm">Weeks</span>
                  </div>
                  <div className="bg-white/10 p-4 rounded">
                    <span className="block text-2xl font-bold">3</span>
                    <span className="text-sm">Venues</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Venues</h3>
                <div className="space-y-4">
                  <div className="flex items-center bg-white/10 p-4 rounded">
                    <div className="w-12 h-12 bg-tpl-orange rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-lg">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Thorkulam Stadium</p>
                      <p className="text-sm text-gray-300">Capacity: 10,000</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/10 p-4 rounded">
                    <div className="w-12 h-12 bg-tpl-orange rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-lg">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Pallikkara Arena</p>
                      <p className="text-sm text-gray-300">Capacity: 7,000</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/10 p-4 rounded">
                    <div className="w-12 h-12 bg-tpl-orange rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-lg">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Koduvally Sports Complex</p>
                      <p className="text-sm text-gray-300">Capacity: 7,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FixturesPage;
