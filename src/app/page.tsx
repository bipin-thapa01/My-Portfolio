import MainPage from "./MainPage";
import SideBar from "./SideBar";
import './page.css'
//for commit

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