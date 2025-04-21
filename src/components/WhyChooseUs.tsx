"use client";
import { FaTruck, FaMoneyBillWave, FaHandshake, FaBoxOpen } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaTruck className="text-4xl text-primary mx-auto mb-4" />,
      title: 'Hızlı Teslimat',
      description: 'Siparişleriniz en hızlı şekilde hazırlanıp sevk edilir. Zamanında teslimat garantisi veriyoruz.',
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-primary mx-auto mb-4" />,
      title: 'Rekabetçi Fiyatlar',
      description: 'Toptan alımlarınızda en uygun fiyatları sunuyoruz. Fiyat garantisi ve özel kampanyalarımızdan yararlanın.',
    },
    {
      icon: <FaHandshake className="text-4xl text-primary mx-auto mb-4" />,
      title: 'Güvenilir İş Ortaklığı',
      description: 'Yıllardır süregelen tecrübemizle güvenilir bir tedarikçi olarak iş ortaklarımızın yanındayız.',
    },
    {
      icon: <FaBoxOpen className="text-4xl text-primary mx-auto mb-4" />,
      title: 'Geniş Ürün Yelpazesi',
      description: 'Binlerce ürün çeşidi ile tüm ihtiyaçlarınıza tek bir adresten çözüm sunuyoruz.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sutkar olarak toptancı müşterilerimize sunduğumuz avantajlar ve fark yaratan hizmetlerimiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              {reason.icon}
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 