import { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import Quote from "@/components/layout/Quote";

export const metadata: Metadata = {
  title: "Donate - Masjid Hawa",
  description: "Support Masjid Hawa by donating to help our mosque serve the community.",
};

export default function DonatePage() {
  return (
    <MainLayout>
      <div className="py-12 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold text-center mb-6 text-orange-700">
              Support Masjid Hawa
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
              Your generous contributions help us maintain the mosque, run educational programs, and serve the community. Every donation, no matter how small, makes a difference.
            </p>

            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-orange-50 p-6 rounded-lg border border-gray-200 text-center">
                <h2 className="text-xl font-bold mb-4 text-orange-700">
                  Current Renovation Project
                </h2>
                <p className="mb-6 text-gray-700">
                  We currently have a make-shift arrangement for wudu and washroom. Sisters prayer area is not available yet. Please donate generously to renovate and modify to provide these essential services.
                </p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto mt-10">
              <Quote 
                text="Whoever builds a masjid, seeking by it the pleasure of Allah, Allah will build for him a similar place in Jannah."
                author="Sahih al-Bukhari"
              />
            </div>
            
            <div className="text-center mt-8">
              <button
                className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-12 rounded-md transition-all duration-300"
                onClick={() => window.open('https://app.irm.io/masjidhawa.com', '_blank')}
                style={{ 
                  background: 'linear-gradient(145deg, #ff5722, #e84d15)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                  fontSize: '1.5rem',
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
      </div>
    </MainLayout>
  );
} 