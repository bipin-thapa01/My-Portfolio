"use client";

import { useRouter } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./SideBar.css";

export default function SideBar() {
  const router = useRouter();
  const facebook = 'https://www.facebook.com/bipin.thapasingh/';
  const github = 'https://github.com/bipin-thapa01';
  const linkedin = 'https://www.linkedin.com/in/bipin-thapa-990b5131b/';
  return (
    <div id="header">
      <div id="id-name-container">
        <div id="profile-container">
          <img id="profile" src="/profile.jpg" alt="My Image" />
        </div>
        <div id="name">Bipin Thapa</div>
      </div>
      <div id="socials-container">
        <div className="socials" onClick={()=> router.push(facebook)}>
          <FaFacebook className="logo"/>
        </div>
        <div className="socials" onClick={()=> router.push(github)}>
          <FaGithub className="logo"/>
        </div>
        <div className="socials" onClick={()=> router.push(linkedin)}>
          <FaLinkedin className="logo"/>
        </div>
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