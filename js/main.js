
// navBar links activation
let nLinks = document.querySelectorAll(".nav-item .nav-link");
nLinks.forEach((link)=>{
  link.addEventListener('click', ()=>{
    nLinks.forEach((link)=>{
      if (link != this){
        link.classList.remove('active')
      }else{
        this.classList.add('active')
      }
    })
  })
})

//   استدعاء التأثير عند التمرير على العناصر المحددة
  var elements = document.getElementsByClassName("advantage-card");
  var blogsCarts = document.querySelectorAll(".blogs-cards .col");
  function animateOnScroll() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var elementPosition = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      var scrollPosition = elementPosition - windowHeight ;
      if(i%2==0){
      if (scrollPosition < 0) {
        element.classList.add('animate__animated','animate__fadeInBottomRight');
      } else {
        element.classList.remove("animate__animated", "animate__fadeInBottomRight");
      }}else{
        if (scrollPosition < 0) {
          element.classList.add('animate__animated','animate__fadeInBottomLeft');
        } else {
          element.classList.remove("animate__animated", "animate__fadeInBottomLeft");
        }
      }
    }
  }
    // استدعاء الدالة عند حدث التمرير
    window.addEventListener("scroll", animateOnScroll);

  function animateOnScroll2() {
    for (var i = 0; i < blogsCarts.length; i++) {
      var element = blogsCarts[i];
      var elementPosition = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      // احتساب النسبة المئوية لمرور العنصر على الشاشة
      var scrollPosition = elementPosition - windowHeight ;
      if(i%2==0){
      if (scrollPosition < 0) {
        element.classList.add('animate__animated','animate__fadeInBottomLeft');
      } else {
        element.classList.remove("animate__animated", "animate__fadeInBottomLeft");
      }}else{
        if (scrollPosition < 0) {
          element.classList.add('animate__animated','animate__fadeInBottomRight');
        } else {
          element.classList.remove("animate__animated", "animate__fadeInBottomRight");
        }
      }
    }
  }
    // استدعاء الدالة عند حدث التمرير
    window.addEventListener("scroll", animateOnScroll2);

    // loader js
    window.addEventListener("load",()=>{
      const loader= document.querySelector(".loader");
      loader.classList.add("loader-hidden");
      loader.addEventListener("transitionend",()=>{
        document.body.removeChild("loader");
      })
    })








