import { Metadata } from "next";
import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "Donate - Masjid Hawa",
  description: "Support Masjid Hawa by donating to help our mosque serve the community.",
};

export default function DonatePage() {
  return (
    <MainLayout>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Support Masjid Hawa
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Your generous contributions help us maintain the mosque, run educational programs, and serve the community. Every donation, no matter how small, makes a difference.
          </p>

          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h2 className="text-xl font-bold mb-4 text-green-800">
                Current Renovation Project
              </h2>
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

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition">$10</button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition">$25</button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition">$50</button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition">$100</button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition">Other</button>
              </div>
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
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition">$20/mo</button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition">$50/mo</button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition">$100/mo</button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition">Other</button>
              </div>
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
              <div className="text-left mb-6">
                <p className="mb-1"><span className="font-medium">Bank Name:</span> Example Bank</p>
                <p className="mb-1"><span className="font-medium">Account Name:</span> Masjid Hawa</p>
                <p className="mb-1"><span className="font-medium">Account Number:</span> 123456789</p>
                <p className="mb-1"><span className="font-medium">Transit Number:</span> 12345</p>
                <p><span className="font-medium">Institution Number:</span> 123</p>
              </div>
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
              >
                Copy Details
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Why Donate to Masjid Hawa?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-green-700">Sadaqah Jariyah</h3>
                <div className="text-gray-600">
                  <p className="mb-4">
                    "When a person dies, all their deeds come to an end except three: ongoing charity (Sadaqah Jariyah), beneficial knowledge, or a righteous child who prays for them." - Prophet Muhammad (peace be upon him)
                  </p>
                  <p>
                    Contributing to the building and maintenance of a mosque is one of the most rewarding forms of Sadaqah Jariyah, as your donation continues to benefit the community and earn you rewards even after you pass away.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-green-700">Building a Community</h3>
                <div className="text-gray-600">
                  <p className="mb-4">
                    "Whoever builds a masjid for Allah, Allah will build for him a similar place in Jannah." - Al Bukhari
                  </p>
                  <p>
                    Your donations help us create a welcoming space for worship, education, and community gatherings. Together, we can build a strong community centered around faith and service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 