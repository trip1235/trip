// packagesData.js - ESM 호환 버전

export const packagesData = [
  {
    id: 1,
    name: "일본 도쿄 5일 패키지",
    destination: "일본 도쿄",
    description: "일본의 수도 도쿄에서 현대적인 도시 경관과 전통 문화를 모두 경험해보세요. 도쿄 타워, 아사쿠사 사원, 메이지 신궁 등 주요 명소를 방문하고 현지 음식을 즐길 수 있는 5일 일정입니다.",
    price: "₩1,299,000",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2936&auto=format&fit=crop",
    type: "인기 여행지",
    rating: 4.8,
    duration: "5일 4박",
    departureDate: ["2025-07-15", "2025-07-29", "2025-08-12", "2025-08-26"],
    groupSize: "최대 12명",
    meals: "조식 4회, 석식 2회 제공",
    accommodation: "4성급 호텔",
    activities: ["도쿄 타워", "아사쿠사 사원", "메이지 신궁", "신주쿠 쇼핑", "하라주쿠 거리", "츠키지 시장"],
    includes: [
      "왕복 항공권",
      "4성급 호텔 숙박",
      "조식 4회, 석식 2회",
      "전문 가이드",
      "공항 이동 교통편",
      "여행자 보험"
    ],
    excludes: [
      "개인 비용",
      "일부 식사",
      "선택 관광",
      "가이드/기사 팁"
    ],
    itinerary: [
      {
        day: 1,
        title: "도쿄 도착",
        description: "나리타 국제공항 도착 후, 호텔로 이동 및 체크인. 저녁에는 환영 만찬이 제공됩니다.",
        meals: "석식"
      },
      {
        day: 2,
        title: "도쿄 동부 탐험",
        description: "아사쿠사 사원, 스카이트리, 우에노 공원 방문. 현지식 점심과 자유 시간이 주어집니다.",
        meals: "조식"
      },
      {
        day: 3,
        title: "도쿄 중심부",
        description: "도쿄 타워, 메이지 신궁, 하라주쿠 방문. 현지 쇼핑 명소에서 자유 시간.",
        meals: "조식"
      },
      {
        day: 4,
        title: "도쿄 서부 탐험",
        description: "신주쿠 가든, 시부야 크로싱, 현지 시장 방문. 저녁에는 특별 일식 만찬.",
        meals: "조식, 석식"
      },
      {
        day: 5,
        title: "도쿄 출발",
        description: "아침 식사 후 자유 시간. 체크아웃 후 공항으로 이동 및 귀국 비행.",
        meals: "조식"
      }
    ]
  },
  {
    id: 2,
    name: "이탈리아 로마 & 베네치아 7일",
    destination: "이탈리아 로마, 베네치아",
    description: "고대 로마 제국의 심장부터 낭만적인 수상 도시까지, 이탈리아의 매력을 발견하세요. 콜로세움, 바티칸 시티, 베네치아 운하 등 세계적인 명소를 방문하는 7일 일정입니다.",
    price: "₩2,490,000",
    image: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=2967&auto=format&fit=crop",
    type: "유럽 여행",
    rating: 4.9,
    duration: "7일 6박",
    departureDate: ["2025-07-10", "2025-07-24", "2025-08-07", "2025-08-21"],
    groupSize: "최대 10명",
    meals: "조식 6회, 석식 3회 제공",
    accommodation: "4성급 호텔",
    activities: ["콜로세움", "바티칸 시티", "트레비 분수", "베네치아 곤돌라", "부라노 섬", "리알토 다리"],
    includes: [
      "왕복 항공권",
      "4성급 호텔 숙박",
      "조식 6회, 석식 3회",
      "전문 가이드",
      "도시 간 이동 교통편",
      "여행자 보험"
    ],
    excludes: [
      "개인 비용",
      "일부 식사",
      "선택 관광",
      "가이드/기사 팁"
    ],
    itinerary: [
      {
        day: 1,
        title: "로마 도착",
        description: "로마 피우미치노 공항 도착 후, 호텔로 이동 및 체크인. 저녁에는 환영 만찬이 제공됩니다.",
        meals: "석식"
      },
      {
        day: 2,
        title: "고대 로마 탐험",
        description: "콜로세움, 포로 로마노, 팔라티노 언덕 방문. 전문 가이드의 설명과 함께하는 투어.",
        meals: "조식"
      },
      {
        day: 3,
        title: "바티칸 시티 투어",
        description: "바티칸 박물관, 시스티나 성당, 성 베드로 대성당 방문. 오후에는 자유 시간.",
        meals: "조식"
      },
      {
        day: 4,
        title: "로마에서 베네치아로",
        description: "기차로 베네치아로 이동. 도착 후 호텔 체크인 및 주변 탐색.",
        meals: "조식, 석식"
      },
      {
        day: 5,
        title: "베네치아 탐험",
        description: "산 마르코 광장, 두칼레 궁전, 리알토 다리 방문. 오후에는 곤돌라 투어.",
        meals: "조식"
      },
      {
        day: 6,
        title: "베네치아 라군 투어",
        description: "무라노, 부라노, 토르첼로 섬 방문. 저녁에는 특별 해산물 만찬.",
        meals: "조식, 석식"
      },
      {
        day: 7,
        title: "베네치아 출발",
        description: "아침 식사 후 자유 시간. 체크아웃 후 공항으로 이동 및 귀국 비행.",
        meals: "조식"
      }
    ]
  },
  {
    id: 3,
    name: "태국 방콕 & 푸켓 6일",
    destination: "태국 방콕, 푸켓",
    description: "활기찬 방콕의 도시 생활과 푸켓의 평화로운 해변을 경험해보세요. 왕궁, 사원 방문부터 에메랄드 해변에서의 휴식까지 다채로운 태국 여행을 즐길 수 있습니다.",
    price: "₩1,190,000",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2739&auto=format&fit=crop",
    type: "동남아 휴양",
    rating: 4.7,
    duration: "6일 5박",
    departureDate: ["2025-07-05", "2025-07-19", "2025-08-02", "2025-08-16", "2025-08-30"],
    groupSize: "최대 14명",
    meals: "조식 5회, 석식 2회 제공",
    accommodation: "방콕 4성급, 푸켓 5성급 리조트",
    activities: ["왕궁", "왓 포 사원", "수상시장", "피피섬", "파통 비치", "태국 마사지"],
    includes: [
      "왕복 항공권",
      "호텔 및 리조트 숙박",
      "조식 5회, 석식 2회",
      "전문 가이드",
      "도시 간 항공편",
      "여행자 보험"
    ],
    excludes: [
      "개인 비용",
      "일부 식사",
      "선택 관광",
      "가이드/기사 팁"
    ],
    itinerary: [
      {
        day: 1,
        title: "방콕 도착",
        description: "수완나품 공항 도착 후, 호텔로 이동 및 체크인. 저녁에는 환영 만찬이 제공됩니다.",
        meals: "석식"
      },
      {
        day: 2,
        title: "방콕 문화 탐험",
        description: "왕궁, 에메랄드 사원, 왓 포 사원 방문. 차오프라야 강에서 보트 투어.",
        meals: "조식"
      },
      {
        day: 3,
        title: "방콕에서 푸켓으로",
        description: "국내선으로 푸켓으로 이동. 도착 후 리조트 체크인 및 해변에서 휴식.",
        meals: "조식, 석식"
      },
      {
        day: 4,
        title: "푸켓 섬 투어",
        description: "스피드보트로 피피섬 및 주변 섬 투어. 스노클링, 수영 및 해변 활동.",
        meals: "조식"
      },
      {
        day: 5,
        title: "푸켓 자유 시간",
        description: "리조트에서 자유 시간 또는 선택 관광. 스파 트리트먼트, 쇼핑 등 가능.",
        meals: "조식"
      },
      {
        day: 6,
        title: "푸켓 출발",
        description: "아침 식사 후 체크아웃. 공항으로 이동 및 귀국 비행.",
        meals: "조식"
      }
    ]
  },
  {
    id: 4,
    name: "하와이 호놀룰루 5일",
    destination: "미국 하와이 호놀룰루",
    description: "하와이의 아름다운 해변과 풍부한 자연을 경험하세요. 와이키키 비치, 다이아몬드 헤드, 진주만 등 호놀룰루의 주요 명소를 방문하는 5일 일정입니다.",
    price: "₩2,190,000",
    image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=2728&auto=format&fit=crop",
    type: "휴양지",
    rating: 4.8,
    duration: "5일 4박",
    departureDate: ["2025-07-12", "2025-07-26", "2025-08-09", "2025-08-23"],
    groupSize: "최대 16명",
    meals: "조식 4회, 석식 1회 제공",
    accommodation: "4성급 비치 리조트",
    activities: ["와이키키 비치", "다이아몬드 헤드", "진주만", "폴리네시안 문화센터", "스노클링", "루아우 파티"],
    includes: [
      "왕복 항공권",
      "비치 리조트 숙박",
      "조식 4회, 석식 1회",
      "공항 이동 교통편",
      "일부 관광 입장권",
      "여행자 보험"
    ],
    excludes: [
      "개인 비용",
      "일부 식사",
      "선택 관광",
      "가이드/기사 팁"
    ],
    itinerary: [
      {
        day: 1,
        title: "호놀룰루 도착",
        description: "호놀룰루 국제공항 도착 후, 리조트로 이동 및 체크인. 저녁에는 환영 루아우 파티가 제공됩니다.",
        meals: "석식"
      },
      {
        day: 2,
        title: "호놀룰루 시티 투어",
        description: "다이아몬드 헤드 하이킹, 이올라니 궁전, 시내 관광. 오후에는 와이키키 비치에서 자유 시간.",
        meals: "조식"
      },
      {
        day: 3,
        title: "진주만 역사 투어",
        description: "진주만 방문, USS 애리조나 메모리얼, 배틀십 미주리 투어. 오후에는 자유 시간.",
        meals: "조식"
      },
      {
        day: 4,
        title: "오아후 섬 투어",
        description: "노스 쇼어 방문, 할레이와 타운, 선셋 비치. 스노클링 및 해변 활동 가능.",
        meals: "조식"
      },
      {
        day: 5,
        title: "호놀룰루 출발",
        description: "아침 식사 후 자유 시간. 체크아웃 후 공항으로 이동 및 귀국 비행.",
        meals: "조식"
      }
    ]
  },
  {
    id: 5,
    name: "호주 시드니 & 멜버른 7일",
    destination: "호주 시드니, 멜버른",
    description: "호주의 두 대표 도시를 탐험하는 여행입니다. 시드니 오페라 하우스, 본다이 비치, 멜버른의 예술 지구 등 호주의 아름다움과 문화를 경험해보세요.",
    price: "₩2,690,000",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop",
    type: "오세아니아",
    rating: 4.6,
    duration: "7일 6박",
    departureDate: ["2025-07-08", "2025-07-22", "2025-08-05", "2025-08-19"],
    groupSize: "최대 12명",
    meals: "조식 6회, 석식 2회 제공",
    accommodation: "4성급 호텔",
    activities: ["시드니 오페라 하우스", "본다이 비치", "블루 마운틴", "멜버른 아트 센터", "그레이트 오션 로드", "필립 아일랜드"],
    includes: [
      "왕복 항공권",
      "4성급 호텔 숙박",
      "조식 6회, 석식 2회",
      "전문 가이드",
      "도시 간 항공편",
      "여행자 보험"
    ],
    excludes: [
      "개인 비용",
      "일부 식사",
      "선택 관광",
      "가이드/기사 팁"
    ],
    itinerary: [
      {
        day: 1,
        title: "시드니 도착",
        description: "시드니 국제공항 도착 후, 호텔로 이동 및 체크인. 저녁에는 환영 만찬이 제공됩니다.",
        meals: "석식"
      },
      {
        day: 2,
        title: "시드니 시티 투어",
        description: "시드니 오페라 하우스, 하버 브릿지, 더 락스 역사 지구 방문. 오후에는 서큘러 키에서 크루즈.",
        meals: "조식"
      },
      {
        day: 3,
        title: "시드니 해변 투어",
        description: "본다이 비치, 쿠지 비치 방문. 해변 산책로 하이킹 및 자유 시간.",
        meals: "조식"
      },
      {
        day: 4,
        title: "시드니에서 멜버른으로",
        description: "국내선으로 멜버른으로 이동. 도착 후 호텔 체크인 및 주변 탐색.",
        meals: "조식"
      },
      {
        day: 5,
        title: "멜버른 시티 투어",
        description: "멜버른 아트 센터, 퀸 빅토리아 마켓, 로얄 보타닉 가든 방문. 야라 강변 저녁 식사.",
        meals: "조식, 석식"
      },
      {
        day: 6,
        title: "그레이트 오션 로드 투어",
        description: "세계적으로 유명한 그레이트 오션 로드와 12사도 바위 방문. 해안 드라이브 투어.",
        meals: "조식"
      },
      {
        day: 7,
        title: "멜버른 출발",
        description: "아침 식사 후 자유 시간. 체크아웃 후 공항으로 이동 및 귀국 비행.",
        meals: "조식"
      }
    ]
  },
  {
    id: 6,
    name: "스페인 마드리드 & 바르셀로나 8일",
    destination: "스페인 마드리드, 바르셀로나",
    description: "정열의 나라 스페인의 두 대표 도시를 탐험하세요. 마드리드의 왕궁, 프라도 미술관부터 바르셀로나의 가우디 건축물까지 스페인의 역사와 예술을 만끽할 수 있습니다.",
    price: "₩2,390,000",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop",
    type: "유럽 여행",
    rating: 4.7,
    duration: "8일 7박",
    departureDate: ["2025-07-07", "2025-07-21", "2025-08-04", "2025-08-18"],
    groupSize: "최대 14명",
    meals: "조식 7회, 석식 3회 제공",
    accommodation: "4성급 호텔",
    activities: ["프라도 미술관", "레티로 공원", "사그라다 파밀리아", "파크 구엘", "플라멩코 쇼", "타파스 투어"],
    includes: [
      "왕복 항공권",
      "4성급 호텔 숙박",
      "조식 7회, 석식 3회",
      "전문 가이드",
      "도시 간 고속열차",
      "여행자 보험"
    ],
    excludes: [
      "개인 비용",
      "일부 식사",
      "선택 관광",
      "가이드/기사 팁"
    ],
    itinerary: [
      {
        day: 1,
        title: "마드리드 도착",
        description: "마드리드 바라하스 공항 도착 후, 호텔로 이동 및 체크인. 저녁에는 환영 만찬이 제공됩니다.",
        meals: "석식"
      },
      {
        day: 2,
        title: "마드리드 시티 투어",
        description: "왕궁, 마요르 광장, 푸에르타 델 솔 방문. 오후에는 프라도 미술관 관람.",
        meals: "조식"
      },
      {
        day: 3,
        title: "마드리드 문화 체험",
        description: "레티로 공원, 소피아 왕비 예술센터 방문. 저녁에는 플라멩코 공연 관람.",
        meals: "조식, 석식"
      },
      {
        day: 4,
        title: "톨레도 당일 여행",
        description: "유네스코 세계문화유산 톨레도로 당일 여행. 고딕 대성당, 유대인 지구, 엘 그레코 미술관 방문.",
        meals: "조식"
      },
      {
        day: 5,
        title: "마드리드에서 바르셀로나로",
        description: "고속열차로 바르셀로나로 이동. 도착 후 호텔 체크인 및 주변 탐색.",
        meals: "조식"
      },
      {
        day: 6,
        title: "바르셀로나 가우디 투어",
        description: "사그라다 파밀리아, 카사 바트요, 카사 밀라, 파크 구엘 등 가우디의 건축물 방문.",
        meals: "조식"
      },
      {
        day: 7,
        title: "바르셀로나 고딕 지구",
        description: "고딕 지구, 람블라스 거리, 보케리아 시장 방문. 저녁에는 카탈란 요리로 송별 만찬.",
        meals: "조식, 석식"
      },
      {
        day: 8,
        title: "바르셀로나 출발",
        description: "아침 식사 후 자유 시간. 체크아웃 후 공항으로 이동 및 귀국 비행.",
        meals: "조식"
      }
    ]
  },
  {
    id: 7,
    name: "영국 런던 & 스코틀랜드 9일",
    destination: "영국 런던, 에든버러",
    description: "역사와 전통이 살아 숨쉬는 영국과 스코틀랜드를 탐험하세요. 런던의 왕실 명소부터 스코틀랜드의 아름다운 자연까지 영국의 다양한 매력을 경험할 수 있습니다.",
    price: "₩2,890,000",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    type: "유럽 여행",
    rating: 4.8,
    duration: "9일 8박",
    departureDate: ["2025-07-05", "2025-07-19", "2025-08-02", "2025-08-16", "2025-08-30"],
    groupSize: "최대 12명",
    meals: "조식 8회, 석식 3회 제공",
    accommodation: "4성급 호텔",
    activities: ["버킹엄 궁전", "대영 박물관", "에든버러 성", "하이랜드 투어", "위스키 시음", "런던 아이"],
    includes: [
      "왕복 항공권",
      "4성급 호텔 숙박",
      "조식 8회, 석식 3회",
      "전문 가이드",
      "도시 간 기차편",
      "여행자 보험"
    ],
    excludes: [
      "개인 비용",
      "일부 식사",
      "선택 관광",
      "가이드/기사 팁"
    ],
    itinerary: [
      {
        day: 1,
        title: "런던 도착",
        description: "히드로 공항 도착 후, 호텔로 이동 및 체크인. 저녁에는 환영 만찬이 제공됩니다.",
        meals: "석식"
      },
      {
        day: 2,
        title: "런던 왕실 투어",
        description: "버킹엄 궁전, 웨스트민스터 사원, 빅 벤, 국회의사당 방문. 템즈강 크루즈.",
        meals: "조식"
      },
      {
        day: 3,
        title: "런던 문화 투어",
        description: "대영 박물관, 내셔널 갤러리, 코벤트 가든 방문. 오후에는 자유 시간.",
        meals: "조식"
      },
      {
        day: 4,
        title: "런던 자유 시간",
        description: "런던에서 자유 시간. 쇼핑, 추가 관광 또는 휴식. 옵션으로 윈저성 당일 여행 가능.",
        meals: "조식"
      },
      {
        day: 5,
        title: "런던에서 에든버러로",
        description: "기차로 에든버러로 이동. 도착 후 호텔 체크인 및 주변 탐색.",
        meals: "조식"
      },
      {
        day: 6,
        title: "에든버러 시티 투어",
        description: "에든버러 성, 로열 마일, 홀리루드 궁전 방문. 저녁에는 스코틀랜드 전통 디너쇼.",
        meals: "조식, 석식"
      },
      {
        day: 7,
        title: "스코틀랜드 하이랜드 투어",
        description: "로크 네스, 글렌코, 스코틀랜드 하이랜드 일일 투어. 경치 감상 및 사진 촬영.",
        meals: "조식"
      },
      {
        day: 8,
        title: "스코틀랜드 위스키 투어",
        description: "스코틀랜드 위스키 증류소 방문 및 시음. 오후에는 에든버러에서 자유 시간. 저녁에는 송별 만찬.",
        meals: "조식, 석식"
      },
      {
        day: 9,
        title: "에든버러 출발",
        description: "아침 식사 후 체크아웃. 공항으로 이동 및 귀국 비행.",
        meals: "조식"
      }
    ]
  },
  {
    id: 8,
    name: "모로코 일주 10일",
    destination: "모로코 카사블랑카, 마라케시, 페스",
    description: "신비로운 모로코의 매력에 빠져보세요. 카사블랑카의 현대적인 모습부터 마라케시의 화려한 시장, 사하라 사막의 모험까지 다채로운 모로코를 경험할 수 있습니다.",
    price: "₩2,590,000",
    image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=2033&auto=format&fit=crop",
    type: "아프리카",
    rating: 4.9,
    duration: "10일 9박",
    departureDate: ["2025-07-10", "2025-08-07", "2025-09-04"],
    groupSize: "최대 10명",
    meals: "조식 9회, 석식 6회 제공",
    accommodation: "4성급 호텔 및 사막 캠프",
    activities: ["하산 2세 모스크", "제마 엘 프나 광장", "아틀라스 산맥", "사하라 사막", "에사우이라", "아이트 벤하두"],
    includes: [
      "왕복 항공권",
      "4성급 호텔 및 사막 캠프 숙박",
      "조식 9회, 석식 6회",
      "전문 가이드",
      "전용 차량 이동",
      "여행자 보험"
    ],
    excludes: [
      "개인 비용",
      "일부 식사",
      "선택 관광",
      "가이드/기사 팁"
    ],
    itinerary: [
      {
        day: 1,
        title: "카사블랑카 도착",
        description: "카사블랑카 공항 도착 후, 호텔로 이동 및 체크인. 저녁에는 환영 만찬이 제공됩니다.",
        meals: "석식"
      },
      {
        day: 2,
        title: "카사블랑카 투어",
        description: "하산 2세 모스크, 모하메드 5세 광장, 코니시 해변가 방문. 오후에는 라바트로 이동.",
        meals: "조식, 석식"
      },
      {
        day: 3,
        title: "라바트에서 페스로",
        description: "라바트 카스바, 하산 탑 방문 후 페스로 이동. 도착 후 호텔 체크인.",
        meals: "조식, 석식"
      },
      {
        day: 4,
        title: "페스 미디나 투어",
        description: "페스 엘 발리(구시가지), 카라윈 대학, 타너리 방문. 현지 공방 및 시장 탐방.",
        meals: "조식"
      },
      {
        day: 5,
        title: "페스에서 사하라로",
        description: "아틀라스 산맥을 가로질러 메르주가로 이동. 중간에 이프란, 미델트, 에르푸드 방문.",
        meals: "조식, 석식"
      },
      {
        day: 6,
        title: "사하라 사막 체험",
        description: "낙타를 타고 사하라 사막 투어. 베르베르 캠프에서 숙박 및 별 관측.",
        meals: "조식, 석식"
      },
      {
        day: 7,
        title: "사하라에서 다데스로",
        description: "일출 감상 후 다데스 계곡으로 이동. 토드라 협곡 방문.",
        meals: "조식, 석식"
      },
      {
        day: 8,
        title: "아이트 벤하두",
        description: "유네스코 세계문화유산 아이트 벤하두 카스바 방문. 오후에 마라케시로 이동.",
        meals: "조식"
      },
      {
        day: 9,
        title: "마라케시 투어",
        description: "쿠투비아 미나렛, 바히아 궁전, 제마 엘 프나 광장 방문. 저녁에는 전통 공연과 함께하는 송별 만찬.",
        meals: "조식, 석식"
      },
      {
        day: 10,
        title: "마라케시 출발",
        description: "아침 식사 후 체크아웃. 공항으로 이동 및 귀국 비행.",
        meals: "조식"
      }
    ]
  },
  {
    id: 9,
    name: "뉴질랜드 자연 탐험 12일",
    destination: "뉴질랜드 오클랜드, 로토루아, 퀸스타운",
    description: "영화 '반지의 제왕'의 배경이 된 뉴질랜드의 아름다운 자연을 탐험하세요. 북섬의 지열 지대부터 남섬의 장엄한 피오르드까지 호빗의 나라를 여행합니다.",
    price: "₩3,990,000",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2071&auto=format&fit=crop",
    type: "오세아니아",
    rating: 4.9,
    duration: "12일 11박",
    departureDate: ["2025-07-15", "2025-08-12", "2025-09-16"],
    groupSize: "최대 12명",
    meals: "조식 11회, 석식 5회 제공",
    accommodation: "4성급 호텔 및 로지",
    activities: ["호비튼 마을", "밀포드 사운드", "와이토모 동굴", "퀸스타운 모험 활동", "로토루아 지열 공원", "마오리 문화 체험"],
    includes: [
      "왕복 항공권",
      "4성급 호텔 및 로지 숙박",
      "조식 11회, 석식 5회",
      "전문 가이드",
      "국내선 항공편",
      "여행자 보험"
    ],
    excludes: [
      "개인 비용",
      "일부 식사",
      "선택 관광",
      "가이드/기사 팁"
    ],
    itinerary: [
      {
        day: 1,
        title: "오클랜드 도착",
        description: "오클랜드 국제공항 도착 후, 호텔로 이동 및 체크인. 저녁에는 환영 만찬이 제공됩니다.",
        meals: "석식"
      },
      {
        day: 2,
        title: "오클랜드 시티 투어",
        description: "스카이 타워, 데본포트, 미션 베이 방문. 오클랜드 하버 크루즈.",
        meals: "조식"
      },
      {
        day: 3,
        title: "오클랜드에서 로토루아로",
        description: "와이토모 발광 웜 동굴 방문 후 로토루아로 이동. 도착 후 마오리 문화 체험 및 하카 공연 관람.",
        meals: "조식, 석식"
      },
      {
        day: 4,
        title: "로토루아 지열 탐험",
        description: "와이오타푸 지열 공원, 테 푸이아 마오리 문화 센터 방문. 오후에는 온천에서 휴식.",
        meals: "조식"
      },
      {
        day: 5,
        title: "호비튼 마을 투어",
        description: "'반지의 제왕' 영화 세트장 호비튼 마을 방문. 마타마타 주변의 아름다운 전원 풍경 감상.",
        meals: "조식"
      },
      {
        day: 6,
        title: "로토루아에서 퀸스타운으로",
        description: "국내선으로 남섬 퀸스타운으로 이동. 도착 후 호텔 체크인 및 주변 탐색.",
        meals: "조식"
      },
      {
        day: 7,
        title: "밀포드 사운드 투어",
        description: "피오르드랜드 국립공원으로 이동하여 밀포드 사운드 크루즈. 장엄한 피오르드 경관 감상.",
        meals: "조식, 석식"
      },
      {
        day: 8,
        title: "퀸스타운 모험의 날",
        description: "다양한 모험 활동 중 선택(번지점프, 제트보트, 스카이다이빙 등 옵션 제공).",
        meals: "조식"
      },
      {
        day: 9,
        title: "와나카 당일 여행",
        description: "와나카 호수 방문, 트레킹 또는 자전거 투어. 저녁에는 퀸스타운으로 복귀.",
        meals: "조식"
      },
      {
        day: 10,
        title: "아로우타운 & 와인 투어",
        description: "골드러시 시대의 마을 아로우타운 방문. 센트럴 오타고 와이너리 투어 및 시음.",
        meals: "조식, 석식"
      },
      {
        day: 11,
        title: "마운트 쿡 국립공원",
        description: "뉴질랜드 최고봉 마운트 쿡 국립공원 방문. 후커 밸리 트레킹. 저녁에는 송별 만찬.",
        meals: "조식, 석식"
      },
      {
        day: 12,
        title: "퀸스타운 출발",
        description: "아침 식사 후 체크아웃. 공항으로 이동 및 귀국 비행.",
        meals: "조식"
      }
    ]
  },
  {
    id: 10,
    name: "프랑스 파리 & 남부 8일",
    destination: "프랑스 파리, 니스, 아비뇽",
    description: "낭만의 도시 파리부터 프로방스와 코트다쥐르의 햇살 가득한 남부까지, 프랑스의 다양한 매력을 발견하세요. 에펠탑, 루브르 박물관, 몽생미셸 등 세계적인 명소를 방문합니다.",
    price: "₩2,790,000",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2070&auto=format&fit=crop",
    type: "유럽 여행",
    rating: 4.8,
    duration: "8일 7박",
    departureDate: ["2025-07-14", "2025-07-28", "2025-08-11", "2025-08-25"],
    groupSize: "최대 14명",
    meals: "조식 7회, 석식 3회 제공",
    accommodation: "4성급 호텔",
    activities: ["에펠탑", "루브르 박물관", "몽마르트", "니스 해변", "모나코", "프로방스 라벤더 밭", "아비뇽 교황궁"],
    includes: [
      "왕복 항공권",
      "4성급 호텔 숙박",
      "조식 7회, 석식 3회",
      "전문 가이드",
      "고속열차 이동",
      "여행자 보험"
    ],
    excludes: [
      "개인 비용",
      "일부 식사",
      "선택 관광",
      "가이드/기사 팁"
    ],
    itinerary: [
      {
        day: 1,
        title: "파리 도착",
        description: "샤를 드골 공항 도착 후, 호텔로 이동 및 체크인. 저녁에는 환영 만찬이 제공됩니다.",
        meals: "석식"
      },
      {
        day: 2,
        title: "파리 시티 투어",
        description: "에펠탑, 개선문, 샹젤리제 거리, 루브르 박물관 방문. 센 강 크루즈.",
        meals: "조식"
      },
      {
        day: 3,
        title: "베르사유 궁전 & 몽마르트",
        description: "오전에 베르사유 궁전 방문. 오후에는 몽마르트 언덕, 사크레쾨르 성당 방문 및 예술가 거리 탐방.",
        meals: "조식"
      },
      {
        day: 4,
        title: "파리에서 아비뇽으로",
        description: "고속열차로 아비뇽으로 이동. 도착 후 교황궁, 아비뇽 다리 방문.",
        meals: "조식, 석식"
      },
      {
        day: 5,
        title: "프로방스 지역 투어",
        description: "프로방스 지역의 아름다운 마을들(고르드, 루시용, 생레미 드 프로방스) 방문. 라벤더 밭 방문(시즌에 따라 다름).",
        meals: "조식"
      },
      {
        day: 6,
        title: "아비뇽에서 니스로",
        description: "기차로 니스로 이동. 도착 후 잉글리시 프롬나드, 구시가지 방문. 해변에서 휴식.",
        meals: "조식"
      },
      {
        day: 7,
        title: "니스 & 모나코 투어",
        description: "에즈 마을, 모나코 공국, 몬테카를로 카지노 방문. 저녁에는 송별 만찬.",
        meals: "조식, 석식"
      },
      {
        day: 8,
        title: "니스 출발",
        description: "아침 식사 후 체크아웃. 공항으로 이동 및 귀국 비행.",
        meals: "조식"
      }
    ]
  }
];

export default packagesData;
