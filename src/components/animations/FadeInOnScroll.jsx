import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import useScrollDirection from '../hooks/useScrollDirection'; // path may vary

const FadeInOnScroll = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
}) => {
  const ref = useRef(null);
  const scrollDirection = useScrollDirection();
  const isInView = useInView(ref, { amount: 0.3, once: false });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && scrollDirection === 'down') {
      setHasAnimated(true);
    }
  }, [isInView, scrollDirection]);

  const offset = 40;
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? offset : direction === 'right' ? -offset : 0,
      y: direction === 'up' ? offset : direction === 'down' ? -offset : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { delay, duration },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={hasAnimated ? 'visible' : 'hidden'}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
