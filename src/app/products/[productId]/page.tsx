import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById } from "@/data/products"; // Removed unused Product type import
import styles from "./page.module.css"; // Create this CSS module next

interface ProductDetailPageProps {
  params: {
    productId: string; // This matches the folder name [productId]
  };
}

// Helper to format currency
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productId = parseInt(params.productId, 10);

  // Basic validation
  if (isNaN(productId)) {
    notFound();
  }

  const product = getProductById(productId);

  // If product doesn't exist, show 404
  if (!product) {
    notFound();
  }

  return (
    <main className={styles.productDetailPage}>
      <div className="container">
        <div className={styles.grid}>
          {/* Image Gallery/Main Image */}
          <div className={styles.imageSection}>
            {/* Basic single image display - Enhance with gallery/slider later if needed */}
            <Image
              src={product.imageUrl} // Or use product.images?.[0]
              alt={product.name}
              width={600} // Adjust as needed
              height={450}
              className={styles.mainImage}
              priority // Prioritize loading main product image
            />
            {/* Optional: Thumbnail slider if product.images exists */}
          </div>

          {/* Product Information */}
          <div className={styles.infoSection}>
            <h1 className={styles.productName}>{product.name}</h1>
            <span className={styles.category}>{product.category}</span>

            {/* Pricing */}
            <div className={styles.priceContainer}>
              <span className={styles.price}>
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice && (
                <span className={styles.originalPrice}>
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
              {product.discount && (
                <span className={styles.discountBadge}>
                  -{product.discount}%
                </span>
              )}
            </div>

            {/* TODO: Add Rating display */}
            {/* TODO: Add Quantity Selector */}

            {/* Purchase Button */}
            <Link href="/purchase-info" className={styles.purchaseLink}>
              <button className={styles.purchaseButton}>Mua hàng</button>
            </Link>

            {/* Short Description */}
            {product.description && (
              <div className={styles.description}>
                <p>{product.description}</p>
              </div>
            )}

            {/* TODO: Add Tabs for Full Description, Specs, Reviews */}
          </div>
        </div>

        {/* Optional: Full description section below */}
        {/* <div className={styles.fullDescriptionSection}>
           <h2>Mô tả chi tiết</h2>
           <p>Longer description content here...</p>
         </div> */}
      </div>
    </main>
  );
}

// Optional: Generate static paths if you know all product IDs beforehand
// export async function generateStaticParams() {
//   const products = mockProducts; // Or fetch all products
//   return products.map((product) => ({
//     productId: product.id.toString(),
//   }));
// }
