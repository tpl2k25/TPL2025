
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
          <div className="max-w-4xl mx-auto">
            <SectionHeading 
              title="Season Details" 
              subtitle="Complete information about each TPL season"
              alignment="center"
            />
            
            {previousSeasons.map((season) => (
              <div key={season.year} className="mt-12 bg-white rounded-lg shadow-md p-6 space-y-6">
                <h3 className="text-2xl font-bold text-tpl-navy">{season.year} Season</h3>
                
                <p className="text-gray-700 leading-relaxed">
                  {season.summary}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Champions & Finalists</h4>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <img 
                            src={season.champion.logo} 
                            alt={season.champion.name} 
                            className="h-10 w-10 object-contain mr-3" 
                          />
                          <div>
                            <p className="font-medium">{season.champion.name}</p>
                            <p className="text-sm text-tpl-gray">Champions</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <img 
                            src={season.runnerUp.logo} 
                            alt={season.runnerUp.name} 
                            className="h-10 w-10 object-contain mr-3" 
                          />
                          <div>
                            <p className="font-medium">{season.runnerUp.name}</p>
                            <p className="text-sm text-tpl-gray">Runners-up</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Individual Awards</h4>
                    <div className="space-y-3">
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <img 
                          src={season.topScorer.photo} 
                          alt={season.topScorer.name} 
                          className="h-10 w-10 object-cover rounded-full mr-3" 
                        />
                        <div>
                          <p className="font-medium">{season.topScorer.name}</p>
                          <p className="text-sm text-tpl-gray">Golden Boot • {season.topScorer.goals} goals</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <img 
                          src={season.bestPlayer.photo} 
                          alt={season.bestPlayer.name} 
                          className="h-10 w-10 object-cover rounded-full mr-3" 
                        />
                        <div>
                          <p className="font-medium">{season.bestPlayer.name}</p>
                          <p className="text-sm text-tpl-gray">Golden Ball • Best Player</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <img 
                          src={season.bestGoalkeeper.photo} 
                          alt={season.bestGoalkeeper.name} 
                          className="h-10 w-10 object-cover rounded-full mr-3" 
                        />
                        <div>
                          <p className="font-medium">{season.bestGoalkeeper.name}</p>
                          <p className="text-sm text-tpl-gray">Golden Glove • Best Goalkeeper</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <img 
                          src={season.bestYoungPlayer.photo} 
                          alt={season.bestYoungPlayer.name} 
                          className="h-10 w-10 object-cover rounded-full mr-3" 
                        />
                        <div>
                          <p className="font-medium">{season.bestYoungPlayer.name}</p>
                          <p className="text-sm text-tpl-gray">Best Young Player • {season.bestYoungPlayer.age} years</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreviousSeasonsPage;
