
window.onload = function(){
    /*发布任务*/
    $(".first_btn").click(function(){
        $("#main1").css('display','none');
        $("#main2").css('display','block');
        $(".step2").css({background:'#2399F4',color:'#eee'});
    });
    $(".second_btn").click(function(){
        $("#main2").css('display','none');
        $("#main3").css('display','block');
        $(".step3").css({background:'#2399F4',color:'#eee'});
    });
    $(".third_btn").click(function(){
        $("#main2").css('display','none');
        $("#main1").css('display','block');
        $(".step2").css({background:'',color:'#999'});
    });
    $(".fours_btn").click(function(){
        $("#main3").css('display','none');
        $("#main4").css('display','block');
        $(".step4").css({background:'#2399F4',color:'#eee'});
    });
    $(".btn2").click(function(){
        $('#main1').css('display','block');
        $('#main4').css('display','none');
        $('.step2,.step3,.step4').css({background:'',color:'#999'});
    })
    $(".btn3").click(function(){

    });

    /*页头部分*/
    $(".mouseon").mouseover(function(){
        $(this).find("span").css({"top":"1px","border-left-color":"#e3e3e3","border-right-color":"#e3e3e3"});
        $(this).find("ul").show();
    });
    $(".mouseon").mouseleave(function(){
        $(this).find("span").css({"top":"0","border-left-color":"#fff","border-right-color":"#fff"});
        $(this).find("ul").hide();
    });
    $("#for").click(function(){
        //缺少判断语句，来实现点击-收起的功能
        $(".chose").slideDown(300);
        $(this).find(".arrow").css("transform","rotate(180deg)");
    });
    $(".forneed").click(function(){
        $(".chose").hide();
        $("#for").html("找任务");
    });
    $(".foroffice").click(function(){
        $(".chose").hide();
        $("#for").html("找事务所");
    });
    $(".klass").mouseover(function(){
        $(this).find(".sub-nav").slideDown(300);
    });
    $(".klass").mouseleave(function(){
        $(this).find(".sub-nav").hide();
    });
    /* 任务详情*/
    $('.oder_btn1').click(function(){
        $('.message').css('display','block');
        $('.note').css('display','none');
    });
    $('.oder_btn2').click(function(){
        $('.note').css('display','block');
        $('.message').css('display','none');
    });
    $('.require').click(function(){
        $('.modal_require').css('display','block');
    });
    $('.send_msg').click(function(){
        $('.modal_msg').css('display','block');
    });
    $('.close').click(function(){
        $('.modal').css('display','none');
    });
    $('.submit').click(function(){
        alert('发送成功！ 即将关闭页面');
        $('.modal').css('display','none');
    });
    $('.go_oder').click(function(){
        $('.modal_tips').css('display','block');
    });
    $('.go_after').click(function(){
        $('.modal_tips').css('display','none');
    });
    $('.go_now').click();
    /*submit 和login 页面js*/
    $('.my_phone').blur(function(){
            var tel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
            var value=$('.my_phone').val();
            if (!tel.test(value)) {
                $('.phone_num').css('display','block');
                $('.login_main').css('height','80%');
                $('.submit1').css('margin-top','6px');
            }else{
                $('.phone_num').css('display','none');
                $('.login_main').css('height','75%');
                $('.submit1').css('margin-top','35px');
            }
    });
    $('.pwd').blur(function(){
        var password = /^\d{6}$/;
        var value=$('.pwd').val();
        var width=$('section').val();
        if(! password.test(value)){
            $('.user_pwd').css('display','block');
            $('.login_main').css('height','80%');
            $('.submit1').css('margin-top','6px');
        }else{
            $('.user_pwd').css('display','none');
            $('.login_main').css('height','75%');
            $('.submit1').css('margin-top','35px');
        }
    });
    /*message.html*/
    $('.msg_content>div:odd').css({background:'#f8f8f8',borderRadius:'5px'});
    $('.go_first').click(function(){
        $('.msg_content1').css('display','block');
    });

};

