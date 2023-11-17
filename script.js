
function Click(){
  let Sidenav = document.getElementById("SideNav");
  if(Sidenav.style.display === "none"){
    Sidenav.style.display = "block";
  }else{
    Sidenav.style.display = "none";
  }
}

// let mybutton = document.getElementById("myBtn");
// window.onscroll = function(){
//   scrollFunction()
// };
// function scrollFunction(){
//   if(doocument.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
//     mybutton.style.display = "block";
//   }else{
//     mybutton.style.display = "none";
//   }
// }
// function topFunction(){
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }


let slideIndex = 0;
showSlides();
function showSlides(){
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for ( i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides , 2000);
}

