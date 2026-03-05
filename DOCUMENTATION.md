# Mangalam HDPE Pipes - Website Documentation

## Project Overview
This is a professional product website for Mangalam HDPE Pipes, featuring a comprehensive product showcase with interactive components, modals, carousels, and responsive design.

---

## File Structure

### 1. **index.html** - Main HTML Structure
Contains the complete page structure organized into sections:

#### Key Sections:
- **Header** - Sticky navigation with logo and contact button
- **Product Section** - Product gallery with image navigation and zoom preview
- **Trust Section** - Client logos carousel
- **Technical Specifications** - Detailed specs table with download button
- **Features Section** - 6-card grid showcasing product benefits
- **FAQ Section** - Accordion-style frequently asked questions
- **Applications Carousel** - Horizontal scrolling carousel with hover price overlay
- **Manufacturing Process** - Tab-based process visualization
- **Testimonials** - Customer testimonials carousel
- **Portfolio** - Product portfolio cards
- **Resources** - Download resources section
- **Contact Form** - Lead capture form
- **Footer** - Company information and links
- **Modals** - Two modal dialogs (Catalogue Download & Quote Request)

---

### 2. **styles.css** - Complete Styling
Comprehensive CSS with organized sections:

#### Key Features:
- **Responsive Design** - Mobile-first approach with breakpoints at 968px and 640px
- **Color Scheme** - Professional blue (#2B3990, #3d4c8f) with neutral grays
- **Typography** - Inter and Urbanist fonts for modern appearance
- **Components**:
  - Sticky header with shadow
  - Product gallery with zoom preview
  - Carousel systems with smooth transitions
  - Modal dialogs with backdrop blur
  - Accordion FAQ items
  - Tab-based process visualization
  - Hover effects and transitions

#### CSS Organization:
```
1. Global Styles & Reset
2. Header & Navigation
3. Breadcrumb
4. Product Section & Gallery
5. Trust Section
6. Technical Specs
7. Features Grid
8. FAQ Accordion
9. Catalogue Section
10. Applications Carousel
11. Manufacturing Process
12. Testimonials Carousel
13. Portfolio Cards
14. Resources & Contact Forms
15. Footer
16. Modal Dialogs
17. Responsive Media Queries
```

---

### 3. **script.js** - Interactive Functionality
Organized into 6 main sections:

#### Section 1: Image Gallery
- **Functionality**: Navigate product images with prev/next buttons
- **Features**:
  - Thumbnail selection
  - Zoom preview on hover
  - Circular navigation (loops back to start)
- **Key Functions**:
  - `updateImage(index)` - Updates main image and active thumbnail

#### Section 2: FAQ Accordion
- **Functionality**: Expand/collapse FAQ items
- **Features**:
  - Single-open behavior (closes other items when one opens)
  - Smooth animations
  - Click to toggle

#### Section 3: Applications Carousel
- **Functionality**: Horizontal carousel with navigation dots
- **Features**:
  - Responsive card display (4/2/1 cards based on screen size)
  - Smooth scrolling animation
  - Dot navigation indicators
  - Prev/Next button controls
- **Key Function**:
  - `updateAppCarousel()` - Updates carousel position and active dot

#### Section 4: Process Tabs
- **Functionality**: Tab switching for manufacturing process
- **Features**:
  - Single active tab at a time
  - Visual feedback with active state
  - Smooth transitions

#### Section 5: Testimonials Carousel
- **Functionality**: Horizontal scrolling testimonials
- **Features**:
  - Smooth scroll animation
  - 424px scroll distance per click
  - Responsive to screen size

#### Section 6: Modal Dialogs
Two independent modals with full functionality:

**Catalogue Modal:**
- Opens on "Download Full Technical Datasheet" button click
- Fields: Email (required), Contact (optional)
- Submit button: "Download Brochure"

**Quote Modal:**
- Opens on "Request a Quote" button click
- Fields: Full Name, Company Name, Email, Phone with country code
- Submit button: "Submit Form"

**Common Features:**
- Close via X button
- Close by clicking outside (overlay)
- Close with Escape key
- Prevents body scroll when open
- Form reset after submission
- Confirmation message on submit

---

## Key Features & Functionality

### 1. Sticky Header
```css
position: sticky;
top: 0;
z-index: 100;
```
- Remains at top while scrolling
- Contains logo and navigation
- Subtle shadow for depth

### 2. Product Gallery
- Main image display (570px × 570px)
- 6 thumbnail options
- Zoom preview on hover (350px × 350px)
- Navigation arrows with hover effects

### 3. Responsive Carousels
- **Applications**: 420px × 420px cards with gradient overlay
- **Testimonials**: 400px × 402px cards with author info
- Smooth scroll animations
- Navigation controls

### 4. Modal System
- Blurred background overlay
- Centered content boxes
- Keyboard accessibility (Escape key)
- Form validation and submission

### 5. Hover Effects
- Application cards show price overlay on hover
- Buttons change color on hover
- Smooth transitions (0.2s - 0.3s)

---

## Component Specifications

### Modal 1: Catalogue Download
- **Dimensions**: 550px × 320px
- **Header**: 56px with bottom border
- **Body**: 180px with form fields
- **Footer**: 56px with button
- **Button**: "Download Brochure" (light purple background)

### Modal 2: Quote Request
- **Dimensions**: 550px × 420px
- **Header**: 56px with bottom border
- **Body**: 308px with 4 form fields
- **Footer**: 56px with button
- **Button**: "Submit Form" (dark blue background)

### Application Cards
- **Size**: 420px × 420px
- **Image**: Full card coverage
- **Overlay**: Gradient (transparent to 80% black)
- **Hover**: Price info box appears
- **Border Radius**: 12px

### Testimonial Cards
- **Size**: 400px × 402px
- **Content**: Quote, title, text, author info
- **Layout**: Flexbox with auto-spacing
- **Overflow**: Horizontal scroll carousel

---

## Responsive Breakpoints

### Desktop (> 968px)
- Full layout with 2-column grids
- 4 application cards visible
- All features enabled

### Tablet (640px - 968px)
- Adjusted grid layouts
- 2 application cards visible
- Optimized spacing

### Mobile (< 640px)
- Single column layouts
- 1 application card visible
- Simplified navigation
- Adjusted font sizes

---

## Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance Considerations
- CSS animations use `transform` and `opacity` for GPU acceleration
- Smooth scroll behavior for better UX
- Lazy loading ready (images can be optimized)
- Minimal JavaScript for fast execution

---

## Accessibility Features
- Semantic HTML structure
- Keyboard navigation (Tab, Escape)
- ARIA labels on interactive elements
- Color contrast compliance
- Focus states on buttons and links

---

## Future Enhancements
1. Add form backend integration
2. Implement image lazy loading
3. Add product filtering
4. Integrate with CMS
5. Add multi-language support
6. Implement analytics tracking
7. Add product comparison feature
8. Integrate payment gateway

---

## Code Quality Standards
- Clear variable naming conventions
- Organized code sections with comments
- DRY (Don't Repeat Yourself) principles
- Consistent indentation (4 spaces)
- Modular component structure
- Comprehensive documentation

---

## Support & Maintenance
For updates or issues:
1. Check browser console for errors
2. Verify all image paths are correct
3. Ensure CSS and JS files are linked properly
4. Test on multiple devices and browsers
5. Validate HTML structure

---

**Last Updated**: March 2026
**Version**: 1.0.0
