// mobile change images
window.onload = function (){
const headerBgImage = document.querySelector('.header-bg__image');
const companySmallImage = document.querySelector('.company__image-small');
const companyBigImage = document.querySelector('.company__image-big');
const glassImage = document.querySelector('.glass__image');
const advantagesImage = document.querySelector('.advantages__image');
const logoHeader = document.querySelector('.logo-header');
const logoFooter = document.querySelector('.logo-footer');
const arrowDown = document.querySelector('.arrow__down');
//media
const media1060Px = window.matchMedia('(max-width: 1060px)');
const media800Px = window.matchMedia('(max-width: 800px)');
const media620Px = window.matchMedia('(max-width: 620px)');
function changeImages (selector,src){
    selector.setAttribute('src',src);
}
if(media1060Px.matches){
    changeImages(headerBgImage,'src/assets/images/mobile/header/header-bg.png');
}

if(media800Px.matches){
    changeImages(companySmallImage,'src/assets/images/mobile/about-company/company-mobile-1.png');
    changeImages(companyBigImage,'src/assets/images/mobile/about-company/company-mobile-2.png');
    changeImages(glassImage,'src/assets/images/mobile/our-glass/glass-image.png');
    changeImages(advantagesImage,'src/assets/images/mobile/advantages/advantages.png');
    
}
if(media620Px.matches){
    changeImages(logoHeader,'src/assets/images/mobile/logotype/logo-header.png');
    changeImages(logoFooter,'src/assets/images/mobile/logotype/logo.png');
    changeImages(arrowDown,'src/assets/images/mobile/header/arrow-down.svg');
}
}