'use client';
import Navbar from './Navbar';
import React, { useState } from 'react';
import Image from 'next/image';
import interiorImg from '../public/assets/001_032215.jpg';
import modernImg from '../public/assets/005_032226.jpg';
import corporateImg from '../public/assets/011_032148.jpg';
import siteImg1 from '../public/assets/siteImg1.jpg';
import siteImg2 from '../public/assets/siteImg2.jpg';
import siteImg3 from '../public/assets/siteImg6.jpg';

const projectData = {
  completed: [
    {
      title: 'KOLAPO ISHOLA ESTATE LUXURY 3 BEDROOM TERRACED DUPLEX',
      description: 'A sleek, modern building with innovative architecture.',
      images: [modernImg, siteImg3],
    },
    {
      title: 'ISLAMIC MISSIONARY BUSINESS COMPLEX, BASORUN',
      description:
        'An ultra-modern office & shop units complex (with all facilities & conveniences provided) in a buoyant social-economic centre of Ibadan city',
      images: [siteImg3],
    },
  ],
  ongoing: [
    {
      title: 'ATOYEBIS COURT',
      description: 'A large corporate building currently under construction.',
      images: [corporateImg],
    },
    {
      title: 'ATOYEBIS COURT',
      description: 'Under Construction',
      images: [siteImg1],
    },
    {
      title: 'ATOYEBIS COURT',
      description: 'Under Construction',
      images: [siteImg2],
    },
  ],
};

const ModernBuilding = () => {
  const [activeTab, setActiveTab] = useState('completed'); // 'completed' or 'ongoing'
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0); // Add a state for the image index

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveProjectIndex(0); // Reset to the first project when switching tabs
    setActiveImageIndex(0); // Reset the image index when switching projects
  };

  const handleNextProject = () => {
    setActiveProjectIndex((prevIndex) => {
      const projects = projectData[activeTab];
      return (prevIndex + 1) % projects.length;
    });
    setActiveImageIndex(0); // Reset the image index when switching projects
  };

  const handlePrevProject = () => {
    setActiveProjectIndex((prevIndex) => {
      const projects = projectData[activeTab];
      return (prevIndex - 1 + projects.length) % projects.length;
    });
    setActiveImageIndex(0); // Reset the image index when switching projects
  };

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) => {
      const images = activeProject.images;
      return (prevIndex + 1) % images.length;
    });
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prevIndex) => {
      const images = activeProject.images;
      return (prevIndex - 1 + images.length) % images.length;
    });
  };

  const activeProject = projectData[activeTab][activeProjectIndex];
  return (
    <div>
      <Navbar />
      <div className="bg-[#2] text-[#212121] py-16 min-h-screen">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            MODERN BUILDINGS
          </h2>
          <div className="flex justify-center mb-8">
            <button
              className={`px-4 py-2 mx-2 ${
                activeTab === 'completed'
                  ? 'btn btn-secondary'
                  : 'btn btn-secondary-outline'
              } rounded`}
              onClick={() => handleTabClick('completed')}
            >
              Completed Projects
            </button>
            <button
              className={`px-4 py-2 mx-2 ${
                activeTab === 'ongoing'
                  ? 'btn btn-secondary'
                  : 'btn btn-secondary-outline'
              } rounded`}
              onClick={() => handleTabClick('ongoing')}
            >
              Ongoing Projects
            </button>
          </div>

          <div className="text-center mb-4">
            <h3 className="text-2xl font-semibold">{activeProject.title}</h3>
            <p className="text-orange-500 font-semibold">
              {activeProject.description}
            </p>
          </div>

          <div className="md:h-[500px] h-[300px] relative overflow-hidden rounded-lg shadow-lg group mb-6">
            <Image
              src={activeProject.images[activeImageIndex]} // Show the current image based on the image index
              alt={activeProject.title}
              layout="fill"
              className="rounded-lg h-full overflow-scroll md:object-cover"
            />
            {/* Arrows for changing images */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 p-2 rounded-full text-white"
              onClick={handlePrevImage}
            >
              &#8249;
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 p-2 rounded-full text-white"
              onClick={handleNextImage}
            >
              &#8250;
            </button>
          </div>

          <div className="flex justify-between">
            <button
              className="px-4 py-2 btn btn-secondary rounded"
              onClick={handlePrevProject}
            >
              Previous Project
            </button>
            <button
              className="px-4 py-2 btn btn-success rounded"
              onClick={handleNextProject}
            >
              Next Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernBuilding;
