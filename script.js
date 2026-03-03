document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. Typing Effect for Hero Title
    // ==========================================
    const titleText = "Engineering the Future of Robotics & AI at INPT.";
    const typingElement = document.getElementById("typing-text");
    let charIndex = 0;

    function typeWriterEffect() {
        if (charIndex < titleText.length) {
            typingElement.textContent += titleText.charAt(charIndex);
            charIndex++;
            // Randomize typing speed slightly for realism (40ms to 90ms)
            setTimeout(typeWriterEffect, Math.random() * 50 + 40);
        }
    }
    
    // Start effect shortly after load
    setTimeout(typeWriterEffect, 600);

    // ==========================================
    // 2. Mobile Navigation Toggle
    // ==========================================
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const linksItems = document.querySelectorAll(".nav-links li a");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        
        // Simple manual animation for the bars
        const bars = hamburger.children;
        hamburger.classList.toggle("open");
        
        if (hamburger.classList.contains("open")) {
            bars[0].style.transform = "translateY(7px) rotate(45deg)";
            bars[1].style.opacity = "0";
            bars[2].style.transform = "translateY(-7px) rotate(-45deg)";
        } else {
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        }
    });

    // Close mobile menu on link click
    linksItems.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                hamburger.classList.remove("open");
                
                const bars = hamburger.children;
                bars[0].style.transform = "none";
                bars[1].style.opacity = "1";
                bars[2].style.transform = "none";
            }
        });
    });

    // ==========================================
    // 3. Navbar Scroll Effect
    // ==========================================
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(11, 14, 20, 0.9)";
            navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.5)";
        } else {
            navbar.style.background = "rgba(11, 14, 20, 0.6)";
            navbar.style.boxShadow = "none";
        }
    });
});
