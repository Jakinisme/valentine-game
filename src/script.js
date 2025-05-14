document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const usernameSection = document.getElementById('username-section');
    const questionSection = document.getElementById('question-section');
    
    const usernameInput = document.getElementById('username');
    const submitUsernameBtn = document.getElementById('submit-username');
    const greeting = document.getElementById('greeting');
    
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    
    // Variables to track button size and position
    let yesButtonScale = 1;
    const scaleIncrement = 0.2;
    
    // Initialize the game
    function init() {
        // Set up event listeners
        submitUsernameBtn.addEventListener('click', submitUsername);
        yesButton.addEventListener('click', handleYesClick);
        noButton.addEventListener('click', handleNoClick);
        
        // Allow Enter key to submit username
        usernameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submitUsername();
            }
        });
    }
    
    // Handle username submission
    function submitUsername() {
        const username = usernameInput.value.trim();
        
        if (username === '') {
            alert('Please enter your username, babyyy!');
            return;
        } else if (username.length <= 4) {
            alert('Please enter a username longer than 4 characters, babyyy!');
            return;
        } else if (username.length >= 10) {
            alert('Please enter a username shorter than 10 characters, babyyy!');
            return;
        } else if (!isNaN(username)) {
            alert('Please enter a valid username, babyyy!');
            return;
        }
        
        // Set greeting text
        greeting.textContent = `Hello, ${username}!`;
        
        // Hide username section and show question section
        usernameSection.classList.add('hidden');
        questionSection.classList.remove('hidden');
    }
    
    // Handle Yes button click
    function handleYesClick() {
        window.location.href = 'src/success.html';
    }
    
    // Handle No button click
    function handleNoClick() {
        // Increase Yes button size
        yesButtonScale += scaleIncrement;
        
        // Limit the maximum scale to avoid crashing browsers
        const maxScale = 4;
        const actualScale = Math.min(yesButtonScale, maxScale);
        
        // Apply the new scale to the Yes button
        yesButton.style.transform = `scale(${actualScale})`;
        
        // Move the No button to a random position
        moveNoButtonRandomly();
        
        // If the Yes button gets very large, make it fill most of the screen
        if (actualScale >= 3) {
            yesButton.style.position = 'fixed';
            yesButton.style.zIndex = '100';
            yesButton.style.width = '70vw';
            yesButton.style.height = '70vh';
        }
        
        // If at max scale, make it too difficult to click No
        if (actualScale >= maxScale) {
            noButton.style.opacity = '0.5';
            noButton.style.pointerEvents = 'none';
        }
    }
    
    // Move the No button to a random position
    function moveNoButtonRandomly() {
        const container = document.querySelector('.button-container');
        const containerRect = container.getBoundingClientRect();
        
        // Use percentage values to better handle different screen sizes
        // Keep the button within the viewport
        const maxLeft = Math.max(window.innerWidth - 150, containerRect.width);
        const maxTop = Math.max(window.innerHeight - 100, containerRect.height);
        
        const randomLeft = Math.floor(Math.random() * maxLeft);
        const randomTop = Math.floor(Math.random() * maxTop);
        
        // Apply random position
        noButton.style.position = 'fixed';
        noButton.style.left = `${randomLeft}px`;
        noButton.style.top = `${randomTop}px`;
    }
    
    // Initialize the game
    init();
}); 