import Link from 'next/link';
import { 
  FaBox, 
  FaUsers, 
  FaChartLine, 
  FaShoppingCart, 
  FaTags, 
  FaCog, 
  FaSignOutAlt 
} from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container-custom py-10">
        <h1 className="text-3xl font-bold mb-8">Admin Paneli</h1>
        
        {/* Dashboard Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <FaBox className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Toplam Ürün</p>
                <h3 className="text-2xl font-bold">120</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <FaUsers className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Toplam Kullanıcı</p>
                <h3 className="text-2xl font-bold">45</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="rounded-full bg-yellow-100 p-3 mr-4">
                <FaShoppingCart className="text-yellow-600" size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Sipariş Talepleri</p>
                <h3 className="text-2xl font-bold">8</h3>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="rounded-full bg-purple-100 p-3 mr-4">
                <FaChartLine className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Ziyaretçi</p>
                <h3 className="text-2xl font-bold">2,845</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <h2 className="text-xl font-semibold mb-4">Hızlı Erişim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <Link href="/admin/products" className="bg-white rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-blue-100 p-3 mr-4">
              <FaBox className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Ürün Yönetimi</h3>
              <p className="text-gray-500 text-sm">Ürünleri düzenle, ekle veya kaldır</p>
            </div>
          </Link>
          
          <Link href="/admin/users" className="bg-white rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <FaUsers className="text-green-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Kullanıcılar</h3>
              <p className="text-gray-500 text-sm">Kullanıcıları yönet</p>
            </div>
          </Link>
          
          <Link href="/admin/orders" className="bg-white rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-yellow-100 p-3 mr-4">
              <FaShoppingCart className="text-yellow-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Sipariş Talepleri</h3>
              <p className="text-gray-500 text-sm">Gelen talepleri incele</p>
            </div>
          </Link>
          
          <Link href="/admin/categories" className="bg-white rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-red-100 p-3 mr-4">
              <FaTags className="text-red-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Kategoriler</h3>
              <p className="text-gray-500 text-sm">Kategorileri düzenle</p>
            </div>
          </Link>
          
          <Link href="/admin/analytics" className="bg-white rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-purple-100 p-3 mr-4">
              <FaChartLine className="text-purple-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Analizler</h3>
              <p className="text-gray-500 text-sm">İstatistikleri görüntüle</p>
            </div>
          </Link>
          
          <Link href="/admin/settings" className="bg-white rounded-lg shadow-md p-6 flex items-center hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-gray-100 p-3 mr-4">
              <FaCog className="text-gray-600" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Ayarlar</h3>
              <p className="text-gray-500 text-sm">Site ayarlarını yapılandır</p>
            </div>
          </Link>
        </div>
        
        {/* Recent Activities */}
        <h2 className="text-xl font-semibold mb-4">Son Aktiviteler</h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <ul className="space-y-3">
            <li className="pb-3 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Yeni ürün eklendi: Premium Ürün Z</p>
                  <p className="text-sm text-gray-500">Ahmet Yılmaz tarafından</p>
                </div>
                <span className="text-sm text-gray-500">2 saat önce</span>
              </div>
            </li>
            <li className="pb-3 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Ürün güncellendi: Ekonomik Ürün B</p>
                  <p className="text-sm text-gray-500">Ayşe Kaya tarafından</p>
                </div>
                <span className="text-sm text-gray-500">3 saat önce</span>
              </div>
            </li>
            <li className="pb-3 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Yeni sipariş talebi</p>
                  <p className="text-sm text-gray-500">ABC Ltd. Şti. firmasından</p>
                </div>
                <span className="text-sm text-gray-500">5 saat önce</span>
              </div>
            </li>
            <li>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Fiyat güncellemesi yapıldı</p>
                  <p className="text-sm text-gray-500">Zeynep Şahin tarafından</p>
                </div>
                <span className="text-sm text-gray-500">1 gün önce</span>
              </div>
            </li>
          </ul>
        </div>
        
        {/* Exit Admin Panel */}
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors"
          >
            <FaSignOutAlt className="mr-2" /> Yönetici Panelinden Çık
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 