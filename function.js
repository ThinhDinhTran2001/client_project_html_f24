//Highlight each nav item based on current page

const links = document.querySelectorAll('#nav_ul > li > a');
const currentUrl = window.location.href;

links.forEach(link => {
    if (link.href === currentUrl) {
        link.classList.add('active');
    }
});

// Set the current year in the footer
document.getElementById("year").innerHTML = new Date().getFullYear();