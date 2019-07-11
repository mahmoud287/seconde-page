// global $


$(function () {
    'use strict';
// adjust header
    var header = $(".header");
    header.height($(window).height());
    $(window).resize(function () {
        header.height($(window).height());
        

    });
// active links
    $('.links li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');


    });
// adjust  slider

    $('.slider').bxSlider({
        pager: false
    });

    $('.bx-wrapper').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2);

    });﻿

    //set smooth slid
    $('.links li a').click(function () {

        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    // create our auto slider
    (function autoslider() {
        $('.test-slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoslider();
                })
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.test-slider div').eq(0).addClass('active').fadeIn();
                    autoslider();
                });
            }
        });
    }());

    //create our slider photo
    $('.our-proj li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');


    });


});

$('.our-proj li').on('click', function () {
    $('.our-proj .con>div').hide();
    $('#' + $(this).attr('data')).fadeIn(1500);

});


$(function() {
    $("body").niceScroll();
    $("html").niceScroll({cursorcolor:"#1abc9c"});
});
