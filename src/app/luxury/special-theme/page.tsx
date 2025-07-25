'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Star, Calendar, Crown, Compass, Camera } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LuxurySpecialThemePage() {
  const router = useRouter();
  const packages = [
    {
      id: 'luxury-theme-1',
      name: '오로라 프리미엄 투어',
      location: '아이슬란드/노르웨이',
      image: '/images/luxury-aurora.jpg',
      rating: 5,
      price: '₩3,800,000',
      features: ['프라이빗 가이드', '럭셔리 롯지', '오로라 전용 투어'],
    },
    {
      id: 'luxury-theme-2',
      name: '사파리 럭셔리 캠프',
      location: '케냐/탄자니아',
      image: '/images/luxury-safari.jpg',
      rating: 5,
      price: '₩4,500,000',
      features: ['텐트 럭셔리', '와일드라이프', '전문 가이드'],
    },
    {
      id: 'luxury-theme-3',
      name: '남극 탐험 크루즈',
      location: '남극',
      image: '/images/luxury-antarctica.jpg',
      rating: 5,
      price: '₩8,800,000',
      features: ['탐험선', '빙하 투어', '야생동물 관찰'],
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-indigo-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">이색 테마 럭셔리</h1>
            <p className="text-xl mb-6">일생에 한 번뿐인 특별한 모험과 경험</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                전 세계 특별 지역
              </span>
              <span className="flex items-center gap-1">
                <Crown className="w-4 h-4" />
                익스트림 럭셔리 투어
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">특별 테마 패키지</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              평범한 여행으로는 만날 수 없는 지구 최고의 자연 현상과 야생의 경험
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <div className="w-full h-full bg-gradient-to-r from-purple-400 to-indigo-600 flex items-center justify-center">
                    <span className="text-white font-semibold">{pkg.name}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Crown className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">PREMIUM</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-center gap-1 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{pkg.location}</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {pkg.features.map((feature, index) => (
                        <span key={index} className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-purple-600">{pkg.price}</span>
                      <span className="text-gray-500 text-sm">/인</span>
                    </div>
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/package/${pkg.id}`);
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

      {/* Special Experience Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">특별한 경험</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">탐험과 모험</h3>
              <p className="text-gray-600">지구 최후의 미지 지역을 탐험하는 스릴 넘치는 모험</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">자연 현상</h3>
              <p className="text-gray-600">오로라, 화산 폭발 등 지구가 선사하는 경이로운 자연 현상</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">전문 가이드</h3>
              <p className="text-gray-600">각 분야 전문가들이 함께하는 안전하고 깊이 있는 체험</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
