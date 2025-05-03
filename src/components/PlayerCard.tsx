
import { Link } from "react-router-dom";

type PlayerCardProps = {
  id: string;
  name: string;
  photo: string;
  position: string;
  age: number;
  teamId: string;
  teamName: string;
  teamLogo: string;
  instagramUrl?: string;
};

const PlayerCard = ({ 
  id, 
  name, 
  photo, 
  position, 
  age, 
  teamId,
  teamName,
  teamLogo,
  instagramUrl 
}: PlayerCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover group">
      <div className="relative">
        <img 
          src={photo} 
          alt={name} 
          className="w-full h-64 object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
          <div className="text-white text-center">
            <p className="font-medium">{position}</p>
            {instagramUrl && (
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium"
              >
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-montserrat font-bold text-tpl-navy">{name}</h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-tpl-gray text-sm">{age} years</p>
          <Link to={`/teams/${teamId}`} className="flex items-center group">
            <img 
              src={teamLogo} 
              alt={teamName} 
              className="h-5 w-5 object-contain mr-1" 
            />
            <span className="text-sm text-tpl-gray group-hover:text-tpl-navy">{teamName}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
