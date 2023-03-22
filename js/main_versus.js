$(document).ready(function () {

//VERSUS

    $('.versus_container').slick({
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="next_versus"><img src="./img_Album/next_vers.svg" alt="Next versus"></button>',
        prevArrow: '<button class="prev_versus"><img src="./img_Album/prev_vers.svg" alt="Prev versus"></button>'
    })
});
