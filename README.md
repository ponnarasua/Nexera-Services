# Nexera Services

![Nexera Services Banner](public/logo.png)

Nexera Services is a premium, high-fidelity corporate platform designed for an enterprise software engineering and AI integration agency. Built with cutting-edge web technologies, it features immersive interactive elements, fluid animations, and a cohesive modern aesthetic.

---

## Key Features

- **Glassmorphic Navigation**: A floating responsive header with spring-animated scroll spy highlights that snap instantly to active sections.
- **Three.js Interactive Sphere**: An interactive 3D particle sphere in the contact section that responds dynamically to mouse movement.
- **Micro-Animations & Smooth Scrolling**: Powered by Framer Motion and GSAP for a fluid, premium browsing experience.
- **Fully Responsive Components**: Including structured layouts for Services, Solutions, Portfolio, and a Process Timeline.
- **Secure Contact Form**: Integrated with Next.js API Routes and Nodemailer for seamless, secure email notifications.
- **Performance & Security**: Implements strict Content Security Policy (CSP) headers, complete semantic SEO structures, and dynamic static optimization.

---

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router & Server Actions)
- **Library**: [React](https://react.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Delivery**: [Nodemailer](https://nodemailer.com/)

---

## Directory Structure

```text
Nexera Services/
├── src/
│   ├── app/                 # Next.js App Router (Layouts, Pages, APIs)
│   │   ├── api/             # API routes (Contact nodemailer handler)
│   │   ├── globals.css      # Core style definitions & Tailwind configurations
│   │   └── page.tsx         # Main entry point combining all layout components
│   ├── components/          # Reusable UI components
│   │   ├── About.tsx        # Company metrics & mission statements
│   │   ├── Contact.tsx      # Contact form with 3D interactive particle background
│   │   ├── Navbar.tsx       # Glassmorphic header navigation
│   │   ├── Portfolio.tsx    # Showcase gallery of case studies
│   │   ├── ProcessTimeline.tsx # Vertical step-by-step pipeline layout
│   │   ├── Services.tsx     # Capability showcase grids
│   │   └── WhyChooseUs.tsx  # Differentiators & interactive counter metrics
│   └── context/             # React context for theme configurations (Light/Dark mode)
├── public/                  # Static assets (Logos, Icons, Images)
├── next.config.ts           # Next.js settings & Content Security Policy (CSP) headers
├── tailwind.config.js       # Custom design system configuration tokens
└── package.json             # Build commands and dependency catalog
```

---

## Getting Started

### Prerequisites

Ensure you have **Node.js (v18.x or later)** and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ponnarasua/Nexera-Services.git
   cd Nexera-Services
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   Create a `.env.local` file in the root folder and add your Nodemailer transport credentials:
   ```env
   # Email Configuration for Contact Form
   EMAIL_HOST=your-smtp-host
   EMAIL_PORT=587
   EMAIL_USER=your-smtp-username
   EMAIL_PASS=your-smtp-password
   EMAIL_TO=recipient@nexeraservices.com
   ```

### Running Locally

To run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

Compile and generate the optimized production build:
```bash
npm run build
```

To run the production build:
```bash
npm run start
```

### Code Formatting & Linting

Run ESLint verification to ensure code quality:
```bash
npm run lint
```

---

## License

This project is privately owned and licensed under [Nexera Services](https://nexeraservices.com).
