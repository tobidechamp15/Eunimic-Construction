'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowUp, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactDetails = () => {
  const [inView, setInView] = useState(false);

  // Toggle visibility
  const handleInView = () => {
    setInView((prevInView) => !prevInView);
  };

  return (
    <div className="font-[Helvetica]">
      <div
        className={`flex flex-col md:flex-row md:justify-around border-b bg-[#f9f9f9] ${
          inView ? 'xsm:block' : 'xsm:hidden'
        }`}
      >
        <div className="flex gap-4 border-r border-l py-6 px-[40px] justify-center items-center xsm:border-b">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-[#c1c1c1] text-sm hover:text-[#d54900]"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-[#c1c1c1] text-sm hover:text-[#d54900]"
          />
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="text-[#c1c1c1] text-sm hover:text-[#d54900]"
          />
        </div>
        <div className="flex items-center justify-center gap-3 border-r border-l py-6 px-[40px] xsm:border-b text-center">
          <FontAwesomeIcon
            icon={faClock}
            className="text-[#c1c1c1] text-sm hover:text-[#d54900]"
          />
          <span className="text-[#c1c1c1] text-sm hover:text-[#d54900]">
            Mon - Sat: 7:00 - 17:00
          </span>
        </div>
        <div className="flex items-center justify-center gap-3 border-r border-l py-6 px-[40px] xsm:border-b text-center">
          <span className="text-[#c1c1c1] text-sm hover:text-[#d54900]">
            <FontAwesomeIcon icon={faWhatsapp} /> +234-8060-933-719,{' '}
            <FontAwesomeIcon icon={faPhone} /> +234-8035-080-136
          </span>
        </div>
        <div className="flex items-center justify-center gap-3 border-r border-l py-6 px-[40px]">
          <span className="text-[#c1c1c1] text-sm text-center hover:text-[#d54900]">
            <FontAwesomeIcon icon={faEnvelope} /> gmail@goes-here.com
          </span>
        </div>
      </div>
      <div className=" justify-center py-4  xsm:flex hidden">
        <FontAwesomeIcon
          icon={faArrowUp}
          className="text-[#d54900] cursor-pointer "
          onClick={handleInView}
        />
      </div>
    </div>
  );
};

export default ContactDetails;
