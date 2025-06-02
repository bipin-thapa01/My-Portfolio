"use client";

import { useRouter } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { LuNewspaper } from "react-icons/lu";
import { FaRegImages } from "react-icons/fa6";
import { CiServer } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
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
      <div id="nav-options-container">
        <i> <MdHome /> Home</i>
        <i> <IoMdPerson /> About</i>
        <i> <LuNewspaper /> Resume</i>
        <i> <FaRegImages /> Portfolio</i>
        <i> <CiServer /> Services</i>
        <i> <MdOutlineMailOutline /> Contact</i>
      </div>
    </div>
  );
}