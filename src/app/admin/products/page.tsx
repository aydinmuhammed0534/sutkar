import Link from 'next/link';
import Image from 'next/image';
import { FaPlus, FaEdit, FaTrash, FaArrowLeft, FaSearch } from 'react-icons/fa';

// Örnek ürün verileri
const products = [
  {
    id: 1,
    name: 'Premium Ürün A',
    image: '/images/product1.jpg',
    price: 1200,
    category: 'premium',
    stock: 150,
  },
  {
    id: 2,
    name: 'Ekonomik Ürün B',
    image: '/images/product2.jpg',
    price: 850,
    category: 'ekonomik',
    stock: 250,
  },
  {
    id: 3,
    name: 'Profesyonel Ürün C',
    image: '/images/product3.jpg',
    price: 1500,
    category: 'profesyonel',
    stock: 120,
  },
  {
    id: 4,
    name: 'Standart Ürün D',
    image: '/images/product4.jpg',
    price: 950,
    category: 'standart',
    stock: 180,
  },
  {
    id: 5,
    name: 'Premium Ürün E',
    image: '/images/product1.jpg',
    price: 1350,
    category: 'premium',
    stock: 75,
  },
];

const AdminProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container-custom py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <Link href="/admin" className="inline-flex items-center text-primary hover:underline mb-4 md:mb-0">
              <FaArrowLeft className="mr-2" /> Dashboard'a Dön
            </Link>
            <h1 className="text-3xl font-bold mt-2">Ürün Yönetimi</h1>
          </div>
          <Link
            href="/admin/products/add"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
          >
            <FaPlus className="mr-2" /> Yeni Ürün Ekle
          </Link>
        </div>
        
        {/* Search & Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
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
        </div>
        
        {/* Product List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ürün</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fiyat</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stok</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-md"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">ID: {product.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.price} ₺
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`${
                      product.stock > 50 ? 'text-green-800 bg-green-100' : 'text-orange-800 bg-orange-100'
                    } px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}>
                      {product.stock}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Link 
                        href={`/admin/products/edit/${product.id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <FaEdit />
                      </Link>
                      <button 
                        className="text-red-600 hover:text-red-900"
                        onClick={() => console.log(`Delete product ${product.id}`)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
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
            Sonraki
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProductsPage; 