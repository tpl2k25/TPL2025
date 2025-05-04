
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import PlayerCard from "@/components/PlayerCard";
import { players, teams } from "@/data/mockData";

type PositionFilter = "All" | "Forward" | "Midfielder" | "Defender" | "Goalkeeper";
type TeamFilter = "All" | string;

const PlayersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [positionFilter, setPositionFilter] = useState<PositionFilter>("All");
  const [teamFilter, setTeamFilter] = useState<TeamFilter>("All");
  
  const positions: PositionFilter[] = ["All", "Forward", "Midfielder", "Defender", "Goalkeeper"];
  
  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPosition = positionFilter === "All" || player.position === positionFilter;
    const matchesTeam = teamFilter === "All" || player.teamId === teamFilter;
    
    return matchesSearch && matchesPosition && matchesTeam;
  });

  return (
    <div>
      <HeroSection 
        title="Players" 
        subtitle="All players competing in the Thorkulam Premier League"
        ctaText=""
        ctaLink=""
        bgImage="https://images.unsplash.com/photo-1600679472829-3044539ce8ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="Player Database" 
            subtitle="Search and filter players from all TPL teams"
          />
          
          <div className="bg-gray-50 rounded-lg p-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search by Name
                </label>
                <input
                  type="text"
                  placeholder="Search players.."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tpl-navy focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Position
                </label>
                <select
                  value={positionFilter}
                  onChange={(e) => setPositionFilter(e.target.value as PositionFilter)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tpl-navy focus:border-transparent"
                >
                  {positions.map((position) => (
                    <option key={position} value={position}>
                      {position}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Filter by Team
                </label>
                <select
                  value={teamFilter}
                  onChange={(e) => setTeamFilter(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-tpl-navy focus:border-transparent"
                >
                  <option value="All">All Teams</option>
                  {teams.map((team) => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {filteredPlayers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
              {filteredPlayers.map((player) => (
                <PlayerCard 
                  key={player.id}
                  id={player.id}
                  name={player.name}
                  photo={player.photo}
                  position={player.position}
                  age={player.age}
                  teamId={player.teamId}
                  teamName={player.teamName}
                  teamLogo={player.teamLogo}
                  instagramUrl={player.instagramUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-600">No players found matching your filters</p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setPositionFilter("All");
                  setTeamFilter("All");
                }}
                className="mt-4 btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 bg-tpl-navy text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Player Statistics</h2>
            <p className="text-lg text-gray-300 mb-10">
              The Thorkulam Premier League features talented players across different positions and age groups. 
              Here's a breakdown of our player database.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">{players.length}</div>
                <p className="text-gray-300">Total Players</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">
                  {players.filter(p => p.position === "Forward").length}
                </div>
                <p className="text-gray-300">Forwards</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">
                  {players.filter(p => p.position === "Midfielder").length}
                </div>
                <p className="text-gray-300">Midfielders</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">
                  {players.filter(p => p.position === "Defender").length}
                </div>
                <p className="text-gray-300">Defenders</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayersPage;
