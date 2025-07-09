# Rockland County Chess Club Website

A modern, welcoming website for the Rockland County Chess Club built with Next.js, TypeScript, and Tailwind CSS. Features dynamic content management via Airtable and a sophisticated notification system.

## 🚀 Features

- **Modern Design**: Clean, responsive design with elegant classical chess theme
- **Dynamic Content**: Real-time content management through Airtable integration
- **Event Calendar**: Interactive calendar with event filtering by category
- **Toast Notifications**: Dismissible announcement system with auto-rotation
- **Membership System**: Integration with Zeffy payment platform
- **Contact Forms**: Dual submission to Netlify Forms and Airtable
- **Newsletter Management**: Automated subscriber management in Airtable
- **Photo Galleries**: Curated image collections showcasing club life
- **Smooth Animations**: Enhanced user experience with Framer Motion
- **SEO Optimized**: Proper meta tags, Open Graph, and structured data
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom design system
- **Animation**: Framer Motion for smooth interactions
- **Forms**: React Hook Form with validation
- **Calendar**: React Calendar for event display
- **Icons**: Heroicons for consistent iconography

### Backend & Data
- **Database**: Airtable for content management
- **Forms**: Dual submission (Netlify Forms + Airtable)
- **Deployment**: Netlify with automatic deployments
- **Dynamic Rendering**: Server-side rendering for real-time data

### Design System
- **Colors**: Burgundy, amber, forest green, cream palette
- **Typography**: Playfair Display (headings) + Baskerville (body)
- **Theme**: Classical chess aesthetic with modern functionality

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Airtable account (for content management)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dfenjves/rockland-chess-club.git
   cd rockland-chess-club
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   AIRTABLE_API_KEY=your_airtable_api_key
   AIRTABLE_BASE_ID=your_airtable_base_id
   AIRTABLE_TABLE_NAME=Events
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page with club info
│   ├── classes/        # Chess classes and instruction
│   ├── contact/        # Contact form with Airtable integration
│   ├── events/         # Dynamic events calendar
│   ├── join/           # Membership and Zeffy integration
│   ├── api/            # API routes for form submissions
│   └── page.tsx        # Homepage with hero and galleries
├── components/
│   ├── home/           # Homepage-specific components
│   ├── layout/         # Header, Footer, Navigation
│   ├── events/         # Event calendar components
│   └── ui/             # Reusable UI components (Toast, etc.)
├── data/               # Static fallback data
├── lib/                # Utility functions and Airtable client
└── types/              # TypeScript type definitions
```

## 🗄️ Airtable Integration

The website dynamically fetches content from Airtable tables:

### Required Tables

1. **Events**
   - Title, Date, Time, Category, Description, Location, Status

2. **Announcements**
   - Title, Description, Link URL, Link Text, Status, Priority, Icon

3. **CommunityCards**
   - Title, Description, Icon, Order, Status

4. **Newsletter**
   - Email, Subscribed At, Status, Source

5. **Contact-Us**
   - Name, Email, Message, Submitted At, Status, Source

### Dynamic Features
- Real-time content updates via `export const dynamic = 'force-dynamic'`
- Automatic fallbacks for offline/error states
- Timezone-safe date handling for production deployment

## 🎨 Design System

### Color Palette
- **Primary**: Burgundy (#800020) for headings and accents
- **Secondary**: Amber (#F59E0B) for highlights and CTAs  
- **Tertiary**: Forest Green (#22543D) for body text
- **Background**: Cream (#FFFBF0) and warm gradients

### Event Categories
- **Casual Play**: Green theme
- **Board Games**: Purple theme
- **Tournament**: Blue theme
- **Special Events**: Amber theme

### Typography
- **Headings**: Playfair Display (classical, elegant)
- **Body Text**: Baskerville (readable, traditional)
- **UI Elements**: Inter (clean, modern)

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript checks
```

## 🌐 Deployment

### Netlify Deployment

1. **Connect Repository**: Link your GitHub repo to Netlify
2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Environment Variables**: Add Airtable credentials
4. **Form Settings**: Enable Netlify Forms for dual submission

### Environment Variables

Required for full functionality:

```env
# Airtable Integration
AIRTABLE_API_KEY=your_api_key
AIRTABLE_BASE_ID=your_base_id
AIRTABLE_TABLE_NAME=Events

# Optional: Custom table names
NEWSLETTER_TABLE_NAME=Newsletter
CONTACT_TABLE_NAME=Contact-Us
```

## 🔔 Toast Notification System

The website features a sophisticated announcement system:

- **Bottom-positioned toasts** for non-intrusive messaging
- **Auto-rotation** through multiple announcements (5-second intervals)
- **Progress indicators** for navigation between announcements
- **Dismissible** with smooth animations
- **Responsive design** adapting to mobile/desktop

Announcements are managed via Airtable with `Status = 'Active'` field.

## 📧 Forms & Data Collection

### Dual Submission System
All forms submit to both Netlify Forms (for backup) and Airtable (for management):

1. **Newsletter Signup**: Collects emails with source tracking
2. **Contact Form**: Full contact submissions with status tracking

### Form Features
- Real-time validation with React Hook Form
- Spam protection via Netlify
- Success/error state handling
- Accessible form design

## 🎯 Key Pages

- **Homepage** (`/`): Hero with large logo, photo galleries, toast notifications
- **About** (`/about`): Club mission, community stats, leadership info  
- **Events** (`/events`): Dynamic calendar with Airtable-powered events
- **Classes** (`/classes`): Instruction offerings and skill level guidance
- **Join** (`/join`): Membership tiers with Zeffy payment integration
- **Contact** (`/contact`): Contact form with social media links

## 🔧 Content Management

### Adding Events (via Airtable)
Create records in the Events table with:
- **Title**: Event name
- **Date**: YYYY-MM-DD format
- **Time**: HH:MM format  
- **Category**: casual, board-games, tournament, special
- **Status**: Active (to display)

### Managing Announcements
Create records in the Announcements table:
- **Status**: Active/Inactive
- **Priority**: Lower numbers = higher priority
- **Icon**: Chess piece symbols (♔♕♗♘♖♙)

### Customizing Community Cards
Edit CommunityCards table for homepage features:
- **Order**: Display sequence
- **Status**: Active to show
- **Icon**: Chess symbols or emojis

## 🚀 Future Enhancements

- [ ] Member authentication portal
- [ ] Event registration with capacity limits  
- [ ] Tournament bracket management
- [ ] Chess puzzle integration
- [ ] Email automation workflows
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Mobile app development

## 📊 Performance & SEO

- **Dynamic rendering** for fresh content
- **Image optimization** with Next.js Image component
- **Semantic HTML** structure throughout
- **Meta tags** and Open Graph optimization
- **Structured data** for search engines
- **Responsive design** with mobile-first approach

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes with proper TypeScript typing
4. Test thoroughly including Airtable integration
5. Commit with descriptive messages
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Development Guidelines
- Follow existing TypeScript patterns
- Maintain responsive design principles
- Test with and without Airtable connectivity
- Ensure accessibility compliance
- Update documentation as needed

## 📞 Support

For questions or support:
- **Technical Issues**: [GitHub Issues](https://github.com/dfenjves/rockland-chess-club/issues)
- **Club Information**: Contact through website form
- **Development**: Check CLAUDE.md for detailed development guidelines

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ♔ for the Rockland County Chess Club community | Powered by Next.js, TypeScript, and Airtable