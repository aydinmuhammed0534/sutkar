# SUTKAR Toptancı Web Sitesi

SUTKAR, toptancılar için modern ve profesyonel bir web sitesi projesidir. React ve Next.js kullanılarak geliştirilmiştir.

## Özellikler

- Responsive tasarım (mobil, tablet ve desktop uyumlu)
- Anasayfa, Hakkında, Ürünler ve İletişim sayfaları
- Ürün listeleme ve detay sayfaları
- Admin paneli ile ürün yönetimi
- MongoDB veritabanı entegrasyonu
- Cloudinary görsel yükleme sistemi
- NextAuth ile kimlik doğrulama

## Teknolojiler

- **Frontend**: React, Next.js, TailwindCSS
- **Backend**: Next.js API Routes
- **Veritabanı**: MongoDB, Mongoose
- **Kimlik Doğrulama**: NextAuth.js
- **Görsel Yönetimi**: Cloudinary
- **Simgeler**: React Icons

## Kurulum

1. Projeyi klonlayın:
   ```
   git clone https://github.com/your-username/sutkar.git
   cd sutkar
   ```

2. Bağımlılıkları yükleyin:
   ```
   npm install
   ```

3. `.env.local` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Geliştirme sunucusunu başlatın:
   ```
   npm run dev
   ```

5. Tarayıcıda `http://localhost:3000` adresine gidin

## Proje Yapısı

```
sutkar/
├── public/           # Statik dosyalar
│   └── images/       # Görsel dosyaları
├── src/              # Kaynak kodları
│   ├── app/          # Next.js App Router yapısı
│   │   ├── admin/    # Admin panel sayfaları
│   │   ├── about/    # Hakkında sayfası
│   │   ├── contact/  # İletişim sayfası
│   │   ├── products/ # Ürün sayfaları
│   │   └── api/      # API endpoint'leri
│   ├── components/   # React komponentleri
│   ├── lib/          # Yardımcı fonksiyonlar
│   └── models/       # Mongoose modelleri
└── ...
```

## Kullanım

### Admin Paneli

Admin paneline `/admin` yolundan erişebilirsiniz. Giriş yapmak için aşağıdaki bilgileri kullanabilirsiniz:

Email: admin@sutkar.com
Şifre: admin123

### Ürün Yönetimi

Admin panelinde ürün ekleme, düzenleme ve silme işlemlerini yapabilirsiniz. Ürün görselleri Cloudinary'ye yüklenir.

## Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır. 