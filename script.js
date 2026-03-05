/**
 * MANGALAM HDPE PIPES - PRODUCT WEBSITE
 * Main JavaScript File
 * 
 * This file contains all interactive functionality for the website including:
 * - Image gallery navigation and zoom preview
 * - FAQ accordion functionality
 * - Carousel navigation for applications and testimonials
 * - Process tabs switching
 * - Modal dialogs for catalogue download and quote requests
 */

// ============================================================================
// SECTION 1: IMAGE GALLERY FUNCTIONALITY
// ============================================================================
// Handles product image gallery with navigation, thumbnails, and zoom preview

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');
const galleryMain = document.getElementById('galleryMain');
const zoomPreview = document.getElementById('zoomPreview');

let currentImageIndex = 0;
const images = [
    'assets/FishingNet.jpg',
    'assets/FishingNet.jpg',
    'assets/FishingNet.jpg',
    'assets/FishingNet.jpg',
    'assets/FishingNet.jpg',
    'assets/FishingNet.jpg',
    'assets/FishingNet.jpg',
];

/**
 * Updates the main image and active thumbnail based on index
 * @param {number} index - The image index to display
 */
function updateImage(index) {
    currentImageIndex = index;
    mainImage.src = images[index];
    
    // Update thumbnail active state
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Previous button navigation
prevBtn.addEventListener('click', () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage(newIndex);
});

// Next button navigation
nextBtn.addEventListener('click', () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    updateImage(newIndex);
});

// Thumbnail click navigation
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        updateImage(index);
    });
});

/**
 * Zoom preview functionality - Shows magnified view on hover
 * Calculates mouse position and displays corresponding zoomed area
 */
if (galleryMain && zoomPreview && mainImage) {
    galleryMain.addEventListener('mousemove', (e) => {
        const rect = mainImage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate percentage position for background positioning
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        
        // Set zoom preview background image and position
        zoomPreview.style.backgroundImage = `url(${mainImage.src})`;
        zoomPreview.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    });
}

// Initialize with first image on page load
updateImage(0);


// ============================================================================
// SECTION 2: FAQ ACCORDION FUNCTIONALITY
// ============================================================================
// Handles expand/collapse of FAQ items with single-open behavior

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other FAQ items (single-open behavior)
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item open/closed
            item.classList.toggle('active');
        });
    });
});


// ============================================================================
// SECTION 3: APPLICATIONS CAROUSEL (HEADER 5)
// ============================================================================
// Manages carousel navigation with dots and responsive card display

const appTrack = document.getElementById('applicationsTrack');
const appPrevBtn = document.getElementById('appPrev');
const appNextBtn = document.getElementById('appNext');
const appDotsContainer = document.getElementById('appDots');

if (appTrack) {
    let appCurrentIndex = 0;
    const appCards = document.querySelectorAll('.application-card');
    const appTotalCards = appCards.length;
    const appCardsPerView = window.innerWidth > 968 ? 4 : window.innerWidth > 640 ? 2 : 1;
    const appMaxIndex = Math.max(0, appTotalCards - appCardsPerView);

    // Create navigation dots based on number of slides
    for (let i = 0; i <= appMaxIndex; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            appCurrentIndex = i;
            updateAppCarousel();
        });
        appDotsContainer.appendChild(dot);
    }

    /**
     * Updates carousel position and active dot
     * Translates the track to show the current slide
     */
    function updateAppCarousel() {
        const cardWidth = appCards[0].offsetWidth;
        const gap = 24;
        const offset = -(appCurrentIndex * (cardWidth + gap));
        appTrack.style.transform = `translateX(${offset}px)`;
        
        // Update active dot indicator
        document.querySelectorAll('#appDots .dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === appCurrentIndex);
        });
    }

    // Previous slide button
    appPrevBtn.addEventListener('click', () => {
        appCurrentIndex = Math.max(0, appCurrentIndex - 1);
        updateAppCarousel();
    });

    // Next slide button
    appNextBtn.addEventListener('click', () => {
        appCurrentIndex = Math.min(appMaxIndex, appCurrentIndex + 1);
        updateAppCarousel();
    });
}

// ============================================================================
// SECTION 4: PROCESS TABS (HEADER 6)
// ============================================================================
// Handles tab switching for manufacturing process steps

const processTabs = document.querySelectorAll('.process-tab');
processTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        processTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
    });
});

// ============================================================================
// SECTION 5: TESTIMONIALS CAROUSEL (HEADER 7)
// ============================================================================
// Manages horizontal scrolling carousel for customer testimonials

const testimonialsGrid = document.getElementById('testimonialsGrid');
const testimonialPrevBtn = document.getElementById('testimonialPrev');
const testimonialNextBtn = document.getElementById('testimonialNext');

if (testimonialsGrid && testimonialPrevBtn && testimonialNextBtn) {
    // Scroll left with smooth animation
    testimonialPrevBtn.addEventListener('click', () => {
        testimonialsGrid.scrollBy({
            left: -424,
            behavior: 'smooth'
        });
    });

    // Scroll right with smooth animation
    testimonialNextBtn.addEventListener('click', () => {
        testimonialsGrid.scrollBy({
            left: 424,
            behavior: 'smooth'
        });
    });
}


// ============================================================================
// SECTION 6: MODAL DIALOGS
// ============================================================================
// Manages two modals: Catalogue Download and Quote Request
// Features: Open/Close, Escape key support, Click-outside close, Form submission

// Catalogue Modal Elements
const catalogueModal = document.getElementById('catalogueModal');
const downloadDatasheetBtn = document.getElementById('downloadDatasheetBtn');
const closeModal = document.getElementById('closeModal');
const catalogueForm = document.getElementById('catalogueForm');

// Quote Modal Elements
const quoteModal = document.getElementById('quoteModal');
const requestQuoteBtn = document.getElementById('requestQuoteBtn');
const closeQuoteModal = document.getElementById('closeQuoteModal');
const quoteForm = document.getElementById('quoteForm');

// ---- CATALOGUE MODAL HANDLERS ----

/**
 * Open catalogue modal when download datasheet button is clicked
 * Prevents body scroll when modal is open
 */
if (downloadDatasheetBtn) {
    downloadDatasheetBtn.addEventListener('click', () => {
        catalogueModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

/**
 * Close catalogue modal when X button is clicked
 * Restores body scroll
 */
if (closeModal) {
    closeModal.addEventListener('click', () => {
        catalogueModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

/**
 * Close catalogue modal when clicking outside the modal content
 * Allows users to dismiss by clicking the overlay
 */
catalogueModal.addEventListener('click', (e) => {
    if (e.target === catalogueModal) {
        catalogueModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

/**
 * Handle catalogue form submission
 * Prevents default form behavior and shows confirmation
 */
if (catalogueForm) {
    catalogueForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! We will send the catalogue to your email shortly.');
        catalogueModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        catalogueForm.reset();
    });
}

// ---- QUOTE MODAL HANDLERS ----

/**
 * Open quote modal when request quote button is clicked
 * Prevents body scroll when modal is open
 */
if (requestQuoteBtn) {
    requestQuoteBtn.addEventListener('click', () => {
        quoteModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

/**
 * Close quote modal when X button is clicked
 * Restores body scroll
 */
if (closeQuoteModal) {
    closeQuoteModal.addEventListener('click', () => {
        quoteModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

/**
 * Close quote modal when clicking outside the modal content
 * Allows users to dismiss by clicking the overlay
 */
quoteModal.addEventListener('click', (e) => {
    if (e.target === quoteModal) {
        quoteModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

/**
 * Handle quote form submission
 * Prevents default form behavior and shows confirmation
 */
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! We will call you back shortly.');
        quoteModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        quoteForm.reset();
    });
}

/**
 * Close modals when Escape key is pressed
 * Provides keyboard accessibility for modal dismissal
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (catalogueModal.classList.contains('active')) {
            catalogueModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (quoteModal.classList.contains('active')) {
            quoteModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});
