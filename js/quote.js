// Quote dark mode functionality
document.addEventListener('DOMContentLoaded', function() {
    const quoteTitle = document.getElementById('quote-title');
    const quoteText = document.getElementById('quote-text');
    const quoteModeToggle = document.getElementById('quote-mode-toggle');
    const quoteSection = document.querySelector('.quote-section');

    // Day quotes
    const dayQuotes = [
        '"Code is poetry."',
        '"The best way to predict the future is to create it."',
        '"Programming isn\'t about what you know; it\'s about what you can figure out."'
    ];

    // Night quotes
    const nightQuotes = [
        '"In the darkness of code, bugs are just features waiting to be discovered."',
        '"The night is dark and full of code."',
        '"Debugging by moonlight, coding by starlight."'
    ];

    let isDarkMode = false;

    quoteModeToggle.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        
        // Toggle dark mode styles for quote section only
        quoteSection.classList.toggle('dark-mode');
        quoteModeToggle.classList.toggle('active');
        
        // Change icon
        const icon = quoteModeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
        
        // Update title and quote
        quoteTitle.textContent = isDarkMode ? 'Quote of the Night' : 'Quote of the Day';
        
        // Get random quote based on mode
        const quotes = isDarkMode ? nightQuotes : dayQuotes;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];
    });
}); 