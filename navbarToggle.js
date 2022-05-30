
triggerWhiteToggler = () => {
    const toggler = document.getElementById("navbarToggler");
    const navBar = document.getElementById("navbar");

    if (toggler.ariaExpanded === "true"){
        navBar.classList.add("navbar-toggled");
    } else if (toggler.ariaExpanded === "false") {
        navBar.classList.remove("navbar-toggled");
    }
}
document.getElementById("navbarToggler").addEventListener("click", triggerWhiteToggler);





