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


//defining a variable represents unordered list which will contain the elements in the navigation bar
const nav_bar=document.getElementById('navbar__list');
//defining a variable represents a list contains all elements with section tag
const main_sections=document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Set sections as active to distinguish the part the user is reaing in the web page using the function move_effect
function move_effect(){
    // Here i created a new constat which Hold all the anchors element in the navigation menu bar.
    const anchors = document.querySelectorAll('a.menu__link');
    for(let section of main_sections){
        //here we used getBoundingClientRect() to get the dimension of each section as a block in the page
        if(section.getBoundingClientRect().top<200 && section.getBoundingClientRect().top>-200){
            section.classList.add('your-active-class')
            // Looping over the anchors to find the anchor correspond to the section
            anchors.forEach(anchor => {
                // settig my condition to be true and run if the anchor element textConten is equal to the section name.
                if(anchor.textContent === section.dataset.nav){
                    // Add my active class which i predefined in the CSS file under ".navbar__menu .menu__link.active"
                    anchor.classList.add('active');
                }else{
                    // Remove the active class if the condition is false.
                    anchor.classList.remove('active');
                }
            })
        }
        else{
            section.classList.remove('your-active-class') 
        }
    }
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


//the following function is used to create elements corresponds the elements of "main_sections" as an icons in the navigation bar

function  add_new_button(){
    //in this loop we iterate over the section element in main_sections
    for(let section of main_sections){
        //new_button is defined as a new list element
        let new_button=document.createElement('li')
        /*each new_button will be related and linked to a section part in the web page using its a newly defined anchor element
        id through the next command and we used a data-nav attribute to distinguish between the element will be added to the nav_bar*/
        
        // Scroll to section on link click
        new_button.innerHTML=`<a href='#${section.id}' class='menu__link' data-nav='${section.dataset.nav}'>${section.dataset.nav}`;
        //next command is adding new_button to the nav_bar(adding an element to the navigation bar)
        nav_bar.appendChild(new_button)
    }
}
//End Main Functions

// build the nav
//calling the function defined previously to build the navigation bar
add_new_button()

//Begin Events
// Scroll to anchor ID using scrollTO event
document.addEventListener('scroll',move_effect);




/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/











// Add class 'active' to section when near top of viewport






// Build menu 



