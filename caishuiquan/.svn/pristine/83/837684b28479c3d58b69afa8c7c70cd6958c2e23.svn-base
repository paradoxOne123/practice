//window.onload = function(){
    
    var args ={
    	"code":'200',
    	"msg":"success",
		"data":'personal',
		rmd:Math.random()    	
    }
    
    $.get("data/personal.json",args,function(data){
       // alert(data.userName);
        var _html = '';
    	_html += '<div class="user-box bottom10"><div class="user-info"><div class="tpart"><div class="headpic"><a href="mypage.html?'+ data.userId +'" title="'+ data.userName +'"><img class="img-auto" src="'+ data.txUrl +'" width="60" height="60" alt="'+ data.userName +'"></a></div></div><div class="bpart"><div class="u-tit"><a class="u-name" href="mypage.html?'+ data.userId +'">'+ data.userName +'</a><a class="hy" href=""><img src="images/hy.png"></a><a class="level" href="">'+ data.level +'</a></div><ul class="user-attn top10 clear"><li><a href="fans.html?'+ data.userId +'"><strong>'+ data.gz +'</strong><span>关注</span></a></li><li><a href="fans.html?'+ data.userId +'"><strong>'+ data.fans +'</strong><span>粉丝</span></a></li><li><a href="mypage.html?'+ data.userId +'"><strong>'+ data.dtCount +'</strong><span>微博</span></a></li></ul></div></div></div>';
       
       $(".right-cont").prepend(_html);

    })

//}