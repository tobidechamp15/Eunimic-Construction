'use client';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = ({ isOpen, handleSideBar }) => {
  return (
    <div
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transform transition-transform fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center gap-3 justify-center font-[Montserrat] font-medium text-black text-sm`}
    >
      <span>HOME</span>
      <span>ABOUT</span>
      <span>CONTACT</span>
      <span>PROJECTS</span>
      <FontAwesomeIcon
        icon={faXmark}
        onClick={handleSideBar}
        className="text-2xl cursor-pointer"
      />
    </div>
  );
};

export default Sidebar;
