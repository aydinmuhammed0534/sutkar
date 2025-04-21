import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="container-custom py-10">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">İletişim</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Her türlü soru, öneri ve talepleriniz için bizimle iletişime geçebilirsiniz.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">İletişim Formu</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Adınız Soyadınız*</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Adınız Soyadınız"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">E-posta Adresiniz*</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="E-posta adresiniz"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 mb-2">Telefon Numaranız</label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Telefon numaranız"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 mb-2">Konu*</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Mesajınızın konusu"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Mesajınız*</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Mesajınızı buraya yazabilirsiniz..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-primary text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
            >
              Gönder
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">İletişim Bilgilerimiz</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-primary w-6 h-6 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold mb-1">Adres</h3>
                <p className="text-gray-600">Örnek Mahallesi, Satış Caddesi No:123, Beşiktaş / İstanbul</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaPhone className="text-primary w-6 h-6 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold mb-1">Telefon</h3>
                <p className="text-gray-600">+90 (212) 123 45 67</p>
                <p className="text-gray-600">+90 (532) 123 45 67</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaEnvelope className="text-primary w-6 h-6 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold mb-1">E-posta</h3>
                <p className="text-gray-600">info@sutkar.com</p>
                <p className="text-gray-600">satis@sutkar.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaClock className="text-primary w-6 h-6 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold mb-1">Çalışma Saatleri</h3>
                <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                <p className="text-gray-600">Cumartesi: 09:00 - 13:00</p>
                <p className="text-gray-600">Pazar: Kapalı</p>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="mt-8">
            <h3 className="font-semibold mb-3">Sosyal Medya</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-primary hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Google Map */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Bizi Ziyaret Edin</h2>
        <div className="h-96 rounded-lg overflow-hidden shadow-md bg-gray-200">
          {/* Google Maps iframe or component would go here */}
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-500">Google Harita burada görüntülenecek</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 