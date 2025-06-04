# Rockland Chess Club Website

A modern, welcoming website for the Rockland Chess Club built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, responsive design that works on all devices
- **Event Calendar**: Interactive calendar with event filtering by category
- **Membership System**: Integration with Zeffy payment platform
- **Contact Forms**: Newsletter signup and contact forms powered by Netlify
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **SEO Optimized**: Proper meta tags, Open Graph, and structured data
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Netlify Forms
- **Calendar**: React Calendar
- **Deployment**: Netlify
- **Icons**: Heroicons + Lucide React

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/dfenjves/rockland-chess-club.git
   cd rockland-chess-club
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── classes/        # Chess classes page
│   ├── contact/        # Contact page with form
│   ├── events/         # Events calendar page
│   ├── join/           # Membership page
│   └── page.tsx        # Homepage
├── components/
│   ├── home/           # Homepage-specific components
│   ├── layout/         # Header, Footer, Navigation
│   ├── events/         # Event calendar components
│   └── ui/             # Reusable UI components
├── data/               # Static data and content
├── lib/                # Utility functions
└── types/              # TypeScript type definitions
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Slate grays
- **Event Categories**:
  - Tournament: Blue
  - Casual Play: Green
  - Classes: Orange
  - Board Games: Purple
  - Special Events: Yellow

### Typography
- **Font**: Inter (clean, modern, readable)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weight for readability

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🌐 Deployment

The site is configured for automatic deployment to Netlify:

1. **Connect your repository** to Netlify
2. **Set build command**: `npm run build`
3. **Set publish directory**: `.next`
4. **Enable form processing** in Netlify settings

### Environment Variables

No environment variables required for basic functionality. For CMS integration (future), you'll need:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 📧 Forms

The website includes two Netlify Forms:

1. **Newsletter Signup** (`newsletter` form)
2. **Contact Form** (`contact` form)

Both forms include spam protection and validation.

## 🎯 Key Pages

- **Homepage** (`/`): Hero, info cards, upcoming events, newsletter signup
- **About** (`/about`): Club history, mission, meeting details
- **Events** (`/events`): Interactive calendar with event filtering
- **Classes** (`/classes`): Chess instruction offerings
- **Join** (`/join`): Membership options and pricing
- **Contact** (`/contact`): Contact form and club information

## 🔧 Customization

### Adding Events
Edit `src/data/events.ts` to add new events:

```typescript
{
  id: 'unique-id',
  title: 'Event Name',
  date: new Date('2024-12-25'),
  time: '19:00',
  category: 'tournament', // or 'casual', 'classes', 'board-games', 'special'
  description: 'Event description'
}
```

### Styling
- Tailwind classes for quick styling
- Custom components in `src/components/ui/`
- Global styles in `src/app/globals.css`

## 🚀 Future Enhancements

- [ ] Sanity CMS integration for content management
- [ ] Member portal with authentication
- [ ] Event registration system
- [ ] Tournament management tools
- [ ] Interactive chess puzzles
- [ ] Email automation integration

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions or support:
- Email: info@rocklandchessclub.org
- GitHub Issues: [Create an issue](https://github.com/dfenjves/rockland-chess-club/issues)

---

Built with ❤️ for the Rockland Chess Club community
