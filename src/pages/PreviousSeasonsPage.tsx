
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import SeasonCard from "@/components/SeasonCard";
import { previousSeasons } from "@/data/mockData";

const PreviousSeasonsPage = () => {
  return (
    <div>
      <HeroSection 
        title="Previous Seasons" 
        subtitle="Relive the glory, drama, and excitement of past TPL tournaments"
        ctaText=""
        ctaLink=""
        bgImage="https://images.unsplash.com/photo-1486286701208-1d58e9338013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="Season Archives" 
            subtitle="Champions, awards, and highlights from previous seasons"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {previousSeasons.map((season) => (
              <SeasonCard 
                key={season.year}
                year={season.year}
                champion={season.champion}
                runnerUp={season.runnerUp}
                topScorer={season.topScorer}
                bestPlayer={season.bestPlayer}
                photo={season.photo}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {previousSeasons.map((season) => (
            <div key={season.year} className="mt-12 bg-white rounded-lg shadow-md overflow-hidden mb-16">
              <h3 className="text-3xl font-bold text-tpl-navy p-6 border-b">{season.year} Season</h3>
              
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-8">
                  {season.summary}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Champions Section */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                    <div className="bg-tpl-navy text-white p-4">
                      <h4 className="text-xl font-semibold">Champions: {season.champion.name}</h4>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-col items-center">
                        <img 
                          src={season.champion.logo} 
                          alt={`${season.champion.name} Logo`}
                          className="h-48 w-48 object-contain mb-4" 
                        />
                        <div className="flex items-center mt-4 bg-gray-100 rounded-lg p-4 w-full">
                          <img 
                            src={season.championCaptain?.photo || season.bestPlayer.photo} 
                            alt={`${season.championCaptain?.name || 'Team Captain'}`}
                            className="h-16 w-16 object-cover rounded-full mr-4" 
                          />
                          <div>
                            <p className="font-semibold">{season.championCaptain?.name || 'Team Captain'}</p>
                            <p className="text-sm text-tpl-gray">Captain</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Runners-up Section */}
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                    <div className="bg-tpl-navy text-white p-4">
                      <h4 className="text-xl font-semibold">Runners-up: {season.runnerUp.name}</h4>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-col items-center">
                        <img 
                          src={season.runnerUp.logo} 
                          alt={`${season.runnerUp.name} Logo`}
                          className="h-48 w-48 object-contain mb-4" 
                        />
                        <div className="flex items-center mt-4 bg-gray-100 rounded-lg p-4 w-full">
                          <img 
                            src={season.runnerUpCaptain?.photo || season.topScorer.photo} 
                            alt={`${season.runnerUpCaptain?.name || 'Team Captain'}`}
                            className="h-16 w-16 object-cover rounded-full mr-4" 
                          />
                          <div>
                            <p className="font-semibold">{season.runnerUpCaptain?.name || 'Team Captain'}</p>
                            <p className="text-sm text-tpl-gray">Captain</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-tpl-navy mb-4">Individual Awards</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={season.topScorer.photo} 
                      alt={season.topScorer.name} 
                      className="h-16 w-16 object-cover rounded-full mr-3" 
                    />
                    <div>
                      <p className="font-medium">{season.topScorer.name}</p>
                      <p className="text-sm text-tpl-gray">Golden Boot • {season.topScorer.goals} goals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={season.bestPlayer.photo} 
                      alt={season.bestPlayer.name} 
                      className="h-16 w-16 object-cover rounded-full mr-3" 
                    />
                    <div>
                      <p className="font-medium">{season.bestPlayer.name}</p>
                      <p className="text-sm text-tpl-gray">Golden Ball • Best Player</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={season.bestGoalkeeper.photo} 
                      alt={season.bestGoalkeeper.name} 
                      className="h-16 w-16 object-cover rounded-full mr-3" 
                    />
                    <div>
                      <p className="font-medium">{season.bestGoalkeeper.name}</p>
                      <p className="text-sm text-tpl-gray">Golden Glove • Best Goalkeeper</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <img 
                      src={season.bestDefender.photo} 
                      alt={season.bestDefender.name} 
                      className="h-16 w-16 object-cover rounded-full mr-3" 
                    />
                    <div>
                      <p className="font-medium">{season.bestDefender.name}</p>
                      <p className="text-sm text-tpl-gray">Best Defender</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PreviousSeasonsPage;
