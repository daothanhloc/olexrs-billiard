"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaSearch,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          <div className={styles.contactInfo}>
            <span>
              <FaEnvelope className={styles.icon} /> OLEX-RS-BILLIARDS@GMAIL.COM
            </span>
            <span>
              <FaPhoneAlt className={styles.icon} /> MUA HÀNG- CSKH:
              0976.983.983
            </span>
          </div>
          <div className={styles.topBarLinks}>
            <a href="#">HỢP TÁC ĐẠI LÍ</a>
            <button className={styles.searchButton}>
              <FaSearch className={styles.icon} /> Tìm kiếm sản phẩm
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.mainNav}>
        <div className={`container ${styles.mainNavContainer}`}>
          <div className={styles.logo}>
            {/* TODO: Replace with actual logo image */}
            <Link href="/">OLEX-RS BILLIARDS</Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <Link href="#">BÀN BI-A</Link>
            </li>
            <li>
              <Link href="#">PHỤ KIỆN</Link>
            </li>
            <li>
              <Link href="#">DỊCH VỤ</Link>
            </li>
            <li>
              <Link href="/#our-customers">KHÁCH HÀNG</Link>
            </li>
            <li>
              <Link href="#">VỀ CHÚNG TÔI</Link>
            </li>
            <li>
              <Link href="#">FEEDBACK</Link>
            </li>
            <li>
              <Link href="#">CHÍNH SÁCH</Link>
            </li>
            <li>
              <Link href="#">TIN TỨC</Link>
            </li>
          </ul>
          <div className={styles.rightNav}>
            <div className={styles.cartInfo}>
              <FaShoppingBag className={styles.icon} />
              <span className={styles.cartText}>Giỏ hàng</span>
            </div>
            <button
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <button
          className={styles.closeButton}
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>
        <ul>
          <li>
            <Link href="#" onClick={toggleMobileMenu}>
              BÀN BI-A
            </Link>
          </li>
          <li>
            <Link href="#" onClick={toggleMobileMenu}>
              PHỤ KIỆN
            </Link>
          </li>
          <li>
            <Link href="#" onClick={toggleMobileMenu}>
              DỊCH VỤ
            </Link>
          </li>
          <li>
            <Link href="/#our-customers" onClick={toggleMobileMenu}>
              KHÁCH HÀNG
            </Link>
          </li>
          <li>
            <Link href="#" onClick={toggleMobileMenu}>
              VỀ CHÚNG TÔI
            </Link>
          </li>
          <li>
            <Link href="#" onClick={toggleMobileMenu}>
              FEEDBACK
            </Link>
          </li>
          <li>
            <Link href="#" onClick={toggleMobileMenu}>
              CHÍNH SÁCH
            </Link>
          </li>
          <li>
            <Link href="#" onClick={toggleMobileMenu}>
              TIN TỨC
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
