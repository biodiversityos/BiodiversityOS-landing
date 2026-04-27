"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import SharkIcon from "../ui/SharkIcon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`} role="banner">
      <div className={styles.container}>
        <Link href="/" className={styles.logoGroup}>
          <SharkIcon
            size={32}
            color="var(--color-primary)"
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>BiodiversityOS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navigation} aria-label="Main navigation">
          <Link href="#about" className={styles.navLink}>
            About
          </Link>
          <Link href="#map" className={styles.navLink}>
            Map
          </Link>
          <Link href="#tech" className={styles.navLink}>
            Technology
          </Link>
          <Link href="#who-is-it-for" className={styles.navLink}>
            Community
          </Link>
        </nav>

        <div className={styles.actions}>
          <Link
            href="https://app.biodiversityos.org/"
            target="_blank"
            className={styles.btnOutline}
          >
            Explore the Map
          </Link>
          <Link
            href="https://app.biodiversityos.org/"
            target="_blank"
            className={styles.btnPrimary}
          >
            Report a Sighting
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div
            className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <Link
            href="#about"
            className={styles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#map"
            className={styles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Map
          </Link>
          <Link
            href="#tech"
            className={styles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Technology
          </Link>
          <Link
            href="#who-is-it-for"
            className={styles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Community
          </Link>

          <div className={styles.mobileActions}>
            <Link
              href="#map"
              className={styles.mobileBtnOutline}
              onClick={() => setIsMenuOpen(false)}
            >
              Explore the Map
            </Link>
            <Link
              href="#report"
              className={styles.mobileBtnPrimary}
              onClick={() => setIsMenuOpen(false)}
            >
              Report a Sighting
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
