import StaffGrid from '@/components/StaffGrid';
import DiscordButton from '@/components/DiscordButton';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image
              src="/logo.png"
              alt="Vexira Customs Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Vexira Customs <span className="text-[#F08080]">Staff</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Meet our talented team of professionals
          </p>
          <DiscordButton />
        </div>

        {/* Staff Portfolio Grid */}
        <StaffGrid />
      </div>
    </main>
  );
}