let nextButton = document.querySelectorAll('carousel-control-next');
let currentImage = document.querySelectorAll('carousel-item active');


function changeClass() {
    console.log('did we fire event listener!?!')
    currentImage.classList.remove('carousel-item active');
    currentImage.classList.add('carousel-item')
}

nextButton.addEventListener('click', changeClass)


/*

 <a class="carousel-control-next"   is the button getting the listener

 once its clicked we remove the class of the current image in the carousel

*/