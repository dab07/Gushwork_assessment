// Image gallery navigation
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentImageIndex = 0;
const images = [
    'https://via.placeholder.com/480x360/FF6B35/FFFFFF?text=Product+Image+1',
    'https://via.placeholder.com/480x360/4A90E2/FFFFFF?text=Product+Image+2',
    'https://via.placeholder.com/480x360/50C878/FFFFFF?text=Product+Image+3',
    'https://via.placeholder.com/480x360/9B59B6/FFFFFF?text=Product+Image+4',
    'https://via.placeholder.com/480x360/E74C3C/FFFFFF?text=Product+Image+5',
    'https://via.placeholder.com/480x360/F39C12/FFFFFF?text=Product+Image+6'
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
