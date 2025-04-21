document.addEventListener('DOMContentLoaded', function() {
    // Create butterflies container
    const butterfliesContainer = document.createElement('div');
    butterfliesContainer.id = 'butterflies-container';
    document.body.appendChild(butterfliesContainer);

    let butterflyCount = 0;
    const maxButterflies = 10;

    // Function to check if device is mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Function to create a new butterfly
    function createButterfly() {
        if (butterflyCount >= maxButterflies) return;

        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        
        const img = document.createElement('img');
        img.src = 'assets/butterfly.svg';
        butterfly.appendChild(img);
        
        // Random starting position
        butterfly.style.left = '-50px';
        butterfly.style.top = Math.random() * (isMobile() ? 50 : 70) + (isMobile() ? 25 : 15) + 'vh';
        
        // Set random scale for this butterfly
        butterfly.style.setProperty('--butterfly-scale', (Math.random() * 0.3 + 0.85).toString());
        
        // Random animation duration based on device
        const minDuration = isMobile() ? 12 : 15;
        const maxDuration = isMobile() ? 18 : 25;
        butterfly.style.animationDuration = (Math.random() * (maxDuration - minDuration) + minDuration) + 's';
        
        butterfliesContainer.appendChild(butterfly);
        butterflyCount++;
        
        // Remove butterfly after animation and create a new one
        butterfly.addEventListener('animationend', () => {
            butterfly.remove();
            butterflyCount--;
            setTimeout(createButterfly, Math.random() * (isMobile() ? 1000 : 1500));
        });
    }

    // Create initial butterflies with slight delays
    for (let i = 0; i < maxButterflies; i++) {
        setTimeout(createButterfly, i * (isMobile() ? 1000 : 1500));
    }

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Update existing butterflies' positions
            const butterflies = document.querySelectorAll('.butterfly');
            butterflies.forEach(butterfly => {
                butterfly.style.top = Math.random() * (isMobile() ? 50 : 70) + (isMobile() ? 25 : 15) + 'vh';
            });
        }, 250);
    });
}); 