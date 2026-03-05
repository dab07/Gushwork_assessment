// Image gallery navigation
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

function updateImage(index) {
    currentImageIndex = index;
    mainImage.src = images[index];
    
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage(newIndex);
});

nextBtn.addEventListener('click', () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    updateImage(newIndex);
});

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        updateImage(index);
    });
});

// Zoom preview on hover
if (galleryMain && zoomPreview && mainImage) {
    galleryMain.addEventListener('mousemove', (e) => {
        const rect = mainImage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate percentage position
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        
        // Set background image and position
        zoomPreview.style.backgroundImage = `url(${mainImage.src})`;
        zoomPreview.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    });
}

// Initialize first image
updateImage(0);


// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});


// Applications Carousel (header5)
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

    // Create dots
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

    function updateAppCarousel() {
        const cardWidth = appCards[0].offsetWidth;
        const gap = 24;
        const offset = -(appCurrentIndex * (cardWidth + gap));
        appTrack.style.transform = `translateX(${offset}px)`;
        
        // Update dots
        document.querySelectorAll('#appDots .dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === appCurrentIndex);
        });
    }

    appPrevBtn.addEventListener('click', () => {
        appCurrentIndex = Math.max(0, appCurrentIndex - 1);
        updateAppCarousel();
    });

    appNextBtn.addEventListener('click', () => {
        appCurrentIndex = Math.min(appMaxIndex, appCurrentIndex + 1);
        updateAppCarousel();
    });
}

// Process Tabs (header6)
const processTabs = document.querySelectorAll('.process-tab');
processTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        processTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Testimonials Carousel (header7)
const testimonialsGrid = document.getElementById('testimonialsGrid');
const testimonialPrevBtn = document.getElementById('testimonialPrev');
const testimonialNextBtn = document.getElementById('testimonialNext');

if (testimonialsGrid && testimonialPrevBtn && testimonialNextBtn) {
    testimonialPrevBtn.addEventListener('click', () => {
        testimonialsGrid.scrollBy({
            left: -424,
            behavior: 'smooth'
        });
    });

    testimonialNextBtn.addEventListener('click', () => {
        testimonialsGrid.scrollBy({
            left: 424,
            behavior: 'smooth'
        });
    });
}


// Modal functionality
const catalogueModal = document.getElementById('catalogueModal');
const downloadDatasheetBtn = document.getElementById('downloadDatasheetBtn');
const closeModal = document.getElementById('closeModal');
const catalogueForm = document.getElementById('catalogueForm');

// Quote Modal
const quoteModal = document.getElementById('quoteModal');
const requestQuoteBtn = document.getElementById('requestQuoteBtn');
const closeQuoteModal = document.getElementById('closeQuoteModal');
const quoteForm = document.getElementById('quoteForm');

// Open catalogue modal when download button is clicked
if (downloadDatasheetBtn) {
    downloadDatasheetBtn.addEventListener('click', () => {
        catalogueModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Close catalogue modal when X button is clicked
if (closeModal) {
    closeModal.addEventListener('click', () => {
        catalogueModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close catalogue modal when clicking outside
catalogueModal.addEventListener('click', (e) => {
    if (e.target === catalogueModal) {
        catalogueModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Handle catalogue form submission
if (catalogueForm) {
    catalogueForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! We will send the catalogue to your email shortly.');
        catalogueModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        catalogueForm.reset();
    });
}

// Open quote modal when request quote button is clicked
if (requestQuoteBtn) {
    requestQuoteBtn.addEventListener('click', () => {
        quoteModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Close quote modal when X button is clicked
if (closeQuoteModal) {
    closeQuoteModal.addEventListener('click', () => {
        quoteModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close quote modal when clicking outside
quoteModal.addEventListener('click', (e) => {
    if (e.target === quoteModal) {
        quoteModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Handle quote form submission
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! We will call you back shortly.');
        quoteModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        quoteForm.reset();
    });
}

// Close modals with Escape key
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
