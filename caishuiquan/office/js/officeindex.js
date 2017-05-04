$(document).ready(function(){
    $("#intro-more").click(function(){
        if ($(".office-intro>div>div").css("height")==="145px"){
            $(".office-intro>div>div").css("height","auto");
            $(this).html("收起")
        }else{
            $(".office-intro>div>div").css("height","145px");
            $(this).html("显示更多")
        }
    })
});