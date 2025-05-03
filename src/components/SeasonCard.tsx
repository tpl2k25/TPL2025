
import { Link } from "react-router-dom";

type SeasonCardProps = {
  year: string;
  champion: {
    name: string;
    logo: string;
  };
  runnerUp: {
    name: string;
    logo: string;
  };
  topScorer: {
    name: string;
    photo: string;
    goals: number;
    team: string;
  };
  bestPlayer: {
    name: string;
    photo: string;
  };
  photo?: string;
};

const SeasonCard = ({ 
  year, 
  champion, 
  runnerUp, 
  topScorer, 
  bestPlayer,
  photo = "https://images.unsplash.com/photo-1540031548649-3c02eb29965b?ixlib=rb-4.0.3" 
}: SeasonCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div 
        className="h-40 bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${photo})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent">
          <div className="p-6">
            <h3 className="text-white text-2xl font-bold">{year} Season</h3>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-tpl-gray">Champion</p>
            <div className="flex items-center mt-1">
              <img src={champion.logo} alt={champion.name} className="h-8 w-8 object-contain mr-2" />
              <span className="font-medium">{champion.name}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-tpl-gray">Runner-up</p>
            <div className="flex items-center mt-1 justify-end">
              <span className="font-medium">{runnerUp.name}</span>
              <img src={runnerUp.logo} alt={runnerUp.name} className="h-8 w-8 object-contain ml-2" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-tpl-gray">Top Scorer</p>
              <div className="flex items-center mt-1">
                <img src={topScorer.photo} alt={topScorer.name} className="h-10 w-10 object-cover rounded-full mr-2" />
                <div>
                  <p className="font-medium">{topScorer.name}</p>
                  <p className="text-xs text-tpl-gray">{topScorer.goals} goals • {topScorer.team}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-tpl-gray">Best Player</p>
              <div className="flex items-center mt-1">
                <img src={bestPlayer.photo} alt={bestPlayer.name} className="h-10 w-10 object-cover rounded-full mr-2" />
                <p className="font-medium">{bestPlayer.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonCard;
