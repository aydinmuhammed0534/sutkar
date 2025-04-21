import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      <HeroSection />
      <FeaturedProducts />
      <WhyChooseUs />
      
      <section className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Toptan Satış Hizmetimiz</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Yılların verdiği tecrübe ile toptan satış alanında müşterilerimize en kaliteli ürünleri 
            en uygun fiyatlarla sunmaktayız.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Bizimle Çalışmanın Avantajları</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Geniş ürün yelpazesi</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Uygun fiyat garantisi</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Hızlı teslimat</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Profesyonel destek</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <Link href="/products" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Ürünleri Keşfet
              </Link>
            </div>
          </div>
          
          <div className="relative h-80 w-full rounded-lg overflow-hidden">
            <Image 
              src="/images/wholesale.jpg" 
              alt="Toptan Satış" 
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
} 