# Personal Portfolio Website

A modern, multilingual personal portfolio website built with Next.js 15, featuring support for English, Spanish, and Farsi languages with RTL support.

## 🚀 Features

- **Multilingual Support**: English, Spanish, and Farsi with automatic RTL layout for Farsi
- **Modern Design**: Clean, responsive design with dark/light theme support
- **Next.js 15**: Built with the latest Next.js App Router and Server Components
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **shadcn/ui**: Beautiful, accessible UI components
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Performance**: Optimized images, code splitting, and server-side rendering

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (Latin), Vazir (Farsi)
- **Theme**: next-themes for dark/light mode

## 📁 Project Structure

\`\`\`
portfolio-website/
├── app/
│   ├── [locale]/           # Localized routes
│   │   ├── about/          # About page
│   │   ├── blog/           # Blog page
│   │   ├── contact/        # Contact page
│   │   ├── portfolio/      # Portfolio page
│   │   ├── layout.tsx      # Locale-specific layout
│   │   └── page.tsx        # Home page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── favicon.ico         # Favicon
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── client-navigation.tsx
│   ├── footer.tsx
│   ├── language-switcher.tsx
│   ├── navigation.tsx
│   └── theme-provider.tsx
├── lib/
│   ├── translations/       # Translation files
│   │   ├── en.ts          # English translations
│   │   ├── es.ts          # Spanish translations
│   │   ├── fa.ts          # Farsi translations
│   │   └── index.ts       # Translation utilities
│   ├── use-translation.ts  # Translation hook
│   └── utils.ts           # Utility functions
├── public/
│   └── resume.pdf         # Resume file
├── middleware.ts          # Internationalization middleware
└── tailwind.config.ts     # Tailwind configuration
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd portfolio-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Add your resume**
   - Place your resume PDF file in the `public` folder as `resume.pdf`

4. **Customize your information**
   - Update the translation files in `lib/translations/` with your personal information
   - Replace placeholder content with your actual details

5. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio

## 🌐 Supported Languages

- **English** (`/en`) - Default language
- **Spanish** (`/es`) - Spanish translation
- **Farsi** (`/fa`) - Persian/Farsi with RTL support

The website automatically detects the user's preferred language and redirects accordingly.

## 📝 Customization

### Personal Information

Update the translation files in `lib/translations/` to customize:

- Personal details (name, title, contact info)
- About section content
- Portfolio project descriptions
- Blog post content
- Contact form labels

### Styling

- Modify `tailwind.config.ts` for theme customization
- Update `app/globals.css` for global styles
- Customize component styles in individual component files

### Adding New Languages

1. Create a new translation file in `lib/translations/`
2. Add the locale to the `locales` array in `middleware.ts`
3. Update the `generateStaticParams` function in `app/[locale]/layout.tsx`
4. Add the language option to `components/language-switcher.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Reza Bakhshi Nia**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]
- Email: [Your Email]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

Built with ❤️ using Next.js and TypeScript
