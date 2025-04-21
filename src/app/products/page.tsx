import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaFilter } from 'react-icons/fa';

// Örnek ürün verileri - Gerçek projede API'den gelecek
const products = [
  {
    id: 1,
    name: 'Premium Ürün A',
    image: '/images/product1.jpg',
    description: 'Yüksek kaliteli toptancı ürünü',
    price: 1200,
    category: 'premium',
  },
  {
    id: 2,
    name: 'Ekonomik Ürün B',
    image: '/images/product2.jpg',
    description: 'Uygun fiyatlı ticari ürün',
    price: 850,
    category: 'ekonomik',
  },
  {
    id: 3,
    name: 'Profesyonel Ürün C',
    image: '/images/product3.jpg',
    description: 'İşletmeler için özel tasarım',
    price: 1500,
    category: 'profesyonel',
  },
  {
    id: 4,
    name: 'Standart Ürün D',
    image: '/images/product4.jpg',
    description: 'Güvenilir ve dayanıklı',
    price: 950,
    category: 'standart',
  },
  {
    id: 5,
    name: 'Premium Ürün E',
    image: '/images/product1.jpg',
    description: 'Yüksek kaliteli toptancı ürünü',
    price: 1350,
    category: 'premium',
  },
  {
    id: 6,
    name: 'Ekonomik Ürün F',
    image: '/images/product2.jpg',
    description: 'Uygun fiyatlı ticari ürün',
    price: 780,
    category: 'ekonomik',
  },
  {
    id: 7,
    name: 'Profesyonel Ürün G',
    image: '/images/product3.jpg',
    description: 'İşletmeler için özel tasarım',
    price: 1650,
    category: 'profesyonel',
  },
  {
    id: 8,
    name: 'Standart Ürün H',
    image: '/images/product4.jpg',
    description: 'Güvenilir ve dayanıklı',
    price: 920,
    category: 'standart',
  },
];

const ProductsPage = () => {
  return (
    <div className="container-custom py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Ürünlerimiz</h1>
        <p className="text-gray-600">
          Toptancı olarak geniş ürün yelpazemizden ihtiyacınız olan ürünleri keşfedin.
        </p>
      </div>
      
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Ürün ara..."
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Tüm Kategoriler</option>
            <option value="premium">Premium</option>
            <option value="ekonomik">Ekonomik</option>
            <option value="profesyonel">Profesyonel</option>
            <option value="standart">Standart</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="default">Sıralama</option>
            <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
            <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
            <option value="name-asc">İsim: A-Z</option>
            <option value="name-desc">İsim: Z-A</option>
          </select>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="relative h-48 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
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
      
      {/* Pagination */}
      <div className="flex justify-center mt-12 gap-2">
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50">
          Önceki
        </button>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700">
          1
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
          2
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
          3
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default ProductsPage; 