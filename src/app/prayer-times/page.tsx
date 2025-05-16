import MainLayout from "@/components/layout/MainLayout";
import PrayerTimes from "@/components/prayer-times/PrayerTimes";
import Image from "next/image";

export const metadata = {
  title: "Prayer Times - Masjid Hawa",
  description: "Daily prayer times for Masjid Hawa in Scarborough, Ontario.",
};

export default function PrayerTimesPage() {
  return (
    <MainLayout>
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Prayer Times
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Join us for daily prayers at Masjid Hawa. Prayer times are calculated based on the ISNA method for Scarborough, Canada.
          </p>

          <div className="max-w-4xl mx-auto">
            <PrayerTimes />
          </div>

          {/* Prayer Guidelines Section */}
          <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Prayer Guidelines
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">
                      Please come to the masjid in a state of wudu (ablution) when possible
                    </p>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">
                      Turn off or silence cell phones before entering the prayer hall
                    </p>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">
                      Fill the rows from the front and stand shoulder-to-shoulder
                    </p>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-gray-700">
                      Maintain cleanliness of the prayer area and washrooms
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Important Notes
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
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
                      <span className="font-medium">Jumu'ah:</span> Friday prayers are held at 1:30 PM and 2:30 PM. Khutbah begins at 1:15 PM for both prayers.
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

          {/* Hadith Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8 border border-green-200 shadow-inner">
              <blockquote className="text-center">
                <svg className="w-10 h-10 text-green-600 opacity-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg font-medium text-gray-800 mb-4">
                  "When the call to prayer is made, Satan takes to his heels, passing wind with noise. When the call to prayer is finished, he comes back. When the iqamah is pronounced, he takes to his heels again..."
                </p>
                <footer className="text-sm text-gray-600">
                  — Sahih Muslim
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 