window.onload=function(){
    $('.input').focus(function(){
        $('.hot_word').css('display','block');
    })
    $('.input').focusout(function(){
        $('.hot_word').css('display','none');
    })
    $('.post').mouseover(function(){
        $('.message').css('display','block');
    })
    $('.message').mouseover(function(){
        $('.message').css('display','block');
    })
    $('.message').mouseout(function(){
        $('.message').css('display','none');
    })
};