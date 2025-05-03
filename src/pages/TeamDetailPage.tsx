
import { useParams, Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import PlayerCard from "@/components/PlayerCard";
import { teams, players } from "@/data/mockData";

const TeamDetailPage = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const team = teams.find(t => t.id === teamId);
  
  if (!team) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Team not found</h2>
        <Link to="/teams" className="text-tpl-navy hover:underline">
          Back to all teams
        </Link>
      </div>
    );
  }
  
  const teamPlayers = players.filter(player => player.teamId === team.id);
  
  const positions = [
    { name: "Goalkeepers", filter: "Goalkeeper" },
    { name: "Defenders", filter: "Defender" },
    { name: "Midfielders", filter: "Midfielder" },
    { name: "Forwards", filter: "Forward" }
  ];

  return (
    <div>
      <div className="bg-gradient-to-r from-tpl-navy to-blue-800 py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-40 h-40 bg-white p-4 rounded-lg shadow-lg flex items-center justify-center">
              <img 
                src={team.logo} 
                alt={`${team.name} logo`} 
                className="max-w-full max-h-full object-contain" 
              />
            </div>
            <div className="text-center md:text-left text-white">
              <h1 className="text-4xl font-bold mb-2">{team.name}</h1>
              <p className="text-xl text-gray-200 mb-6">{team.shortName}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded px-4 py-2">
                  <span className="block text-sm text-gray-200">Jersey Colors</span>
                  <span className="font-medium">{team.jerseyColor}</span>
                </div>
                <Link to="/fixtures" className="bg-tpl-orange rounded px-4 py-2 font-medium hover:bg-orange-600 transition-colors">
                  View Fixtures
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading 
                title="About the Team" 
                subtitle="History and achievements"
              />
              <div className="mt-6 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  {team.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {team.history}
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-tpl-navy mb-4">Team Info</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-3">
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium">{team.name}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <p className="text-sm text-gray-500">Short Name</p>
                    <p className="font-medium">{team.shortName}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-3">
                    <p className="text-sm text-gray-500">Jersey Colors</p>
                    <p className="font-medium">{team.jerseyColor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Squad Size</p>
                    <p className="font-medium">{teamPlayers.length} Players</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Squad" 
            subtitle="Players representing the team in the current season"
          />
          
          {positions.map(position => {
            const positionPlayers = teamPlayers.filter(player => player.position === position.filter);
            
            if (positionPlayers.length === 0) return null;
            
            return (
              <div key={position.name} className="mt-10">
                <h3 className="text-xl font-bold text-tpl-navy mb-6">{position.name}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {positionPlayers.map(player => (
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
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default TeamDetailPage;
