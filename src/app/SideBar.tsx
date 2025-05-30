import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div id="header">
      <div id="id-name-container">
        <div id="profile-container">
          <img id="profile" src="/profile.jpg" alt="My Image" />
        </div>
        <div id="name">Bipin Thapa</div>
      </div>
      <div>
        <FaFacebook />
        <FaGithub />
        <FaLinkedin />
      </div>
      <div>
        <div>Home</div>
        <div>About</div>
        <div>Resume</div>
        <div>Portfolio</div>
        <div>Services</div>
        <div>Contact</div>
      </div>
    </div>
  );
}