const links = document.querySelectorAll('#nav_ul > li > a');
const currentUrl = window.location.href;

links.forEach(link => {
    if (link.href === currentUrl) {
        link.classList.add('active');
    }
});

document.getElementById("year").innerHTML = new Date().getFullYear();