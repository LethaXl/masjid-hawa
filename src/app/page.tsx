'use client';

import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";
import PrayerTimes from "@/components/prayer-times/PrayerTimes";
import Quote from "@/components/layout/Quote";
import { useScreenSize } from '@/hooks/useScreenSize';

export default function Home() {
  const { 
    isMobileSConstrainedView, 
    isMobileMConstrainedView, 
    isMobileLConstrainedView, 
    isMobileXLConstrainedView 
  } = useScreenSize();

  return (
    <MainLayout>
      {/* Unified Hero + Prayer Times Section */}
      <section id="home" className={`relative flex items-center justify-center bg-gradient-to-b from-orange-300 via-orange-200 to-orange-100 text-orange-900 w-full border-b border-orange-200 scroll-mt-18 ${
        !(isMobileSConstrainedView || isMobileMConstrainedView || isMobileLConstrainedView || isMobileXLConstrainedView) ? 'py-4' : 'min-h-screen'
      } ${
        (isMobileSConstrainedView || isMobileMConstrainedView || isMobileLConstrainedView || isMobileXLConstrainedView) ? 'mt-[-40px] pt-2' : ''
      }`}>
        <div className={`relative z-10 container mx-auto px-4 flex flex-col items-center ${!(isMobileSConstrainedView || isMobileMConstrainedView || isMobileLConstrainedView || isMobileXLConstrainedView) ? 'py-2' : ''}`}>
          {/* Mosque Icon */}
          <div className={`flex justify-center ${
            !(isMobileSConstrainedView || isMobileMConstrainedView || isMobileLConstrainedView || isMobileXLConstrainedView) ? 'mb-0' : 'mb-1'
          } ${
            isMobileXLConstrainedView ? 'mt-12' : isMobileLConstrainedView ? 'mt-10' : (isMobileMConstrainedView || isMobileSConstrainedView) ? 'mt-8' : ''
          }`}>
            <Image 
              src="/images/favicon1.png" 
              alt="Masjid Hawa Logo" 
              width={!(isMobileSConstrainedView || isMobileMConstrainedView || isMobileLConstrainedView || isMobileXLConstrainedView) ? 40 : isMobileSConstrainedView ? 48 : isMobileMConstrainedView ? 50 : isMobileLConstrainedView ? 46 : isMobileXLConstrainedView ? 48 : 44} 
              height={!(isMobileSConstrainedView || isMobileMConstrainedView || isMobileLConstrainedView || isMobileXLConstrainedView) ? 40 : isMobileSConstrainedView ? 48 : isMobileMConstrainedView ? 50 : isMobileLConstrainedView ? 46 : isMobileXLConstrainedView ? 48 : 44} 
              className="rounded-full shadow border-2 border-orange-500"
              priority
            />
          </div>
          <h1 className={`font-extrabold text-center mt-0 mb-1 tracking-tight text-orange-700 ${
            !(isMobileSConstrainedView || isMobileMConstrainedView || isMobileLConstrainedView || isMobileXLConstrainedView) ? 'text-3xl' :
            isMobileMConstrainedView ? 'text-3xl' :
            isMobileSConstrainedView ? 'text-3xl' : 
            isMobileLConstrainedView ? 'text-3xl' : 
            isMobileXLConstrainedView ? 'text-3xl' : 
            'text-4xl'
          }`}>
            Masjid Hawa
          </h1>
          <p className={`text-center mb-2 max-w-lg text-orange-700 font-medium ${
            !(isMobileSConstrainedView || isMobileMConstrainedView || isMobileLConstrainedView || isMobileXLConstrainedView) ? 'text-sm' :
            isMobileSConstrainedView ? 'text-xs' : 
            isMobileMConstrainedView ? 'text-sm' : 
            isMobileLConstrainedView ? 'text-sm' : 
            isMobileXLConstrainedView ? 'text-sm' : 
            'text-base'
          }`}>
            Welcoming you to a new masjid in Scarborough, dedicated to prayer, unity, and growth.
          </p>

          {/* Prayer Times Card - visually joined */}
          <div className="w-full max-w-xl">
            <div className="max-w-xl mx-auto">
              <PrayerTimes />
            </div>
          </div>
        </div>
      </section>

      {/* About & Services Section */}
      <section id="about" className="py-16 bg-orange-100 scroll-mt-20 w-full border-b border-orange-200">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className={`font-bold text-center mb-10 text-orange-700 ${isMobileMConstrainedView ? 'text-3xl' : 'text-4xl'}`}>
              Welcome to Masjid Hawa
            </h2>
            
            <div className="flex flex-col items-center mb-16">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg overflow-hidden shadow-md mb-8 max-w-md mx-auto">
                  <div className="aspect-square relative">
                    <Image 
                      src="/images/main.jpg" 
                      alt="Masjid Hawa" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                
                <div className="text-gray-700 space-y-4">
                  <p className={isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-[11px]' : 'text-base'}>
                    Assalamu Alaikum dear Brothers and Sisters. Thank you for visiting the house of Allah. We welcome you to Masjid Hawa which has been newly established to serve the Muslim Community in Scarborough.
                  </p>
                  <p className={isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-[11px]' : 'text-base'}>
                    We provide a welcoming space for daily prayers and community engagement so that members in our community are able to fulfill their daily obligations to Allah.
                  </p>
                  <p className={isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-[11px]' : 'text-base'}>
                    Alhamdhulillah, we have begun offering Quran Classes. Send your kids to immerse themselves in an Islamic environment, make friends with other children, and participate in leadership activities to become great leaders of the future.
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`border-t border-gray-200 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? '-mt-8 pt-2 mb-2' : 'pt-8 mb-6'}`}></div>
            
            <h3 className={`font-bold text-center mb-10 text-orange-700 ${
              isMobileSConstrainedView ? 'text-2xl' : 
              isMobileMConstrainedView ? 'text-2xl' : 
              isMobileLConstrainedView ? 'text-2xl' : 
              isMobileXLConstrainedView ? 'text-3xl' : 
              'text-3xl'
            }`}>
              Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className={`bg-orange-50 rounded-lg border border-gray-200 flex flex-col items-center text-center ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'p-3' : 'p-6'}`}>
                <div className={`bg-white rounded-full flex items-center justify-center mb-4 border border-gray-200 shadow-sm ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'w-12 h-12' : 'w-16 h-16'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'h-6 w-6' : 'h-8 w-8'} text-orange-700`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={`text-orange-700 font-semibold mb-3 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-xl' : 'text-xl'}`}>Daily Prayers</h3>
                <p className={`${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-xs text-gray-900' : 'text-gray-900'}`}>
                  Join us for the five daily prayers in congregation. We provide a peaceful environment for worship.
                </p>
              </div>

              <div className={`bg-orange-50 rounded-lg border border-gray-200 flex flex-col items-center text-center ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'p-3' : 'p-6'}`}>
                <div className={`bg-white rounded-full flex items-center justify-center mb-4 border border-gray-200 shadow-sm ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'w-12 h-12' : 'w-16 h-16'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'h-6 w-6' : 'h-8 w-8'} text-orange-700`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className={`text-orange-700 font-semibold mb-3 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-xl' : 'text-xl'}`}>Quran Classes</h3>
                <p className={`${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-xs text-gray-900' : 'text-gray-900'}`}>
                  We offer Quran classes for children, focusing on proper recitation, tajweed, and understanding.
                </p>
              </div>

              <div className={`bg-orange-50 rounded-lg border border-gray-200 flex flex-col items-center text-center ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'p-3' : 'p-6'}`}>
                <div className={`bg-white rounded-full flex items-center justify-center mb-4 border border-gray-200 shadow-sm ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'w-12 h-12' : 'w-16 h-16'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'h-6 w-6' : 'h-8 w-8'} text-orange-700`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className={`text-orange-700 font-semibold mb-3 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-xl' : 'text-xl'}`}>Community Events</h3>
                <p className={`${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-xs text-gray-900' : 'text-gray-900'}`}>
                  We organize regular community events, Islamic lectures, and special programs for Ramadan and Eid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-16 bg-orange-100 scroll-mt-20 w-full border-b border-orange-200">
        <div className="container mx-auto px-4">
          <div className={`bg-white shadow-md ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'rounded-md p-4' : 'rounded-lg p-8'}`}>
            <h2 className={`font-bold text-center text-orange-700 ${isMobileLConstrainedView || isMobileXLConstrainedView ? 'mb-5' : isMobileMConstrainedView || isMobileSConstrainedView? 'mb-5' : 'mb-10'} text-3xl`}>
              Support Masjid Hawa
            </h2>
            <p className={`text-center text-gray-700 max-w-2xl mx-auto mb-10 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-xs' : ''}`}>
              Your generous contributions help us maintain the mosque, run educational programs, and serve the community. Every donation, no matter how small, makes a difference.
            </p>

            <div className="max-w-2xl mx-auto">
              <div className={`bg-orange-50 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'p-2 rounded-md' : 'p-6 rounded-lg'} border border-gray-200 text-center`}>
                <h3 className={`text-orange-700 font-bold mb-4 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-xl' : 'text-2xl'}`}>
                  Current Renovation Project
                </h3>
                <p className={`mb-6 text-gray-700 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-xs' : ''}`}>
                  We currently have a make-shift arrangement for wudu and washroom. Sisters prayer area is not available yet. Please donate generously to renovate and modify to provide these essential services.
                </p>
              </div>
            </div>
            
            <div className="max-w-xl mx-auto mt-10">
              <Quote 
                text="Whoever builds a masjid, seeking by it the pleasure of Allah, Allah will build for him a similar place in Jannah."
                author="Sahih al-Bukhari"
              />
            </div>
            
            <div className="text-center mt-8">
              <button
                className={`bg-orange-600 hover:bg-orange-700 text-white font-medium transition-all duration-300 ${isMobileSConstrainedView ? 'py-1 px-2 text-xs rounded' : isMobileMConstrainedView ? 'py-1 px-3 text-xs rounded' : isMobileXLConstrainedView || isMobileLConstrainedView ? 'py-1 px-4 text-sm rounded' : 'py-2 px-8 rounded-md'}`}
                onClick={() => window.open('https://app.irm.io/masjidhawa.com', '_blank')}
                style={{ 
                  background: 'linear-gradient(145deg, #ff5722, #e84d15)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                  fontSize: '1.25rem',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-orange-100 scroll-mt-20 w-full border-b border-orange-200">
        <div className="container mx-auto px-4">
          <div className={`bg-white shadow-md ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'rounded-md p-4' : 'rounded-lg p-8'}`}>
            <h2 className={`font-bold text-center text-orange-700 ${isMobileLConstrainedView || isMobileXLConstrainedView ? 'mb-5' : isMobileMConstrainedView || isMobileSConstrainedView? 'mb-5' : 'mb-10'} text-3xl`}>
              Our Location
            </h2>
            <p className={`text-center text-gray-700 max-w-2xl mx-auto mb-10 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-xs' : ''}`}>
              We are located in Scarborough with easy access by car or transit, and ample parking available on-site and nearby.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className={`bg-orange-50 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'p-2 rounded-md' : 'p-8 rounded-lg'} border border-gray-200`}>
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 flex justify-center items-center w-8">
                    <svg className="h-6 w-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-orange-700">Address</h4>
                    <p className={`mt-1 text-gray-700 text-sm md:text-base ${isMobileMConstrainedView ? 'text-xs' : ''}`}>
                      {isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? (
                        <span className={isMobileSConstrainedView ? 'text-[12px]' : ''}>
                          2829 Eglinton Ave E<br />
                          Scarborough, ON,<br />
                          M1J 2E1
                        </span>
                      ) : (
                        <span className={isMobileSConstrainedView ? 'text-[12px]' : ''}>
                          2829 Eglinton Ave E <br />
                          Scarborough, ON, M1J 2E1
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                
                <div className="border border-gray-200 overflow-hidden h-72 flex items-center justify-center bg-white rounded-lg">
                  <div className="h-full w-full">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11524.87794023248!2d-79.24399499999999!3d43.7764247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4ce06a27e9e0b%3A0x3b96a26cbaf97f3d!2s2829%20Eglinton%20Ave%20E%2C%20Scarborough%2C%20ON%20M1J%202E1%2C%20Canada!5e0!3m2!1sen!2sca!4v1699889801646!5m2!1sen!2sca" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Masjid Hawa Location Map"
                      aria-label="Google Maps showing Masjid Hawa location at 2829 Eglinton Ave E, Scarborough"
                    ></iframe>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="mb-4">
                    <a
                      href="https://www.google.com/maps/dir//2829+Eglinton+Ave+E,+Scarborough,+ON+M1J+2E1,+Canada"
                      target="_blank" 
                      rel="noreferrer"
                      className={`inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-medium transition-all duration-300 ${isMobileMConstrainedView ? 'py-1 px-3 text-xs rounded' : isMobileXLConstrainedView || isMobileLConstrainedView || isMobileSConstrainedView ? 'py-1 px-4 text-sm rounded' : 'py-2 px-6 rounded-md'}`}
                      style={{ 
                        backgroundColor: '#e84d15'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                      onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                  <div className="text-gray-700">
                    <p className={`mb-2 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-xs' : ''}`}>
                      <span className="font-medium">Nearby TTC Routes:</span>
                    </p>
                    <div className={`flex flex-wrap gap-2 justify-center mb-4`}>
                      <div className={`bg-red-600 text-white font-bold rounded ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'py-0.5 px-2 text-xs' : 'py-1 px-3'}`}>
                        16
                      </div>
                      <div className={`bg-red-600 text-white font-bold rounded ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'py-0.5 px-2 text-xs' : 'py-1 px-3'}`}>
                        116
                      </div>
                      <div className={`bg-red-600 text-white font-bold rounded ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'py-0.5 px-2 text-xs' : 'py-1 px-3'}`}>
                        86
                      </div>
                      <div className={`bg-green-600 text-white font-bold rounded ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'py-0.5 px-2 text-xs' : 'py-1 px-3'}`}>
                        905
                      </div>
                    </div>
                    <p className={`mb-4 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-xs' : ''}`}>
                      <span className="font-medium">Parking:</span> On-site and nearby plaza parking available.
                    </p>
                    <div className="mt-6 mb-4">
                      <Image 
                        src="/images/layout_png.png" 
                        alt="Masjid Hawa Layout" 
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md mx-auto"
                      />
                      <p className={`text-center text-gray-600 mt-3 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-xs' : ''}`}>
                        Masjid Hawa entrance and parking layout.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-orange-100 scroll-mt-20 w-full">
        <div className="container mx-auto px-4">
          <div className={`bg-white shadow-md ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'rounded-md p-4' : 'rounded-lg p-8'}`}>
            <h2 className={`font-bold text-center text-orange-700 ${isMobileLConstrainedView || isMobileXLConstrainedView ? 'mb-5' : isMobileMConstrainedView || isMobileSConstrainedView ? 'mb-5' : 'mb-10'} text-3xl`}>
              Contact Us
            </h2>
            <p className={`text-center text-gray-700 max-w-2xl mx-auto mb-10 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'text-xs' : ''}`}>
              If you have any questions or would like to get involved with our community, please don&apos;t hesitate to reach out.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className={`bg-orange-50 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'p-2 rounded-md' : 'p-8 rounded-lg'} border border-gray-200`}>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 flex justify-center items-center w-8 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'ml-1' : ''} md:ml-0`}>
                      <svg className="h-6 w-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-orange-700">Phone</h4>
                      <p className={`mt-1 text-gray-700 text-sm md:text-base ${isMobileMConstrainedView ? 'text-xs' : ''}`}>
                        <span className={isMobileSConstrainedView ? 'text-[10px]' : ''}>+1 (647) 779-3313</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 flex justify-center items-center w-8 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'ml-1' : ''} md:ml-0`}>
                      <svg className="h-6 w-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-orange-700">Email</h4>
                      <p className={`mt-1 text-gray-700 text-sm md:text-base ${isMobileMConstrainedView ? 'text-xs' : ''}`}>
                        <span className={isMobileSConstrainedView ? 'text-[10px]' : ''}>masjidhawa786@gmail.com</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 flex justify-center items-center w-8 ${isMobileXLConstrainedView || isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? 'ml-1' : ''} md:ml-0`}>
                      <svg className="h-6 w-6 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-orange-700">Address</h4>
                      <p className={`mt-1 text-gray-700 text-sm md:text-base ${isMobileMConstrainedView ? 'text-xs' : ''}`}>
                        {isMobileLConstrainedView || isMobileMConstrainedView || isMobileSConstrainedView ? (
                          <span className={isMobileSConstrainedView ? 'text-[10px]' : ''}>
                            2829 Eglinton Ave E<br />
                            Scarborough, ON,<br />
                            M1J 2E1
                          </span>
                        ) : (
                          <span className={isMobileSConstrainedView ? 'text-[12px]' : ''}>
                            2829 Eglinton Ave E <br />
                            Scarborough, ON, M1J 2E1
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
