import { CiCalendar } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";

const Tabs = () => {
  return (
    <div className="flex items-center justify-between space-x-4 mx-8 mb-4 mt-6">
      <div className="items-start flex">
        <button className="flex items-center py-2 px-2 text-black rounded-md mt-2 ml-2 mr-2">
          <CiCalendar />
          <span className="pl-2">Mentor Sessions</span>
        </button>
        <button className="flex items-center py-2 px-2 bg-gray-200 rounded-md hover:bg-gray-300 mt-2 ml-2 mr-2">
          <IoBagHandleOutline />
          <span className="pl-2 font-semibold">Learning Material</span>
        </button>
      </div>
      <div className="items-end">
        <button className="flex items-center py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300 mt-2  mr-[-22px]">
          <CiCircleInfo className="mt-1 font-bold" />
          <span className="pl-2 font-semibold">How it works</span>
        </button>
      </div>
    </div>
  );
};

export default Tabs;
