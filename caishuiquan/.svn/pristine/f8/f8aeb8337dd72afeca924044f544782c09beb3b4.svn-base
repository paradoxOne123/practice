$(document).ready(function(){

	$(".tab-tit li").click(function(){
		var a = $(this).index();
		//alert(a);
		$(this).css({"background-color":"#fff","border-right":"1px solid #ededed"});
		$(this).siblings().css({"background-color":"#f1f1f1","border-right":"0px"});
        $(".tabcont").eq(a).css("display","block");
        $(".tabcont").eq(a).siblings().css("display","none");
	})

	$(".swsmc a").mouseover(function(){
		var a = $(this).parent().parent().index();
		$(".hover").eq(a).css("display","block");
		//alert(a);
		$(this).parent().parent().siblings().children(".hover").css("display","none");

	})

	$(".font-add").click(function(){
		var fsize = parseInt($(".artical-cont p").css("font-size"));
		//alert(fsize);
        $(".artical p").css("font-size",(fsize+1)+"px");
        //alert($(".artical p").css("font-size"));
	})
	$(".font-minus").click(function(){
		var fsize = parseInt($(".artical-cont p").css("font-size"));
		if(fsize<=12){
             alert("当前已是最小字号");
		}else{
			$(".artical p").css("font-size",(fsize-1)+"px");
		}
        
	})
    
    //头部select下拉框
	$('[name="nice-select"]').click(function(e){
		$('[name="nice-select"]').find('ul').hide();
		$(this).find('ul').show();
		e.stopPropagation();
	});
	$('[name="nice-select"] li').hover(function(e){
		$(this).toggleClass('on');
		e.stopPropagation();
	});
	$('[name="nice-select"] li').click(function(e){
		var val = $(this).text();
		var dataVal = $(this).attr("data-value");
		$(this).parents('[name="nice-select"]').find('input').val(val);
		$('[name="nice-select"] ul').hide();
		e.stopPropagation();
	});
	$(document).click(function(){
		$('[name="nice-select"] ul').hide();
	});
})