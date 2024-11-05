import { useState } from "react";
import PropTypes from "prop-types";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { CiCircleQuestion } from "react-icons/ci";
import { IoCodeSlashOutline } from "react-icons/io5";
import { ImFilesEmpty } from "react-icons/im";
import { MdBarChart } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const CourseContent = ({
  title,
  duration,
  difficulty,
  progress,
  tasks,
  file,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 scrollable">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleSection}
      >
        <div className="flex flex-col items-start">
          <h3 className="text-lg opacity-60">
            {title.split(" ")[0]} {title.split(" ")[1]}
          </h3>
          <h3 className="text-lg font-semibold">
            {title.split(" ").slice(2).join(" ")}
          </h3>
        </div>
        <div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center space-x-1">
              <CiCircleQuestion />
              <span>{duration}</span>
            </span>
            <span className="flex items-center space-x-1">
              <MdBarChart />
              <span>{difficulty}</span>
            </span>
            <span className="flex items-center space-x-1">
              <ImFilesEmpty /> <span>{file}</span>
            </span>
            <span>
              <RiArrowDropDownLine className={`font-extrabold text-4xl transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`} />
            </span>
          </div>
          <div className="border border-blue-400 px-4 bg-blue-200 rounded-sm w-36 flex justify-end ml-auto">
            <span className="text-sm text-gray-600">{progress}% Completed</span>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-gray-50 p-4 space-y-4 w-full ml-0">
          <div className="h-2 bg-blue-50 mb-2">
            <div
              className="h-full bg-black rounded-b-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {tasks.map((task, index) => (
            <div key={index} className="flex justify-between items-center p-2">
              <div className="flex items-center space-x-1">
                {/(Article|Quiz) \d+/.test(task.name) ? (
                  <CiCircleQuestion />
                ) : /^Coding Exercise \d+$/.test(task.name) ? (
                  <IoCodeSlashOutline />
                ) : /Video \d+/.test(task.name) ? (
                  <IoPlayCircleOutline />
                ) : /^Combined Resource \d+$/.test(task.name) ? (
                  <ImFilesEmpty />
                ) : (
                  <IoPlayCircleOutline />
                )}
                <span>{task.name}</span>
              </div>
              {/(Article|Quiz|Coding Exercise|Video)/.test(task.name) && <hr className="border-gray-300 my-2" />}
              <div className="flex items-center space-x-1">
                <IoTimeOutline />
                <span>{task.duration}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

CourseContent.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    })
  ).isRequired,
  file: PropTypes.number.isRequired,
};

export default CourseContent;
