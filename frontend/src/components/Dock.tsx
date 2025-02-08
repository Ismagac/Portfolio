import React, { FC, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import '../styles/Dock.css';

type DockItem = { icon: string; target: string };

interface DockProps {
  position?: 'bottom' | 'top' | 'left' | 'right';
  collapsible?: boolean;
  responsive?: 'bottom' | 'top' | 'left' | 'right';
  items?: DockItem[];
}

const Dock: FC<DockProps> = ({
  position = 'bottom',
  collapsible = false,
  responsive = 'bottom',
  items,
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isDockVisible, setDockVisible] = useState(!collapsible);
  const [currentPosition, setCurrentPosition] = useState(position);

  const defaultItems = [
    { icon: '🍕', target: '#section1' },
    { icon: '🍔', target: '#section2' },
    { icon: '🌭', target: '#section3' },
    { icon: '🌮', target: '#section4' },
    { icon: '🌯', target: '#section5' },
  ];
  const dockItems = items || defaultItems;

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleParentMouseEnter = () => {
    if (collapsible) {
      setDockVisible(true);
    }
  };

  const handleParentMouseLeave = () => {
    if (collapsible) {
      setDockVisible(false);
    }
  };

  const handleNavigate = (target: string) => {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const updatePosition = () => {
      if (responsive && window.innerWidth <= 768) {
        setCurrentPosition(responsive);
      } else {
        setCurrentPosition(position);
      }
    };

    updatePosition(); // Initial update

    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [position, responsive, collapsible]);

  const getDockStyle = () => {
    const flexDirection = currentPosition === 'left' || currentPosition === 'right' ? 'column' : 'row';
    return { flexDirection: flexDirection as 'row' | 'column' };
  };

  const scaleSpring = (index: number) => {
    const translateValue = (() => {
      if (hoverIndex === index) {
        switch (currentPosition) {
          case 'left':
            return 'translateX(5px) translateY(0px)';
          case 'right':
            return 'translateX(-5px) translateY(0px)';
          case 'top':
            return 'translateX(0px) translateY(5px)';
          case 'bottom':
            return 'translateX(0px) translateY(-5px)';
          default:
            return 'translateX(0px) translateY(0px)';
        }
      } else {
        return 'translateX(0px) translateY(0px)';
      }
    })();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useSpring({
      transform:
        hoverIndex === index
          ? `scale(1.5) ${translateValue}`
          : hoverIndex !== null && Math.abs(hoverIndex - index) === 1
            ? `scale(1.3) translateX(0px) translateY(0px)`
            : `scale(1) translateX(0px) translateY(0px)`,
      config: { tension: 200, friction: 15 },
    });
  };

  const visibilitySpring = useSpring({
    opacity: isDockVisible ? 1 : 0,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div
      className={`dock-container ${currentPosition}`}
      onMouseEnter={handleParentMouseEnter}
      onMouseLeave={handleParentMouseLeave}
    >
      <animated.div className="dock" style={{ ...getDockStyle(), ...visibilitySpring }}>
        {dockItems.map((item, index) => (
          <animated.div
            key={item.icon}
            className="dock-item"
            style={scaleSpring(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleNavigate(item.target)}
          >
            {item.icon}
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
};

export default Dock;
