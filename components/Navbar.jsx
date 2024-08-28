'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../public/assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-fluid bg-white shadow-sm py-2 flex justify-between px-4 md:justify-around items-center sticky top-0">
      <Sidebar isOpen={isOpen} handleSideBar={handleSideBar} />
      <div className="flex items-center justify-center">
        <Image src={logo} className="w-[50px]" alt="Logo" />
      </div>
      <div className="hidden md:flex items-center gap-3 justify-center font-[Montserrat] font-medium text-black text-sm">
        <span>HOME</span>
        <span>ABOUT</span>
        <span>CONTACT</span>
        <span>PROJECTS</span>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className="text-[#d54900] text-4xl md:hidden cursor-pointer"
        onClick={handleSideBar}
      />
    </div>
  );
};

export default Navbar;
