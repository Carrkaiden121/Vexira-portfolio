import Image from 'next/image';
import { StaffMember } from '@/data/staff';

interface StaffCardProps {
  staff: StaffMember;
}

// Role tag colors
const roleColors:  Record<string, string> = {
  Discord: 'bg-indigo-600',
  Livery: 'bg-blue-600',
  Uniforms: 'bg-green-600',
  Graphics: 'bg-purple-600',
  ELS: 'bg-yellow-600',
  Clothing: 'bg-pink-600',
};

export default function StaffCard({ staff }:  StaffCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Profile Picture */}
      <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900">
        <Image
          src={staff.avatarUrl}
          alt={staff.name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name */}
        <h3 className="text-xl font-bold text-white mb-2">{staff.name}</h3>

        {/* Bio */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{staff.bio}</p>

        {/* Role Tags */}
        <div className="flex flex-wrap gap-2">
          {staff.roles.map((role, index) => (
            <span
              key={index}
              className={`${
                roleColors[role] || 'bg-gray-600'
              } text-white text-xs font-semibold px-3 py-1 rounded-full`}
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}