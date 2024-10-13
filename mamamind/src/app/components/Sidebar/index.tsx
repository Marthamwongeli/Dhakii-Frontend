
// 'use client';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useRouter, usePathname } from 'next/navigation'; 
// import { FaChartBar, FaUserCircle } from 'react-icons/fa';
// import { BsPeopleFill } from "react-icons/bs";
// import { FaPeopleLine, FaUserNurse } from "react-icons/fa6";
// import { PiHospitalFill } from "react-icons/pi";

// const Sidebar = () => {
//   const router = useRouter(); 
//   const pathname = usePathname(); 
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null;
//   }

//   const SidebarItem = ({ Icon, label, path }: { Icon: React.ElementType, label: string, path: string }) => {
//     const isActive = pathname === path; 

//     return (
//       <Link href={path} className={`group flex items-center px-4 py-2 ${isActive ? 'text-[#F18721] bg-[#662113]' : 'text-gray-700 hover:bg-[#F18721]'} transition-colors duration-200`}>
//       <Icon className={`mr-3 text-2xl ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-white'}`} />
//       <span className={`font-bold text-[18px] ${isActive ? 'text-white' : 'group-hover:text-white'}`}>{label}</span>
//     </Link>
//     );
//   };

//   return (
//     <div className="fixed h-screen w-72 bg-white text-gray-800 flex flex-col px-6 border-4 border-[#02A6A6] font-nunito">
//       <div className="flex items-center justify-center h-20 border-b border-[#02A6A6]">
//         <img src="/images/logomamamind.png" alt="Logo" className="w-64 h-64 mt-24 object-contain" />
//       </div>

//       <nav className="flex-1 px-2 py-4 space-y-20 mt-24">
//         <SidebarItem Icon={FaChartBar} label="Dashboard" path="/dashboard" />
//         <SidebarItem Icon={BsPeopleFill} label="Mothers' Details" path="/mothers-details" />
//         <SidebarItem Icon={FaPeopleLine} label="CHPS' Details" path="/chps-details" />
//         <SidebarItem Icon={FaUserNurse} label="Nurses" path="/nurses" />
//         <SidebarItem Icon={PiHospitalFill} label="Nurse Admin" path="/nurse-admin" />
//         <SidebarItem Icon={FaUserCircle} label="Profile" path="/profile" />
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { FaChartBar, FaUserCircle } from 'react-icons/fa';
import { BsPeopleFill } from "react-icons/bs";
import { FaPeopleLine, FaUserNurse } from "react-icons/fa6";
import { PiHospitalFill } from "react-icons/pi";
import Image from 'next/image'; // Import Image from next/image

const Sidebar = () => {
  const pathname = usePathname(); 
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const SidebarItem = ({ Icon, label, path }: { Icon: React.ElementType, label: string, path: string }) => {
    const isActive = pathname === path; 

    return (
      <Link href={path} className={`group flex items-center px-4 py-2 ${isActive ? 'text-[#F18721] bg-[#662113]' : 'text-gray-700 hover:bg-[#F18721]'} transition-colors duration-200`}>
        <Icon className={`mr-3 text-2xl ${isActive ? 'text-white' : 'text-gray-700 group-hover:text-white'}`} />
        <span className={`font-bold text-[18px] ${isActive ? 'text-white' : 'group-hover:text-white'}`}>{label}</span>
      </Link>
    );
  };

  return (
    <div className="fixed h-screen w-72 bg-white text-gray-800 flex flex-col px-6 border-4 border-[#02A6A6] font-nunito">
      <div className="flex items-center justify-center h-20 border-b border-[#02A6A6]">
        <Image 
          src="/images/logomamamind.png" 
          alt="Logo" 
          width={256} // Set width according to your design
          height={256} // Set height according to your design
          className="mt-24 object-contain" 
        />
      </div>

      <nav className="flex-1 px-2 py-4 space-y-20 mt-24">
        <SidebarItem Icon={FaChartBar} label="Dashboard" path="/dashboard" />
        <SidebarItem Icon={BsPeopleFill} label="Mothers' Details" path="/mothers-details" />
        <SidebarItem Icon={FaPeopleLine} label="CHPS' Details" path="/chps-details" />
        <SidebarItem Icon={FaUserNurse} label="Nurses" path="/nurses" />
        <SidebarItem Icon={PiHospitalFill} label="Nurse Admin" path="/nurse-admin" />
        <SidebarItem Icon={FaUserCircle} label="Profile" path="/profile" />
      </nav>
    </div>
  );
};

export default Sidebar;

