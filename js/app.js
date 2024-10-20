/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navbarList = document.getElementById("navbar__list");

    // Create navigation links
    sections.forEach(section => {
        const sectionId = section.getAttribute("id");
        const sectionTitle = section.querySelector("h2").textContent;

        const listItem = document.createElement("li");
        const link = document.createElement("a");

        link.href = `#${sectionId}`;
        link.textContent = sectionTitle;
        link.classList.add('menu__link');

        listItem.appendChild(link);
        navbarList.appendChild(listItem);

        // Add event listener for smooth scrolling
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Stop default jump behavior
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'    // Smooth scroll to section
            });
        });
    });

    // Function to remove active class from all nav links
    const unhighlightNavLinks = () => {
        const navLinks = document.querySelectorAll('.menu__link');
        navLinks.forEach(link => {
            link.classList.remove('active');  // Remove 'active' class from all nav links
        });
    };

    // Highlight the section in view and the corresponding nav link
    window.addEventListener('scroll', function() {
        let currentActive = '';

        sections.forEach(section => {
            const bounding = section.getBoundingClientRect();
            if (bounding.top >= 0 && bounding.top < window.innerHeight / 2) {
                // Set the active class on the section
                section.classList.add('your-active-class');
                currentActive = section.getAttribute("id");
            } else {
                section.classList.remove('your-active-class');
            }
        });

        // Unhighlight all nav links when scrolling
        unhighlightNavLinks();

        // Update the active state of the navigation links
        const navLinks = document.querySelectorAll('.menu__link');
        navLinks.forEach(link => {
            if (link.getAttribute("href") === `#${currentActive}`) {
                link.classList.add('active');  // Add 'active' class to the nav link
            }
        });
    });
});

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


