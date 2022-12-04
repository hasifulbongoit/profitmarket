// toggle btn dashboard

{
    let dashBtn = document.getElementById("dashboard_toggle")
    let sideBar = document.getElementById("dashboard_sidebar")
    
    dashBtn.addEventListener("click", function(){
        sideBar.classList.toggle("activeSidebar")
    })

    let sideBarItem = document.getElementsByClassName("sidebar_nav_item")
    ;[...sideBarItem].forEach(currentItem => {
        currentItem.addEventListener("click", function(){
            ;[...sideBarItem].forEach(innerItem => {
                innerItem.classList.remove("active")
            });
            this.classList.add("active")
        })
    });
}


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

