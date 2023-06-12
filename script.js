// -----HAMBURGER AND MOBILE MENU-----

const hamburger = document.querySelector("input[id=hamburger]");
const mobileList = document.querySelector('.mobile_list');

hamburger.addEventListener('change', function(){
    if (this.checked && window.innerWidth < 768) {
        mobileList.classList.add('display_item');
    } else {
        mobileList.classList.remove('display_item');
    }
});

// -----NAVBAR SCROLL EFFECT-----
const className = "inverted";
const logoClass = "logo_scroll"
const scrollTrigger = 5;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
    document.getElementsByClassName("logo")[0].classList.add(logoClass);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
    document.getElementsByClassName("logo")[0].classList.remove(logoClass);
  }
};