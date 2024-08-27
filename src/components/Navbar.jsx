import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navBackground, setNavBackground] = useState(false);
    const navbarRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavBackground(true);
        } else {
            setNavBackground(false);
        }
    };

    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className={`navbar ${navBackground ? "navbar--scrolled" : ""}`} ref={navbarRef}>
            <div className="navbar__logo">
                <IoFastFood size={50} color={navBackground ? "#e75728" : "#fff"} />
                <Link to="/" className='logoname' style={{ color: navBackground ? "#e75728" : "#fff" }}>
                    SAVORYBITES
                </Link>
            </div>
            <div className={`navbar__links ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><Link to="/" style={{ color: navBackground ? "#e75728" : "#fff" }}>Home</Link></li>
                    <li><Link to="/about" style={{ color: navBackground ? "#e75728" : "#fff" }}>About</Link></li>
                    <li><Link to="/menu" style={{ color: navBackground ? "#e75728" : "#fff" }}>Menu</Link></li>
                    <li><Link to="/contact" style={{ color: navBackground ? "#e75728" : "#fff" }}>Contact</Link></li>
                </ul>
            </div>
            <div className="navbar__toggle" onClick={toggleMenu}>
                {isOpen ? <FaTimes size={25} color={navBackground ? "#e75728" : "#fff"} /> : <FaBars size={25} color={navBackground ? "#e75728" : "#fff"} />}
            </div>
            <div className={`navbar__overlay ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="navbar__menu">
                    <ul>
                        <li><Link to="/" style={{ color: navBackground ? "#e75728" : "#fff" }}>Home</Link></li>
                        <li><Link to="/about" style={{ color: navBackground ? "#e75728" : "#fff" }}>About</Link></li>
                        <li><Link to="/menu" style={{ color: navBackground ? "#e75728" : "#fff" }}>Menu</Link></li>
                        <li><Link to="/contact" style={{ color: navBackground ? "#e75728" : "#fff" }}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
