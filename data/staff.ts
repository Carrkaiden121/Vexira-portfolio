export interface StaffMember {
  name: string;
  avatarUrl: string;
  bio: string;
  roles: string[];
}

// Add your staff members here
// You can get Discord avatar URLs by right-clicking on a user's profile picture in Discord
// and copying the image URL, or use placeholder images
export const staffMembers:  StaffMember[] = [
  {
    name: "John Doe",
    avatarUrl: "https://cdn.discordapp.com/embed/avatars/0.png",
    bio: "Lead designer specializing in custom liveries and graphics.  Bringing your vision to life with stunning designs.",
    roles: ["Livery", "Graphics"],
  },
  {
    name: "Jane Smith",
    avatarUrl: "https://cdn.discordapp.com/embed/avatars/1.png",
    bio: "Discord community manager and uniform specialist. Always here to help and ensure the best experience.",
    roles: ["Discord", "Uniforms"],
  },
  {
    name: "Mike Johnson",
    avatarUrl: "https://cdn.discordapp.com/embed/avatars/2.png",
    bio: "ELS expert and clothing designer. Creating immersive lighting setups and custom clothing options.",
    roles: ["ELS", "Clothing"],
  },
];