'use client'

import { useState, useEffect } from 'react'
import { MapPin, Star, Calendar, Home, Palmtree, Umbrella, Wifi, Users } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Villa } from '@/types'
import { getAllVillas } from '@/lib/api'

export default function DomesticPoolVillaPage() {
  const router = useRouter();
  const [villas, setVillas] = useState<Villa[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function fetchVillas() {
      try {
        const villaData = await getAllVillas();
        // 국내 풀빌라 데이터만 필터링 (필요한 경우)
        const domesticVillas = villaData.filter(villa => 
          villa.location.includes('제주도') || 
          villa.location.includes('강원도') || 
          villa.location.includes('경기도') ||
          villa.location.includes('전라남도') ||
          villa.location.includes('경상남도')
        );
        setVillas(domesticVillas);
      } catch (error) {
        console.error('빌라 데이터를 가져오는 중 오류 발생:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchVillas();
  }, []);

  // 로딩 상태 표시
  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-teal-500 to-emerald-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">국내 풀빌라</h1>
            <p className="text-xl mb-6">프라이빗한 공간에서 즐기는 럭셔리한 휴식</p>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                제주도, 강원도, 가평, 여수
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                프라이빗 풀 & 럭셔리 빌라
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Villas Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">추천 국내 풀빌라</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              가족, 연인, 친구들과 함께 프라이빗한 공간에서 특별한 추억을 만들 수 있는 럭셔리 풀빌라
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {villas.map((villa) => (
              <div 
                key={villa.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full cursor-pointer"
                onClick={() => router.push(`/package/domestic-villa-${villa.id}`)}
              >
                <div className="relative h-48 bg-gradient-to-r from-teal-500 to-emerald-600 flex-shrink-0">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{villa.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{villa.name}</h3>
                  <div className="flex items-center gap-1 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{villa.location}</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {villa.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <span className="text-xl font-bold text-teal-600">
                        {villa.price}원
                      </span>
                      <span className="text-gray-500 text-xs">/ 1박</span>
                    </div>
                    <div className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                      상세보기
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">풀빌라의 특별함</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              프라이빗한 공간에서 누리는 특별한 서비스와 편안한 휴식
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">프라이빗 공간</h3>
              <p className="text-gray-600 text-sm">
                독립된 공간에서 방해받지 않는 완벽한 프라이버시
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Umbrella className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">전용 수영장</h3>
              <p className="text-gray-600 text-sm">
                계절에 관계없이 즐길 수 있는 개인 전용 풀
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">스마트 시설</h3>
              <p className="text-gray-600 text-sm">
                최신 스마트홈 시스템과 고급 엔터테인먼트 시설
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">맞춤형 서비스</h3>
              <p className="text-gray-600 text-sm">
                셰프, 버틀러 등 요청 시 이용 가능한 특별 서비스
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
