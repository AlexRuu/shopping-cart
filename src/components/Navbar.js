import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { links } from "../data";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { cart } = useGlobalContext();
  const [showLinks, setShowLinks] = useState(false);
  const [path, setPath] = useState("/");
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const amountSum = cart.reduce((accumulator, obj) => {
    return accumulator + obj.amount;
  }, 0);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setPath(null);
    } else {
      setPath(location.pathname);
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
          <div className="right-nav">
            <Link to="/cart">
              <BsBag className="bag-icon" size={28.8} width="2rem" />
            </Link>
            <div className="amount-container">
              {amountSum !== 0 ? (
                <p className="total-amount">{amountSum}</p>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
