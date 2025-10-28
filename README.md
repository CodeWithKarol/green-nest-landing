# GreenNest Landing Page

A modern, fully responsive landing page for GreenNest - a sustainable home goods startup focused on eco-friendly, ethically sourced products. Built with the latest HTML5 and CSS features.

## 🌿 About GreenNest

GreenNest provides eco-friendly, ethically sourced home products that enhance everyday living while minimizing environmental impact. Our mission is to help consumers create healthier, greener homes through thoughtfully designed, durable, and stylish essentials.

## ✨ Features

### Core Functionality

- **Fully Responsive Design**: Mobile-first approach with advanced CSS Grid and Flexbox
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Eco-Friendly Branding**: Earthy color palette with greens, warm neutrals, and soft browns
- **Interactive Elements**:
  - Dynamic product filtering system
  - Auto-play testimonial slider
  - Animated mobile navigation menu
  - Newsletter subscription with validation
  - Smooth scroll navigation
  - Scroll-to-top button with fade-in effect

### Modern CSS Features

- **CSS Custom Properties**: Fluid spacing using `clamp()` for responsive design
- **CSS Grid with `auto-fit`**: Fully responsive grids without media queries
- **Container Queries**: Component-level responsiveness
- **Modern Selectors**: `:is()`, `:where()`, `:has()`, `:focus-visible`
- **Logical Properties**: Better RTL language support (`margin-inline`, `padding-block`)
- **Aspect Ratio**: Native aspect ratio for images
- **CSS `min()` function**: Responsive grid columns

### Accessibility Features

- **WCAG 2.1 Compliant**: Proper ARIA labels and semantic HTML5
- **Keyboard Navigation**: Full keyboard support with `:focus-visible`
- **Screen Reader Support**: Descriptive labels and announcements
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **High Contrast**: Adapts to `prefers-contrast` setting
- **Color Scheme**: Prepared for dark mode with `color-scheme`

### Performance Optimizations

- **Lazy Loading**: Native lazy loading for images
- **Content Visibility**: `content-visibility: auto` for performance
- **Debounced Events**: Optimized scroll and resize handlers
- **Efficient Animations**: GPU-accelerated transforms
- **No Dependencies**: Vanilla JavaScript, no frameworks required

## 🎨 Design Elements

### Color Palette

- Primary Green: `#6b8f71`
- Dark Green: `#4a6b4f`
- Light Green: `#a8c5a0`
- Warm Beige: `#f5f1e8`
- Brown: `#8b7355`

### Typography

- **Headings**: Merriweather (Serif)
- **Body**: Montserrat (Sans-serif)

### Key Sections

1. **Hero Section**: Eye-catching banner with value proposition and CTAs
2. **Featured Products**: Filterable product grid with 6 eco-friendly items
3. **Why GreenNest**: 6 feature cards highlighting sustainability commitments
4. **Impact Statistics**: Visual display of environmental achievements
5. **Testimonials**: Customer reviews with slider functionality
6. **Community**: Blog previews, social links, and newsletter signup
7. **CTA Banner**: Final call-to-action encouraging purchases
8. **Footer**: Comprehensive site navigation and contact information

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for best experience)

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser

### Using a Local Server (Recommended)

**Option 1: Using Python**

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Using Node.js**

```bash
npx serve
```

**Option 3: Using VS Code**

- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then visit `http://localhost:8000` (or the appropriate port)

## 📁 Project Structure

```
green-nest-landing/
├── index.html          # Semantic HTML5 with modern meta tags
├── styles.css          # Modern CSS with custom properties and latest features
├── script.js           # Vanilla JavaScript with ES6+ features
├── assets/
│   ├── logo.svg        # Custom GreenNest logo
│   └── cert-badges/    # SVG certification badges (generated inline)
├── README.md           # This file
└── LICENSE             # MIT License
```

## 🎯 Target Audience

GreenNest appeals to:

- Environmentally conscious homeowners and renters
- Ages 25-45
- Educated, socially aware consumers
- Interest in health, wellness, and environmental activism
- Value sustainability in purchasing choices

## 💻 Technical Highlights

### HTML5 Features

- **Semantic Elements**: `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- **Meta Tags**: Open Graph, Twitter Cards, theme-color
- **Accessibility**: ARIA labels, roles, and descriptive alt text
- **SVG Icons**: Inline SVG for scalable, crisp graphics

### CSS Features

- **Custom Properties**: CSS variables with fluid values using `clamp()`
- **Modern Layout**: CSS Grid with `auto-fit`, `minmax()`, and `min()`
- **Flexbox**: Advanced flex layouts with `gap` property
- **Logical Properties**: `margin-inline`, `padding-block`, `inset-inline-start`
- **Modern Selectors**: `:is()`, `:where()`, `:has()`, `:focus-visible`
- **Container Queries**: `container-type: inline-size`
- **Aspect Ratio**: Native `aspect-ratio` property
- **Backdrop Filter**: Frosted glass effects
- **User Preferences**: `prefers-reduced-motion`, `prefers-contrast`, `prefers-color-scheme`

### JavaScript Features

- **ES6+ Syntax**: Arrow functions, template literals, destructuring
- **Intersection Observer**: Scroll animations and lazy loading
- **Event Delegation**: Efficient event handling
- **Debouncing**: Performance optimization for scroll/resize
- **Local Storage Ready**: Prepared for cart/wishlist features

GreenNest appeals to:

- Environmentally conscious homeowners and renters
- Ages 25-45
- Educated, socially aware consumers
- Interest in health, wellness, and environmental activism
- Value sustainability in purchasing choices

## 🔧 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
	--primary-green: #6b8f71;
	--dark-green: #4a6b4f;
	/* ... other colors */
}
```

### Modifying Content

Edit the HTML content directly in `index.html`

### Adding Products

Add new product cards in the products section following the existing structure:

```html
<div
	class="product-card"
	data-category="kitchen"
>
	<!-- Product content -->
</div>
```

## 📱 Responsive Breakpoints

The site is fully responsive across all screen sizes:

- **Small phones**: 320px - 640px
- **Medium phones**: 640px - 768px
- **Tablets**: 768px - 1024px
- **Small laptops**: 1024px - 1440px
- **Desktops**: 1440px - 1920px
- **Ultra-wide**: 1920px+
- **Orientation support**: Portrait and landscape modes
- **Landscape mobile**: Special optimizations for height < 500px

### Grid Behavior by Breakpoint

- **Mobile**: 1 column
- **Tablet Portrait**: 2 columns
- **Tablet Landscape**: 3 columns
- **Desktop**: 3-4 columns (auto-fit)
- **Ultra-wide**: 4 columns fixed

## 🌐 Browser Support

- ✅ Chrome/Edge (latest, Chromium-based)
- ✅ Firefox (latest)
- ✅ Safari (latest, macOS/iOS)
- ✅ Opera (latest)
- ✅ Mobile browsers (iOS Safari 14+, Chrome Mobile)

### Progressive Enhancement

- Modern features degrade gracefully in older browsers
- Core functionality works without JavaScript
- CSS Grid fallbacks to Flexbox where needed

## ♿ Accessibility

This landing page follows WCAG 2.1 Level AA standards:

- ✅ **Semantic HTML5**: Proper heading hierarchy and landmarks
- ✅ **ARIA Labels**: Comprehensive ARIA roles and descriptions
- ✅ **Keyboard Navigation**: Full site navigation without mouse
- ✅ **Focus Management**: Visible focus indicators with `:focus-visible`
- ✅ **Screen Reader Friendly**: Descriptive alt text and ARIA live regions
- ✅ **Color Contrast**: AAA compliance for text readability
- ✅ **Reduced Motion**: Respects user motion preferences
- ✅ **High Contrast Mode**: Enhanced contrast support
- ✅ **Skip Links**: Quick navigation for screen readers
- ✅ **Form Labels**: Proper labeling and validation messages

## 📈 Performance

### Optimization Techniques

- ⚡ **Lazy Loading**: Images load only when entering viewport
- ⚡ **Content Visibility**: Deferred rendering for off-screen content
- ⚡ **Debounced Events**: Optimized scroll/resize handling (250ms)
- ⚡ **CSS Containment**: `container-type` for layout optimization
- ⚡ **Transform Animations**: GPU-accelerated animations
- ⚡ **Efficient Selectors**: Low specificity, modern CSS
- ⚡ **No Dependencies**: Zero external libraries, ~30KB total
- ⚡ **Critical CSS**: Inline critical styles in `<head>`
- ⚡ **Font Display**: `font-display: swap` for web fonts

### Performance Metrics (Target)

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Cumulative Layout Shift: < 0.1

## 🔮 Future Enhancements

- Shopping cart functionality
- User authentication
- Product detail pages
- Blog system
- Admin dashboard
- Payment integration
- Inventory management

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback:

- Email: hello@greennest.com
- Phone: 1-800-GREEN-01

## 🙏 Acknowledgments

- Images from Unsplash
- Icons created with SVG
- Fonts from Google Fonts (Merriweather & Montserrat)

---

**Made with 💚 for the planet**

_GreenNest - Care for your home, care for the planet._
