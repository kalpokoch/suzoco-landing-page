import { useEffect, useState } from 'react';

const useScrollDirection = () => {
  const [direction, setDirection] = useState('down');

  useEffect(() => {
    let lastY = window.scrollY;

    const update = () => {
      const currentY = window.scrollY;
      if (currentY > lastY) setDirection('down');
      else if (currentY < lastY) setDirection('up');
      lastY = currentY;
    };

    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);

  return direction;
};

export default useScrollDirection;
