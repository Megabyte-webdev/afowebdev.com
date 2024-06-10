window.onload = () => {
    const nav = document.querySelector(".nav");
    const prevBtn = document.querySelector(".slider .prev-btn");
    const nextBtn = document.querySelector(".slider .next-btn");
    const slideContainer = document.querySelector(".slider ul");
    const dots = document.querySelectorAll(".slider .dot");

    let current = 0;
    let slide = 0;

    window.addEventListener("scroll", () => {
        window.scrollY > 30 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
    });
function GoToSlide(n){
  dots[current].classList.remove('active');
        current = n;
        slide = current * -25;
        dots[n].classList.add('active');
        slideContainer.style.transform = `translateX(${slide}%)`;
}
dots.forEach((e, index)=>{
  e.onclick=()=>{
    GoToSlide(index);
  }
})
    function NextSlide() {
current===dots.length-1 ? GoToSlide(dots.length-1) : GoToSlide(current+1);

    }
    function PrevSlide() {
      current===0 ? GoToSlide(0): GoToSlide(current-1);

    }

    nextBtn.addEventListener('click', () => {
        NextSlide()
    })
    prevBtn.addEventListener('click', () => {
        PrevSlide()
    })


    //Footer

    document.querySelector('.footer .year').innerHTML=new Date().getFullYear()
}