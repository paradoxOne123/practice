$(function(){
    
    //首页状态框
    if(".send-input"){
        //先选出 textarea 和 统计字数 dom 节点
        //var wordCount1 = $(".send-input"),
           // textArea1 = wordCount1.find("textarea"),
           // word1 = $(".cot");
            //alert(wordCount1[1]);
        $(".send-input textarea").focus(function(){
            var wordCount = $(this).parent();
            var textArea = $(this).parent(".send-input").find("textarea");
            var word = $(this).parent().siblings().find(".cot");
        	wordCount.css("border-color","#f90");
        	word.parent().css("display","inline-block").siblings(".rm").css("display","none");
            //调用
            statInputNum(textArea,word);
        })
        $(".send-input textarea").blur(function(){
            var wordCount = $(this).parent();
            var textArea = $(this).parent(".send-input").find("textarea");
            var word = $(this).parent().siblings().find(".cot");
        	wordCount.css("border-color","#ededed");
        	word.parent().css("display","none").siblings(".rm").css("display","inline-block");
        })
    }
    
    //微博评论
    if("span.hf"){
        $("span.hf").on("click",function(){
        	$(this).parent().parent().parent().siblings(".comment").toggle();
        	$(this).parent().siblings(".arrow-t").toggle();
        })
    }

    //回复评论
    if(".comt-replay"){
        $(".comt-act a").click(function(){
            $(this).parent().parent().siblings(".comt-replay").toggle();
        })
    }

    if(".img-upload"){
        $(".img-upload").click(function(){
            $(this).parent().siblings(".show-upload").toggle();
        })
    }
    
    if(".navlist"){
        $(".navlist ul li a").not("#fd").click(function(){
            $(this).siblings(".arrow-t").css("display","block");
            $(this).parent().siblings().find(".arrow-t").css("display","none");
            $(".sjbox").show();
            $(".fd").hide();
        })
    }

    //评论区输入框
    if(".comt-edit"){
        var com_wordCount = $(".comt-edit"),
            com_textArea = com_wordCount.find("textarea");
            com_word = $(".cot-input-count");
                
        com_textArea.focus(function(){
            $(this).css("border-color","#f90");
            statInputNum(com_textArea,com_word);
        })
         com_textArea.blur(function(){
            $(this).css("border-color","#ededed");
        })
    }

    //fixed nav
    $(window).scroll(function () {
      if($(document).scrollTop()>= 220){
        if(".sns-top"){
          $(".sns-top").css({"position":"fixed","width":"100%","opacity":"0.9","top":"0","filter":"alpha(opacity=90)","z-index":"100"});
        }
        
      }else{
        if(".sns-top"){
          $(".sns-top").css({"position":"","opacity":"1","top":"0px","filter":"alpha(opacity=100)"});
        }

      }
    })
       
});

function statInputNum(textArea,numItem) {
    var max = numItem.text(),
        curLength;
    textArea[0].setAttribute("maxlength", max); //为textarea设置最大字数
    curLength = textArea.val().length;   //已有字数

    numItem.text(max - curLength);
    textArea.on('input propertychange', function () {
        numItem.text(max - $(this).val().length);

        if($(this).val().length >= 1){
            $(this).parent().siblings().find(".submit a").css("background-color","#f90");
        }else{
            $(this).parent().siblings().find(".submit a").css("background-color","#ddd");
        }
        
    });
}