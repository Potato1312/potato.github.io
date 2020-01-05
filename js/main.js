$(document).ready(function(){


    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /*click enent on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });

// owl-carousel for blog
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive:{
        0:{
            items:1,
            
        },
        500:{
            items:2,
            
        },
        800:{
            items:3,
            
        }
    }

});


//click to scroll top
$('.move-up span').click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 1000)

})


});

$(document).ready(function(){

let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('activered');
        e.target.classList.add('activered');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


});


$(".num").counterUp({delay:10,time: 1000})