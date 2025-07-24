"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img
            src="/HOT-logo.svg"
            alt="Homeland Cable Logo"
            className={styles.logoImage}
            style={{ height: "2em", marginRight: "0.5em", verticalAlign: "middle" }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <Link href="/internet" className={styles.navLink}>
            Internet
          </Link>
          <Link href="/tv" className={styles.navLink}>
            TV
          </Link>
          <Link href="/bundles" className={styles.navLink}>
            Bundles
          </Link>
          <Link href="/support" className={styles.navLink}>
            Support
          </Link>
          <Link href="/support" className={styles.navLink}>
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/internet" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
            Internet
          </Link>
          <Link href="/tv" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
            TV
          </Link>
          <Link href="/bundles" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
            Bundles
          </Link>
          <Link href="/support" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
            Support
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 