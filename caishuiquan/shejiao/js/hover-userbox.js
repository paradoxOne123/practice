$(function(){
    $.extend({ 
		a:function(){ 
		    var $b = $(this).siblings(".hover-userbox"); 
		    $b.hide();
		    t = setTimeout("$.a()",1500);
	    } 
    }); 
    //var t;

	$(".u-tit .u-name").mouseover(function(){
		clearTimeout(t);
		$(this).siblings(".hover-userbox").css("display","block");
	})
	$(".u-tit .u-name").mouseout(function(){		                                                                                              
		t = setTimeout("$.a()",1500);
	});
	$(".hover-userbox").mouseover(function(){
		 clearTimeout(t);
	})
	$(".hover-userbox").mouseout(function(){
		clearTimeout(t);
        setTimeout("$.a()",1500);
	})

})
    