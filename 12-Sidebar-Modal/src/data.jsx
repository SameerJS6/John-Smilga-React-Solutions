import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaNewspaper,
  FaWpforms,
  FaGithub,
  // PiNewspaperFill,
} from "react-icons/fa";
import { PiNewspaperFill } from "react-icons/pi";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome size={"24px"} />,
  },
  {
    id: 2,
    url: "/team",
    text: "team",
    icon: <FaUserFriends size={"24px"} />,
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <FaFolderOpen size={"24px"} />,
  },
  {
    id: 4,
    url: "/calendar",
    text: "calendar",
    icon: <FaCalendarAlt size={"24px"} />,
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <PiNewspaperFill size={"24px"} />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebook size={"18px"} />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter size={"18px"} />,
  },
  {
    id: 3,
    url: "https://in.linkedin.com",
    icon: <FaLinkedin size={"18px"} />,
  },
  {
    id: 4,
    url: "https://www.behance.com",
    icon: <FaBehance size={"18px"} />,
  },
  {
    id: 5,
    url: "https://www.github.com/SameerJS6",
    icon: <FaGithub size={"18px"} />,
  },
];
