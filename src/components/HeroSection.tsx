
import { Link } from "react-router-dom";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  bgImage?: string;
};

const HeroSection = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink,
  bgImage = "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3" 
}: HeroSectionProps) => {
  return (
    <div 
      className="relative bg-cover bg-center py-24 md:py-32" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-green-900/70"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl animate-slide-in" style={{ animationDelay: '200ms' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {title}
          </h1>
          <p className="mt-4 text-xl text-gray-200">
            {subtitle}
          </p>
          {ctaText && (
            <div className="mt-8">
              <Link 
                to={ctaLink} 
                className="btn-accent inline-block"
              >
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
