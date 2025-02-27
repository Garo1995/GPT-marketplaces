$(document).ready(function () {
    window.onscroll = function () {
        myFunction();

    };
    let nav = document.querySelector("header");
    let prt = nav.parentElement;
    let sticky = nav.offsetTop+1;
    function myFunction() {
        let wdth = window.innerWidth
        if (wdth < 257) {
            if (window.pageYOffset > sticky) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        } else {
            if (window.pageYOffset > sticky) {
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        }
    }
});



$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.nav-menu').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('.nav-menu').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.nav-menu').removeClass('transition-menu');
        }
    });
    $('.head-menu a').on('click', function () {
        $('.nav-menu').addClass('menu-width');
        $('body').removeClass('body_fix');
        $('.nav-menu').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});

$('.menu-scroll a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        let $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            let targetOffset = $target.offset().top-130;
            $('html,body')
                .animate({scrollTop: targetOffset}, 1000);
            return false;
        }
    }
});


$('.open-reviews-box').click(function () {
    $(this).toggleClass('open-reviews-act');
    $('.about-people-cnt').toggleClass('about-people-act');
})

$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }

    let accordion = new Accordion($('#accordion'), false);
});







let reviewsSwiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});







