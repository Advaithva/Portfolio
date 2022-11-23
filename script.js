var currentSlide = 0;

const slides = document.querySelectorAll(".slide")

const dots = document.querySelectorAll('.dot')

const init = (n) => {

slides.forEach((slide) => {

slide.style.display = "none"

dots.forEach((dot) => {

dot.classList.remove("active")

})

})

slides[n].style.display = "block"

dots[n].classList.add("active")

}

document.addEventListener("DOMContentLoaded", init(currentSlide))


const next = () => {

currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++

init(currentSlide)

}

const prev = () => {

currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--

init(currentSlide)

}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)


dots.forEach((dot, index) => {

dot.addEventListener("click", () => {

init(index)

currentSlide = i

})

})
