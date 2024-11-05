import MainPage from "./Components/MainPage";
import SideBar from "./Components/SideBar";

const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <MainPage/>
    </div>
  );
};

export default App;
