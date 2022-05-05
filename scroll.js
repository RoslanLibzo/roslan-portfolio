window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("navbar");

  if (document.documentElement.scrollTop > 25) {
    navBar.classList.add("navbar-scrolled");
  } else {
    navBar.classList.remove("navbar-scrolled");    
  }
  console.log(document)
}