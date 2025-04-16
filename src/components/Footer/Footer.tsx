import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa"; // Basic icons
import { SiZalo } from "react-icons/si"; // Zalo Icon

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        {/* Optional Top Section - e.g., Newsletter/Agent */}
        {/* <div className={styles.footerTop}>
          <h4>TRỞ THÀNH ĐẠI LÍ</h4>
          <h4>NHẬN BẢN TIN</h4>
        </div> */}

        <div className={styles.footerGrid}>
          {/* Column 1: Contact Info */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Liên hệ với chúng tôi</h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.icon} />
                <strong>Trụ sở:</strong> Phố Ga - Lạc Đạo - Văn Lâm - Hưng Yên
              </p>
              <p className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.icon} />
                <strong>Chi nhánh:</strong> 281 Hoàng Quốc Việt - Kiến An - Hải
                Phòng
              </p>
              <p className={styles.contactItem}>
                <FaPhoneAlt className={styles.icon} />
                0976.983.983 / 0857.983.983
              </p>
              <p className={styles.contactItem}>
                <FaEnvelope className={styles.icon} />
                <a href="mailto:olexrsbilliards@gmail.com">
                  olexrsbilliards@gmail.com
                </a>
              </p>
              <p className={styles.contactItem}>
                <FaClock className={styles.icon} />
                08h00 - 22h00
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Hỗ trợ</h4>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="#" className={styles.navLink}>
                  HƯỚNG DẪN ĐẶT HÀNG
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="#" className={styles.navLink}>
                  HƯỚNG DẪN THANH TOÁN
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="#" className={styles.navLink}>
                  CÂU HỎI THƯỜNG GẶP
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Chính sách</h4>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="#" className={styles.navLink}>
                  CHÍNH SÁCH MUA HÀNG
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="#" className={styles.navLink}>
                  CHÍNH SÁCH HỢP TÁC
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="#" className={styles.navLink}>
                  CHÍNH SÁCH BẢO HÀNH
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Optional - Social/Map Links? */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Mạng xã hội</h4>
            <div className={styles.socialLinks}>
              <a
                href="#"
                aria-label="Facebook"
                className={styles.socialIconLink}
              >
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Zalo" className={styles.socialIconLink}>
                <SiZalo />
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className={styles.socialIconLink}
              >
                <FaYoutube />
              </a>
              {/* Add Map link maybe? */}
            </div>
            {/* You could also embed a small map here if desired */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.footerBottom}>
        <div className="container">
          <p>Copyright {new Date().getFullYear()} © by OLEX-RSBILLARDS</p>
        </div>
      </div>

      {/* TODO: Floating Contact Icons - Implement separately if needed */}
      {/* <div className={styles.floatingIcons}>
         ... icons for map, fanpage, zalo, phone ...
      </div> */}
    </footer>
  );
};

export default Footer;
