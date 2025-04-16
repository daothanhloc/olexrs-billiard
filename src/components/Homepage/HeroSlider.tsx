"use client"; // Swiper requires client-side rendering

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./HeroSlider.module.css";

// Mock data for banner images - replace with actual data/CMS later
const banners = [
  {
    id: 1,
    imageUrl: "/images/banner1.jpg", // Replace with your image path
    alt: "Banner 1 Description",
  },
  {
    id: 2,
    imageUrl: "/images/banner2.jpg", // Replace with your image path
    alt: "Banner 2 Description",
  },
  {
    id: 3,
    imageUrl: "/images/banner3.jpg", // Replace with your image path
    alt: "Banner 3 Description",
  },
];

const HeroSlider = () => {
  return (
    <section className={styles.heroSlider}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Enable necessary modules
        spaceBetween={0} // No space between slides
        slidesPerView={1} // Show one slide at a time
        navigation // Enable navigation arrows
        pagination={{ clickable: true }} // Enable clickable pagination dots
        loop={true} // Enable continuous loop
        autoplay={{
          delay: 5000, // Autoplay delay in ms
          disableOnInteraction: false, // Keep autoplaying after user interaction
        }}
        className={styles.swiperContainer}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className={styles.slide}>
            <Image
              src={banner.imageUrl}
              alt={banner.alt}
              layout="fill" // Fill the container
              objectFit="contain" // Change from "cover" to "contain"
              priority={banner.id === 1} // Prioritize loading the first banner
              className={styles.bannerImage}
            />
            {/* Optional: Add text overlay or buttons here */}
            {/* <div className={styles.slideContent}>
              <h2>Title</h2>
              <p>Description</p>
              <button>Shop Now</button>
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
