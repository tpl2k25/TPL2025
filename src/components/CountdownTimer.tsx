
import { useState, useEffect } from "react";

type CountdownTimerProps = {
  targetDate: Date;
  eventName: string;
};

const CountdownTimer = ({ targetDate, eventName }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg p-6 text-white text-center">
      <h3 className="font-montserrat text-xl mb-4">Countdown to {eventName}</h3>
      <div className="flex justify-center gap-4 md:gap-8">
        <div className="flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg w-16 h-16 flex items-center justify-center">
            <span className="text-3xl font-bold">{formatNumber(timeLeft.days)}</span>
          </div>
          <span className="mt-2 text-sm text-gray-100">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg w-16 h-16 flex items-center justify-center">
            <span className="text-3xl font-bold">{formatNumber(timeLeft.hours)}</span>
          </div>
          <span className="mt-2 text-sm text-gray-100">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg w-16 h-16 flex items-center justify-center">
            <span className="text-3xl font-bold">{formatNumber(timeLeft.minutes)}</span>
          </div>
          <span className="mt-2 text-sm text-gray-100">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg w-16 h-16 flex items-center justify-center">
            <span className="text-3xl font-bold">{formatNumber(timeLeft.seconds)}</span>
          </div>
          <span className="mt-2 text-sm text-gray-100">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
