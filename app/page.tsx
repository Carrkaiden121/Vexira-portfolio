import StaffGrid from '@/components/StaffGrid';
import DiscordButton from '@/components/DiscordButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Vexira Customs Staff
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