﻿'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Star, Calendar, Building2, Utensils, ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function HotelChinaHongkongPage() {
  const router = useRouter();
  const hotels = [
    {
      id: 'hongkong-hotel-1',
      name: '홍콩 하버뷰 호텔',
      location: '홍콩',
      image: '/images/hotel-hongkong.jpg',
      rating: 5,
      price: '320,000',
      features: ['빅토리아 하버뷰', '딤섬 레스토랑', '쇼핑몰 연결'],
    },
    {
      id: 'macau-hotel-1',
      name: '마카오 갤럭시 리조트',
      location: '마카오',
      image: '/images/hotel-macau.jpg',
      rating: 5,
      price: '380,000',
      features: ['카지노', '워터파크', '미슐랭 레스토랑'],
    },
    {
      id: 'taipei-hotel-1',
      name: '타이베이 그랜드 호텔',
      location: '타이베이, 대만',
      image: '/images/hotel-taipei.jpg',
      rating: 4.7,
      price: '280,000',
      features: ['전통 건축', '야시장 근처', '온천'],
    },
    {
      id: 'hongkong-hotel-2',
      name: '홍콩 리츠칼튼',
      location: '홍콩',
      image: '/images/hotel-hongkong2.jpg',
      rating: 4.9,
      price: '420,000',
      features: ['5성급 럭셔리', '스파', '미슐랭 다이닝'],
    },
    {
      id: 'shanghai-hotel-1',
      name: '상하이 페닌슐라 호텔',
      location: '상하이',
      image: '/images/hotel-shanghai.jpg',
      rating: 4.8,
      price: '350,000',
      features: ['번드 전망', '헤리티지 호텔', '럭셔리 스파'],
    },
    {
      id: 'beijing-hotel-1',
      name: '베이징 리젠트 호텔',
      location: '베이징',
      image: '/images/hotel-beijing.jpg',
      rating: 4.6,
      price: '290,000',
      features: ['자금성 근처', '차이나 가든', '비즈니스 시설'],
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 to-yellow-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">중국/홍콩/마카오 호텔</h1>
            <p className="text-xl mb-6">동서양 문화가 만나는 특별한 여행지에서의 숙박</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                홍콩, 마카오, 타이베이
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                최고급 호텔 & 리조트
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">추천 호텔</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              동양과 서양의 문화가 조화롭게 어우러진 특별한 도시들에서 최고의 숙박을 경험하세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => router.push(`/package/${hotel.id}`)}
              >
                <div className="relative h-48">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{hotel.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{hotel.name}</h3>
                  <div className="flex items-center gap-1 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{hotel.location}</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {hotel.features.map((feature, index) => (
                        <span key={index} className="bg-red-50 text-red-600 text-xs px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-red-600">{hotel.price}</span>
                      <span className="text-gray-500 text-xs">/박</span>
                    </div>
                    <button 
                      className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/package/${hotel.id}`);
                      }}
                    >
                      상세보기
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">문화 체험</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">미식 투어</h3>
              <p className="text-gray-600">딤섬, 야시장 음식, 미슐랭 레스토랑까지 다양한 맛의 여행</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">쇼핑 천국</h3>
              <p className="text-gray-600">면세점부터 야시장까지, 쇼핑의 모든 것을 만족시켜드립니다</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">야경 투어</h3>
              <p className="text-gray-600">빅토리아 하버와 환상적인 야경의 도시 불빛을 감상</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
