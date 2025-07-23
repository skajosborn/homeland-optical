# Homeland Cable

A modern Next.js application for a cable and internet service provider, built with TypeScript and CSS modules.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **CSS Modules** for component-scoped styling
- **Responsive Design** with mobile-first approach
- **Modern UI** with smooth animations and transitions
- **Dark Mode Support** with CSS custom properties

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS reset
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Homepage component
│   └── page.module.css      # Homepage-specific styles
├── components/
│   ├── Button.tsx           # Reusable button component
│   ├── Button.module.css    # Button component styles
│   ├── Navbar.tsx           # Navigation component
│   └── Navbar.module.css    # Navigation styles
```

## CSS Architecture

This project uses **CSS Modules** instead of Tailwind CSS for the following benefits:

- **Component-scoped styles** - No style conflicts between components
- **Better performance** - No utility class overhead
- **Type safety** - CSS class names are checked at compile time
- **Maintainability** - Styles are co-located with components
- **Flexibility** - Full CSS power without framework constraints

### Using CSS Modules

1. **Create a CSS module file**: `ComponentName.module.css`
2. **Import styles in your component**:
   ```tsx
   import styles from './ComponentName.module.css';
   ```
3. **Apply classes using the styles object**:
   ```tsx
   <div className={styles.container}>
     <h1 className={styles.title}>Hello World</h1>
   </div>
   ```

### CSS Custom Properties

The project uses CSS custom properties for theming:

```css
:root {
  --primary: #dc2626;
  --primary-hover: #b91c1c;
  --background: #ffffff;
  --foreground: #000000;
  /* ... more variables */
}
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Styling Guidelines

1. **Use CSS Modules** for component-specific styles
2. **Use global CSS** for reset, base styles, and utility classes
3. **Leverage CSS custom properties** for theming and consistency
4. **Write responsive styles** with mobile-first approach
5. **Use semantic class names** that describe the purpose, not appearance

## Component Examples

### Button Component
```tsx
import Button from '@/components/Button';

<Button variant="primary" size="large" onClick={handleClick}>
  Click Me
</Button>
```

### Page with CSS Modules
```tsx
import styles from './page.module.css';

export default function MyPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Page</h1>
    </div>
  );
}
```

## Deployment

This project can be deployed to Vercel, Netlify, or any other platform that supports Next.js.

## Contributing

1. Follow the existing code style and patterns
2. Use CSS modules for new components
3. Ensure responsive design works on all screen sizes
4. Test in both light and dark modes
