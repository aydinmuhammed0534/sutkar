import Link from 'next/link';
import { FaArrowLeft, FaUpload } from 'react-icons/fa';

const AddProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container-custom py-10">
        {/* Header */}
        <div className="mb-8">
          <Link href="/admin/products" className="inline-flex items-center text-primary hover:underline mb-4">
            <FaArrowLeft className="mr-2" /> Ürün Listesine Dön
          </Link>
          <h1 className="text-3xl font-bold mt-2">Yeni Ürün Ekle</h1>
        </div>
        
        {/* Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form>
            {/* Basic Info */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Temel Bilgiler</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ürün Adı*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ürün adını girin"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Kategori*
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Kategori Seçin</option>
                    <option value="premium">Premium</option>
                    <option value="ekonomik">Ekonomik</option>
                    <option value="profesyonel">Profesyonel</option>
                    <option value="standart">Standart</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                    Fiyat (₺)*
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="0.00"
                  />
                </div>
                
                <div>
                  <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-2">
                    Stok Miktarı*
                  </label>
                  <input
                    id="stock"
                    name="stock"
                    type="number"
                    required
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="0"
                  />
                </div>
                
                <div>
                  <label htmlFor="minOrder" className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Sipariş Miktarı*
                  </label>
                  <input
                    id="minOrder"
                    name="minOrder"
                    type="number"
                    required
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="1"
                  />
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Ürün Açıklaması</h2>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Açıklama*
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ürün açıklamasını girin"
                ></textarea>
              </div>
            </div>
            
            {/* Features */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Ürün Özellikleri</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Özellikler
                </label>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        name={`feature-${index}`}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={`Özellik ${index}`}
                      />
                      {index > 1 && (
                        <button
                          type="button"
                          className="bg-red-100 text-red-600 p-2 rounded-md hover:bg-red-200"
                        >
                          Sil
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="mt-2 text-primary hover:text-blue-700"
                >
                  + Özellik Ekle
                </button>
              </div>
            </div>
            
            {/* Specifications */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Teknik Özellikler</h2>
              <div className="space-y-2">
                {['Boyut', 'Ağırlık', 'Malzeme', 'Menşei', 'Garanti'].map((spec, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={spec}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                    />
                    <input
                      type="text"
                      name={`spec-value-${index}`}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder={`${spec} değeri`}
                    />
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="mt-2 text-primary hover:text-blue-700"
              >
                + Teknik Özellik Ekle
              </button>
            </div>
            
            {/* Images */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Ürün Görselleri</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="space-y-2 mb-4">
                  <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="text-gray-700">Yüklemek için görselleri sürükleyin veya seçin</p>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF (Maks. 5MB)</p>
                </div>
                <div>
                  <label
                    htmlFor="file-upload"
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer transition-colors"
                  >
                    Dosya Seç
                  </label>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    multiple
                    className="hidden"
                  />
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-end gap-4">
              <Link
                href="/admin/products"
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
              >
                İptal
              </Link>
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Ürünü Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage; 