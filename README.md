# Roadside Studio

A modern, responsive website for **Roadside Studio** - a professional band rehearsal studio located in General Trias, Cavite, Philippines. The site features an elegant gallery showcasing the studio facilities and provides easy booking and contact options for musicians.

## Features

- **Modern Gallery Display**: Interactive image gallery with smooth GSAP animations
- **Responsive Design**: Optimized for all device sizes using Tailwind CSS
- **Direct Booking Integration**: One-click booking through Google Forms
- **Contact Information**: Phone, Facebook, and location links for easy communication
- **Professional Branding**: Clean, music-focused design with custom logo and branding

## Tech Stack

- **Framework**: [Next.js 15.5.2](https://nextjs.org) with App Router
- **Language**: TypeScript 5
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Animations**: [GSAP 3.13](https://gsap.com) with ScrollTrigger
- **Frontend**: React 19.1.0
- **Image Optimization**: Next.js Image component
- **Development**: ESLint with Next.js configuration

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/
│   ├── Content/           # Main content area with image gallery
│   └── Sidebar/           # Studio information and contact details
└── utils/
    └── animateWithGsap.ts # GSAP animation utilities
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Components

- **Sidebar**: Contains studio branding, features list, and contact information
- **Content**: Displays animated image gallery of studio facilities
- **Animation System**: Custom GSAP utilities for scroll-triggered animations

## Studio Information

**Roadside Studio** offers:
- Quality music instruments
- Spacious rehearsal rooms
- Affordable session rates

**Contact**:
- Phone: +63 945 822 3807
- Location: General Trias, Cavite
- Facebook: [Roadside Studio](https://www.facebook.com/profile.php?id=100068199806701)

## Deployment

The site can be deployed on [Vercel](https://vercel.com) or any platform that supports Next.js applications.

For Vercel deployment:
1. Connect your repository to Vercel
2. Configure build settings (defaults work for Next.js)
3. Deploy

## License

© 2025 Roadside Studio. All rights reserved.
