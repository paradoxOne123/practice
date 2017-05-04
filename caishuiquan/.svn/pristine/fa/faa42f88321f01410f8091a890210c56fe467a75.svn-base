$(function(){
    var sehpullbox = $(".sehpullbox"),
        sehinput = $(".seh-input"),
        sehfl = $(".sehfl"),
        sehtj = $(".sehtj"),
        sehtjList = $(".sehtj").find("ul");

	sehinput.focus(function(){
		$(".sehpullbox").slideDown();
	})
	sehinput.blur(function(){
		$(".sehpullbox").slideUp();
	})

	sehinput.on('input propertychange',function(){
        //alert("change!");
        var intext = $(this).val();
        if(intext.length == 0){
        	sehfl.show();
        	sehtjList.empty();
        }else{
            sehfl.hide();

            var args = {
	        	"code":'200',
		    	"msg":"success",
				"intext":intext,
				rmd:Math.random() 
	        }
	        $.get("data/seh.json",args,function(data){
	            var hotList = data.sehtjList,
	                html = '';

	            $.each(hotList,function(index,a){

	            	html += '<li><a href="javascript:;">'+ a +'</a></li>';
	            })
	            sehtjList.empty().append(html);
	        })

        }
        
	})

    sehpullbox.click(function(){
		var ev = ev||window.event;
		var target = ev.target||ev.srcElement;

		if(target.nodeName.toLowerCase() == "a"){
			sehinput.val(target.innerHTML);
		}
	})

})