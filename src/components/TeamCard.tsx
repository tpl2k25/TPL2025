
import { Link } from "react-router-dom";

type TeamCardProps = {
  id: string;
  name: string;
  logo: string;
  shortName: string;
};

const TeamCard = ({ id, name, logo, shortName }: TeamCardProps) => {
  return (
    <Link to={`/teams/${id}`} className="card-hover block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gray-50 p-6 flex items-center justify-center">
          <img 
            src={logo} 
            alt={`${name} logo`} 
            className="h-24 w-24 object-contain" 
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="font-montserrat font-bold text-tpl-navy">{name}</h3>
          <p className="text-tpl-gray text-sm">{shortName}</p>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
