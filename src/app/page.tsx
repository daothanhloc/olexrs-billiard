import HeroSlider from "@/components/Homepage/HeroSlider";
import FeaturedProducts from "@/components/Homepage/FeaturedProducts";
import OurCustomers from "@/components/Homepage/OurCustomers";
import DesignConstruction from "@/components/Homepage/DesignConstruction";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <FeaturedProducts />
      <OurCustomers />
      <DesignConstruction />
      {/* Other homepage sections */}
    </main>
  );
}
