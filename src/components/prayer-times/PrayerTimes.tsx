'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  FaSun, 
  FaMoon, 
  FaRegSun, 
  FaCloudSun, 
  FaMosque, 
  FaRegMoon,
  FaStar 
} from 'react-icons/fa';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { WiMoonset, WiMoonrise } from 'react-icons/wi';
import { FaPeopleRoof } from 'react-icons/fa6';
import { MdOutlineWbSunny } from 'react-icons/md';
import { CiCloudSun } from 'react-icons/ci';

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

type PrayerName = 'Fajr' | 'Sunrise' | 'Dhuhr' | 'Asr' | 'Maghrib' | 'Isha';

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
        const response = await axios.get('https://api.aladhan.com/v1/timings', {
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

  // Function to round a time to the nearest 5 or 0 minute
  const roundToNearestFiveOrZero = (time: string): string => {
    if (!time) return '';
    
    const [hours, minutesPart] = time.split(':');
    const [minutes, period] = minutesPart.split(' ');
    const mins = parseInt(minutes, 10);
    
    // Round to nearest 5
    let roundedMins = Math.round(mins / 5) * 5;
    
    // If rounded to 60, increment hour and set mins to 0
    let hour = parseInt(hours, 10);
    if (roundedMins === 60) {
      hour = (hour + 1) % 12 || 12;
      roundedMins = 0;
    }
    
    return `${hour}:${roundedMins.toString().padStart(2, '0')} ${period}`;
  };

  // Get Iqamah time for each prayer
  const getIqamahTime = (prayerName: PrayerName, adhanTime: string): string => {
    if (!adhanTime || prayerName === 'Sunrise') return '-';
    
    // Extract hours and minutes from the Adhan time
    const [hourMinute, period] = adhanTime.split(' ');
    const [hour, minute] = hourMinute.split(':');
    const hourInt = parseInt(hour, 10);
    const minuteInt = parseInt(minute, 10);
    
    // Create a base Date object
    const adhanDate = new Date();
    
    // Adjust hours for PM
    const hour24 = period === 'PM' && hourInt !== 12 ? hourInt + 12 : (period === 'AM' && hourInt === 12 ? 0 : hourInt);
    adhanDate.setHours(hour24);
    adhanDate.setMinutes(minuteInt);
    
    // Add different offsets based on prayer
    switch (prayerName) {
      case 'Fajr':
        adhanDate.setMinutes(adhanDate.getMinutes() + 20);
        break;
      case 'Dhuhr':
        adhanDate.setMinutes(adhanDate.getMinutes() + 15);
        break;
      case 'Asr':
        adhanDate.setMinutes(adhanDate.getMinutes() + 15);
        break;
      case 'Maghrib':
        adhanDate.setMinutes(adhanDate.getMinutes() + 10);
        break;
      case 'Isha':
        adhanDate.setMinutes(adhanDate.getMinutes() + 15);
        break;
    }
    
    // Format to 12-hour time
    const iqamahHours = adhanDate.getHours();
    const iqamahMinutes = adhanDate.getMinutes();
    const newPeriod = iqamahHours >= 12 ? 'PM' : 'AM';
    const hour12 = iqamahHours % 12 || 12;
    
    // Round to nearest 5 or 0
    const roundedMinutes = Math.round(iqamahMinutes / 5) * 5;
    const finalMinutes = roundedMinutes === 60 ? '00' : roundedMinutes.toString().padStart(2, '0');
    const finalHour = roundedMinutes === 60 ? (hour12 + 1) % 12 || 12 : hour12;
    const finalPeriod = roundedMinutes === 60 && hour12 === 11 ? (newPeriod === 'AM' ? 'PM' : 'AM') : newPeriod;
    
    return `${finalHour}:${finalMinutes} ${finalPeriod}`;
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

  // Function to determine if today is Friday
  const isFriday = () => {
    const today = new Date();
    return today.getDay() === 5; // 5 is Friday
  };

  return (
    <div className="overflow-hidden rounded-lg border border-gray-800">
      <div className="bg-orange-700 text-white p-2 text-center border-b border-gray-800">
        {prayerData && (
          <>
            <p className="text-md">{prayerData.date.readable}</p>
            <p className="text-sm">
              {prayerData.date.hijri.day} {prayerData.date.hijri.month.en} {prayerData.date.hijri.year} Hijri
            </p>
          </>
        )}
      </div>

      {prayerData && (
        <>
          <div className="overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="bg-orange-700 text-white py-1 text-center font-bold text-base border-r border-gray-800">Prayer</th>
                  <th className="bg-orange-700 text-white py-1 text-center font-bold text-base border-r border-gray-800">Adhan</th>
                  <th className="bg-orange-700 text-white py-1 text-center font-bold text-base">Iqamah</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className="py-2 px-2 text-orange-900 border-r border-gray-200">
                    <div className="flex justify-center">
                      <div className="w-32 flex">
                        <div className="w-8 flex justify-end">
                          <WiMoonset className="text-orange-700 text-xl" />
                        </div>
                        <span className="ml-3 font-medium">Fajr</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-2 text-center text-orange-900 font-bold border-r border-gray-200">{formatTime(prayerData.timings.Fajr)}</td>
                  <td className="py-2 px-2 text-center text-orange-900 font-bold">{getIqamahTime('Fajr', formatTime(prayerData.timings.Fajr))}</td>
                </tr>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className="py-1 px-2 text-orange-900 border-r border-gray-200">
                    <div className="flex justify-center">
                      <div className="w-32 flex">
                        <div className="w-8 flex justify-end">
                          <FiSunrise className="text-orange-700" />
                        </div>
                        <span className="ml-3 font-medium">Sunrise</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-1 px-2 text-center text-orange-900 font-bold" colSpan={2}>{formatTime(prayerData.timings.Sunrise)}</td>
                </tr>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className="py-2 px-2 text-orange-900 border-r border-gray-200">
                    <div className="flex justify-center">
                      <div className="w-32 flex">
                        <div className="w-8 flex justify-end">
                          <MdOutlineWbSunny className="text-orange-700" />
                        </div>
                        <span className="ml-3 font-medium">Dhuhr</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-2 text-center text-orange-900 font-bold border-r border-gray-200">{formatTime(prayerData.timings.Dhuhr)}</td>
                  <td className="py-2 px-2 text-center text-orange-900 font-bold">{getIqamahTime('Dhuhr', formatTime(prayerData.timings.Dhuhr))}</td>
                </tr>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className="py-2 px-2 text-orange-900 border-r border-gray-200">
                    <div className="flex justify-center">
                      <div className="w-32 flex">
                        <div className="w-8 flex justify-end">
                          <CiCloudSun className="text-orange-700 text-xl" />
                        </div>
                        <span className="ml-3 font-medium">Asr</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-2 text-center text-orange-900 font-bold border-r border-gray-200">{formatTime(prayerData.timings.Asr)}</td>
                  <td className="py-2 px-2 text-center text-orange-900 font-bold">{getIqamahTime('Asr', formatTime(prayerData.timings.Asr))}</td>
                </tr>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className="py-2 px-2 text-orange-900 border-r border-gray-200">
                    <div className="flex justify-center">
                      <div className="w-32 flex">
                        <div className="w-8 flex justify-end">
                          <FiSunset className="text-orange-700" />
                        </div>
                        <span className="ml-3 font-medium">Maghrib</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-2 text-center text-orange-900 font-bold border-r border-gray-200">{formatTime(prayerData.timings.Maghrib)}</td>
                  <td className="py-2 px-2 text-center text-orange-900 font-bold">{getIqamahTime('Maghrib', formatTime(prayerData.timings.Maghrib))}</td>
                </tr>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className="py-2 px-2 text-orange-900 border-r border-gray-200">
                    <div className="flex justify-center">
                      <div className="w-32 flex">
                        <div className="w-8 flex justify-end">
                          <WiMoonrise className="text-orange-700 text-xl" />
                        </div>
                        <span className="ml-3 font-medium">Isha</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-2 text-center text-orange-900 font-bold border-r border-gray-200">{formatTime(prayerData.timings.Isha)}</td>
                  <td className="py-2 px-2 text-center text-orange-900 font-bold">{getIqamahTime('Isha', formatTime(prayerData.timings.Isha))}</td>
                </tr>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className="py-1 px-2 text-orange-900 border-r border-gray-200">
                    <div className="flex justify-center">
                      <div className="w-32 flex">
                        <div className="w-8 flex justify-end">
                          <FaPeopleRoof className="text-orange-700" />
                        </div>
                        <span className="ml-3 font-medium">Jumu'ah 1</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-1 px-2 text-center text-orange-900 font-bold border-r border-gray-200">1:15 PM</td>
                  <td className="py-1 px-2 text-center text-orange-900 font-bold">1:30 PM</td>
                </tr>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className="py-1 px-2 text-orange-900 border-r border-gray-200">
                    <div className="flex justify-center">
                      <div className="w-32 flex">
                        <div className="w-8 flex justify-end">
                          <FaPeopleRoof className="text-orange-700" />
                        </div>
                        <span className="ml-3 font-medium">Jumu'ah 2</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-1 px-2 text-center text-orange-900 font-bold border-r border-gray-200">1:15 PM</td>
                  <td className="py-1 px-2 text-center text-orange-900 font-bold">2:30 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-2 text-center text-sm text-gray-600 bg-gray-50 border-t border-gray-800">
            <p>Iqamah times shown here are approximate.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PrayerTimes; 