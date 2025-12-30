import StaffCard from './StaffCard';
import { staffMembers } from '@/data/staff';

export default function StaffGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {staffMembers.map((staff, index) => (
        <StaffCard key={index} staff={staff} />
      ))}
    </div>
  );
}