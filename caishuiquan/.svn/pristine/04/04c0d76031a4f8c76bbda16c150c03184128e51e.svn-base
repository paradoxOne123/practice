$(function(){
    // $(".answer-box").each(function(){
    //     var ti = $("i");
    //     var du = $("audio")[0].duration;
    //     ti.html(du)
    // })
    // $(".cost-time>i").html($(".cost-time>i").parent().parent().parent().find("audio")[0].duration);
    $(".answer-audio").click(function() {
        console.log($(this).find("audio")[0].currentTime)
        var sec = parseInt($(this).siblings().find("i").html())*1000;
        // sec = parseInt($(this).siblings().find("i").html())*1000 - parseInt($(this).find("audio")[0].currentTime)*1000;
        $(this).parent().parent().siblings(".expert-infos").css("display","block");
        // $(this).parents().find("audio").pause();
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