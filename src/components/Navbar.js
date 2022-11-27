import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links } from "../data";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [path, setPath] = useState("/");
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setPath(null);
    } else {
      setPath(location.pathname);
      console.log(location.pathname);
    }
  }, [location.pathname]);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  if (!path) {
    return null;
  }

  if (path) {
    return (
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="letter-logo">
              clurr's.studio
            </Link>
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, name } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
