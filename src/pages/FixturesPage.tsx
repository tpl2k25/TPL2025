
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import FixtureCard from "@/components/FixtureCard";
import PastFixtureCard from "@/components/PastFixtureCard";
import { fixtures, pastFixtures } from "@/data/mockData";

type StageFilter = "All" | "Group Stage" | "Quarterfinals" | "Semifinals" | "Final";
type StatusFilter = "Upcoming" | "Completed" | "All";

const FixturesPage = () => {
  const [activeStage, setActiveStage] = useState<StageFilter>("All");
  const [activeStatus, setActiveStatus] = useState<StatusFilter>("All");
  
  const stages: StageFilter[] = ["All", "Group Stage", "Quarterfinals", "Semifinals", "Final"];
  const statuses: StatusFilter[] = ["All", "Upcoming", "Completed"];
  
  // Filter fixtures based on stage and status
  const filteredFixtures = fixtures.filter(fixture => 
    (activeStage === "All" || fixture.stage === activeStage) &&
    (activeStatus === "All" || activeStatus === "Upcoming")
  );

  const filteredPastFixtures = pastFixtures.filter(fixture => 
    (activeStage === "All" || fixture.stage === activeStage) &&
    (activeStatus === "All" || activeStatus === "Completed")
  );

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
            subtitle="All matches for the current season"
          />
          
          <div className="mt-8 flex flex-wrap gap-3 mb-6">
            <div className="w-full">
              <p className="font-medium mb-2">Filter by Stage:</p>
              <div className="flex flex-wrap gap-2">
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
            </div>
            
            <div className="w-full mt-4">
              <p className="font-medium mb-2">Filter by Status:</p>
              <div className="flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <button
                    key={status}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      activeStatus === status 
                        ? "bg-tpl-orange text-white" 
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveStatus(status)}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Upcoming Fixtures */}
          {(activeStatus === "All" || activeStatus === "Upcoming") && (
            <>
              <h3 className="text-2xl font-bold text-tpl-navy mt-8 mb-6">Upcoming Matches</h3>
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
                  <p className="text-lg text-gray-600">No upcoming fixtures found</p>
                </div>
              )}
            </>
          )}
          
          {/* Completed Fixtures */}
          {(activeStatus === "All" || activeStatus === "Completed") && (
            <>
              <h3 className="text-2xl font-bold text-tpl-navy mt-12 mb-6">Completed Matches</h3>
              {filteredPastFixtures.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  {filteredPastFixtures.map((fixture) => (
                    <PastFixtureCard 
                      key={fixture.id}
                      date={fixture.date}
                      venue={fixture.venue}
                      homeTeam={fixture.homeTeam}
                      awayTeam={fixture.awayTeam}
                      stage={fixture.stage}
                      homeScore={fixture.homeScore}
                      awayScore={fixture.awayScore}
                      scorers={fixture.scorers}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-lg text-gray-600">No completed fixtures found</p>
                </div>
              )}
            </>
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
                    <span className="block text-2xl font-bold">1</span>
                    <span className="text-sm">Venue</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Venue</h3>
                <div className="bg-white/10 p-6 rounded">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-tpl-orange rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-lg">TPL</span>
                    </div>
                    <div>
                      <p className="font-medium text-lg">Kavil Arena</p>
                      <p className="text-sm text-gray-300">Official TPL Stadium</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <img 
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                      alt="Kavil Arena" 
                      className="w-full h-48 object-cover rounded"
                    />
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-3 rounded text-center">
                        <p className="text-lg font-semibold">10,000</p>
                        <p className="text-xs text-gray-300">Capacity</p>
                      </div>
                      <div className="bg-white/5 p-3 rounded text-center">
                        <p className="text-lg font-semibold">2015</p>
                        <p className="text-xs text-gray-300">Established</p>
                      </div>
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
