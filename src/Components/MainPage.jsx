import Accordion from "./Accordion";
import ChapterSidebar from "./ChapterSidebar";
// import CourseContent from "./CourseContent";
// import CourseContent from "./CourseContent";
import NotificationProfile from "./NotificationProfile";
import Tabs from "./Tabs";

const MainPage = () => {
  return (
    <div className="w-full p-6 mr-4">
      <NotificationProfile />
      <Tabs />
      <div className="flex">
        <ChapterSidebar />
        <Accordion />
      </div>
      {/* <CourseContent /> */}
    </div>
  );
};

export default MainPage;
