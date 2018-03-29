$(window).resize(function () {
    window.setTimeout('location.reload()', 200);
});

function getId(a) {
    return document.getElementById(a);
}

//menu

$('.header__menu__mobile_tab').hide();
$('#burg').on('click', function () {
    $('.header__menu__mobile_tab').slideToggle();

})


//slider

var slideIndex = 1;

showSlides(slideIndex);


$(document).ready(function(){
    setInterval(function(){
        showSlides(slideIndex += 1);
    },8000);
})
function plusSlides(n) {
        showSlides(slideIndex += n);
}

function currentSlide(n) {
        showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}
//

var sprite = document.getElementsByClassName('section1__side1__blocks')
$('.section1__side1__blocks').each(function (index, element) {
    $(element).mouseover(function () {
        for (var a = 0; a < sprite.length; a++) {
            $(this).eq(a).children('h2').css({
                color: '#C7832F'
            })
            $(this).eq(a).children('hr').css({
                backgroundColor: '#C7832F'
            })
        }
        $(this).eq(0).children('.first_sprite').css({
            backgroundPosition: '0 240px'
        })
        $(this).eq(0).children('.second_sprite').css({
            backgroundPosition: '0 193px'
        })
        $(this).eq(0).children('.third_sprite').css({
            backgroundPosition: '0 51px'
        })
        $(this).eq(0).children('.fourth_sprite').css({
            backgroundPosition: '0 -36px'
        })
    })
    $(element).mouseout(function () {
        for (var a = 0; a < sprite.length; a++) {
            $(this).eq(a).children('h2').css({
                color: 'gray'
            })
            $(this).eq(a).children('hr').css({
                backgroundColor: '#D5D5D5'
            })
        }
        $(this).eq(0).children('.first_sprite').css({
            backgroundPosition: '0 295px'
        })
        $(this).eq(0).children('.second_sprite').css({
            backgroundPosition: '0 148px'
        })
        $(this).eq(0).children('.third_sprite').css({
            backgroundPosition: '0 100px'
        })
        $(this).eq(0).children('.fourth_sprite').css({
            backgroundPosition: '0 5px'
        })
    })

})

//image change in section1__side2
var image__left = document.getElementsByClassName('image__left')[0]
var image__center = document.getElementsByClassName('image__center')[0]
var image__right = document.getElementsByClassName('image__right')[0]
var container = document.getElementsByClassName('container')[0]
console.log(container.clientWidth)


if (container.clientWidth == 750 || container.clientWidth == 751) {
    container.clientWidth
    $('.image__left').click(function () {
        $('.image__left').animate({
                zIndex: 2
            }, 0)
            .animate({
                left: '140px',
                height: '350px'
            }, 500)
        $('.image__center').animate({
                zIndex: 1
            }, 0)
            .animate({
                left: '270px',
                height: '280px'
            }, 500)
        $('.image__right').animate({
                zIndex: 0
            }, 0)
            .animate({
                right: '270px',
                height: '280px'
            }, 500)
        $('.image__center').click(function () {
            $(this).animate({
                    zIndex: 2
                }, 0)
                .animate({
                    left: '140px',
                    height: '350px'
                }, 500)
            $('.image__right').animate({
                    zIndex: 1
                }, 0)
                .animate({
                    right: 0,
                    height: '280px'
                }, 500)
            $('.image__left').animate({
                    zIndex: 0
                }, 0)
                .animate({
                    left: 0,
                    height: '280px'
                }, 500)
        })
        $('.image__right').click(function () {
            $(this).animate({
                    zIndex: 2
                }, 0)
                .animate({
                    right: '140px',
                    height: '350px'
                }, 500)
            $('.image__center').animate({
                    zIndex: 1
                }, 0)
                .animate({
                    left: '270px',
                    height: '280px'
                }, 500)
            $('.image__left').animate({
                    zIndex: 0
                }, 0)
                .animate({
                    left: 0,
                    height: '280px'
                }, 500)
        })
    })
} else if (container.clientWidth == 1060) {
    container.clientWidth
    $('.image__left').click(function () {
        $(this).animate({
                zIndex: 2
            }, 0)
            .animate({
                left: '180px',
                height: '450px'
            }, 500)
        $('.image__center').animate({
                zIndex: 1
            }, 0)
            .animate({
                left: '358px',
                height: '380px'
            }, 500)
        $('.image__right').animate({
                zIndex: 0
            }, 0)
            .animate({
                right: '358px',
                height: '380px'
            }, 500)
        $('.image__center').click(function () {
            $(this).animate({
                    zIndex: 2
                }, 0)
                .animate({
                    left: '180px',
                    height: '450px'
                }, 500)
            $('.image__right').animate({
                    zIndex: 1
                }, 0)
                .animate({
                    right: 0,
                    height: '380px'
                }, 500)
            $('.image__left').animate({
                    zIndex: 0
                }, 0)
                .animate({
                    left: 0,
                    height: '380px'
                }, 500)
        })
        $('.image__right').click(function () {
            $(this).animate({
                    zIndex: 2
                }, 0)
                .animate({
                    right: '180px',
                    height: '450px'
                }, 500)
            $('.image__center').animate({
                    zIndex: 1
                }, 0)
                .animate({
                    left: '360px',
                    height: '380px'
                }, 500)
            $('.image__left').animate({
                    zIndex: 0
                }, 0)
                .animate({
                    left: 0,
                    height: '380px'
                }, 500)
        })
    })
}

//section2__side1__sorting add class active
$(".sorting__button").click(function () {
    $(".sorting__button").removeClass("activeSort");
    $(this).toggleClass("activeSort");
})
//button load more
if (container.clientWidth <= 460) {
    $('.section2__side2__blocks__photo').slice(0, 1).show();
    $('.section2__side2__button__loadMore').click(function () {
        $('#section2__side2').animate({
            height: '1085px'
        });
        $('.section2__side2__blocks').animate({
            height: '965px'
        });
        $('.section2__side2__blocks__photo').slice(0, 3).slideDown();
        $('.section2__side2__button__loadMore').hide();
        $('.section2__side2__button__loadLess').show();
    })
    //    button load less
    $('.section2__side2__button__loadLess').click(function () {
        $('.section2__side2__blocks__photo').slice(1, 9).slideUp();
        $('#section2__side2').animate({
            height: '427px'
        })
        $('.section2__side2__blocks').animate({
            height: '311px'
        })
        $('.section2__side2__button__loadMore').show();
        $('.section2__side2__button__loadLess').hide();
    })
}
if (container.clientWidth == 750 || container.clientWidth == 751) {
    $('.section2__side2__blocks__photo').slice(0, 4).show();
    $('.section2__side2__button__loadMore').click(function () {
        $('#section2__side2').animate({
            height: '1395px'
        });
        $('.section2__side2__blocks').animate({
            height: '1280px'
        });
        $('.section2__side2__blocks__photo').slice(0, 8).slideDown();

        $('.section2__side2__button__loadMore').hide();
        $('.section2__side2__button__loadLess').show();
    })
    //    button load less
    $('.section2__side2__button__loadLess').click(function () {
        $('.section2__side2__blocks__photo').slice(4, 9).slideUp();
        $('#section2__side2').animate({
            height: '760px'
        });
        $('.section2__side2__blocks').animate({
            height: '650px'
        });
        $('.section2__side2__button__loadMore').show();
        $('.section2__side2__button__loadLess').hide();
    })
}
if (container.clientWidth == 1060) {
    $('.section2__side2__blocks__photo').slice(0, 6).show();

    $('.section2__side2__button__loadMore').click(function () {
        $('#section2__side2').animate({
            height: '1030px'
        });
        $('.section2__side2__blocks').animate({
            height: '920px'
        });
        $('.section2__side2__blocks__photo').slice(0, 9).slideDown();

        $('.section2__side2__button__loadMore').hide();
        $('.section2__side2__button__loadLess').show();
    })
    //    button load less
    $('.section2__side2__button__loadLess').click(function () {
        $('.section2__side2__blocks__photo').slice(6, 9).slideUp();
        $('#section2__side2').animate({
            height: '730px'
        })
        $('.section2__side2__blocks').animate({
            height: '615px'
        })
        $('.section2__side2__button__loadMore').show();
        $('.section2__side2__button__loadLess').hide();
    })
}

//mouseover for section2__side2__blocks_photo
$('.section2__side2__blocks__photo, .section4__container__blocks__photo').each(function (index, element) {
    $(element).mouseenter(function () {
        $(this).css('backgroundColor', '#362F2D');
        $(this).children('a').children('span').fadeIn(400);
        $(this).children('span').fadeIn(50);
        $(this).children('h3').css('color', 'white')
        $(this).children('p').css('color', '#99714F')
    })
    $(element).mouseleave(function () {
        $(this).css('backgroundColor', '#F5F5F5');
        $(this).children('h3').css('color', '#99714F')
        $(this).children('p').css('color', '#A1A1A1')
        $(this).children('a').children('span').fadeOut(100);
        $(this).children('span').fadeOut(100);
    })
})
//section4 Blocks Hover
$('.section4__container__blocks__photo').each(function (index, element) {
    $(element).mouseenter(function () {
        $(this).children('img').addClass('section4BlocksHov');
        $(this).children('.blocks__photo__date').children('.blocks__photo__date__day').css('backgroundColor', 'rgba(199,178,153,0.8)');
        $(this).children('.blocks__photo__date').children('.blocks__photo__date__month').css('backgroundColor', 'rgba(164,141,114,0.9)');
    })
    $(element).mouseleave(function () {
        $(this).children('.blocks__photo__date').children('.blocks__photo__date__day').css('backgroundColor', 'rgba(69,69,69,0.8)');
        $(this).children('.blocks__photo__date').children('.blocks__photo__date__month').css('backgroundColor', 'rgba(28,28,27,0.9)');
    })
})


//button play in section__video

$('.section__video__container__icon__play').mousedown(function () {
    if (container.clientWidth == 1060) {
        $(this).css({
            width: "80px",
            height: '80px'
        })
        $(this).children('img').css({
            width: "60px",
            height: '60px'
        })
    } else if (container.clientWidth == 750 || container.clientWidth == 751) {
        $(this).css({
            width: "60px",
            height: '60px'
        })
        $(this).children('img').css({
            width: "40px",
            height: '40px'
        })
    } else if (container.clientWidth == 460) {
        $(this).css({
            width: "50px",
            height: '50px'
        })
        $(this).children('img').css({
            width: "30px",
            height: '30px'
        })
    }
})
$('.section__video__container__icon__play').mouseup(function () {
    if (container.clientWidth == 1060) {
        $(this).css({
            width: "100px",
            height: '100px'
        })
        $(this).children('img').css({
            width: "80px",
            height: '80px'
        })
    } else if (container.clientWidth == 750 || container.clientWidth == 751) {
        $(this).css({
            width: "80px",
            height: '80px'
        })
        $(this).children('img').css({
            width: "60px",
            height: '60px'
        })
    } else if (container.clientWidth == 460) {
        $(this).css({
            width: "70px",
            height: '70px'
        })
        $(this).children('img').css({
            width: "50px",
            height: '50px'
        })
    }
})



//play video
var video = document.getElementsByClassName("video-background")[0];
video.pause()
document.getElementsByClassName('section__video__container__icon__play')[0].onclick = function () {
    video.play()
    if (video.play(true)) {
        $("div.fade__for__section__video").remove()
        $('.section__video__container__icon__play').hide(400);
        $('.section__video__container__title').fadeOut(200)
    }
}

//fade for section video
$('#section__video').mouseenter(function () {
    $(".section__video__container__preview").append("<div class='fade__for__section__video'></div>")
    $('.section__video__container__icon__play').show(400);
    $('.section__video__container__title').fadeIn(800)
})
$('#section__video').mouseleave(function () {
    $("div.fade__for__section__video").remove()
    $('.section__video__container__icon__play').hide(400);
    $('.section__video__container__title').fadeOut(200)
    video.pause()
})



//date
var arr = ['Jan.', 'Feb.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']
var date = new Date()
var month = date.getMonth()
var blockDay = document.getElementsByClassName('blocks__photo__date__day')
var blockMonth = document.getElementsByClassName('blocks__photo__date__month')
for (var i = 0; i < blockDay.length; i++) {
    blockDay[i].innerHTML = date.getDate()
}
for (var a = 0; a < blockMonth.length; a++) {
    blockMonth[a].innerHTML = arr[month]
}

//blocks with date
$('.section6__container__content__blocks:eq(1)').children('p:eq(1)').css('color', "#A0907C")
$('.section6__container__content__blocks:eq(1)').children('span:eq(1)').css('color', "#C3C3C3")
$('.section6__container__content__blocks:eq(2)').children('p').children('span:eq(0)').css('color', "#04A9D6")
$('.section6__container__content__blocks:eq(2)').children('p:eq(2)').children('span').css('color', "#A0907C")
