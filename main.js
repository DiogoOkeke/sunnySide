let menuIcon = document.querySelector('.menu-icon');
let navContent = document.querySelector('.nav-content');


// Opening and closing the nav bar


menuIcon.onclick = () => {
  
 if(getComputedStyle(navContent).display === 'flex'){
  navContent.style.display = 'none';
}
else{
  navContent.style.display = 'flex';
}

}
