import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import Button from '../Button/Button';

function HeroSectionWithParallax() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[
          {
            image: 'img/bgs/bg-cover2.jpg', // عکست رو بذار اینجا
            speed: -20,
          },
        ]}
        className="h-[600px] relative"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50  z-0" />

        {/* Content */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-6"
        >
          <h5 className="text-2xl mb-2">
            Praesent eu dolor eu orci vehicula euismod
          </h5>
          <h2 className="text-5xl font-bold mb-4">
            Find Your Own Price Of Paradise
          </h2>
          <p className="mb-6 max-w-2xl text-lg">
            Dicta illum fugiat quaerat enim ratione quibusdam eius. Voluptates
            amet fugiat consectetur rerum magnam veritatis.
          </p>
          <Button children="Learn More" />
        </motion.div>
      </ParallaxBanner>
    </ParallaxProvider>
  );
}

export default HeroSectionWithParallax;
