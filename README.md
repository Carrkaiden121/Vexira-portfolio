# Vexira Portfolio

A modern, responsive staff portfolio website for Vexira Customs built with Next.js 14, TypeScript, and Tailwind CSS. 

## Features

- 🎨 Modern, dark-themed design
- 📱 Fully responsive (4 columns → 2 columns → 1 column)
- 🚀 Built with Next.js 14 App Router
- 💎 TypeScript for type safety
- 🎯 Tailwind CSS for styling
- 🖼️ Optimized images with Next.js Image component
- 🔗 Discord integration button
- 👥 Staff portfolio cards with: 
  - Profile pictures from Discord
  - Bio/introduction
  - Role tags (Discord, Livery, Uniforms, Graphics, ELS, Clothing)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Carrkaiden121/Vexira-portfolio.git
cd Vexira-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Adding Staff Members

Edit the `data/staff.ts` file:

```typescript
export const staffMembers: StaffMember[] = [
  {
    name: "Your Name",
    avatarUrl:  "https://cdn.discordapp.com/avatars/USER_ID/AVATAR_HASH. png",
    bio: "Your bio here",
    roles: ["Discord", "Livery"], // Available:  Discord, Livery, Uniforms, Graphics, ELS, Clothing
  },
  // Add more staff members...
];
```

### Updating Discord Link

Edit `components/DiscordButton.tsx` and change the `discordInviteUrl`:

```typescript
const discordInviteUrl = "https://discord.gg/your-server-invite";
```

### Changing Colors

Edit `app/globals.css` or `tailwind.config.ts` to customize the color scheme. 

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure it
6. Click "Deploy"
7. Add your custom domain in the Vercel dashboard

## Project Structure

```
vexira-portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals. css         # Global styles
├── components/
│   ├── DiscordButton.tsx   # Discord join button
│   ├── StaffCard.tsx       # Individual staff card
│   └── StaffGrid.tsx       # Grid layout for staff cards
├── data/
│   └── staff.ts            # Staff member data
├── public/                 # Static assets
├── next.config.js          # Next. js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies
```

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) (for hosting)

## License

MIT License - feel free to use this project for your own purposes!