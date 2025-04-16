import React from "react";
import Image from "next/image"; // Using Next.js Image for optimization
import Link from "next/link"; // Import Link
import styles from "./FeaturedProducts.module.css";
import SectionTitle from "../Shared/SectionTitle"; // Import SectionTitle
import { mockProducts } from "@/data/products"; // Import from shared data file

// Helper to format currency (Vietnamese Dong)
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};

const FeaturedProducts = () => {
  return (
    <section className={styles.featuredProducts}>
      <div className="container">
        <SectionTitle>Sản phẩm nổi bật</SectionTitle>
        <div className={styles.grid}>
          {mockProducts.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className={styles.productLink}
            >
              <div className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  {/* Placeholder for image - replace src */}
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={300} // Provide appropriate dimensions
                    height={200} // Provide appropriate dimensions
                    className={styles.productImage}
                    // layout="responsive" // Use if needed, adjust container
                  />
                  {product.discount && (
                    <span className={styles.discountBadge}>
                      -{product.discount}%
                    </span>
                  )}
                  {/* TODO: Add Quick View button overlay */}
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.category}>{product.category}</span>
                  <h3 className={styles.productName}>{product.name}</h3>
                  {/* TODO: Add rating display */}
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>
                      {formatCurrency(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className={styles.originalPrice}>
                        {formatCurrency(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
