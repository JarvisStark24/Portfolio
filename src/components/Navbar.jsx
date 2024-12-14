import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"; // Import social media icons

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Sandip &nbsp;
            <span className="sm:block hidden"> | Kumar Das</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Social Media Links (Desktop View) */}
        <div className="hidden sm:flex gap-6">
          <a href="https://www.facebook.com/profile.php?id=61555990483036" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-2xl hover:text-secondary" />
          </a>
          <a href="https://www.instagram.com/code_with.jarvis/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl hover:text-secondary" />
          </a>
          <a href="https://x.com/MeJarvis_7" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white text-2xl hover:text-secondary" />
          </a>
          <a href="https://github.com/JarvisStark24" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-2xl hover:text-secondary" />
          </a>
          <a href="https://www.linkedin.com/in/sandip798/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-2xl hover:text-secondary" />
          </a>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              {/* Social Media Links (Mobile View) */}
              <li className="flex gap-6 justify-end items-center mt-6">
                <a href="https://www.facebook.com/profile.php?id=61555990483036" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-white text-2xl hover:text-secondary" />
                </a>
                <a href="https://www.instagram.com/code_with.jarvis/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white text-2xl hover:text-secondary" />
                </a>
                <a href="https://x.com/MeJarvis_7" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-white text-2xl hover:text-secondary" />
                </a>
                <a href="https://github.com/JarvisStark24" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-white text-2xl hover:text-secondary" />
                </a>
                <a href="https://www.linkedin.com/in/sandip798/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-white text-2xl hover:text-secondary" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
