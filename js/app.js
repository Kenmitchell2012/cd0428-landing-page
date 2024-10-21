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
 * Define Global Variables
 * 
 */
const sections = document.querySelectorAll("section");  // All sections on the page
const navbarList = document.getElementById("navbar__list");  // Navigation list container

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

/**
 * Remove the active state from all sections and their corresponding nav links.
 */
const removeActiveState = () => {
    sections.forEach(section => {
        section.classList.remove('your-active-class');  // Remove active class from section
    });

    const navLinks = document.querySelectorAll('.menu__link');
    navLinks.forEach(link => {
        link.classList.remove('active');  // Remove active class from nav links
    });
};

/**
 * Make the currently visible section and its nav link active based on scroll position.
 */
const makeActive = () => {
    const VALUE = 150;  // Threshold for activating the section

    sections.forEach(section => {
        const box = section.getBoundingClientRect();

        if (box.top <= VALUE && box.bottom >= VALUE) {
            // Apply active state to the section
            section.classList.add('your-active-class');

            // Apply active state to the corresponding nav link
            const activeLink = document.querySelector(`a[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav

/**
 * Wait for the DOM content to be fully loaded before executing the script.
 */
document.addEventListener("DOMContentLoaded", function () {
    // Create navigation links dynamically
    sections.forEach(section => {
        const sectionId = section.getAttribute("id");
        const sectionTitle = section.querySelector("h2").textContent;

        const listItem = document.createElement("li");
        const link = document.createElement("a");

        link.href = `#${sectionId}`;  // Set href to section id
        link.textContent = sectionTitle;  // Set text as section title
        link.classList.add('menu__link');

        listItem.appendChild(link);
        navbarList.appendChild(listItem);

        // Add event listener for smooth scrolling
        link.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent default jump behavior
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'    // Smooth scroll to the clicked section
            });
        });
    });

    // Scroll event listener
    window.addEventListener('scroll', function () {
        removeActiveState();  // First, remove active state from all sections and nav links
        makeActive();         // Then, make the section in view active
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

