"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      setIsDarkMode(isDark);
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <img
              src={isDarkMode ? "/newlogocombo.svg" : "/hotnewdark.svg"}
              alt="Homeland Cable Logo"
              className={styles.logoImage}
              style={{ height: "2em", marginRight: "0.5em", verticalAlign: "middle" }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <Link href="/dashboard" className={styles.navLink}>
              Dashboard
            </Link>
            <Link href="/login" className={styles.navLink}>
              Login
            </Link>
            <Link href="/signup" className={styles.navLink}>
              Sign Up
            </Link>
            <ThemeToggle variant="navbar" />
          </div>

          {/* Mobile Menu Button */}
          <button className={styles.mobileMenuButton} onClick={toggleMenu}>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/services" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link href="/support" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
            Support
          </Link>
          <Link href="/book-appointment" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
            Book Appointment
          </Link>
          <Link href="/dashboard" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
            Dashboard
          </Link>
          <Link href="/login" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
            Login
          </Link>
          <Link href="/signup" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
            Sign Up
          </Link>
          <div className={styles.mobileThemeToggle}>
            <ThemeToggle variant="navbar" />
          </div>
        </div>
      </nav>

      {/* Secondary Navbar */}
      <nav className={styles.secondaryNavbar}>
        <div className={styles.container}>
          <div className={styles.secondaryDesktopMenu}>
            <Link href="/services" className={styles.secondaryNavLink}>
              Services
            </Link>
            <Link href="/support" className={styles.secondaryNavLink}>
              Support
            </Link>
            <Link href="/book-appointment" className={styles.secondaryNavLink}>
              Book Appointment
            </Link>
            <Link href="/pay-bill" className={styles.payBillLink}>
              Pay My Bill
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 