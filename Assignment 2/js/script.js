document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById('back-to-top');

    // Show the button when scrolling down
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll back to top when button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Array of day-specific messages
    const dayMessages = [
        "Welcome to Speed Speech on this Sunday! Enjoy a relaxing day with some fun speech exercises!",
        "Welcome to Speed Speech on this Monday! Start your week strong with our new speech therapy set!",
        "Welcome to Speed Speech on this Tuesday! Check out our Tuesday deal on personalized speech therapy!",
        "Welcome to Speed Speech on this Wednesday! Halfway through the week – let's work on those speech skills!",
        "Welcome to Speed Speech on this Thursday! Keep practicing and improving with our unique exercises!",
        "Welcome to Speed Speech on this Friday! Finish the week strong with some interactive speech games!",
        "Welcome to Speed Speech on this Saturday! Celebrate your progress with a fun speech challenge!"
    ];

    // Get the current day of the week (0 = Sunday, 6 = Saturday)
    const currentDay = new Date().getDay();

    // Get the element where you want to display the message
    const dayMessageContainer = document.getElementById('day-message-container');
    const dayMessageElement = document.createElement('p');

    // Display the message for the current day
    dayMessageElement.textContent = dayMessages[currentDay];
    dayMessageContainer.appendChild(dayMessageElement);

    // Get the products section and team photos
    const productsSection = document.getElementById('products');
    const teamPhotos = document.querySelectorAll('.team-photo');

    // Scrollfire for Products Section and Team Photos
    function checkScroll() {
        // For the products section
        const productRect = productsSection.getBoundingClientRect();
        const productTop = productRect.top;

        if (productTop <= window.innerHeight / 1.5) {
            productsSection.classList.add('visible'); // Show and animate the products section
        } else {
            productsSection.classList.remove('visible');
        }

        // For the team photos
        teamPhotos.forEach(photo => {
            const rect = photo.getBoundingClientRect();
            const elementTop = rect.top;

            if (elementTop <= window.innerHeight && elementTop >= 0) {
                photo.classList.add('visible');
            } else {
                photo.classList.remove('visible');
            }
        });
    }

    // Listen to the scroll event and call checkScroll on each scroll
    window.addEventListener('scroll', checkScroll);

    // Initial check to handle elements already in view
    checkScroll();

    // Enhanced Parallax Effect for Banner
    document.addEventListener('scroll', () => {
        const banner = document.getElementById('parallax-banner');
        const scrollPosition = window.scrollY;
        banner.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Form Modification: Show/Hide Product ID
    const reasonDropdown = document.getElementById('reason');
    const productIDContainer = document.getElementById('product-id-container');
    reasonDropdown.addEventListener('change', () => {
        if (reasonDropdown.value === 'product-info') {
            productIDContainer.style.display = 'block'; // Show Product ID field
        } else {
            productIDContainer.style.display = 'none'; // Hide Product ID field
        }
    });

    // Form Validation
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const productIDInput = document.getElementById('product-id');
    const messageInput = document.getElementById('message');
    const validProductIDs = ['PROD001', 'PROD002', 'PROD003', 'PROD004'];

    // Validate Name
    nameInput.addEventListener('blur', () => {
        if (/^[a-zA-Z\s]{4,}$/.test(nameInput.value)) {
            nameInput.style.borderColor = 'green';
        } else {
            nameInput.style.borderColor = 'red';
        }
    });

    // Validate Phone Number
    phoneInput.addEventListener('blur', () => {
        if (/^\d{3}\d{3}\d{4}$/.test(phoneInput.value) || /^\d{3} \d{3} \d{4}$/.test(phoneInput.value)) {
            phoneInput.style.borderColor = 'green';
        } else {
            phoneInput.style.borderColor = 'red';
        }
    });

    // Validate Product ID (only when visible)
    productIDInput.addEventListener('blur', () => {
        if (validProductIDs.includes(productIDInput.value)) {
            productIDInput.style.borderColor = 'green';
        } else {
            productIDInput.style.borderColor = 'red';
        }
    });

    // Validate Message
    messageInput.addEventListener('blur', () => {
        const messageLength = messageInput.value.length;
        if (messageLength >= 10 && messageLength <= 30) {
            messageInput.style.borderColor = 'green';
        } else {
            messageInput.style.borderColor = 'red';
        }
    });
});
