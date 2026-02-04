# Master's Unisex Gym - Modern Landing Page

A modern, SEO-optimized landing page for Master's Unisex Gym built with Next.js, TypeScript, and Tailwind CSS.

## 🏋️ Features

- **Modern Design**: Clean, minimalist aesthetic with smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Comprehensive meta tags and structured data for local SEO
- **Performance Focused**: Built with Next.js 15 for optimal loading speeds
- **Interactive Components**:
  - Hero section with CTAs
  - About section highlighting 30+ years legacy
  - Facilities showcase
  - Interactive membership pricing table
  - Testimonials carousel
  - Image gallery with lightbox
  - Contact form with validation
  - Google Maps integration
  - WhatsApp floating button

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd masters-unisexgym
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
masters-unisexgym/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles with Tailwind
├── components/
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Facilities.tsx       # Facilities showcase
│   ├── Membership.tsx       # Pricing table
│   ├── WhyChooseUs.tsx      # Benefits section
│   ├── Testimonials.tsx     # Customer testimonials
│   ├── Gallery.tsx          # Image gallery
│   ├── Contact.tsx          # Contact section
│   ├── ContactForm.tsx      # Contact form component
│   ├── WhatsAppButton.tsx   # Floating WhatsApp button
│   └── Footer.tsx           # Footer component
├── public/
│   ├── logo.png             # Gym logo (add your logo here)
│   └── images/              # Image assets
└── README.md
```

## 🎨 Customization

### 1. Add Your Logo

Replace the placeholder logo:
- Place your gym logo at `public/logo.png`
- Recommended size: 512x512px (PNG with transparent background)

### 2. Add Gym Photos

Add your actual gym photos in the `public/images/` directory:
- `hero-bg.jpg` - Hero background image (1920x1080px)
- `about-gym.jpg` - About section image (1200x800px)
- `gallery/` - Gallery images (1200x900px each)

### 3. Update Contact Information

Edit the following files with your actual contact details:

**app/layout.tsx** (line 64-90):
- Update phone number
- Update address coordinates
- Update business hours

**components/Contact.tsx** (line 70-170):
- Update phone number
- Update email address
- Update address
- Update Google Maps embed URL with your location

**components/WhatsAppButton.tsx** (line 23):
- Replace `whatsappNumber` with your actual WhatsApp number

**components/Footer.tsx** (line 15-180):
- Update social media links
- Update contact information

### 4. Customize Colors

Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: {
    DEFAULT: '#000000',  // Your primary color
    // ...
  },
  accent: {
    gold: '#d4af37',     // Your accent color
    // ...
  },
}
```

### 5. Update Membership Plans

Edit `components/Membership.tsx` (line 7-80) to update:
- Pricing
- Plan features
- Duration options

### 6. Modify Testimonials

Edit `components/Testimonials.tsx` (line 5-60) to add real customer testimonials.

## 🔧 Configuration

### Google Maps Integration

1. Get your location's Google Maps embed URL from [Google Maps](https://maps.google.com)
2. Update the iframe src in `components/Contact.tsx` (line 195)

### Contact Form

The contact form currently has a mock submission handler. To integrate with a real backend:

**Option 1: Use a form service (recommended for simplicity)**
- [Formspree](https://formspree.io/)
- [Web3Forms](https://web3forms.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

**Option 2: Build your own API endpoint**
- Create `app/api/contact/route.ts`
- Implement email sending with Nodemailer or similar

### SEO Optimization

Update the following in `app/layout.tsx`:
- Meta title and description
- Open Graph images
- Google Search Console verification code
- Business schema markup

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Deploy to Netlify

1. Push code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## 📊 Performance Optimization

The site is built with performance in mind:
- Image optimization with Next.js Image component
- Lazy loading for images
- Code splitting
- Minified CSS and JS
- Font optimization

## 🔒 Security

- No exposed API keys in client-side code
- Form validation on both client and server side
- Secure headers configured

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Support

For issues or questions:
1. Check this README first
2. Review the code comments
3. Contact the developer

## 📄 License

This project is created for Master's Unisex Gym.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
