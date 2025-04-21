import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaShoppingCart, FaTruck, FaShieldAlt } from 'react-icons/fa';

// Örnek ürün verileri (normalde veritabanından çekiliyor olacak)
const products = [
  {
    id: 1,
    name: 'Premium Ürün A',
    image: '/images/product1.jpg',
    description: 'Yüksek kaliteli toptancı ürünü. Profesyonel kullanım için tasarlanmış, dayanıklı ve uzun ömürlü bir üründür. İşletmenizin ihtiyaçlarını karşılamak için ideal çözüm sunar.',
    price: 1200,
    category: 'premium',
    stock: 150,
    minOrder: 10,
    features: [
      'Yüksek dayanıklılık',
      'Premium malzeme',
      'Profesyonel kullanım',
      'Uzun ömürlü',
      'Kolay temizlenebilir'
    ],
    specifications: {
      'Boyut': '120 x 80 x 45 cm',
      'Ağırlık': '8.5 kg',
      'Malzeme': 'Endüstriyel Plastik',
      'Menşei': 'Türkiye',
      'Garanti': '2 Yıl'
    }
  },
  {
    id: 2,
    name: 'Ekonomik Ürün B',
    image: '/images/product2.jpg',
    description: 'Uygun fiyatlı ticari ürün. Kaliteden ödün vermeden ekonomik çözüm arayanlar için ideal. Temel ihtiyaçlarınızı karşılamak için tasarlanmıştır.',
    price: 850,
    category: 'ekonomik',
    stock: 250,
    minOrder: 15,
    features: [
      'Uygun fiyat',
      'Temel kullanım',
      'Kompakt tasarım',
      'Hafif yapı',
      'Standart malzeme'
    ],
    specifications: {
      'Boyut': '90 x 60 x 30 cm',
      'Ağırlık': '5.2 kg',
      'Malzeme': 'Standart Plastik',
      'Menşei': 'Türkiye',
      'Garanti': '1 Yıl'
    }
  },
  // Diğer ürünler buraya eklenebilir
];

// Ürün ID'sine göre detayı getiren yardımcı fonksiyon
const getProductById = (id: string) => {
  const numId = parseInt(id);
  return products.find(product => product.id === numId);
};

// İlgili ürünleri getiren yardımcı fonksiyon
const getRelatedProducts = (categoryName: string, currentId: number) => {
  return products.filter(product => product.category === categoryName && product.id !== currentId).slice(0, 4);
};

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const product = getProductById(params.id);
  
  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Ürün bulunamadı</h1>
        <p className="mb-6">İstediğiniz ürün bulunamadı veya kaldırılmış olabilir.</p>
        <Link href="/products" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
          Tüm Ürünlere Dön
        </Link>
      </div>
    );
  }
  
  const relatedProducts = getRelatedProducts(product.category, product.id);
  
  return (
    <div className="container-custom py-10">
      {/* Back to Products Link */}
      <div className="mb-8">
        <Link href="/products" className="flex items-center text-primary hover:underline">
          <FaArrowLeft className="mr-2" /> Tüm Ürünlere Dön
        </Link>
      </div>
      
      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
          <Image
            src={product.image}
            alt={product.name}
            fill
            style={{ objectFit: 'cover' }}
            className="hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-primary font-bold text-2xl mb-4">{product.price} ₺</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          {/* Product Specs */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Ürün Özellikleri</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Product Specifications */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Teknik Özellikler</h3>
            <div className="bg-gray-50 p-4 rounded-md">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} className="border-b border-gray-200 last:border-0">
                      <td className="py-2 font-medium">{key}:</td>
                      <td className="py-2 text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Stock and Order Info */}
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Stok Durumu:</span>
              <span className={product.stock > 50 ? "text-green-600" : "text-orange-600"}>
                {product.stock > 0 ? `${product.stock} adet stokta` : "Stokta yok"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Minimum Sipariş:</span>
              <span>{product.minOrder} adet</span>
            </div>
          </div>
          
          {/* Order Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
              <FaShoppingCart className="mr-2" /> Toptan Teklif Al
            </button>
            <Link href="/contact" className="flex-1 border-2 border-primary text-primary py-3 px-6 rounded-md font-medium hover:bg-primary hover:text-white transition-colors text-center">
              İletişime Geç
            </Link>
          </div>
          
          {/* Shipping and Warranty */}
          <div className="mt-8 flex flex-col sm:flex-row gap-6">
            <div className="flex items-center">
              <FaTruck className="text-primary mr-3" size={20} />
              <span>Hızlı Teslimat</span>
            </div>
            <div className="flex items-center">
              <FaShieldAlt className="text-primary mr-3" size={20} />
              <span>Garanti Süresi: {product.specifications.Garanti}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Benzer Ürünler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-48 w-full">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{relatedProduct.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{relatedProduct.description.substring(0, 60)}...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">{relatedProduct.price} ₺</span>
                    <Link 
                      href={`/products/${relatedProduct.id}`}
                      className="bg-primary text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors"
                    >
                      Detaylar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage; 