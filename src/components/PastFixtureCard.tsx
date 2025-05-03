
import { format } from "date-fns";

type ScorerInfo = {
  name: string;
  team: "home" | "away";
  minute: number;
};

type PastFixtureCardProps = {
  date: Date;
  venue: string;
  homeTeam: {
    name: string;
    logo: string;
  };
  awayTeam: {
    name: string;
    logo: string;
  };
  stage: string;
  homeScore: number;
  awayScore: number;
  scorers: ScorerInfo[];
};

const PastFixtureCard = ({ 
  date, 
  venue, 
  homeTeam, 
  awayTeam, 
  stage,
  homeScore,
  awayScore,
  scorers
}: PastFixtureCardProps) => {
  // Sort scorers by minute
  const sortedScorers = [...scorers].sort((a, b) => a.minute - b.minute);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="bg-tpl-navy text-white py-2 px-4 flex items-center justify-between">
        <span className="text-sm">{stage}</span>
        <span className="text-sm font-medium">
          {format(date, "dd MMM yyyy")}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center mb-3">
          <div className="flex flex-col items-center w-2/5">
            <img src={homeTeam.logo} alt={homeTeam.name} className="h-16 w-16 object-contain" />
            <p className="mt-2 font-medium text-sm text-center">{homeTeam.name}</p>
          </div>
          <div className="flex items-center justify-center w-1/5">
            <div className="bg-gray-800 text-white rounded-lg py-2 px-4">
              <span className="font-bold text-xl">{homeScore} - {awayScore}</span>
            </div>
          </div>
          <div className="flex flex-col items-center w-2/5">
            <img src={awayTeam.logo} alt={awayTeam.name} className="h-16 w-16 object-contain" />
            <p className="mt-2 font-medium text-sm text-center">{awayTeam.name}</p>
          </div>
        </div>
        
        {/* Venue and time */}
        <div className="text-center text-sm text-tpl-gray mb-4">
          <p>{venue} • {format(date, "h:mm a")}</p>
        </div>
        
        {/* Scorers */}
        <div className="border-t pt-4 mt-2">
          <h4 className="text-sm font-semibold mb-2">Scorers:</h4>
          <div className="space-y-1">
            {sortedScorers.length > 0 ? (
              sortedScorers.map((scorer, index) => (
                <div 
                  key={index} 
                  className={`text-xs py-1 px-2 rounded ${
                    scorer.team === "home" ? "bg-blue-50 text-blue-800" : "bg-red-50 text-red-800"
                  }`}
                >
                  <span className="font-medium">{scorer.name}</span> {scorer.minute}'
                  <span className="text-gray-500 ml-1">
                    {scorer.team === "home" ? `(${homeTeam.name})` : `(${awayTeam.name})`}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-xs text-gray-500 italic">No goals scored</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastFixtureCard;
