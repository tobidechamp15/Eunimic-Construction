'use client';
import Navbar from './Navbar';
import React, { useState } from 'react';
import Image from 'next/image';
import interiorImg from '../public/assets/001_032215.jpg';
import modernImg from '../public/assets/005_032226.jpg';
import corporateImg from '../public/assets/011_032148.jpg';

const projectData = {
  completed: [
    {
      title: 'Modern Building',
      description: 'A sleek, modern building with innovative architecture.',
      images: [modernImg, interiorImg],
    },
    {
      title: 'Bright Interior',
      description: 'A bright and open interior designed to maximize light.',
      images: [interiorImg],
    },
  ],
  ongoing: [
    {
      title: 'Corporate Structure',
      description: 'A large corporate building currently under construction.',
      images: [corporateImg],
    },
  ],
};

const ModernBuilding = () => {
  const [activeTab, setActiveTab] = useState('completed'); // 'completed' or 'ongoing'
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveProjectIndex(0); // Reset to the first project when switching tabs
  };

  const handleNextProject = () => {
    setActiveProjectIndex((prevIndex) => {
      const projects = projectData[activeTab];
      return (prevIndex + 1) % projects.length;
    });
  };

  const handlePrevProject = () => {
    setActiveProjectIndex((prevIndex) => {
      const projects = projectData[activeTab];
      return (prevIndex - 1 + projects.length) % projects.length;
    });
  };

  const activeProject = projectData[activeTab][activeProjectIndex];
  return (
    <div>
      <Navbar />
      <div className="bg-[#212121] text-white py-16 h-screen">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            MODERN BUILDINGS
          </h2>
          <div className="flex justify-center mb-8">
            <button
              className={`px-4 py-2 mx-2 ${
                activeTab === 'completed'
                  ? 'bg-white text-black'
                  : 'bg-gray-600'
              } rounded`}
              onClick={() => handleTabClick('completed')}
            >
              Completed Projects
            </button>
            <button
              className={`px-4 py-2 mx-2 ${
                activeTab === 'ongoing' ? 'bg-white text-black' : 'bg-gray-600'
              } rounded`}
              onClick={() => handleTabClick('ongoing')}
            >
              Ongoing Projects
            </button>
          </div>

          <div className="text-center mb-4">
            <h3 className="text-2xl font-semibold">{activeProject.title}</h3>
            <p className="text-gray-300">{activeProject.description}</p>
          </div>

          <div className="h-[500px] relative overflow-hidden rounded-lg shadow-lg group  mb-6">
            <Image
              src={activeProject.images[0]}
              alt={activeProject.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg h-full overflow-scroll"
            />
          </div>

          <div className="flex justify-between">
            <button
              className="px-4 py-2 bg-gray-600 rounded"
              onClick={handlePrevProject}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-gray-600 rounded"
              onClick={handleNextProject}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernBuilding;
