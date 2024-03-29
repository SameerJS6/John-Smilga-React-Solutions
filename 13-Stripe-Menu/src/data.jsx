import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import React from "react";

const sublinks = [
  {
    page: "products",
    links: [
      { label: "payment", icon: <FaCreditCard />, url: "/products/payment" },
      { label: "terminal", icon: <FaCreditCard />, url: "/products/terminal" },
      { label: "connect", icon: <FaCreditCard />, url: "/connect" },
    ],
  },
  {
    page: "developers",
    links: [
      { label: "plugins", icon: <FaBook />, url: "/developers/plugins" },
      { label: "libraries", icon: <FaBook />, url: "/developers/libraries" },
      { label: "help", icon: <FaBook />, url: "/help" },
      { label: "billing", icon: <FaBook />, url: "/developers/billing" },
    ],
  },
  {
    page: "company",
    links: [
      { label: "about", icon: <FaBriefcase />, url: "/about" },
      { label: "customers", icon: <FaBriefcase />, url: "/customers" },
    ],
  },
];

export default sublinks;
