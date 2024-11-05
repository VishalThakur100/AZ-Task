import { IoTimeOutline } from "react-icons/io5";
import { useState } from "react";

const ChapterSidebar = () => {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const chapters = [
    "Chapter 1",
    "Chapter 2",
    "Chapter 3",
    "Chapter 4",
    "Chapter 5",
  ];

  return (
    <div className="w-60 p-4 mt-6 bg-gray-100">
      {chapters.map((chapter, index) => (
        <div
          key={index}
          className={`flex items-center justify-between py-2 px-2 mb-2 rounded-lg shadow cursor-pointer ${
            selectedChapter === index
              ? "bg-blue-200"
              : "bg-white hover:bg-gray-200"
          }`}
          onClick={() => setSelectedChapter(index)}
        >
          {index === 0 ? <strong className="whitespace-nowrap">{chapter}</strong> : chapter}
          {index == 0 && (
            <>
              <IoTimeOutline className="ml-9 text-blue-400 items-end " />{" "}
              <span className="text-blue-400 items-center">05:00:00</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChapterSidebar;
