'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Star, Calendar, Crown, Ship, Anchor } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LuxuryCruisePage() {
  const router = useRouter();
  const cruises = [
    {
      id: 'luxury-cruise-1',
      name: '지중해 럭셔리 크루즈',
      location: '지중해',
      image: '/images/cruise-mediterranean.jpg',
      rating: 5,
      price: '₩4,200,000',
      features: ['스위트룸', '미슐랭 레스토랑', '개인 발코니'],
    },
    {
      id: 'luxury-cruise-2',
      name: '카리브해 프리미엄 크루즈',
      location: '카리브해',
      image: '/images/cruise-caribbean.jpg',
      rating: 5,
      price: '₩3,800,000',
      features: ['오션뷰 스위트', '프라이빗 풀', '버틀러 서비스'],
    },
    {
      id: 'luxury-cruise-3',
      name: '노르웨이 피오르드 크루즈',
      location: '노르웨이',
      image: '/images/cruise-norway.jpg',
      rating: 5,
      price: '₩5,500,000',
      features: ['파노라마 스위트', '스파', '자연 관찰'],
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-navy-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">럭셔리 크루즈</h1>
            <p className="text-xl mb-6">세계 최고급 크루즈선에서 펼쳐지는 특별한 해상 여행</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                지중해, 카리브해, 북극, 남극
              </span>
              <span className="flex items-center gap-1">
                <Crown className="w-4 h-4" />
                프리미엄 크루즈 라이너
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Cruises Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">프리미엄 크루즈 패키지</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              세계 각지의 아름다운 바다를 항해하며 즐기는 최고급 크루즈 여행
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cruises.map((cruise) => (
              <div key={cruise.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <div className="w-full h-full bg-gradient-to-r from-blue-400 to-navy-600 flex items-center justify-center">
                    <span className="text-white font-semibold">{cruise.name}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Crown className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">LUXURY</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cruise.name}</h3>
                  <div className="flex items-center gap-1 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{cruise.location}</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {cruise.features.map((feature, index) => (
                        <span key={index} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{cruise.price}</span>
                      <span className="text-gray-500 text-sm">/인</span>
                    </div>
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/package/${cruise.id}`);
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

      {/* Cruise Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">럭셔리 크루즈 특징</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ship className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">최첨단 크루즈선</h3>
              <p className="text-gray-600">세계 최고 수준의 시설과 안전성을 갖춘 프리미엄 크루즈선</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="w-8 h-8 text-navy-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">다양한 항구</h3>
              <p className="text-gray-600">세계 각지의 아름다운 항구 도시들을 탐험하는 특별한 기회</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">올인클루시브</h3>
              <p className="text-gray-600">식사, 음료, 엔터테인먼트까지 모든 것이 포함된 완벽한 서비스</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
