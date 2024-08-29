'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import serviceImg1 from '../public/assets/img3.jpg';
import serviceImg2 from '../public/assets/img4.jpg';
import serviceImg3 from '../public/assets/workers.jpg';
import serviceImg4 from '../public/assets/workers 2.jpg';
import serviceImg5 from '../public/assets/serviceImg5.jpg';
import serviceImg6 from '../public/assets/maintenance.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const serviceContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // Stagger the appearance of each child item
    },
  },
};

const serviceItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Adjust when the animation should trigger
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Services
        </h2>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          ref={ref}
          variants={serviceContainerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Service 1 */}
          <motion.div
            ref={ref}
            className="bg-white p-8 rounded-lg shadow-lg"
            variants={serviceItemVariants}
          >
            <div className="mb-6 items-center flex justify-center img-container">
              <Image src={serviceImg1} alt="General Construction" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
              General Construction
            </h3>
            <p className="text-gray-600 text-center">
              From residential homes to large-scale commercial projects, our
              experienced team delivers top-quality construction services
              tailored to your needs.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            variants={serviceItemVariants}
          >
            <div className="mb-6 items-center flex justify-center img-container">
              <Image src={serviceImg2} alt="Renovation & Remodeling" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
              Renovation & Remodeling
            </h3>
            <p className="text-gray-600 text-center">
              Transform your space with our expert renovation and remodeling
              services, bringing new life to old structures with modern designs.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            variants={serviceItemVariants}
          >
            <div className="mb-6 items-center flex justify-center img-container">
              <Image src={serviceImg3} alt="Architectural Design" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
              Architectural Design
            </h3>
            <p className="text-gray-600 text-center">
              Our team of architects and designers work closely with you to
              create innovative and functional designs that meet your vision and
              requirements.
            </p>
          </motion.div>

          {/* Service 4 */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            variants={serviceItemVariants}
          >
            <div className="mb-6 items-center flex justify-center img-container">
              <Image src={serviceImg4} alt="Project Management" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
              Project Management
            </h3>
            <p className="text-gray-600 text-center">
              We provide comprehensive project management services, ensuring
              every aspect of your construction project is executed flawlessly
              and on time.
            </p>
          </motion.div>

          {/* Service 5 */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            variants={serviceItemVariants}
          >
            <div className="mb-6 items-center flex justify-center img-container">
              <Image src={serviceImg5} alt="Consultation Services" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
              Consultation Services
            </h3>
            <p className="text-gray-600 text-center">
              Get expert advice and consultation for your construction projects,
              from initial planning to final execution, tailored to your
              specific needs.
            </p>
          </motion.div>

          {/* Service 6 */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            variants={serviceItemVariants}
          >
            <div className="mb-6 items-center flex justify-center img-container">
              <Image src={serviceImg6} alt="Maintenance & Repair" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
              Maintenance & Repair
            </h3>
            <p className="text-gray-600 text-center">
              Our maintenance and repair services ensure your buildings and
              structures remain in top condition, addressing issues promptly and
              effectively.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
