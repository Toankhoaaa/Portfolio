﻿# Professional Portfolio Website

A modern, responsive personal portfolio website built with Next.js, Tailwind CSS, and Firebase.

# Link Demo:
https://portfolio-eight-wine-27.vercel.app/

## Features

- 🎨 Modern, professional design with strong UI/UX principles
- 📱 Fully responsive across all devices
- 🌓 Dark/light mode toggle
- 🔥 Firebase authentication for the admin dashboard
- 📊 Firestore database for storing projects and blog posts
- 📝 Content management system for projects and blog posts
- 📧 Contact form with EmailJS integration
- 🚀 SEO optimized

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion
- **Backend**: Firebase (Authentication, Firestore, Hosting)
- **Forms**: React Hook Form, Zod validation
- **Email**: EmailJS
- **Icons**: Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

Create a `.env.local` file in the root of your project and add the following:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id

# EmailJS Configuration (for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
NEXT_PUBLIC_EMAILJS_USER_ID=your-user-id
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Firebase Setup

### Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project" and follow the setup steps
3. Once created, add a web app to your project and copy the configuration

### Enable Authentication

1. In the Firebase Console, go to "Authentication" > "Sign-in method"
2. Enable Email/Password authentication
3. Add a user for admin access (This will be used to log in to the admin dashboard)

### Set Up Firestore Database

1. Go to "Firestore Database" > "Create database"
2. Start in production mode or test mode (switch to production later)
3. Create the following collections:
   - `projects` - for storing portfolio projects
   - `blog` - for storing blog posts

### Firestore Security Rules

Add these basic security rules to protect your data:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow public read access to projects and blog posts
    match /projects/{project} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /blog/{post} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Deny all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## Deployment

### Firebase Hosting

1. Install Firebase CLI:

```bash
npm install -g firebase-tools
```

2. Login to Firebase:

```bash
firebase login
```

3. Initialize Firebase:

```bash
firebase init
```

Select:
- Hosting
- Firestore
- Use existing project (select your Firebase project)
- For public directory, enter: `out`
- Configure as single-page app: No
- Set up GitHub Actions: Optional

4. Build and export your project:

```bash
npm run build
```

5. Deploy to Firebase:

```bash
firebase deploy
```

## Customization

### Personal Information

Update personal information, including name, title, bio, and social links in these files:

- `src/components/Navbar.tsx` - Update name in navigation
- `src/components/Footer.tsx` - Update social links and copyright
- `src/app/page.tsx` - Update hero section with your info
- `src/app/about/page.tsx` - Update about info, skills, and timeline

### Projects

You can add/edit projects by:

1. Logging into the admin dashboard (`/admin/login`)
2. Using the admin interface to add/edit projects
3. Or directly editing the Firestore database

### Blog Posts

Similarly, you can manage blog posts through the admin interface or directly in Firestore.

## License

MIT License - feel free to use this project for your own portfolio!

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Firebase](https://firebase.google.com/)
- [Framer Motion](https://www.framer.com/motion/)
