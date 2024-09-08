'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../public/assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-white shadow-sm py-2 flex justify-between xsm:px-4  md:px-[50px] items-center sticky top-0 z-10">
      <Sidebar isOpen={isOpen} handleSideBar={handleSideBar} />
      <div className="flex items-center justify-center">
        <Image src={logo} className="w-[50px]" alt="Logo" />
      </div>
      <div className="hidden md:flex items-center gap-3 justify-center font-[Montserrat] font-semibold text-black text-sm">
        <Link href="/">HOME</Link>
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
