'use client';

import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";
import PrayerTimes from "@/components/prayer-times/PrayerTimes";

export default function Home() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section id="home" className="relative bg-green-900 text-white pt-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-green-800 to-green-950"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Masjid Hawa
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl">
            A new Masjid in Scarborough with ample parking, serving the Muslim community
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#prayer-times"
              onClick={(e) => scrollToSection(e, 'prayer-times')}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 text-center"
            >
              Prayer Times
            </a>
            <a
              href="#donate"
              onClick={(e) => scrollToSection(e, 'donate')}
              className="bg-white hover:bg-gray-100 text-green-700 font-medium py-3 px-6 rounded-md transition duration-300 text-center"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>

      {/* Prayer Times Section */}
      <section id="prayer-times" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Daily Prayer Times
          </h2>
          <div className="max-w-xl mx-auto">
            <PrayerTimes />
          </div>
          
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Jumu'ah Prayer
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center">
                <p className="text-lg font-medium mb-2">Friday Prayer (Jumu'ah)</p>
                <p className="text-2xl font-bold text-green-700">1:30 PM</p>
                <p className="mt-4 text-gray-600">
                  Khutbah begins at 1:15 PM. Please arrive early to secure your spot.
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Important Notes
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">
                    <span className="font-medium">Iqamah Times:</span> Typically 15 minutes after the Adhan for Fajr, and 10 minutes after Adhan for other prayers.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">
                    <span className="font-medium">Ramadan:</span> During Ramadan, additional Taraweeh prayers are held after Isha prayer.
                  </p>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">
                    <span className="font-medium">Special Events:</span> Prayer times may adjust for special events and holidays. Please check our announcements.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Welcome to Masjid Hawa
              </h2>
              <p className="text-gray-600 mb-4">
                Assalamu Alaikum dear Brothers and Sisters. Thank you for visiting the house of Allah. We welcome you to Masjid Hawa which has been newly established to serve the Muslim Community in Scarborough.
              </p>
              <p className="text-gray-600 mb-4">
                We provide a welcoming space for daily prayers and community engagement so that members in our community are able to fulfill their daily obligations to Allah.
              </p>
              <p className="text-gray-600 mb-6">
                Alhamdhulillah, we have begun offering Quran Classes. Send your kids to immerse themselves in an Islamic environment, make friends with other children, and participate in leadership activities to become great leaders of the future.
              </p>
            </div>
            <div className="lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80 w-full bg-green-100 flex items-center justify-center">
                <div className="text-green-600 text-4xl font-bold">Masjid Hawa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-green-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Daily Prayers</h3>
              <p className="text-gray-600">
                Join us for the five daily prayers in congregation. We provide a peaceful environment for worship.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Quran Classes</h3>
              <p className="text-gray-600">
                We offer Quran classes for children and adults, focusing on proper recitation, tajweed, and understanding.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Community Events</h3>
              <p className="text-gray-600">
                We organize regular community events, Islamic lectures, and special programs for Ramadan and Eid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Support Masjid Hawa
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Your generous contributions help us maintain the mosque, run educational programs, and serve the community. Every donation, no matter how small, makes a difference.
          </p>

          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-green-800">
                Current Renovation Project
              </h3>
              <p className="mb-6">
                We currently have a make-shift arrangement for wudu and washroom. Sisters prayer area is not available yet. Please donate generously to renovate and modify to provide these essential services.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div
                  className="bg-green-600 h-4 rounded-full"
                  style={{ width: '35%' }}
                ></div>
              </div>
              <div className="flex justify-between text-sm mb-8">
                <span>$35,000 raised</span>
                <span>$100,000 goal</span>
              </div>
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition duration-300"
              >
                Donate To This Project
              </button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">One-Time Donation</h3>
              <p className="text-gray-600 mb-6">
                Make a one-time donation to support our mosque and community activities.
              </p>
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
              >
                Donate Now
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Monthly Donation</h3>
              <p className="text-gray-600 mb-6">
                Set up a recurring monthly donation to provide consistent support for our programs.
              </p>
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
              >
                Subscribe Monthly
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Bank Transfer</h3>
              <p className="text-gray-600 mb-6">
                Make a direct bank transfer to support our mosque and community activities.
              </p>
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
              >
                Get Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            If you have any questions or would like to get involved with our community, please don't hesitate to reach out.
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Send us a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Contact Information
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Address</h4>
                      <p className="mt-1 text-gray-600">
                        2829 Eglinton Ave E <br />
                        Scarborough, ON, M1J 2E1
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Email</h4>
                      <p className="mt-1 text-gray-600">
                        masjidhawa786@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                      <p className="mt-1 text-gray-600">
                        +1-647-779-3313
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Hours of Operation</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Sunday:</span>
                      <span className="font-medium">Open for all five daily prayers</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Friday:</span>
                      <span className="font-medium">Jumu'ah at 1:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-green-100 rounded-lg border border-gray-200 overflow-hidden h-64 flex items-center justify-center">
                <p className="text-xl font-medium text-green-800">Map of 2829 Eglinton Ave E, Scarborough</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
