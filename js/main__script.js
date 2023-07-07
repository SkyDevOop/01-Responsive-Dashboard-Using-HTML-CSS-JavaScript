let mainNav__burger = document.querySelector(".mainNav__burger")
let header__mobileNav = document.querySelector(".header__mobileNav")
mainNav__burger.addEventListener('click', (e) => {
  if ( e.target.classList.contains('mainNav__burger') && !(e.target.classList.contains('mainNav__burger--open'))) {
    e.target.classList.add('mainNav__burger--open')
    header__mobileNav.classList.add('header__mobileNav--open')
  }else{
    e.target.classList.remove('mainNav__burger--open')
    header__mobileNav.classList.remove('header__mobileNav--open')
  }
})
