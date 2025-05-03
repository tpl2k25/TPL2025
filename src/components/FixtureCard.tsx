
import { format } from "date-fns";

type FixtureCardProps = {
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
};

const FixtureCard = ({ 
  date, 
  venue, 
  homeTeam, 
  awayTeam, 
  stage 
}: FixtureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
      <div className="bg-green-600 text-white py-2 px-4 flex items-center justify-between">
        <span className="text-sm">{stage}</span>
        <span className="text-sm font-medium">
          {format(date, "dd MMM yyyy")} • {format(date, "h:mm a")}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <div className="flex flex-col items-center w-1/3">
            <img src={homeTeam.logo} alt={homeTeam.name} className="h-16 w-16 object-contain" />
            <p className="mt-2 font-medium text-sm text-center">{homeTeam.name}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/3">
            <div className="bg-gray-100 rounded-lg py-2 px-4">
              <span className="font-bold text-lg text-green-600">VS</span>
            </div>
          </div>
          <div className="flex flex-col items-center w-1/3">
            <img src={awayTeam.logo} alt={awayTeam.name} className="h-16 w-16 object-contain" />
            <p className="mt-2 font-medium text-sm text-center">{awayTeam.name}</p>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600">
          <p>{venue}</p>
        </div>
      </div>
    </div>
  );
};

export default FixtureCard;
