/**
 * Created by Administrator on 2015/4/13.
 */
'use strict'
$('document').ready(function(){
    $('.p').eq(2).addClass('pA');
    $('.p').eq(12).addClass('pA');
    $('.buttom.after0').mouseenter(function(){
        $(this).addClass('pA');
    });
    $('.buttom.after0').mouseleave(function(){
        $(this).removeClass('pA');
    });
    $('.buttom.after2').mouseenter(function(){
        var index = $('.buttom.after2').index(this);
        $(this).addClass('tC');
        $('.buttom-image.b1').eq(index).attr("src","image/true1.png");
    });
    $('.buttom.after2').mouseleave(function(){
        var index = $('.buttom.after2').index(this);
        $(this).removeClass('tC');
        $('.buttom-image.b1').eq(index).attr("src","image/true.png");
    });
    $('.buttom.after1').mouseenter(function(){
        $(this).addClass('pf');
    });
    $('.buttom.after1').mouseleave(function(){
        $(this).removeClass('pf');
    });
    $('.p').click(function(){
        var index = $('.p').index(this);
        if(index<=9) {
            for (var i = 0; i <= 9; i++) {
                $('.p').eq(i).removeClass('pA');

            }
        }
        else if(index>9){
            for (var i = 10; i <= 19; i++) {
                $('.p').eq(i).removeClass('pA');
            }
        }
        $(this).addClass('pA');
    });
    $('.function').click(function(){
        var offset = $(this).offset();
        var Y = offset.top;
        $('.line1').animate({
            top:(Y-130)+'px'
        },500)
    });
    $('.buttom.after1').click(function(){
        var index = $('.buttom.after1').index(this);
        if(this.offsetWidth==34) {
            $(this).addClass('hover1');
            $('.buttom.after2').eq(index).hide();
            $(this).css({
                marginRight: 22 + 'px',
                marginLeft: 30 + 'px',
                borderRadius: 20 + 'px',
                width: 60 + 'px'
            });
            $('.buttom-image.a1').eq(index).hide();
            $(this).animate({
                width: 108 + 'px'
            }, 1000);
            $('.cue.a1').eq(index).show();
        }
        else if(this.offsetWidth==110){
            $(this).removeClass('hover1');
            $('.cue.a1').eq(index).hide();
            $('.buttom-image.a1').eq(index).show();
            $(this).css({
                marginRight: 0 + 'px',
                marginLeft: 44 + 'px',
                borderRadius: 2000 + 'px',
                width: 60 + 'px'
            });
            $(function () {
                setTimeout(function () {
                    $('.buttom.after2').eq(index).fadeIn();
                }, 1010);
            })
            $(this).animate({
                width: 32 + 'px'
            }, 1000);
        }
    })
    $('.buttom.after2').click(function(){
        var index = $('.buttom.after2').index(this);
        if(this.offsetWidth==34) {
            $(this).addClass('hover2');
            $('.buttom.after1').eq(index).hide();
            $(this).css({
                marginRight: 22 + 'px',
                marginLeft: 30 + 'px',
                borderRadius: 20 + 'px',
                width: 60 + 'px'
            });
            $('.buttom-image.b1').eq(index).hide();
            $(this).animate({
                width: 108 + 'px'
            }, 1000);
            $('.cue.b1').eq(index).show();
        }
        else if(this.offsetWidth==110){
            $(this).removeClass('hover2');
            $('.cue.b1').eq(index).hide();
            $('.buttom-image.b1').eq(index).show();
            $(this).css({
                marginRight: 40 + 'px',
                marginLeft: 40 + 'px',
                borderRadius: 2000 + 'px',
                width: 60 + 'px'
            });
            $(function () {
                setTimeout(function () {
                    $('.buttom.after1').eq(index).fadeIn();
                    $('.buttom.after2').eq(index).css({
                        marginLeft: 10 + 'px'
                    });
                }, 1010);
            })
            $(this).animate({
                width: 32 + 'px'
            }, 1000);
        }
    })
    $('.buttom.after4').click(function(){
        var index = $('.buttom.after4').index(this);
        index = index + 5;
        $(this).hide();
        $('.buttom.after1').eq(index).show();
        $('.buttom.after2').eq(index).show();
    });
})
