'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import headerBg from '../public/assets/header-bg.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Adjust this value to determine how much of the element should be in view before the animation starts
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className=" bg-cover bg-center text-white relative"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={heroVariants}
    >
      <Image src={headerBg} className="absolute object-cover h-full" />
      {/* <div className="overlay absolute inset-0 bg-black bg-opacity-50"></div> */}
      <div className="container mx-auto px-6 py-20 flex flex-col items-center text-center relative ">
        <h1 className="text-[26px] md:text-6xl font-bold mb-4 transition-all duration-700 transform hover:scale-105">
          Building Dreams into Reality
        </h1>
        <motion.span
          whileHover={{
            scale: 1.05,
            backgroundColor: 'transparent',
          }}
          className="text-sm md:text-xl mb-6 max-w-xl"
        >
          Ideal theme for any construction business you need <br /> With Visual
          Composer, Revolution Slider and other <br />
          awesome features, you cannot go wrong.
        </motion.span>
        <a
          href="#quote"
          className="bg-[#d54900] hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-full text-lg transition-transform duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          Contact Us
        </a>
      </div>
    </motion.div>
  );
};

export default Hero;
