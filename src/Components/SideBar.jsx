import { GiHamburgerMenu } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { MdLightbulbOutline } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { useState } from "react";

const SideBar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="w-[267px] h-[566px] mt-[30px] ml-[30px]">
      <div className="w-40 p-4">
        <ul className="w-[267px] cursor-pointer">
          <div className="flex items-center mb-[16px]">
            <GiHamburgerMenu />
            <li className="ml-[10px] font-bold">AlgoZenith</li>
          </div>
          <div className={`flex items-center mb-[16px] ${activeSection === 'dashboard' ? 'bg-blue-200' : ''} w-40 rounded-sm p-2 ml-[-10px] cursor-pointer`} onClick={() => handleSectionClick('dashboard')}>
            <MdDashboard />
            <li className="ml-[10px]">DashBoard</li>
          </div>
          <div className={`flex items-center mb-[16px] ${activeSection === 'learn' ? 'bg-blue-200' : ''} w-40 rounded-sm p-2 ml-[-10px] cursor-pointer`} onClick={() => handleSectionClick('learn')}>
            <MdLightbulbOutline />
            <li className="ml-[10px]">Learn</li>
          </div>
          <div className={`flex items-center mb-[16px] ${activeSection === 'forums' ? 'bg-blue-200' : ''} w-40 rounded-sm p-2 ml-[-10px] cursor-pointer`} onClick={() => handleSectionClick('forums')}>
            <MdGroup />
            <li className="ml-[10px]">Forums</li>
          </div>
          <div className={`flex items-center mb-[16px] ${activeSection === 'upskill' ? 'bg-blue-200' : ''} w-40 rounded-sm p-2 ml-[-10px] cursor-pointer`} onClick={() => handleSectionClick('upskill')}>
            <MdAssignment />
            <li className="ml-[10px]">Upskill</li>
          </div>
          <div className={`flex items-center mb-[16px] ${activeSection === 'contest' ? 'bg-blue-200' : ''} w-40 rounded-sm p-2 ml-[-10px] cursor-pointer`} onClick={() => handleSectionClick('contest')}>
            <MdBarChart />
            <li className="ml-[10px]">Contest</li>
          </div>
          <div className={`flex items-center mb-[16px] ${activeSection === 'leaderboard' ? 'bg-blue-200' : ''} w-40 rounded-sm p-2 ml-[-10px] cursor-pointer`} onClick={() => handleSectionClick('leaderboard')}>
            <MdStar />
            <li className="ml-[10px]">LeaderBoard</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
