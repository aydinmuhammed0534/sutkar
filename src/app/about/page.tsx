import Image from 'next/image';
import { FaTrophy, FaUsers, FaStore, FaHandshake } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="container-custom py-10">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Hakkımızda</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          20 yılı aşkın deneyimimizle toptan ürün tedarikinde güvenilir çözüm ortağınız.
        </p>
      </div>
      
      {/* Company Introduction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/about-company.jpg"
            alt="Şirket Hakkında"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-4">SUTKAR Hakkında</h2>
          <p className="text-gray-600 mb-4">
            SUTKAR, 2000 yılında kurulmuş olup, toptan ticaret sektöründe öncü firmalardan biri haline gelmiştir. 
            Firmamız, müşterilerine kaliteli ürünleri uygun fiyatlarla sunma misyonuyla yola çıkmıştır.
          </p>
          <p className="text-gray-600 mb-4">
            Yıllar içinde edindiğimiz tecrübe ve geliştirdiğimiz iş ağı sayesinde, 
            müşterilerimize geniş bir ürün yelpazesi sunabilmekteyiz. 
            Kalite standartlarımızdan ödün vermeden, müşteri memnuniyetini ön planda tutarak 
            çalışmalarımızı sürdürmekteyiz.
          </p>
          <p className="text-gray-600">
            SUTKAR olarak amacımız, işletmelerin ihtiyaç duyduğu ürünleri en iyi koşullarda tedarik ederek, 
            onların başarılarına katkıda bulunmaktır. Müşterilerimizle uzun vadeli iş ilişkileri kurmak ve 
            onların güvenilir tedarikçisi olmak en büyük hedefimizdir.
          </p>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Değerlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <FaTrophy size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Kalite</h3>
            <p className="text-gray-600">
              Sunduğumuz tüm ürünlerde en yüksek kaliteyi sağlamak için çalışıyoruz.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <FaUsers size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Müşteri Odaklılık</h3>
            <p className="text-gray-600">
              Müşterilerimizin ihtiyaçlarını anlamak ve onlara özel çözümler sunmak önceliğimizdir.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <FaStore size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Güvenilirlik</h3>
            <p className="text-gray-600">
              Verdiğimiz sözleri tutarak müşterilerimizin güvenini kazanıyoruz.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <FaHandshake size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">İş Birliği</h3>
            <p className="text-gray-600">
              Tedarikçilerimiz ve müşterilerimizle uzun vadeli işbirlikleri kurmayı hedefliyoruz.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our History */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Tarihçemiz</h2>
        <div className="relative border-l-4 border-primary ml-4 pl-8 space-y-12">
          <div className="relative">
            <div className="absolute -left-12 top-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">2000 - Kuruluş</h3>
            <p className="text-gray-600">
              Şirketimiz 2000 yılında küçük bir ofiste 5 kişilik bir ekiple faaliyetlerine başladı.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-12 top-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">2005 - Büyüme</h3>
            <p className="text-gray-600">
              Artan müşteri talebine cevap verebilmek için daha büyük bir depoya taşındık ve ekibimizi genişlettik.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-12 top-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">2010 - Ürün Çeşitlendirme</h3>
            <p className="text-gray-600">
              Ürün yelpazemizi genişleterek farklı sektörlerdeki müşterilere hitap etmeye başladık.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-12 top-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
              4
            </div>
            <h3 className="text-xl font-semibold mb-2">2015 - Ulusal Pazarda Liderlik</h3>
            <p className="text-gray-600">
              Türkiye genelinde tanınan bir marka haline geldik ve sektörde lider konuma yükseldik.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-12 top-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
              5
            </div>
            <h3 className="text-xl font-semibold mb-2">2020 - Dijitalleşme</h3>
            <p className="text-gray-600">
              Online platformlar üzerinden hizmet vermeye başlayarak dijital dönüşümümüzü tamamladık.
            </p>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">Ekibimiz</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
            <div className="relative h-64 w-full">
              <Image
                src="/images/team-1.jpg"
                alt="Ekip Üyesi 1"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Ahmet Yılmaz</h3>
              <p className="text-gray-600">Genel Müdür</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
            <div className="relative h-64 w-full">
              <Image
                src="/images/team-2.jpg"
                alt="Ekip Üyesi 2"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Ayşe Kaya</h3>
              <p className="text-gray-600">Satış Müdürü</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
            <div className="relative h-64 w-full">
              <Image
                src="/images/team-3.jpg"
                alt="Ekip Üyesi 3"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Mehmet Demir</h3>
              <p className="text-gray-600">Lojistik Müdürü</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
            <div className="relative h-64 w-full">
              <Image
                src="/images/team-4.jpg"
                alt="Ekip Üyesi 4"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">Zeynep Şahin</h3>
              <p className="text-gray-600">Müşteri İlişkileri</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 