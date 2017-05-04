$(function(){
    var json={
        "code":"200",
        "msg":"成功",
        "data":"json"
    };

    $.get('data/expert.json',json,function(data){
        var ex=data.expert;
        $.each(ex,function(index,a){
            var expret='';
            expret="<div class='expert_pro clear'><div class='user_pic'><img src='"+a.expert_img+"'></div><div><p><span>"+a.expert_name+"</span></p><p>"+a.expert_pro+"</p><p>已回答<a>"+a.expert_ans+"</a>人,被查看<a>"+a.expert_see+"</a>数 </p></div></div>"
            $('.expert').append(expret);
         })
    });

    $.get('data/fenda.json',json,function(data){
        var fd=data.audioblog;
        $.each(fd,function(index,vl){
            var _question ='',_answer='',_describe='';
			_answer +='<div class="answer-box clearfix"><p>'+vl.anserName+' | '+vl.anserDes+'</p><a href=mypage.html?userid="'+vl.anserId+'" class="profile-pic"><img src="'+vl.anserImg+'" alt=""></a><div class="clearfix"><div class="arrow"></div><div class="answer-audio"><img src="images/wave.png" alt="" class="wave"><span class="charge-type">免费试听</span><audio src="'+vl.anserAudio+'" class="answer-wave"></audio></div><div class="listen-num"><span class="cost-time"><i>'+vl.audioSec+'</i>"</span><span class="paid-num">'+vl.listenNum+'人偷听</span></div></div></div>';
		
			_question += '<div class="question-container"><div class="question-box clearfix"><a href="mypage.html?userid='+vl.quserId+'" class="profile-pic"><img src="'+vl.quserImg+'" alt=""></a><div><p>'+vl.quserTxt+'</p></div></div>';
			_describe +='<a href=mypage.html?userid="'+vl.anserId+'" class="expert-infos clearfix"><div class="clearfix"><img src="'+vl.anserImg+'" alt=""><div><p>'+vl.anserName+'</p><span>已帮助'+vl.helpNum+'人，总收入'+vl.income+'元</span><i class="icon iconfont">&#xe600;</i></div></div><p class="expert-intro">'+vl.anserDes+'</p></a></div>';
			$(".my-questions").append(_question+_answer+_describe);
             $(".answer-audio").click(function() {    
                 var sec = parseInt($(this).siblings().find("i").html())*1000;    
                 $(this).parent().parent().siblings(".expert-infos").css("display","block");
                 $("audio").each(function(){
                         this.load();
                       $(this).parent().find("img").attr("src","images/wave.png");
                 })
                 $(this).find("img").attr("src","images/wavegif.gif");
                 $(this).find("audio")[0].play();
                setTimeout(function(){
                    $(".answer-audio>img[src='images/wavegif.gif']").attr("src", "images/wave.png");
                },sec)
            });
            $(".audio-tab>span").click(function(){
                $(this).parent().find("span").removeClass("active");
                $(this).addClass("active");
            })
         })
    });

    
})