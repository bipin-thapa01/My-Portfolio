import MainPage from "./MainPage";
import SideBar from "./SideBar";
import './page.css'

export default function HomePage(){
  return (
    <>
      <div className="main-container">
        <SideBar/>
        <MainPage/>
      </div>
    </>
  );
}