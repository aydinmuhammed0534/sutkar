"use client";
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SUTKAR</h3>
            <p className="mb-4">
              Profesyonel toptancılık hizmeti ile 20 yılı aşkın süredir müşterilerimize en kaliteli ürünleri sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Anasayfa</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">Hakkımızda</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">Ürünlerimiz</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">İletişim</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim Bilgileri</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1" />
                <span>Örnek Mahallesi, Satış Caddesi No:123, İstanbul</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <span>+90 (212) 123 45 67</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <span>info@sutkar.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} SUTKAR. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 