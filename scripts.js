// JavaScript Code for Gazi@Compuster

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all required functionality when the DOM is fully loaded
    initializePopup();
    initializeSearch();
    initializeCarousel();
    initializeCategoryHoverEffect();
    initializeContactForm();
});

// Function to initialize the "Opening 2026" popup messages
function initializePopup() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        setTimeout(() => {
            popup.style.opacity = 1;
        }, 1000); // Fade in effect after 1 second
    });
}

// Function to handle product search functionality
function initializeSearch() {
    document.getElementById('search').addEventListener('input', searchProducts);

    function searchProducts() {
        const searchQuery = document.getElementById('search').value.toLowerCase();
        const categories = document.querySelectorAll('.category');

        categories.forEach(category => {
            const categoryName = category.querySelector('h3').textContent.toLowerCase();
            if (categoryName.includes(searchQuery)) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });
    }
}

// Function to initialize the product carousel on the homepage
function initializeCarousel() {
    const carouselImages = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    setInterval(() => {
        carouselImages[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % carouselImages.length;
        carouselImages[currentIndex].style.opacity = 1;
    }, 3000); // Switch images every 3 seconds
}

// Function to handle hover effects for product categories
function initializeCategoryHoverEffect() {
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            category.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
            category.style.transform = 'scale(1.05)';
        });

        category.addEventListener('mouseleave', () => {
            category.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
            category.style.transform = 'scale(1)';
        });
    });
}

// Function to simulate viewing special offers (example)
function viewOffers() {
    alert("Special Offers Coming Soon! Stay Tuned!");
}

// Function to handle contact form submission
function initializeContactForm() {
    const contactForm = document.querySelector('form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from actually submitting
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset(); // Clear the form fields after submission
    });
}

// Additional function to load Google Maps (replace with your own API if needed)
function loadGoogleMaps() {
    // Placeholder for Google Maps Embed, replace with your actual implementation
    const map = document.getElementById('map');
    if (map) {
        map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9028230633745!2d88.49506881445722!3d23.832701784541206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f92a2f2e4e0e3d%3A0x4a3343a3415d8ff2!2sBarasat%2C%20Kolkata%2C%20West%20Bengal%20700125%2C%20India!5e0!3m2!1sen!2sus!4v1698156244301" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>';
    }
}

// Function to dynamically change the website theme (optional)
function changeTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        alert('Dark Theme Activated!');
    } else {
        alert('Light Theme Activated!');
    }
}

// Function to show pop-up announcements for offers
function showOfferAnnouncement() {
    const offerPopup = document.createElement('div');
    offerPopup.className = 'offer-popup';
    offerPopup.textContent = 'Huge Discounts Coming This Winter! Stay Tuned!';
    document.body.appendChild(offerPopup);

    setTimeout(() => {
        offerPopup.style.opacity = 0;
        setTimeout(() => {
            document.body.removeChild(offerPopup);
        }, 1000);
    }, 5000); // Show offer for 5 seconds
}
