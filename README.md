# Gushwork Assignment - Responsive Web Page

A pixel-perfect, responsive web page implementation with vanilla HTML, CSS, and JavaScript featuring a sticky header and interactive image carousel with zoom functionality.

## Features

### 1. Sticky Header Functionality
- Appears when scrolling beyond the first fold (viewport height)
- Positions itself above the main navigation bar
- Disappears when scrolling back to the top
- Smooth transitions and animations

### 2. Image Carousel with Zoom
- Interactive carousel with navigation buttons
- Dot indicators for slide navigation
- Hover zoom effect on carousel images
- Zoom preview follows mouse position
- Auto-play functionality (pauses on hover)
- Keyboard navigation support (Arrow keys)
- Smooth transitions between slides

### 3. Responsive Design
- Fully responsive across desktop, tablet, and mobile devices
- Mobile-friendly navigation menu with hamburger toggle
- Optimized layouts for different screen sizes
- Touch-friendly controls

## Technical Implementation

### Files Structure
```
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive functionality
└── README.md       # Documentation
```

### Technologies Used
- HTML5 (Semantic elements)
- CSS3 (Flexbox, Grid, Animations, Custom Properties)
- Vanilla JavaScript (ES6+)
- No frameworks or libraries

### Key Features Implementation

#### Sticky Header
The sticky header uses a scroll event listener that:
- Tracks scroll position relative to viewport height
- Adds/removes the `visible` class based on scroll direction
- Uses CSS transitions for smooth appearance/disappearance

#### Carousel with Zoom
The carousel implementation includes:
- CSS transforms for slide transitions
- Hover-triggered zoom preview with scale transform
- Mouse position tracking for interactive zoom
- Dot navigation for direct slide access
- Auto-play with pause on interaction

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features
- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible styles for keyboard users
- Alt text for images

## Performance Optimizations
- CSS transitions for smooth animations
- Efficient event listeners with debouncing
- Lazy loading support (optional)
- Minimal DOM manipulation

## Responsive Breakpoints
- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

## How to Use

1. Open `index.html` in a web browser
2. Scroll down to see the sticky header appear
3. Navigate through the carousel using:
   - Arrow buttons
   - Dot indicators
   - Keyboard arrow keys
4. Hover over carousel images to see the zoom effect
5. Test responsive design by resizing the browser window

## Code Quality
- Clean, well-organized code structure
- Comprehensive comments explaining functionality
- Modern CSS practices (CSS Custom Properties, Flexbox)
- ES6+ JavaScript features
- Semantic HTML5 markup

## Future Enhancements
- Add more carousel transition effects
- Implement touch swipe gestures for mobile
- Add loading states for images
- Integrate with backend API for dynamic content

## Notes
- The sticky header appears after scrolling past the hero section (first fold)
- Carousel auto-plays every 5 seconds (can be disabled)
- All animations use CSS transitions for optimal performance
- Images use placeholder URLs - replace with actual images from Figma

## Figma Design Implementation
To implement the exact Figma design:
1. Open the Figma file in the Figma desktop app
2. Select the specific component/frame you want to implement
3. Export assets (images, icons) from Figma
4. Update the HTML structure to match the Figma layout
5. Apply exact colors, fonts, and spacing from Figma design tokens
6. Replace placeholder images with exported assets

## Contact
For questions or issues, please refer to the assignment guidelines.
