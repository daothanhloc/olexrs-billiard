"use client"; // Swiper requires client-side rendering

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Added Navigation and Autoplay
import SectionTitle from "../Shared/SectionTitle"; // Import SectionTitle

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import 'swiper/css/pagination'; // Pagination might not be needed here

import styles from "./DesignConstruction.module.css";

// Mock data - replace with actual customer data
const customers = [
  {
    id: 1,
    name: "Club Bida",
    address: "281 Hoàng Quốc Việt, Ngọc Sơn, Kiến An, Hải Phòng",
    imageUrl: "/images/customer-logo-placeholder.png",
  },
  {
    id: 2,
    name: "Vilings Club Bida",
    address: "Ga Lạc Đạo – Văn Lâm – Hưng Yên",
    imageUrl: "/images/customer-logo-placeholder.png",
  },
  {
    id: 3,
    name: "Fortune Club",
    address: "200 Long Biên, Hà Nội",
    imageUrl: "/images/customer-logo-placeholder.png",
  },
  {
    id: 4,
    name: "POX - Club Bida",
    address: "957-959 Quang Trung, Gò Vấp, TPHCM",
    imageUrl: "/images/customer-logo-placeholder.png",
  },
  {
    id: 5,
    name: "Customer 5",
    address: "Address 5",
    imageUrl: "/images/customer-logo-placeholder.png",
  },
  {
    id: 6,
    name: "Customer 6",
    address: "Address 6",
    imageUrl: "/images/customer-logo-placeholder.png",
  },
  {
    id: 7,
    name: "Customer 7",
    address: "Address 7",
    imageUrl: "/images/customer-logo-placeholder.png",
  },
  {
    id: 8,
    name: "Customer 8",
    address: "Address 8",
    imageUrl: "/images/customer-logo-placeholder.png",
  },
  {
    id: 9,
    name: "Customer 9",
    address: "Address 9",
    imageUrl: "/images/customer-logo-placeholder.png",
  },
  {
    id: 10,
    name: "Customer 10",
    address: "Address 10",
    imageUrl: "/images/customer-logo-placeholder.png",
  },
];

const DesignConstruction = () => {
  return (
    <section className={styles.designConstruction}>
      <div className="container">
        {/* Use SectionTitle component */}
        <SectionTitle>Thiết kế và thi công</SectionTitle>
        {/* Swiper component */}
        <Swiper
          modules={[Navigation, Autoplay]} // Enable modules
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Default: 1 slide per view (mobile)
          navigation // Enable navigation arrows
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true, // Stop autoplay on interaction
          }}
          breakpoints={{
            // when window width is >= 768px (tablets)
            768: {
              slidesPerView: 2, // Show 2 slides
              spaceBetween: 30,
            },
            // when window width is >= 1024px (laptops/desktops)
            1024: {
              slidesPerView: 2, // Still 2 slides, maybe adjust space
              spaceBetween: 40,
            },
          }}
          className={styles.swiperContainer} // Add a class for styling the container
        >
          {customers.map((customer) => (
            <SwiperSlide key={customer.id} className={styles.slide}>
              {/* Apply background image to customerItem */}
              <div
                className={styles.customerItem}
                style={{ backgroundImage: `url(${customer.imageUrl})` }}
              >
                {/* Overlay for text readability */}
                <div className={styles.itemOverlay}>
                  <div className={styles.customerInfo}>
                    <h4 className={styles.customerName}>{customer.name}</h4>
                    <p className={styles.customerAddress}>
                      <strong>Địa chỉ:</strong> {customer.address}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DesignConstruction;
