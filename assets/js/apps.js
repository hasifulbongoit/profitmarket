
// slick slider

$(document).ready(function(){
    $('.payment_process_slider').slick({
        dots:true,
        autoplay:false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1000,
        responsive: [
        {
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 6,
        }
        },
        {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 8,
        }
        },
        ]
    });
});

$(document).ready(function(){
    $('.staticis_wrapper').slick({
        dots:true,
        autoplay:false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        speed: 1000,
        responsive: [
        {
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 6,
        }
        },
        {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 8,
        }
        },
        ]
    });
});

