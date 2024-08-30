'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import modernImg from '../public/assets/modernImg.jpg';
import corporateImg from '../public/assets/corporateImg.jpg';
import interiorImg from '../public/assets/interiorImg.jpg';

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

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

  const projects = [
    {
      href: 'modern',
      src: modernImg,
      alt: 'Run-Ride project screenshot',
      name: 'Modern Building',
    },
    {
      href: 'https://taskify-tobiloba.vercel.app/',
      src: corporateImg,
      alt: 'Taskify project screenshot',
      name: 'Corporate Concepts',
    },
    {
      href: 'https://invoicexpress.netlify.app',
      src: interiorImg,
      alt: 'invoiceXpress project screenshot',
      name: 'Interior Concepts',
    },
  ];

  return (
    <motion.div
      className="bg-[#212121] flex flex-col gap-[40px] items-center py-[190px] xsm:px-[25px]"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
      <div className="bg-[#212121] text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            FEATURED WORKS
          </h2>
        </div>
      </div>
      <div className="flex mt-[50px] gap-3 flex-wrap max-w-[1200px] justify-center">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer group relative flex flex-col gap-6 p-3 rounded-xl transform transition duration-300 hover:scale-105"
            variants={projectVariants}
            onMouseOver={() => setHoveredIndex(index)}
            onMouseOut={() => setHoveredIndex(null)}
          >
            <section className="relative">
              <div className="h-64 overflow-hidden rounded-lg hover:opacity-25">
                <Image
                  src={project.src}
                  className="w-full h-full object-cover transition duration-300 transform group-hover:scale-110"
                  alt={project.alt}
                />
              </div>
              {hoveredIndex === index && (
                <div
                  className="flex justify-center w-full items-center absolute top-1/2 transform -translate-y-1/2"
                  onMouseOver={() => setHoveredIndex(index)}
                  onMouseOut={() => setHoveredIndex(null)}
                >
                  <span className="project-name text-white text-lg font-semibold transition duration-300 group-hover:text-[#4FC3F7]">
                    {project.name}
                  </span>
                </div>
              )}
            </section>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
