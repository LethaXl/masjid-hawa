import MainLayout from "@/components/layout/MainLayout";
import PrayerTimes from "@/components/prayer-times/PrayerTimes";

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

          <div className="max-w-3xl mx-auto">
            <PrayerTimes />
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Jumu'ah Prayer
            </h2>
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
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Important Notes
            </h2>
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
      </div>
    </MainLayout>
  );
} 