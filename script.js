document.querySelector('.header_burger').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
    this.classList.toggle('active');
})



let X = false
let Nav = document.getElementsByClassName('nav')[0]
let HeaderBurger = document.getElementsByClassName("header_burger")[0]
HeaderBurger.addEventListener("click", function () {
    if(!X) {
        Nav.style.display = ('inline')
        X = true
    }
    else {
        Nav.style.display = ('none')
        X = false
    }
})
