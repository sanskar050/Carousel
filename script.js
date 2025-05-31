let slides = document.querySelectorAll(".slides")

slides.forEach((e, index) => {
    e.style.left = `${index * 100}%`
})

let counter = 0

function prev() {
    if (counter != 0) {
        counter--
        slideImg()
    }
}

function next() {
    if (counter < (slides.length - 1)) {
        counter++
        slideImg()
    }
    else if (counter === (slides.length - 1)) {
        counter = 0
        slideImg()
    }
}

function slideImg() {
    slides.forEach(e => {
        e.style.transform = `translateX(-${counter * 100}%)`
    })
}