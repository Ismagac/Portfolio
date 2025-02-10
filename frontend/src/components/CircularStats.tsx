import React, { useState, useEffect } from 'react';

interface StatItem {
  value: string;
  description: string;
}

interface CircularStatSliderProps {
  stats: StatItem[];
}

const CircularStatSlider: React.FC<CircularStatSliderProps> = ({ stats }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [stats]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
      <div 
        className="w-60 h-60 flex flex-col items-center justify-center text-center border-2 border-white rounded-full relative overflow-hidden"
        style={{ transition: 'transform 0.5s ease' }}
      >
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${
              index === currentIndex 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full'
            }`}
          >
            <p className="text-2xl font-normal">{stat.value}</p>
            <p className="text-sm font-normal">{stat.description}</p>
          </div>
        ))}
      </div>
      
      {/* Dot Navigation */}
      <div className="flex space-x-2">
        {stats.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CircularStatSlider;