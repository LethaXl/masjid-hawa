import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-300 via-orange-200 to-orange-100 text-orange-900">
      <div className="flex flex-col items-center p-8 rounded-lg shadow-lg bg-white/80 border border-orange-200">
        <Image src="/images/favicon1.png" alt="Masjid Hawa Logo" width={64} height={64} className="mb-4 rounded-full border-2 border-orange-500 bg-white" />
        <h1 className="text-5xl font-extrabold text-orange-700 mb-2">404</h1>
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Page Not Found</h2>
        <p className="mb-6 text-center text-orange-800 max-w-md">Sorry, the page you are looking for does not exist or has been moved.</p>
        <Link href="/">
          <span className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded shadow transition-all duration-200">Go to Homepage</span>
        </Link>
      </div>
    </div>
  );
} 