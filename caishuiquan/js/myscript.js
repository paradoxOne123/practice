$(document).ready(function () {
	$(".mouseon").mouseover(function(){
		$(this).find("span").css({"top":"1px","border-left-color":"#e3e3e3","border-right-color":"#e3e3e3"});
		$(this).find("ul").show();
	});
	$(".mouseon").mouseleave(function(){
		$(this).find("span").css({"top":"0","border-left-color":"#fff","border-right-color":"#fff"});
		$(this).find("ul").hide();
	});
	$(".option").click(function(){
		$(".chose").slideDown(300);
	});
	$(".forneed").click(function(){
		$(".chose").hide();
		$("#for").html("找任务");
		event.stopPropagation();
	});
	$(".foroffice").click(function(){
		$(".chose").hide();
		$("#for").html("找事务所");
		event.stopPropagation();
	});
	
	$('.banner').unslider({
		speed: 500,               //  The speed to animate each slide (in milliseconds)
		delay: 3000,              //  The delay between slide animations (in milliseconds)
		keys: true,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true,               //  Display dot navigation
		fluid: false              //  Support responsive design. May break non-responsive designs
	});
	$(".dots").find("li").html("");
	$(".tasks-list").find("li:first>a").css({"color":"#555","background":"#fff"});
	$(".tasks-list-content:first").css("display","block");
	$(".tasks-list").find("li").mouseover(function(){
		$(".tasks-list").find("li>a").css({"color":"#fff","background":"rgba(255,255,255,.2)"});
		$(".tasks-list-content").css("display","none");
		$(this).children("a").css({"color":"#555","background":"#fff"});
		$(this).find(".tasks-list-content").css("display","block");
	});
	$(".offices-list").find("li:first>a").css({"color":"#555","background":"#fff"});
	$(".offices-list-content:first").css("display","block");
	$(".offices-list").find("li").mouseover(function(){
		$(".offices-list").find("li>a").css({"color":"#fff","background":"rgba(255,255,255,.2)"});
		$(".offices-list-content").css("display","none");
		$(this).children("a").css({"color":"#555","background":"#fff"});
		$(this).find(".offices-list-content").css("display","block");
	});
	$(".klass-nav-main").find("li:first").css("border-color","orange");
	$(".klass-nav-main").find("li").mouseover(function(){
		$(".klass-nav-main").find("li").css("border-color","transparent");
		$(this).css("border-color","orange");
	});
	$(".klass-nav-main").find("li").mouseleave(function(){
		$(".klass-nav-main").find("li").css("border-color","transparent");
		$(".klass-nav-main").find("li:first").css("border-color","orange");
	});
	$(".filtering-klass").find("span").click(function(){
		$(this).parent().find("span").removeClass("active");
		$(this).addClass("active");
	});
	$(".page-control").find("a").click(function(){
		$(this).parent().find("a").removeClass("active");
		$(this).addClass("active");
	});
	$(".icon").mouseover(function(){
		$(this).find("div").css("width","96px");
	});
	$(".icon").mouseleave(function(){
		$(this).find("div").css("width","25px");
	});
	$(".personal-settings").find("li").mouseover(function(){
		$(this).parent().find("li").removeClass("active");
		$(this).addClass("active");
	});
	$(".personal-settings").find("li").mouseleave(function(){
		$(this).parent().find("li").removeClass("active");
		$(".personal-settings").find("li:nth-child(2)").addClass("active");
	});
	$(".side-nav-klass").click(function(){
		$(this).parent().find("ul").hide();
		$(this).parent().find(".side-nav-klass").removeClass("active");
		$(this).find("ul").slideDown(200);
		$(this).addClass("active");
	});
	$(".reset").click(function() {
		$(".tables").find("input").val("");
		$(".tables").find(":checkbox").removeAttr('checked');
	})
	$(".tab-person").click(function() {
		$(this).parent().find("span").removeClass("active");
		$(this).addClass("active");
		$("#person-page").show();
		$("#office-page").hide();
	});
	$(".tab-office").click(function() {
		$(this).parent().find("span").removeClass("active");
		$(this).addClass("active");
		$("#person-page").hide();
		$("#office-page").show();
	});
	$(".tab-login-password").click(function() {
		$(this).parent().find("span").removeClass("active");
		$(this).addClass("active");
		$(".login-password").show();
		$(".pay-password").hide();
		$(".confirm").hide();
	});
	$(".tab-pay-password").click(function() {
		$(this).parent().find("span").removeClass("active");
		$(this).addClass("active");
		$(".login-password").hide();
		$(".pay-password").show();
		$(".confirm").hide();
	});
	$(".tab-confirm").click(function() {
		$(this).parent().find("span").removeClass("active");
		$(this).addClass("active");
		$(".login-password").hide();
		$(".pay-password").hide();
		$(".confirm").show();
	});
	$(".details:eq(0)").click(function(){
		$(this).parent().find(".details").removeClass("active");
		$(this).addClass("active");
		$(".details-content").find("div").removeClass("active");
		$(".details-content").find("div:eq(0)").addClass("active");
	});
	$(".details:eq(1)").click(function(){
		$(this).parent().find(".details").removeClass("active");
		$(this).addClass("active");
		$(".details-content").find("div").removeClass("active");
		$(".details-content").find("div:eq(1)").addClass("active");
	});
	$(".details:eq(2)").click(function(){
		$(this).parent().find(".details").removeClass("active");
		$(this).addClass("active");
		$(".details-content").find("div").removeClass("active");
		$(".details-content").find(".content-quest").addClass("active");
	});
	$("#submit-quest").click(function(){
		var $commentbox = $(".from-students");
		var $commenttext = $(".quest").val();
		if ($(".quest").val().length!==0) {
			$commentbox.append("<div class='clear-fix'><img src='images/student3.jpg'><div><span class='username'>家有喵皇帝</span><span class='quest-time'>2016年7月24日</span><p class='quest-content'>请问老师，像我这样刚入行1年多的，听您的课会吃力吗？</p></div></div>");
			$commentbox.children("div:last").find(".quest-content").html($commenttext);
			$(".quest").val("");
		} else {
			alert("请描述您的问题！")
		}
	})
});

/*
*$(".my-quest").find("textarea").keyup(function(){
*	$(this).css("background-color","red");
*	$(".char-num").html(120-$(".my-quest").find("textarea").val().length);
*	});
*/