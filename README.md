# Sanity Blog

A modern, high-performance blog built with Next.js and Sanity.io. This project features a clean, responsive design and a decoupled architecture where content is managed in Sanity and displayed through a fast Next.js frontend.

## ✨ Features

- **Blazing Fast**: Built with Next.js for optimal performance and SEO
- **Modern Stack**: Utilizes the latest React and Tailwind CSS for styling
- **Headless CMS**: Content is managed through Sanity.io, providing a flexible and powerful editing experience
- **Responsive Design**: Fully responsive layout that works on all devices
- **Real-time Preview**: Preview content changes instantly (if configured)
- **Type Safety**: TypeScript support for better developer experience

## 🚀 Live Demo

Check out the live application: [Sanity Blog on Vercel](https://sanity-blog-project-alpha.vercel.app)

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (React with App Router)
- **CMS & Backend**: [Sanity.io](https://www.sanity.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (if used)
- **Code Formatting**: [Prettier](https://prettier.io/)
- **Version Control**: Git & GitHub

## 📁 Project Structure
```bash
    sanity-blog/
├── app/ # Next.js App Router pages
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Home page
│ ├── blog/ # Blog post pages
│ └── api/ # API routes (if any)
├── components/ # React components
│ ├── Header.tsx
│ ├── Footer.tsx
│ ├── BlogCard.tsx
│ └── Layout.tsx
├── lib/ # Utility functions
│ └── sanity.ts # Sanity client configuration
├── schemas/ # Sanity schemas
│ ├── post.ts
│ ├── author.ts
│ └── category.ts
├── public/ # Static assets
├── styles/ # Global styles
├── .env.local.example # Environment variables template
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```


## 🏁 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm
- A Sanity.io account (free tier available)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TirthChhatrala/sanity-blog.git
   cd sanity-blog
   ```
### Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Setup
# Copy the environment template
cp .env.local.example .env.local
 Edit .env.local and add your Sanity credentials:
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03

### Sanity Studio Setup (if included)
```bash
# Navigate to the studio directory (if separate)
cd studio
npm install

# Login to Sanity
npx sanity login

# Deploy the studio schema
npx sanity deploy
```

### Run the development server
```bash
npm run dev
# or
yarn dev
```
Open http://localhost:3000 in your browser.

### Available Scripts
```bash
npm run dev - Start development server

npm run build - Build for production

npm start - Start production server

npm run lint - Run ESLint

npm run sanity-start - Start Sanity Studio (if configured)

npm run sanity-deploy - Deploy Sanity Studio
```
### 📝 Content Management
Access your Sanity Studio at http://localhost:3333 (if running locally)

Or access the deployed studio at https://your-project.sanity.studio

Create:

Posts: Add blog posts with title, slug, content, author, and cover image

Authors: Manage blog authors

Categories: Organize posts by category

### 🔧 Configuration
Sanity Configuration
The Sanity client is configured in ``` lib/sanity.ts: ```
```
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2023-05-03',
  useCdn: false,
})
```

### 🚀 Deployment
Deploying to Vercel
Push your code to GitHub

Import your repository in Vercel Dashboard

Add environment variables in Vercel project settings

Deploy with one click

### Environment Variables in Vercel
Add these to your Vercel project:
```
NEXT_PUBLIC_SANITY_PROJECT_ID

NEXT_PUBLIC_SANITY_DATASET

NEXT_PUBLIC_SANITY_API_VERSION
```
### 📈 Performance
This project is optimized for performance with:

✅ Automatic image optimization

✅ Code splitting

✅ Server-side rendering (SSR)

✅ Static generation (SSG) where possible

✅ Minimal JavaScript bundle

### 🤝 Contributing
Fork the repository

Create a feature branch ```git checkout -b feature/AmazingFeature```

Commit your changes ```git commit -m 'Add some AmazingFeature'```

Push to the branch ```git push origin feature/AmazingFeature```

Open a Pull Request

### 🐛 Troubleshooting
Common Issues
Environment variables not loading

Ensure ```.env.local``` is in the root directory

Restart the development server after adding variables

Check variable names match those in code

Sanity connection issues

Verify project ID and dataset name

Check if CORS origins are configured in Sanity dashboard

Ensure API token has correct permissions

Build errors

Clear .next folder: ```rm -rf .next```

Reinstall dependencies: ```rm -rf node_modules``` && ```npm install```

### 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

### 👤 Author
#### Tirth Chhatrala

 GitHub: ```@TirthChhatrala```

Project: Sanity Blog

Live Demo: sanity-blog-project-alpha.vercel.app


##  Acknowledgments

This project was made possible thanks to these amazing technologies and their comprehensive documentation:

- **[Next.js](https://nextjs.org/docs)** - React framework for production
- **[Sanity.io](https://www.sanity.io/docs)** - The structured content platform
- **[Tailwind CSS](https://tailwindcss.com/docs)** - A utility-first CSS framework
- **Vercel** - For seamless deployment and hosting

Special thanks to the open-source community and all contributors to these projects.
