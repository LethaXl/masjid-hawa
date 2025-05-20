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
import { useScreenSize } from '@/hooks/useScreenSize';

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
  const { isMobileLConstrainedView, isMobileMConstrainedView, isMobileSConstrainedView } = useScreenSize();

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
                  <th className={`bg-orange-700 text-white text-center font-bold border-r border-gray-800 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-0.5 text-xs' : 'py-1 text-base'}`}>Prayer</th>
                  <th className={`bg-orange-700 text-white text-center font-bold border-r border-gray-800 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-0.5 text-xs' : 'py-1 text-base'}`}>Adhan</th>
                  <th className={`bg-orange-700 text-white text-center font-bold ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-0.5 text-xs' : 'py-1 text-base'}`}>Iqamah</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className={`border-r border-gray-200 text-orange-900 ${isMobileSConstrainedView ? 'py-1 px-1' : isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}> 
                    <div className="flex justify-center">
                      <div className={`${isMobileSConstrainedView ? 'w-20' : 'w-32'} flex items-center`}>
                        <div className="flex justify-end" style={{ width: isMobileSConstrainedView ? 16 : isMobileMConstrainedView ? 20 : 32 }}>
                          <WiMoonset className={`text-orange-700 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-base' : 'text-xl'}`} />
                        </div>
                        <span className={`ml-1 font-medium ${isMobileSConstrainedView ? 'text-xs' : isMobileMConstrainedView ? 'text-xs' : ''}`}>Fajr</span>
                      </div>
                    </div>
                  </td>
                  <td className={`text-center text-orange-900 font-bold border-r border-gray-200 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}><span className={`${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-xs' : 'text-sm'} lg:text-base xl:text-lg whitespace-nowrap`}>{formatTime(prayerData.timings.Fajr)}</span></td>
                  <td className={`text-center text-orange-900 font-bold ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}><span className={`${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-xs' : 'text-sm'} lg:text-base xl:text-lg whitespace-nowrap`}>{getIqamahTime('Fajr', formatTime(prayerData.timings.Fajr))}</span></td>
                </tr>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className={`border-r border-gray-200 text-orange-900 ${isMobileSConstrainedView ? 'py-1 px-1' : isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}> 
                    <div className="flex justify-center">
                      <div className={`${isMobileSConstrainedView ? 'w-20' : 'w-32'} flex items-center`}>
                        <div className="flex justify-end" style={{ width: isMobileSConstrainedView ? 16 : isMobileMConstrainedView ? 20 : 32 }}>
                          <FiSunrise className={`text-orange-700 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-base' : ''}`} />
                        </div>
                        <span className={`ml-1 font-medium ${isMobileSConstrainedView ? 'text-xs' : isMobileMConstrainedView ? 'text-xs' : ''}`}>Sunrise</span>
                      </div>
                    </div>
                  </td>
                  <td className={`text-center text-orange-900 font-bold col-span-2 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-0.5 px-1' : 'py-1 px-2'}`} colSpan={2}><span className={`${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-xs' : 'text-sm'} lg:text-base xl:text-lg whitespace-nowrap`}>{formatTime(prayerData.timings.Sunrise)}</span></td>
                </tr>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className={`border-r border-gray-200 text-orange-900 ${isMobileSConstrainedView ? 'py-1 px-1' : isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}> 
                    <div className="flex justify-center">
                      <div className={`${isMobileSConstrainedView ? 'w-20' : 'w-32'} flex items-center`}>
                        <div className="flex justify-end" style={{ width: isMobileSConstrainedView ? 16 : isMobileMConstrainedView ? 20 : 32 }}>
                          <MdOutlineWbSunny className={`text-orange-700 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-base' : ''}`} />
                        </div>
                        <span className={`ml-1 font-medium ${isMobileSConstrainedView ? 'text-xs' : isMobileMConstrainedView ? 'text-xs' : ''}`}>Dhuhr</span>
                      </div>
                    </div>
                  </td>
                  <td className={`text-center text-orange-900 font-bold border-r border-gray-200 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}><span className={`${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-xs' : 'text-sm'} lg:text-base xl:text-lg whitespace-nowrap`}>{formatTime(prayerData.timings.Dhuhr)}</span></td>
                  <td className={`text-center text-orange-900 font-bold ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}><span className={`${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-xs' : 'text-sm'} lg:text-base xl:text-lg whitespace-nowrap`}>{getIqamahTime('Dhuhr', formatTime(prayerData.timings.Dhuhr))}</span></td>
                </tr>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className={`border-r border-gray-200 text-orange-900 ${isMobileSConstrainedView ? 'py-1 px-1' : isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}> 
                    <div className="flex justify-center">
                      <div className={`${isMobileSConstrainedView ? 'w-20' : 'w-32'} flex items-center`}>
                        <div className="flex justify-end" style={{ width: isMobileSConstrainedView ? 16 : isMobileMConstrainedView ? 20 : 32 }}>
                          <CiCloudSun className={`text-orange-700 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-base' : 'text-xl'}`} />
                        </div>
                        <span className={`ml-1 font-medium ${isMobileSConstrainedView ? 'text-xs' : isMobileMConstrainedView ? 'text-xs' : ''}`}>Asr</span>
                      </div>
                    </div>
                  </td>
                  <td className={`text-center text-orange-900 font-bold border-r border-gray-200 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}><span className={`${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-xs' : 'text-sm'} lg:text-base xl:text-lg whitespace-nowrap`}>{formatTime(prayerData.timings.Asr)}</span></td>
                  <td className={`text-center text-orange-900 font-bold ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}><span className={`${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-xs' : 'text-sm'} lg:text-base xl:text-lg whitespace-nowrap`}>{getIqamahTime('Asr', formatTime(prayerData.timings.Asr))}</span></td>
                </tr>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className={`border-r border-gray-200 text-orange-900 ${isMobileSConstrainedView ? 'py-1 px-1' : isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}> 
                    <div className="flex justify-center">
                      <div className={`${isMobileSConstrainedView ? 'w-20' : 'w-32'} flex items-center`}>
                        <div className="flex justify-end" style={{ width: isMobileSConstrainedView ? 16 : isMobileMConstrainedView ? 20 : 32 }}>
                          <FiSunset className={`text-orange-700 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-base' : ''}`} />
                        </div>
                        <span className={`ml-1 font-medium ${isMobileSConstrainedView ? 'text-xs' : isMobileMConstrainedView ? 'text-xs' : ''}`}>Maghrib</span>
                      </div>
                    </div>
                  </td>
                  <td className={`text-center text-orange-900 font-bold border-r border-gray-200 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}><span className={`${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-xs' : 'text-sm'} lg:text-base xl:text-lg whitespace-nowrap`}>{formatTime(prayerData.timings.Maghrib)}</span></td>
                  <td className={`text-center text-orange-900 font-bold ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}><span className={`${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-xs' : 'text-sm'} lg:text-base xl:text-lg whitespace-nowrap`}>{getIqamahTime('Maghrib', formatTime(prayerData.timings.Maghrib))}</span></td>
                </tr>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className={`border-r border-gray-200 text-orange-900 ${isMobileSConstrainedView ? 'py-1 px-1' : isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}> 
                    <div className="flex justify-center">
                      <div className={`${isMobileSConstrainedView ? 'w-20' : 'w-32'} flex items-center`}>
                        <div className="flex justify-end" style={{ width: isMobileSConstrainedView ? 16 : isMobileMConstrainedView ? 20 : 32 }}>
                          <WiMoonrise className={`text-orange-700 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-base' : 'text-xl'}`} />
                        </div>
                        <span className={`ml-1 font-medium ${isMobileSConstrainedView ? 'text-xs' : isMobileMConstrainedView ? 'text-xs' : ''}`}>Isha</span>
                      </div>
                    </div>
                  </td>
                  <td className={`text-center text-orange-900 font-bold border-r border-gray-200 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}><span className={`${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-xs' : 'text-sm'} lg:text-base xl:text-lg whitespace-nowrap`}>{formatTime(prayerData.timings.Isha)}</span></td>
                  <td className={`text-center text-orange-900 font-bold ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}><span className={`${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-xs' : 'text-sm'} lg:text-base xl:text-lg whitespace-nowrap`}>{getIqamahTime('Isha', formatTime(prayerData.timings.Isha))}</span></td>
                </tr>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className={`border-r border-gray-200 text-orange-900 ${isMobileSConstrainedView ? 'py-1 px-1' : isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}> 
                    <div className="flex justify-center">
                      <div className={`${isMobileSConstrainedView ? 'w-20' : 'w-32'} flex items-center`}>
                        <div className="flex justify-end" style={{ width: isMobileSConstrainedView ? 16 : isMobileMConstrainedView ? 20 : 32 }}>
                          <FaPeopleRoof className={`text-orange-700 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-base' : ''}`} />
                        </div>
                        <span className={`font-medium ${isMobileSConstrainedView ? 'text-xs whitespace-nowrap ml-0' : isMobileMConstrainedView ? 'text-xs ml-1' : 'ml-1'}`}>Jumu'ah 1</span>
                      </div>
                    </div>
                  </td>
                  <td className={`text-center text-orange-900 font-bold border-r border-gray-200 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-0.5 px-1' : 'py-1 px-2'}`}><span className={`${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-xs' : 'text-sm'} lg:text-base xl:text-lg whitespace-nowrap`}>1:15 PM</span></td>
                  <td className={`text-center text-orange-900 font-bold ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-0.5 px-1' : 'py-1 px-2'}`}><span className={`${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-xs' : 'text-sm'} lg:text-base xl:text-lg whitespace-nowrap`}>1:30 PM</span></td>
                </tr>
                <tr className="even:bg-orange-50 odd:bg-white">
                  <td className={`border-r border-gray-200 text-orange-900 ${isMobileSConstrainedView ? 'py-1 px-1' : isMobileMConstrainedView ? 'py-1 px-1' : 'py-2 px-2'}`}> 
                    <div className="flex justify-center">
                      <div className={`${isMobileSConstrainedView ? 'w-20' : 'w-32'} flex items-center`}>
                        <div className="flex justify-end" style={{ width: isMobileSConstrainedView ? 16 : isMobileMConstrainedView ? 20 : 32 }}>
                          <FaPeopleRoof className={`text-orange-700 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-base' : ''}`} />
                        </div>
                        <span className={`font-medium ${isMobileSConstrainedView ? 'text-xs whitespace-nowrap ml-0' : isMobileMConstrainedView ? 'text-xs ml-1' : 'ml-1'}`}>Jumu'ah 2</span>
                      </div>
                    </div>
                  </td>
                  <td className={`text-center text-orange-900 font-bold border-r border-gray-200 ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-0.5 px-1' : 'py-1 px-2'}`}><span className={`${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-xs' : 'text-sm'} lg:text-base xl:text-lg whitespace-nowrap`}>1:15 PM</span></td>
                  <td className={`text-center text-orange-900 font-bold ${isMobileSConstrainedView || isMobileMConstrainedView ? 'py-0.5 px-1' : 'py-1 px-2'}`}><span className={`${isMobileSConstrainedView || isMobileMConstrainedView ? 'text-xs' : 'text-sm'} lg:text-base xl:text-lg whitespace-nowrap`}>2:30 PM</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-2 text-center text-gray-600 bg-gray-50 border-t border-gray-800">
            <p className={
              isMobileSConstrainedView || isMobileMConstrainedView
                ? 'text-[10px]'
                : isMobileLConstrainedView
                  ? 'text-xs'
                  : 'text-sm'
            }>Iqamah times shown here are approximate.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PrayerTimes; 