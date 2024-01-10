document.addEventListener('DOMContentLoaded', function () {
    //function to check if an element is in the viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (1100 || 0) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    //function to handle fade-in animations
    function fadeInOnScroll(sections) {
        sections.forEach(function (section) {
            var elements = section.querySelectorAll('.fade-in');
            elements.forEach(function (element) {
                if (isInViewport(element)) {
                    element.classList.add('visible');
                }
            });
        });
    }

    //initial fade-in check
    fadeInOnScroll([document]);

    //event listener for scroll to run the fade-in function
    window.addEventListener('scroll', function () {
        fadeInOnScroll([document]);
    });

    //GSAP animations for the image section
    gsap.from(".image-section", { opacity: 0, duration: 1, delay: 0.5 });
    gsap.from(".text-content", { y: 50, opacity: 0, duration: 1, delay: 1 });


    function toggleNavigation() {
        //check if the screen width is less than 650
        if (window.innerWidth < 650) {
            return; //if window's width is less than 650 then the function will stop
        }
    
        const header = document.querySelector('header');
        const logoContainer = document.querySelector('.logo-container');
    
        if (window.scrollY > 50) { //scrolling will change the size and opacity of the .image-section and header
            gsap.to(header, { height: 40, padding:"80px", opacity: 0.9, duration: 0.5 });
            gsap.to(".image-section", { height: 400, duration: 0.5 });
            gsap.to(".text-content", { fontSize: "1em", duration: 0.5 });
            gsap.to(logoContainer, { maxHeight: 70, duration: 0.5 });
        } else {
            gsap.to(header, { height: 100, padding:"0px", opacity: 1, duration: 0.5 });
            gsap.to(".image-section", { height: 300, duration: 0.5 });
            gsap.to(".text-content", { fontSize: "1em", duration: 0.5 });
            gsap.to(logoContainer, { maxHeight: 100, duration: 0.5 });
        }
    }
    

    //event listener for scroll to run the function above
    window.addEventListener('scroll', toggleNavigation);
    
});
    //event listener for the scroll event to show/hide the back to top button
    window.addEventListener('scroll', function() {
    var backToTopButton = document.querySelector('.back-to-top'); //gets the element with class "back-to-top"
    if (window.scrollY > 300) { //checks if the vertical scroll position is greater than 300 pixels
        backToTopButton.classList.add('show'); //adds the "show" class to the back to top button to display it
    } else {
        backToTopButton.classList.remove('show'); //removes the "show" class from the back to top button to hide it
    }
    });

    //event listener for the click event on the back to top button
    document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault(); //prevents the default action of the click event (in this case, scrolling to the top of the page)
    window.scrollTo({ //scrolls to the top of the page with smooth behavior
        top: 0,
        behavior: 'smooth'
    });
    });
