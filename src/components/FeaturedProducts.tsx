"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Örnek ürün verileri
const featuredProducts = [
  {
    id: 1,
    name: 'Premium Ürün A',
    image: '/images/product1.jpg',
    description: 'Yüksek kaliteli toptancı ürünü',
    price: 1200,
  },
  {
    id: 2,
    name: 'Ekonomik Ürün B',
    image: '/images/product2.jpg',
    description: 'Uygun fiyatlı ticari ürün',
    price: 850,
  },
  {
    id: 3,
    name: 'Profesyonel Ürün C',
    image: '/images/product3.jpg',
    description: 'İşletmeler için özel tasarım',
    price: 1500,
  },
  {
    id: 4,
    name: 'Standart Ürün D',
    image: '/images/product4.jpg',
    description: 'Güvenilir ve dayanıklı',
    price: 950,
  },
];

const FeaturedProducts = () => {
  // Resim hatalarını yönetmek için state
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  // Hata durumunda alternatif resim URL'si oluşturma
  const getImageSrc = (product: any) => {
    if (imgError[product.id]) {
      return `https://placehold.co/400x300?text=${encodeURIComponent(product.name)}`;
    }
    return product.image;
  };

  return (
    <section className="container-custom py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Öne Çıkan Ürünlerimiz</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          En çok tercih edilen ürünlerimizi keşfedin. Tüm ürünlerimizde kalite ve uygun fiyat garantisi sunuyoruz.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="relative h-48 w-full">
              <Image
                src={getImageSrc(product)}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                onError={() => {
                  setImgError(prev => ({
                    ...prev,
                    [product.id]: true
                  }));
                }}
              />
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-bold">{product.price} ₺</span>
                <Link 
                  href={`/products/${product.id}`}
                  className="bg-primary text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors"
                >
                  Detaylar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Link 
          href="/products"
          className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
        >
          Tüm Ürünleri Gör
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts; 