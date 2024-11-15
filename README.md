# Healthy - A Healthy Lifestyle Platform

A comprehensive platform for tracking health, fitness, and maintaining a healthy lifestyle with personalized recommendations and tracking tools.

## 🌟 Features

- User Authentication
- Health Metrics Dashboard
- Exercise Tracking
- Meal Logging
- Body Record Charts
- Personal Diary
- Blog/Column Section
- Responsive Design
- Animated UI Components

## 🛠 Tech Stack

- **Library:** ReactJs 19.0.0
- **Framework:** Next.js 15.0.3
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:**
  - Radix UI
  - Framer Motion
  - Recharts
- **Form Handling:** React Hook Form + Zod
- **State Management:** React Hooks
- **Date Handling:** Day.js
- **Authentication:** Cookie-based (js-cookie)
- **Notifications:** Sonner

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/ltlongtma/arent-healthy.git
cd arent-healthy
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
healthy-platform/
├── app/
│   ├── components/
│   ├── dashboard/
│   ├── login/
│   ├── records/
│   └── layout.tsx
├── lib/
├── mock-data/
├── public/
├── utils/
└── types/
```

## 🔑 Test Credentials

To test the application, you can use the following credentials:

```
Username: arent@gmail.com
Password: 1234qwerR!
```

## 🔑 Key Features Implementation

### Authentication

- Cookie-based authentication system
- Form validation using Zod
- Protected routes: ['/dashboard', 'records']

### Dashboard

- Interactive charts using Recharts with mock data
- Responsive grid layout

### Records

- Exercise tracking
- Body measurements
- Personal diary entries
- Meal logging

## 🎨 UI/UX Features

- Smooth animations using Framer Motion
- Responsive design for all screen sizes
- Custom scrollbar styling

## 🎯 Performance & SEO

- **Lighthouse Scores:**

  - Performance: 90/100
  - Accessibility: 95/100
  - Best Practices: 96/100
  - SEO: 100/100

- **SEO Optimizations:**

  - Semantic HTML structure
  - Meta tags optimization
  - Structured data implementation
  - Optimized images with next/image
  - Proper heading hierarchy
  - Mobile-friendly design
  - Fast page load times

- **Performance Optimizations:**
  - Image optimization and lazy loading
  - Route prefetching
  - Code splitting and dynamic imports
  - Server-side rendering (SSR)
  - Static site generation (SSG) where applicable
  - Efficient bundle size management
  - Asset caching strategies
  - Minimized JavaScript and CSS

## 📝 Development Guidelines

- Follow TypeScript strict mode guidelines
- Use proper component composition
- Implement responsive design patterns
- Follow accessibility best practices
- Maintain consistent code formatting

## 🔧 Configuration Files

The project includes several configuration files:

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint rules
- `postcss.config.js` - PostCSS configuration


## 👥 Authors

Luu Tu Long - luulong6786@gmail.com
