'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

type PrayerData = {
  timings: {
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
  };
  date: {
    readable: string;
    hijri: {
      date: string;
      month: {
        en: string;
      };
      year: string;
      day: string;
    };
  };
};

const PrayerTimes = () => {
  const [prayerData, setPrayerData] = useState<PrayerData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Scarborough coordinates (approximate)
  const latitude = 43.7764;
  const longitude = -79.2318;

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await axios.get('http://api.aladhan.com/v1/timings', {
          params: {
            latitude,
            longitude,
            method: 2, // ISNA method
            school: 1, // Hanafi
          }
        });

        setPrayerData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch prayer times. Please try again later.');
        setLoading(false);
        console.error('Error fetching prayer times:', err);
      }
    };

    fetchPrayerTimes();
  }, []);

  // Function to format the time from 24h to 12h format
  const formatTime = (time: string) => {
    if (!time) return '';
    
    // Extract hours and minutes from HH:MM format
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    
    // Convert to 12-hour format
    const period = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    
    return `${hour12}:${minutes} ${period}`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
      <div className="bg-orange-700 text-white p-4">
        <h2 className="text-xl font-bold text-center">Daily Prayer Times</h2>
        {prayerData && (
          <div className="text-center mt-2">
            <p className="text-sm">{prayerData.date.readable}</p>
            <p className="text-sm">
              {prayerData.date.hijri.day} {prayerData.date.hijri.month.en} {prayerData.date.hijri.year} Hijri
            </p>
          </div>
        )}
      </div>

      {prayerData && (
        <div className="p-4">
          <div className="overflow-hidden rounded-lg">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-orange-600 text-white py-3 px-4 text-left font-semibold">Prayer</th>
                  <th className="bg-orange-600 text-white py-3 px-4 text-right font-semibold">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 bg-orange-50 font-medium text-orange-800">Fajr</td>
                  <td className="py-3 px-4 bg-orange-50 text-right text-orange-900 font-bold">{formatTime(prayerData.timings.Fajr)}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 bg-amber-50 font-medium text-amber-800">Sunrise</td>
                  <td className="py-3 px-4 bg-amber-50 text-right text-amber-900 font-bold">{formatTime(prayerData.timings.Sunrise)}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 bg-orange-50 font-medium text-orange-800">Dhuhr</td>
                  <td className="py-3 px-4 bg-orange-50 text-right text-orange-900 font-bold">{formatTime(prayerData.timings.Dhuhr)}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 bg-amber-50 font-medium text-amber-800">Asr</td>
                  <td className="py-3 px-4 bg-amber-50 text-right text-amber-900 font-bold">{formatTime(prayerData.timings.Asr)}</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 bg-orange-50 font-medium text-orange-800">Maghrib</td>
                  <td className="py-3 px-4 bg-orange-50 text-right text-orange-900 font-bold">{formatTime(prayerData.timings.Maghrib)}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 bg-amber-50 font-medium text-amber-800">Isha</td>
                  <td className="py-3 px-4 bg-amber-50 text-right text-amber-900 font-bold">{formatTime(prayerData.timings.Isha)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>Prayer times are calculated based on ISNA method for Scarborough, Canada.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrayerTimes; 