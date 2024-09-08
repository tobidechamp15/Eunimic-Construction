'use client';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/assets/eunimic.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Footer = () => {
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

  const heroBounceVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8, // Start smaller
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1, // Back to normal size
      transition: {
        duration: 1.5,
        ease: 'easeOut', // Bounce effect
        type: 'spring',
        stiffness: 100, // Controls the "bounciness"
        damping: 10, // Reduces oscillation
        staggerChildren: 0.2, // Stagger animation for child elements
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={heroBounceVariants}
      className="bg-[#212121] text-white py-8 my-8 mb-0"
    >
      <div className="md:container mx-auto px-4 flex flex-wrap justify-between gap-2">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">ABOUT US</h3>
          <Image src={logo} className="w-[100px]" />
          <p className="text-gray-400 text-sm py-2">
            Excellence in Construction since 1985. We specialize in innovative
            building solutions, sustainable design, and precision engineering.
            Our team of experts delivers quality projects on time and on budget.
          </p>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4 w-fit">NAVIGATION</h3>
          <div className="w-fit flex flex-col">
            {[
              'Home',
              'Services',
              'Projects',
              'Blog',
              'Contact us',
              'About us',
            ].map((item) => (
              <span key={item} className="mb-2 w-fit ">
                <Link
                  // href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  href="/"
                  className="text-gray-400 hover:text-orange-500 no-underline"
                >
                  {item}
                </Link>
              </span>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">TAGS</h3>
          <div className="flex flex-wrap">
            {['big', 'buildings', 'home', 'modern', 'simple'].map((tag) => (
              <span
                key={tag}
                className="bg-gray-800 text-gray-400 px-2 py-1 rounded mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-bold mb-4">OUR RECENT PROJECTS</h3>
          <div className="w-fit flex flex-col">
            {[
              'Modern Building',
              'Interior Concept',
              'Corporate concept',
              'Corporate Tower',
              'Sea side residence',
            ].map((project) => (
              <span key={project} className="mb-2 text-gray-400">
                {project}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
