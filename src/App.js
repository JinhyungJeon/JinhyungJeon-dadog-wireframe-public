import React from "react";
import {
  HeartIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  HomeIcon,
  BellIcon,
  UserIcon,
  ScissorsIcon,
} from "@heroicons/react/24/outline";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-primary/20 to-secondary/20 overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                소중한 반려동물의 모든 케어,
                <br />
                다독펫케어센터에서 한 번에!
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                애견카페부터 유치원, 호텔, 동물병원까지
                <br />한 곳에서 누리는 프리미엄 토탈 케어
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="flex items-center bg-black hover:bg-black/90 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105">
                  <svg
                    className="w-8 h-8 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.14-.14-.25-.32-.25-.52V2.334c0-.2.11-.38.25-.52zM14.5 12.707l2.302 2.302-10.06 5.919L14.5 12.707zm0-1.414l-7.258-7.258 10.06 5.919L14.5 11.293zm1.802 9.404L14.5 15.707l2.302-2.302 4.419 2.598c.27.16.27.57 0 .73l-4.419 2.598z" />
                  </svg>
                  <div className="text-left">
                    {/* <div className="text-xs">GET IT ON</div> */}
                    <div className="text-base font-semibold">Google Play</div>
                  </div>
                </button>
                <button className="flex items-center bg-black hover:bg-black/90 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105">
                  <svg
                    className="w-8 h-8 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    {/* <div className="text-xs">Download on the</div> */}
                    <div className="text-base font-semibold">App Store</div>
                  </div>
                </button>
              </div>
              {/* <p className="mt-6 text-sm text-gray-500">
                * 앱 설치 후 회원가입 시 5,000 포인트 즉시 지급
                <br />* 첫 예약 시 10,000원 할인 쿠폰 제공
              </p> */}
            </div>

            {/* Mobile App Content */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* App Content */}
                <div className="h-[1100px] bg-gradient-to-b from-primary/10 to-secondary/10">
                  {/* Top Navigation */}
                  <div className="flex items-center justify-between p-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary/30 flex items-center justify-center">
                          <UserIcon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-800">
                          우리 아이
                        </p>
                        <p className="text-base text-gray-500 flex items-center">
                          반려동물 등록하기
                          <svg
                            className="w-5 h-5 ml-1 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-5">
                      <BellIcon className="w-8 h-8 text-gray-600" />
                      <UserIcon className="w-8 h-8 text-gray-600" />
                    </div>
                  </div>

                  {/* Image Carousel */}
                  <div className="relative h-80 bg-primary/10 mx-8 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&auto=format&fit=crop&q=80"
                      alt="귀여운 강아지가 카메라를 응시하고 있는 모습"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3"
                      role="tablist"
                      aria-label="이미지 캐러셀 인디케이터"
                    >
                      <button
                        className="w-4 h-4 rounded-full bg-white"
                        role="tab"
                        aria-label="첫 번째 이미지"
                        aria-selected="true"
                      ></button>
                      <button
                        className="w-4 h-4 rounded-full bg-white/50"
                        role="tab"
                        aria-label="두 번째 이미지"
                        aria-selected="false"
                      ></button>
                      <button
                        className="w-4 h-4 rounded-full bg-white/50"
                        role="tab"
                        aria-label="세 번째 이미지"
                        aria-selected="false"
                      ></button>
                    </div>
                  </div>

                  {/* Service Buttons */}
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-8">
                    <button
                      className="flex flex-col items-center p-4 sm:p-5 bg-white rounded-xl shadow-sm"
                      aria-label="테마파크 서비스"
                    >
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                        <svg
                          className="w-8 h-8 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      </div>
                      <span className="text-primary text-base font-bold mb-1 mt-1">
                        B1F
                      </span>
                      <span className="text-sm sm:text-base text-gray-600 mt-1">
                        테마파크
                      </span>
                    </button>
                    <button
                      className="flex flex-col items-center p-4 sm:p-5 bg-white rounded-xl shadow-sm"
                      aria-label="애견카페 서비스"
                    >
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          stroke="currentColor"
                        >
                          <path
                            d="M5 1V4M9 1V4M13 1V4M17 8V17C17 18.0609 16.5786 19.0783 15.8284 19.8284C15.0783 20.5786 14.0609 21 13 21H5C3.93913 21 2.92172 20.5786 2.17157 19.8284C1.42143 19.0783 1 18.0609 1 17V8H18C19.0609 8 20.0783 8.42143 20.8284 9.17157C21.5786 9.92172 22 10.9391 22 12C22 13.0609 21.5783 14.0783 20.8284 14.8284C20.0783 15.5786 19.0609 16 18 16H17"
                            stroke="#F472B6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-primary text-base font-bold mb-1 mt-1">
                        1F
                      </span>
                      <span className="text-sm sm:text-base text-gray-600 mt-1">
                        애견카페
                      </span>
                    </button>
                    <button
                      className="flex flex-col items-center p-4 sm:p-5 bg-white rounded-xl shadow-sm"
                      aria-label="애견유치원 서비스"
                    >
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                        <AcademicCapIcon className="w-8 h-8 text-primary" />
                      </div>
                      <span className="text-primary text-base font-bold mb-1 mt-1">
                        2F
                      </span>
                      <span className="text-sm sm:text-base text-gray-600 mt-1">
                        애견유치원
                      </span>
                    </button>
                    <button
                      className="flex flex-col items-center p-4 sm:p-5 bg-white rounded-xl shadow-sm"
                      aria-label="애견미용실 서비스"
                    >
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                        <ScissorsIcon className="w-8 h-8 text-primary" />
                      </div>
                      <span className="text-primary text-base font-bold mb-1 mt-1">
                        3F
                      </span>
                      <span className="text-sm sm:text-base text-gray-600 mt-1">
                        애견미용실
                      </span>
                    </button>
                    <button
                      className="flex flex-col items-center p-4 sm:p-5 bg-white rounded-xl shadow-sm"
                      aria-label="애견호텔 서비스"
                    >
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                        <BuildingOfficeIcon className="w-8 h-8 text-primary" />
                      </div>
                      <span className="text-primary text-base font-bold mb-1 mt-1">
                        4F
                      </span>
                      <span className="text-sm sm:text-base text-gray-600 mt-1">
                        애견호텔
                      </span>
                    </button>
                    <button
                      className="flex flex-col items-center p-4 sm:p-5 bg-white rounded-xl shadow-sm"
                      aria-label="동물병원 서비스"
                    >
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11 5V9M13 13H9M13 17H9M13 7H9M17 11H19C19.5304 11 20.0391 11.2107 20.4142 11.5858C20.7893 11.9609 21 12.4696 21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V10C1 9.46957 1.21071 8.96086 1.58579 8.58579C1.96086 8.21071 2.46957 8 3 8H5"
                            stroke="#F472B6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M17 21V3C17 2.46957 16.7893 1.96086 16.4142 1.58579C16.0391 1.21071 15.5304 1 15 1H7C6.46957 1 5.96086 1.21071 5.58579 1.58579C5.21071 1.96086 5 2.46957 5 3V21"
                            stroke="#F472B6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-primary text-base font-bold mb-1 mt-1">
                        5F
                      </span>
                      <span className="text-sm sm:text-base text-gray-600 mt-1">
                        동물병원
                      </span>
                    </button>
                  </div>

                  {/* Best Reviews */}
                  <div className="bg-white rounded-xl mx-4 sm:mx-8 p-6 sm:p-8 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">
                      베스트 리뷰
                    </h3>
                    <div className="space-y-6">
                      {/* Review 1 */}
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center mb-2 justify-start">
                          <img
                            src="https://randomuser.me/api/portraits/women/68.jpg"
                            alt="꽁치아끼만쥬 프로필"
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div className="text-left">
                            <div className="font-bold text-gray-800 text-sm">
                              꽁치아끼만쥬
                            </div>
                            <div className="text-xs text-gray-400">
                              리뷰 174 · 사진 185
                            </div>
                          </div>
                        </div>
                        <div className="mb-2">
                          <img
                            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&h=120&fit=crop"
                            alt="리뷰 강아지 사진"
                            className="w-full h-24 object-cover rounded-lg"
                          />
                        </div>
                        <p className="text-xs text-gray-600 mb-1">
                          강아지가 사진마다 웃고있는걸보니 아주 즐거운가봐요.
                          가는 날마다 사진, 동영상 보내주시고 유치원 중에서는 싼
                          가격은 아니지만 대체로 만족합니다.
                        </p>
                        <div className="flex items-center text-[11px] text-gray-400">
                          <span>22.11.14.월 · 1번째 방문</span>
                        </div>
                      </div>
                      {/* Review 2 */}
                      <div className="flex flex-col space-y-2">
                        <div className="flex items-center mb-2 justify-start">
                          <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="코코파파 프로필"
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div className="text-left">
                            <div className="font-bold text-gray-800 text-sm">
                              코코파파
                            </div>
                            <div className="text-xs text-gray-400">
                              리뷰 58 · 사진 42
                            </div>
                          </div>
                        </div>
                        <div className="mb-2">
                          <img
                            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=200&h=120&fit=crop"
                            alt="리뷰 강아지 사진"
                            className="w-full h-24 object-cover rounded-lg"
                          />
                        </div>
                        <p className="text-xs text-gray-600 mb-1">
                          출장이 잦은데 애견호텔 덕분에 안심하고 맡길 수 있어요.
                          24시간 관리와 실시간 모니터링, 그리고 상세한 일일
                          리포트까지! 우리 아이를 위한 최고의 선택이었어요.
                        </p>
                        <div className="flex items-center text-[11px] text-gray-400">
                          <span>23.04.02.일 · 2번째 방문</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-white border-t border-gray-200 flex items-center justify-around px-6 sm:px-10">
                    <button aria-label="홈" className="focus:outline-none">
                      <HomeIcon className="w-7 sm:w-8 h-7 sm:h-8 text-primary" />
                    </button>
                    <button
                      aria-label="즐겨찾기"
                      className="focus:outline-none"
                    >
                      <HeartIcon className="w-7 sm:w-8 h-7 sm:h-8 text-gray-400" />
                    </button>
                    <button aria-label="알림" className="focus:outline-none">
                      <BellIcon className="w-7 sm:w-8 h-7 sm:h-8 text-gray-400" />
                    </button>
                    <button aria-label="프로필" className="focus:outline-none">
                      <UserIcon className="w-7 sm:w-8 h-7 sm:h-8 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Theme Park */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <span className="text-primary text-base font-bold">B1F</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">테마파크(쇼룸)</h3>
              <p className="text-lg text-gray-600 mb-4">
                반려동물과 함께 즐기는 특별한 공간, 다양한 테마로 꾸며진
                쇼룸에서 새로운 경험을 만나보세요.
              </p>
              <p className="text-base text-gray-500">
                계절별 테마 변경과 특별 이벤트로 매번 새로운 즐거움을
                제공합니다.
              </p>
            </div>

            {/* Cafe */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    stroke="currentColor"
                  >
                    <path
                      d="M5 1V4M9 1V4M13 1V4M17 8V17C17 18.0609 16.5786 19.0783 15.8284 19.8284C15.0783 20.5786 14.0609 21 13 21H5C3.93913 21 2.92172 20.5786 2.17157 19.8284C1.42143 19.0783 1 18.0609 1 17V8H18C19.0609 8 20.0783 8.42143 20.8284 9.17157C21.5786 9.92172 22 10.9391 22 12C22 13.0609 21.5783 14.0783 20.8284 14.8284C20.0783 15.5786 19.0609 16 18 16H17"
                      stroke="#F472B6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-primary text-base font-bold">1F</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 flex items-center">
                애견카페
              </h3>
              <p className="text-lg text-gray-600 mb-4">
                반려견과 함께하는 편안한 휴식, 다독펫케어센터 애견카페에서
                즐기세요.
              </p>
              <p className="text-base text-gray-500">
                넓고 쾌적한 공간에서 반려견과 보호자가 함께 쉴 수 있는 특별한
                공간입니다.
              </p>
            </div>

            {/* Kindergarten */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <AcademicCapIcon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-primary text-base font-bold">2F</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">애견유치원</h3>
              <p className="text-lg text-gray-600 mb-4">
                전문가의 세심한 돌봄과 사회성 교육, 우리 아이의 첫 학교
                다독펫케어센터 유치원.
              </p>
              <p className="text-base text-gray-500">
                전문 케어 매니저가 반려견의 성향에 맞춰 맞춤 교육과 놀이를
                제공합니다.
              </p>
            </div>

            {/* Grooming */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <ScissorsIcon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-primary text-base font-bold">3F</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">애견미용실</h3>
              <p className="text-lg text-gray-600 mb-4">
                전문 미용사의 섬세한 손길로 반려견의 아름다움을 더해드립니다.
              </p>
              <p className="text-base text-gray-500">
                품종별 맞춤 커트와 스타일링, 스파 케어까지 제공합니다.
              </p>
            </div>

            {/* Hotel */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <BuildingOfficeIcon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-primary text-base font-bold">4F</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">애견호텔</h3>
              <p className="text-lg text-gray-600 mb-4">
                여행, 출장 시에도 안심! 프리미엄 애견호텔에서 소중한 반려견을
                안전하게 맡기세요.
              </p>
              <p className="text-base text-gray-500">
                24시간 상주 관리와 청결한 객실, 건강 상태 체크까지 제공합니다.
              </p>
            </div>

            {/* Hospital */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 5V9M13 13H9M13 17H9M13 7H9M17 11H19C19.5304 11 20.0391 11.2107 20.4142 11.5858C20.7893 11.9609 21 12.4696 21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V10C1 9.46957 1.21071 8.96086 1.58579 8.58579C1.96086 8.21071 2.46957 8 3 8H5"
                      stroke="#F472B6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 21V3C17 2.46957 16.7893 1.96086 16.4142 1.58579C16.0391 1.21071 15.5304 1 15 1H7C6.46957 1 5.96086 1.21071 5.58579 1.58579C5.21071 1.96086 5 2.46957 5 3V21"
                      stroke="#F472B6"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {/* <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect
                      x="5"
                      y="10"
                      width="14"
                      height="8"
                      rx="2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="9"
                      y="14"
                      width="2"
                      height="4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="13"
                      y="14"
                      width="2"
                      height="4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="7"
                      y="6"
                      width="10"
                      height="4"
                      rx="2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8v2M11 9h2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg> */}
                </div>
                <span className="text-primary text-base font-bold">5F</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">동물병원</h3>
              <p className="text-lg text-gray-600 mb-4">
                건강한 일상을 위한 전문 의료 서비스, 다독펫케어센터 동물병원.
              </p>
              <p className="text-base text-gray-500">
                예방접종, 건강검진, 응급진료 등 반려견의 건강을 책임집니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Total Solution Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            한 번의 방문으로 모든 서비스를!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            다독펫케어센터는 반려동물 케어의 모든 것을 한 곳에 담았습니다.
            <br />
            여러 장소를 오갈 필요 없이, 테마파크, 카페, 유치원, 미용실, 호텔,
            병원까지
            <br />
            네이버 플레이스로 예약하고, 간편하게 이용하세요.
          </p>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">쉽고 빠른 네이버 예약</h3>
            <p className="text-xl text-gray-600 mb-8">
              네이버 플레이스 예약 시스템을 통해 실시간으로 원하는 서비스를
              예약할 수 있습니다.
              <br />
              간편한 예약과 빠른 확인으로 반려동물 케어를 더욱 편리하게
              이용하세요.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105">
              네이버 플레이스로 예약하기
            </button>
          </div>
        </div>
      </section>

      {/* Points Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">
              서비스 이용할수록 쌓이는 포인트!
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-4 text-primary">
                  포인트 적립
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>서비스 이용 금액의 5% 자동 적립</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>첫 방문 시 5,000 포인트 즉시 지급</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>리뷰 작성 시 1,000 포인트 추가 지급</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>생일 이벤트 10,000 포인트 지급</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-4 text-primary">
                  포인트 사용
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>1포인트 = 1원으로 사용 가능</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>최소 사용 단위 1,000 포인트</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>발급일로부터 1년간 유효</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>모든 서비스에서 사용 가능</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-6">
              * 포인트는 적립일로부터 1년간 유효하며, 자동 소멸됩니다.
              <br />* 포인트 정책은 다독펫케어센터의 사정에 따라 변경될 수
              있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">고객님들의 소중한 후기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all">
              <div className="flex items-center mb-4 justify-start">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="꽁치아끼만쥬 프로필"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-800">꽁치아끼만쥬</div>
                  <div className="text-xs text-gray-400">
                    리뷰 174 · 사진 185
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <img
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=200&h=120&fit=crop"
                  alt="리뷰 강아지 사진"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-600 mb-4">
                강아지가 사진마다 웃고있는걸보니 아주 즐거운가봐요. 가는 날마다
                사진, 동영상 보내주시고 유치원 중에서는 싼 가격은 아니지만
                대체로 만족합니다.
              </p>
              <div className="flex items-center text-xs text-gray-400">
                <span>22.11.14.월 · 1번째 방문</span>
              </div>
            </div>

            {/* Review Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all">
              <div className="flex items-center mb-4 justify-start">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="코코파파 프로필"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-800">코코파파</div>
                  <div className="text-xs text-gray-400">리뷰 58 · 사진 42</div>
                </div>
              </div>
              <div className="mb-4">
                <img
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=200&h=120&fit=crop"
                  alt="리뷰 강아지 사진"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-600 mb-4">
                출장이 잦은데 애견호텔 덕분에 안심하고 맡길 수 있어요. 24시간
                관리와 실시간 모니터링, 그리고 상세한 일일 리포트까지! 우리
                아이를 위한 최고의 선택이었어요.
              </p>
              <div className="flex items-center text-xs text-gray-400">
                <span>23.04.02.일 · 2번째 방문</span>
              </div>
            </div>

            {/* Review Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all">
              <div className="flex items-center mb-4 justify-start">
                <img
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt="몽실이엄마 프로필"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-800">몽실이엄마</div>
                  <div className="text-xs text-gray-400">
                    리뷰 102 · 사진 77
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=250&fit=crop"
                  alt="리뷰 강아지 사진"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <p className="text-gray-600 mb-4">
                애견유치원에서 전문적인 교육을 받고 우리 아이가 많이 달라졌어요.
                기본 예절부터 사회성까지 체계적으로 교육해주시고, 매일 상세한
                리포트도 받아볼 수 있어요.
              </p>
              <div className="flex items-center text-xs text-gray-400">
                <span>23.06.18.일 · 3번째 방문</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">언제든 문의하세요!</h2>
          <p className="text-xl text-gray-600 mb-8">
            다독펫케어센터는 항상 열려 있습니다.
            <br />
            위치 안내, 주차 정보, 전화 및 카카오톡, 네이버 톡톡 등<br />
            다양한 문의 채널을 제공합니다.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full">
              전화 문의
            </button>
            <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-6 rounded-full">
              카카오톡 문의
            </button>
            <button className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-6 rounded-full">
              네이버톡톡 문의
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">다독펫케어센터</h3>
              <p className="text-gray-400">
                반려동물과 함께하는 행복한 일상,
                <br />
                다독펫케어센터가 함께합니다.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_24_1482)">
                      <mask
                        id="mask0_24_1482"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <path d="M0 0H24V24H0V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_24_1482)">
                        <path
                          d="M18.9 1.12451H22.5806L14.5406 10.3371L24 22.8754H16.5943L10.7897 15.2725L4.15543 22.8754H0.471429L9.07029 13.0182L0 1.12623H7.59429L12.8331 8.07423L18.9 1.12451ZM17.6057 20.6674H19.6457L6.48 3.21765H4.29257L17.6057 20.6674Z"
                          fill="#9CA3AF"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_24_1482">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.81141 0.349152C3.62778 0.349152 2.49261 0.819229 1.65549 1.65602C0.81838 2.49281 0.347867 3.62781 0.347412 4.81144V16.7154C0.347412 17.8994 0.817725 19.0348 1.65489 19.872C2.49205 20.7091 3.62749 21.1794 4.81141 21.1794H16.7154C17.899 21.179 19.034 20.7085 19.8708 19.8714C20.7076 19.0342 21.1777 17.8991 21.1777 16.7154V4.81144C21.1772 3.62811 20.707 2.49337 19.8702 1.65663C19.0335 0.819884 17.8987 0.349606 16.7154 0.349152H4.81141ZM17.9994 4.81829C17.9994 5.15929 17.864 5.48631 17.6228 5.72743C17.3817 5.96855 17.0547 6.10401 16.7137 6.10401C16.3727 6.10401 16.0457 5.96855 15.8046 5.72743C15.5634 5.48631 15.428 5.15929 15.428 4.81829C15.428 4.4773 15.5634 4.15028 15.8046 3.90916C16.0457 3.66804 16.3727 3.53258 16.7137 3.53258C17.0547 3.53258 17.3817 3.66804 17.6228 3.90916C17.864 4.15028 17.9994 4.4773 17.9994 4.81829ZM10.7651 7.19772C9.81944 7.19772 8.91249 7.57339 8.24379 8.2421C7.57509 8.9108 7.19941 9.81775 7.19941 10.7634C7.19941 11.7091 7.57509 12.6161 8.24379 13.2848C8.91249 13.9535 9.81944 14.3292 10.7651 14.3292C11.7108 14.3292 12.6178 13.9535 13.2865 13.2848C13.9552 12.6161 14.3308 11.7091 14.3308 10.7634C14.3308 9.81775 13.9552 8.9108 13.2865 8.2421C12.6178 7.57339 11.7108 7.19772 10.7651 7.19772ZM5.48341 10.7634C5.48341 9.36309 6.0397 8.02011 7.02989 7.02991C8.02008 6.03972 9.36307 5.48344 10.7634 5.48344C12.1638 5.48344 13.5067 6.03972 14.4969 7.02991C15.4871 8.02011 16.0434 9.36309 16.0434 10.7634C16.0434 12.1638 15.4871 13.5068 14.4969 14.497C13.5067 15.4872 12.1638 16.0434 10.7634 16.0434C9.36307 16.0434 8.02008 15.4872 7.02989 14.497C6.0397 13.5068 5.48341 12.1638 5.48341 10.7634Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">바로가기</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    서비스 소개
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    이용안내
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    예약하기
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    고객센터
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <ul className="space-y-2 text-gray-400">
                <li>주소: 서울 강남구 봉은사로48길 44-21 B101호(역삼동)</li>
                <li>전화: 02-1234-5678</li>
                <li>이메일: info@dadog.kr</li>
                <li>운영시간: 10:00 - 20:00</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 다독펫케어센터. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
