'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClientsSection = () => {
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
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={heroVariants}
      className="py-16 text-center flex flex-col container"
    >
      <h2 className="text-3xl xsm:text-lg font-bold mb-12">
        CLIENTS THAT TRUST US
      </h2>

      <div className="flex flex-wrap gap-2 justify-center items-center space-x-8 mb-12">
        <div className="build-pro-logo">BuildPro+</div>
        <div className="constructis-logo">
          cons<span>tructis</span>
        </div>
        <div className="giant-build-logo">
          GIANT<span>BUILD</span>
        </div>
        <div className="out-box-logo">
          out<span>BOX</span>
        </div>
        <div className="stormcoll-logo">stormcoll</div>
      </div>

      <p className="text-gray-500 text-lg">
        some of our clients that trust us, be sure to be one of them
      </p>

      <style jsx>{`
        .build-pro-logo {
          font-weight: bold;
          font-size: 24px;
          color: #4a90e2;
        }

        .constructis-logo {
          font-size: 22px;
          font-weight: bold;
        }
        .constructis-logo span {
          background: #50e3c2;
          padding: 2px 4px;
          color: white;
        }

        .giant-build-logo {
          font-size: 24px;
          font-weight: bold;
        }
        .giant-build-logo span {
          color: #f5a623;
        }

        .out-box-logo {
          font-size: 22px;
          font-weight: bold;
        }
        .out-box-logo span {
          background: #d0021b;
          color: white;
          padding: 2px 4px;
        }

        .stormcoll-logo {
          font-size: 24px;
          font-weight: bold;
          color: #7ed321;
        }
        .stormcoll-logo::before {
          content: '⚡';
          margin-right: 4px;
        }
      `}</style>
    </motion.div>
  );
};

export default ClientsSection;
