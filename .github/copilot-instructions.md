# Copilot Instructions for Dev Sharma Portfolio

## Project Overview
This is a modern, dark-themed portfolio website built with React 18, Vite, and Tailwind CSS. It showcases a full-stack developer's work with glassmorphism effects, smooth animations, and responsive design. The project prioritizes visual polish and interactivity over complex logic.

## Architecture & Key Patterns

### Component Structure (`src/components/`)
- **Stateful Components**: `Navbar.jsx` (scroll tracking, mobile menu), `CursorFollower.jsx` (mouse events)
- **Stateless Components**: `Hero.jsx`, `Skills.jsx`, `Projects.jsx`, `About.jsx`, `Contact.jsx`, `Footer.jsx`
- All components use Tailwind utility classes; avoid inline styles except for dynamic positioning
- Section IDs (`id="home"`, `id="about"`, `id="projects"`, `id="contact"`) enable smooth scroll navigation

### Styling Conventions
- **Color Theme**: Dark (`bg-gray-900`), accents in cyan/blue (`cyan-500`, `cyan-400`)
- **Glassmorphism**: Use `.glass` and `.glass-glow` utility classes from `index.css` for frosted glass effect
- **Custom Animations**: 
  - Glow animation defined in `tailwind.config.js` (cyan pulse 2s loop)
  - Hover effects use `hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]` pattern
- **Responsive Grid**: Common pattern is `grid-cols-1 md:grid-cols-2` with `gap-12`

### Dynamic Features
- **Active Section Tracking** (`Navbar.jsx`): Navbar updates `activeSection` state on scroll by checking element `offsetTop`
- **Cursor Follower** (`CursorFollower.jsx`): Global component tracking mouse position; uses `pointer-events-none` to avoid interaction issues
- **Mobile Menu Toggle** (`Navbar.jsx`): `isMobileMenuOpen` state controls menu visibility with smooth transitions

### Project Data Structure (`Projects.jsx`)
- Projects array with `tech` field containing JSX React Icons components (not strings)
- `isMobile` boolean flag determines layout: mobile projects display phone-like container, others use standard card
- Example: Parking Management System has `isMobile: true` and displays with centered image

## Development Workflows

### Setup & Running
```bash
npm install              # Install dependencies
npm run dev              # Start Vite dev server (http://localhost:5173)
npm run build            # Production build to `dist/`
npm run preview          # Preview production build locally
```

### Common Tasks
- **Customize Content**: Update component JSX directly; all text is hardcoded, no CMS
- **Add/Edit Projects**: Modify `projects` array in `src/components/Projects.jsx`; add project image to `public/`
- **Change Colors**: Update Tailwind classes globally; main color scheme in `tailwind.config.js`
- **Update Resume Link**: Change URL in `Hero.jsx` button (`href="/resume.pdf"`)

## Critical Integration Points

### Navigation Flow
1. `Navbar.jsx` reads scroll position via `window.scrollY` and section `offsetTop` to determine active page
2. Nav links use anchor href (e.g., `#home`) paired with section `id` attributes
3. Do NOT change section IDs without updating `navLinks` array and scroll detection logic

### Icon Dependencies
- `lucide-react`: Menu/X icons in `Navbar.jsx`
- `react-icons`: Tech stack icons in `Projects.jsx` (FaReact, FaNodeJs, SiMongodb, etc.)
- When adding new tech icons, import from appropriate icon set and add color class (e.g., `text-yellow-400`)

### Asset Management
- Images in `public/` directory: profile image (`/image.png`), project images (`/project-*.png`)
- Resume PDF at `/resume.pdf`; linked in `Hero.jsx` with `download` attribute
- Missing images won't break build but appear as broken image tags

## Project-Specific Conventions
- **No External APIs**: Portfolio is static; all content hardcoded in components
- **No State Management**: Use React's built-in `useState`/`useEffect`; no Redux or Context API
- **No Testing Suite**: `App.test.jsx` exists but unused; focus on visual verification
- **CSS-in-Tailwind**: All styling in className; no CSS modules or styled-components
- **Smooth Scroll**: Enabled globally in `index.css` (`scroll-behavior: smooth`)

## Files to Reference for Patterns
- [src/components/Navbar.jsx](src/components/Navbar.jsx) - Scroll detection, mobile responsiveness, state management
- [src/index.css](src/index.css) - Tailwind layers, custom utilities (`.glass`, `.glass-glow`)
- [tailwind.config.js](tailwind.config.js) - Animation keyframes, theme extensions
- [src/components/Projects.jsx](src/components/Projects.jsx) - Data-driven component rendering, conditional layouts
- [src/App.jsx](src/App.jsx) - Component composition order, structure

## Common Pitfalls to Avoid
- Don't hardcode colors; use Tailwind classes (`text-cyan-400`, `bg-gray-800`)
- Don't remove section IDs; breaks navigation
- Don't use inline styles for static layouts; use Tailwind instead
- Preserve glassmorphism utility classes when styling new elements
- Keep mobile-first approach: base styles, then `md:` breakpoints
