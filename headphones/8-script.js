// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the hamburger button and navbar
    const hamburger = document.getElementById('hamburger-btn');
    const navbar = document.getElementById('navbar');
    
    // Check if elements exist
    if (!hamburger || !navbar) {
        console.error('Hamburger or navbar not found!');
        return;
    }
    
    // Function to toggle menu
    function toggleMenu() {
        // Toggle the 'show' class on navbar
        navbar.classList.toggle('show');
        
        // Toggle the 'active' class on hamburger (for animation)
        hamburger.classList.toggle('active');
        
        // Update aria-expanded for accessibility
        const isExpanded = navbar.classList.contains('show');
        hamburger.setAttribute('aria-expanded', isExpanded);
    }
    
    // Function to close menu
    function closeMenu() {
        navbar.classList.remove('show');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
    
    // Add click event to hamburger
    hamburger.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent event from bubbling
        toggleMenu();
    });
    
    // Close menu when clicking on a nav link
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        // If menu is open and click is outside hamburger and navbar
        if (navbar.classList.contains('show') && 
            !hamburger.contains(event.target) && 
            !navbar.contains(event.target)) {
            closeMenu();
        }
    });
    
    // Handle window resize - close menu on desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
    
    // Prevent clicks inside navbar from closing it (unless it's a link)
    navbar.addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    // Initialize aria-expanded
    hamburger.setAttribute('aria-expanded', 'false');
    
    console.log('Hamburger menu initialized!');
});