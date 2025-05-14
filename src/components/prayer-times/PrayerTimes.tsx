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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-green-700 text-white p-4">
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
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-3 rounded">
              <h3 className="font-semibold text-green-800">Fajr</h3>
              <p className="text-lg font-bold">{formatTime(prayerData.timings.Fajr)}</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded">
              <h3 className="font-semibold text-yellow-700">Sunrise</h3>
              <p className="text-lg font-bold">{formatTime(prayerData.timings.Sunrise)}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded">
              <h3 className="font-semibold text-blue-800">Dhuhr</h3>
              <p className="text-lg font-bold">{formatTime(prayerData.timings.Dhuhr)}</p>
            </div>
            <div className="bg-orange-50 p-3 rounded">
              <h3 className="font-semibold text-orange-700">Asr</h3>
              <p className="text-lg font-bold">{formatTime(prayerData.timings.Asr)}</p>
            </div>
            <div className="bg-red-50 p-3 rounded">
              <h3 className="font-semibold text-red-700">Maghrib</h3>
              <p className="text-lg font-bold">{formatTime(prayerData.timings.Maghrib)}</p>
            </div>
            <div className="bg-indigo-50 p-3 rounded">
              <h3 className="font-semibold text-indigo-700">Isha</h3>
              <p className="text-lg font-bold">{formatTime(prayerData.timings.Isha)}</p>
            </div>
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