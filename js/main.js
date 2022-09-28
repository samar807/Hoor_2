$(window).on("load", function () {
    AOS.refresh();
});

$(function () {
    AOS.init({
        once: true,
        disable: "mobile",
    });
    $(window).on("scroll", function () {
        AOS.refresh();
    });

    // open Side Nav
    $(".menuTriger").on("click", function () {
        $(this).fadeOut();
        $(".sideNav").toggleClass("open");
        $(".navover").toggleClass("open");
        $("body").css("overflow", "hidden");
        setTimeout(function () {
            $(".sideNav").addClass("origin");
        }, 500);
    });

    // Close Side Nav
    $(".navover, .close1").on("click", function () {
        if ($(".sideNav").hasClass("open")) {
            $(".menuTriger").fadeIn();
            $(".navover").removeClass("open");
            $(".sideNav").toggleClass("open");
            // $(".sideNav").toggleClass("origin");
            $("body").css("overflow", "auto");
            setTimeout(function () {
                $(".sideNav").removeClass("origin");
            }, 600);
        }
    });

    jQuery("img.svg").each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr("id");
        var imgClass = $img.attr("class");
        var imgURL = $img.attr("src");

        jQuery.get(
            imgURL,
            function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find("svg");

                // Add replaced image's ID to the new SVG
                if (typeof imgID !== "undefined") {
                    $svg = $svg.attr("id", imgID);
                }
                // Add replaced image's classes to the new SVG
                if (typeof imgClass !== "undefined") {
                    $svg = $svg.attr("class", imgClass + " replaced-svg");
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr("xmlns:a");

                // Check if the viewport is set, else we gonna set it if we can.
                if (
                    !$svg.attr("viewBox") &&
                    $svg.attr("height") &&
                    $svg.attr("width")
                ) {
                    $svg.attr(
                        "viewBox",
                        "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
                    );
                }

                // Replace image with new SVG
                $img.replaceWith($svg);
            },
            "xml"
        );
    });
});

$(function() {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    $('.title.two-title.collapsed').click(function() {
        $('button').toggleClass('.two');
    });

    $('.toggle').click(function() {
        $('.toggle').toggleClass('.active');
    });
    // $('.two-title').click(function() {
    //     $('i').toggleClass('plus');
    // });
    // $('.three-title').click(function() {
    //     $('i').toggleClass('plus');
    // });
    $(window).on("scroll", function() {
        // $(window).scrollTop() > 12 ?
        //     $(".main-nav").addClass("scrolled") :
        //     $(".main-nav").removeClass("scrolled");
        // if (window.innerWidth < 992) {
        //     $(window).scrollTop() > 12 ?
        //         $(".nav-torger").addClass("scrolled") :
        //         $(".nav-torger").removeClass("scrolled");
        // }
        // if ($(window).scrollTop() > $(".section-four").offset().top) {
        //     $(".section-four .img-con").addClass("active");
        // }
        // let five = $(".section-five").offset().top;
        // let fiveOf = five - 249;
        // if ($(window).scrollTop() > fiveOf) {
        //     $(".section-five .img-con").addClass("active");
        // }
        let choose = $(".choose").offset().top;
        let sixOf = choose - 250;

        if ($(window).scrollTop() > sixOf) {
            $(".choose img").addClass("active");
        }


        let test = $(".testmonial ").offset().top;
        let sevenOf = test - 249;

        if ($(window).scrollTop() > sevenOf) {
            $(".testmonial .images").addClass("active");
        }

        // if ($(window).scrollTop() > $(".section-eight").offset().top) {
        //     $(".section-eight .img-con").addClass("active");
        // }
        let des = $(".design ").offset().top;
        let desOf = des - 300;

        if ($(window).scrollTop() > desOf) {
            $(".design .images").addClass("active");
        }
        let client = $(".Client-Satisfaction").offset().top;
        let elevenOf = client - 355;

        if ($(window).scrollTop() > elevenOf) {
            $(".Client-Satisfaction .images").addClass("active");
        }


    });
    // $(".nav-torger , .menu  a").on("click", function() {
    //     $(".nav-torger").toggleClass("active");
    //     $(".menu").toggleClass("active");
    //     $("body").toggleClass("over");

    // });


});
var x = document.getElementById('one');
var y = document.getElementById('two');
var z = document.getElementById('space');

function annually() {
    y.style.height = "560px";
    y.style.boxShadow = '10px 10px 10px 10px #ccc';
    y.style.border = 'none';
    y.style.borderRadius = "0px";
    x.style.height = "640px";
    x.style.width = '50%';
    x.style.overflow = 'hidden';
    x.style.boxShadow = '10px 10px 10px 10px #ccc';
    x.style.border = '2px solid #ebebeb';
    x.style.borderRadius = "20px";
    z.style.background = '#000';

}


function monthly() {
    x.style.height = "560px";
    x.style.boxShadow = '10px 10px 10px 10px #ccc';
    x.style.border = 'none';
    x.style.borderRadius = "0px";
    y.style.height = "640px";
    y.style.width = '40%';
    y.style.overflow = 'hidden';
    y.style.boxShadow = '10px 10px 10px 10px #ccc';
    y.style.border = '2px solid #ebebeb';
    y.style.borderRadius = "20px";

}
$('.toggle-btn-1').click(function() {
    $('.toggle-btn-1').addClass('.color-one');
});