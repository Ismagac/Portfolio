import React, { useEffect } from "react";
import "../styles/SplashScreen.css";

interface SplashScreenProps {
  onAnimationEnd: () => void;
}

const greetings = ["Hola", "Bonjour", "Hello", "こんにちは", "안녕하세요"];

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationEnd }) => {
  useEffect(() => {
    const totalTime = greetings.length * 0.3 * 1000 + 1000;
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, totalTime);
    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        {greetings.map((greeting, index) => (
          <h1
            key={index}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            {greeting}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
