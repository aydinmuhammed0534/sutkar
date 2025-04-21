"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const HeroSection = () => {
  const [imgSrc, setImgSrc] = useState<string>('/images/hero-bg.jpg');

  return (
    <section className="relative h-[70vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imgSrc}
          alt="Toptancı Ürünleri"
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="brightness-50"
          onError={() => {
            setImgSrc('https://placehold.co/1920x1080?text=Toptan+Urun+Satisi');
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Toptan Ürün Satışında Güvenilir Adres
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Kaliteli ürünler, uygun fiyatlar ve hızlı teslimat ile toptan alışverişin adresi.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors">
              Ürünleri Keşfet
            </Link>
            <Link href="/contact" className="bg-transparent hover:bg-white hover:text-primary text-white border border-white px-6 py-3 rounded-md transition-colors">
              Bizimle İletişime Geç
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 