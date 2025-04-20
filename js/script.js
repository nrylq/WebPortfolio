// Wait for DOM to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Light/Dark Mode Toggle
    const modeToggle = document.getElementById('mode-switch');
    const body = document.body;
    const modeIcon = modeToggle.querySelector('i');
    
    // Check for saved mode preference
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    }
    
    // Toggle mode function
    modeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
            localStorage.setItem('mode', 'dark');
        } else {
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
            localStorage.setItem('mode', 'light');
        }
    });
    
    // Custom Cursor
    createCustomCursor();
    
    // Setup Quiz Upload Preview functionality
    setupQuizUpload();
    
    // Initialize animation effects
    initAnimations();
});

// Custom Cursor
function createCustomCursor() {
    const body = document.body;
    
    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    
    const cursorWand = document.createElement('div');
    cursorWand.classList.add('cursor-wand');
    
    // Append cursors to body
    body.appendChild(cursor);
    body.appendChild(cursorWand);
    
    // Move cursor with mouse
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorWand.style.left = e.clientX + 'px';
        cursorWand.style.top = e.clientY + 'px';
    });
    
    // Add event listeners for clickable elements
    const clickables = document.querySelectorAll('a, button, input, .btn, .upload-label');
    
    clickables.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('grow');
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('grow');
        });
    });
}

// Quiz Upload Preview
function setupQuizUpload() {
    // Only setup if we're on the quizzes page
    const quizInputs = document.querySelectorAll('.quiz-file-input');
    if (quizInputs.length === 0) return;
    
    quizInputs.forEach(input => {
        const previewId = input.id.replace('-upload', '-preview');
        const previewContainer = document.getElementById(previewId);
        
        input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            if (!file.type.match('image.*')) {
                alert('Please select an image file');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(e) {
                previewContainer.innerHTML = '';
                
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Quiz Preview';
                
                previewContainer.appendChild(img);
            };
            
            reader.readAsDataURL(file);
        });
    });
}

// Initialize animations
function initAnimations() {
    // Typing effect for homepage
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        typingElement.style.width = '0';
        setTimeout(() => {
            typingElement.style.width = '100%';
        }, 500);
    }
    
    // Fade-in animations for content elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.opacity = '1';
        }, 300 + (index * 150));
    });
}

// Resume Modal Functions
function openResumeModal() {
    document.getElementById('resumeModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeResumeModal() {
    document.getElementById('resumeModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('resumeModal');
    if (event.target == modal) {
        closeResumeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeResumeModal();
    }
});