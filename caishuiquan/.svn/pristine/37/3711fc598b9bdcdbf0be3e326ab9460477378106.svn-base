
window.onload = function(){

    //判断是否需要登录
    var uid = '';
	var isNeedLogin = needLogin();
	// if(isNeedLogin == 1){
	    // 用户信息框变为登录框
	    //var notloginbox = '<div class="user-box bottom10"><div class="user-info"><div class="tpart"><div class="headpic"><img class="img-auto" src="images/tx2.jpg" width="60" height="60"></a></div></div><div class="bpart"><a class="gotolog" href="../login.html">您还没有登录，请登录</a></div></div></div>';
        //$(".right-cont").prepend(notloginbox);

	    //传的userId为空
	   // uid = '';
	// }else{
	        uid = isNeedLogin.userId;
	        var uname = isNeedLogin.phone;
            
            //右侧用户信息框
			var personal = {
		        "code":'200',
		    	"msg":"success",
				"uid":'uid',
				rmd:Math.random()  
			};
			$.get("data/personal.json",personal,function(data){
		       // alert(data.userName);
		        var _html = '';
		    	_html += '<div class="user-box bottom10"><div class="user-info"><div class="tpart"><div class="headpic"><a href="mypage.htmluserId=?'+ uid +'" title="'+ uname +'"><img class="img-auto" src="'+ data.txUrl +'" width="60" height="60" alt="'+ uname +'"></a></div></div><div class="bpart"><div class="u-tit"><a class="u-name" href="mypage.html?userId='+ uid +'">'+ uname +'</a><a class="hy" href=""><img src="images/hy.png"></a><a class="level" href="">'+ data.level +'</a></div><ul class="user-attn top10 clear"><li><a href="fans.html?userId='+ data.userId +'"><strong>'+ data.gz +'</strong><span>关注</span></a></li><li><a href="fans.html?userId='+ data.userId +'"><strong>'+ data.fans +'</strong><span>粉丝</span></a></li><li><a href="mypage.html?userId='+ data.userId +'"><strong>'+ data.dtCount +'</strong><span>微博</span></a></li></ul></div></div></div>';
		       
		       $(".right-cont").prepend(_html);
		    });

	//}	

    //状态框
    var args ={
    	"code":'200',
    	"msg":"success",
		"uid":'uid',
		rmd:Math.random()    	
    };
    $.get("data/dt.json",args,function(data){
        console.log(data.dtlist.length);
        var dt = data.dtlist;

        	$.each(dt,function(index,a){
                // alert(a.userId+'  '+a);
                var head ='' 
                   left='' 
                   right = ''
                   ending = ''
                   box = ''
                   botmNav = ''
                   botmNavEnd = ''
                   commentHead = ''
                   commentLsit = ''
                   commentEnd = '';
                head += '<div class="sjbox bottom10">';
	            left += '<div class="sjcont"><div class="cont"><div class="touxiang"><a href="mypage.html?'+ a.user.userId +'"><img src="' + a.user.txUrl + '"></a></div>';
	            right += '<div class="rct"><div class="u-tit"><a class="u-name" href="mypage.html?userId='+ a.user.userId +'">' + a.user.userName + '</a><a class="rz" href=""><img src="images/rz.png"></a><a class="hy" href=""><img src="images/hy.png"></a><div class="hover-userbox"><div class="user-info"><div class="tpart"><div class="headpic"><a href="mypage.html?userId='+ a.user.userId +'" title="' + a.user.userName + '"><img class="img-auto" src="' + a.user.txUrl + '" width="60" height="60" alt="' + a.user.userName + '"></a></div></div><div class="bpart"><div class="u-tit"><a class="u-name" href="mypage.html?userId='+ a.user.userId +'">' + a.user.userName + '</a><a class="hy" href=""><img src="images/hy.png"></a><a class="level" href="">' + a.user.level + '</a></div><ul class="user-attn top10 clear"><li><a href="fans.html?userId='+ a.user.userId +'"><strong>'+ a.user.gz +'</strong><span>关注</span></a></li><li><a href="fans.html?userId='+ a.user.userId +'"><strong>'+ a.user.fans +'</strong><span>粉丝</span></a></li><li style="border:0px;"><a href="mypage.html?userId='+ a.user.userId +'"><strong>'+ a.user.dtCount +'</strong><span>微博</span></a></li></ul><div class="gz"><a href="javascript:;"><i class="iconfont"></i>关注</a></div></div></div></div></div><div class="u-time"><a class="time" href="">' + a.data + ' ' + a.time + '</a></div><div class="u-word">' + a.dttext + '</div><div class="u-img"><img src="' + a.textimgUrl + '"></div></div></div></div>';
	            box = left + right;

	            botmNav += '<div class="sj-botm-nav"><ul class="clear"><li><a href=""><span class="sc"><i class="iconfont">&#xe60b;</i><em>收藏</em></span></a></li><li><a href="javascript:;"><span class="zf"><i class="iconfont">&#xe609;</i><em>' + a.zf + '</em></span></a></li><li><a href="javascript:void(0);"><span class="hf"><i class="iconfont">&#xe676;</i><em>' + a.comments.length + '</em></span></a><span class="arrow-t" style="display: none;"></span></li><li><a href=""><span class="like"><i class="iconfont">&#xe624;</i><em>' + a.dz + '</em></span></a></li></ul>';

	            commentHead += '<div class="comment"><div class="cont"><div class="commentbox"><div class="tx left"><a href="mypage.html?'+ a.user.userId +'"><img src="' + a.user.txUrl + '"></a></div><div class="rct"><div class="art-replay"><div class="comt-edit bottom10"><textarea class="cot-input"></textarea><span style="display:none;" class="cot-input-count">1000</span></div><div class="comt-subm clear"><div class="zf left"><input type="checkbox" name="zf" id="zf"><label for="zf" class="f12">同时转发到我的主页</label></div><div class="submit comt-submit right"><a href="">评论</a></div></div></div><div class="comtcont">';

	            $.each(a.comments,function(b,c){
                    //alert(b+c);
                    commentLsit += '<div class="comt-art"><div class="tx left"><a href="mypage.html?'+ c.userId +'"><img class="img-auto" src="' + c.txUrl + '"></a></div><div class="rct"><div class="comt-word"><a href="mypage.html?'+ c.userId +'" class="u-name cslink">'+ c.userName +'</a>'+ c.comtxt +'</div><div class="comt-info clear"><div class="comt-time left f12">' + c.data +' '+ c.time + '</div><div class="comt-act right"><a href="javascript:void(0);" class="jubao">举报</a><a href="javascript:void(0);" class="reply">回复</a><a href="javascript:void(0);" class="like"><i class="iconfont"></i>12</a></div></div><!--回复框--><div class="comt-replay"><span class="arrow-t"></span><div class="comt-edit bottom10"><textarea class="cot-input"></textarea><span style="display:none;" class="cot-input-count">1000</span></div><div class="comt-subm clear"><div class="zf left"><input type="checkbox" name="zf" id="zf"><label for="zf" class="f12">同时转发到我的主页</label></div><div class="replay-submit submit right"><a href="">评论</a></div></div></div></div></div>';
                    
	            })

	            botmNavEnd += '</div></div></div>';

	            var ending = '</div></div></div>';

	            var ztbox = head + box + botmNav + commentHead + commentLsit +botmNavEnd +ending;

	            $(".sj-main").append(ztbox);
	           

        	})

		    if("span.hf"){
		        $("span.hf").on("click",function(){
		        	$(this).parent().parent().parent().siblings(".comment").toggle();
		        	$(this).parent().siblings(".arrow-t").toggle();
		        })
		    }

		    if(".comt-replay"){
		        $(".comt-act a").click(function(){
		            $(this).parent().parent().siblings(".comt-replay").toggle();
		        })
		    }

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

			function statInputNum(textArea,numItem) {
			    var max = numItem.text(),
			        curLength;
			    textArea[0].setAttribute("maxlength", max); 
			    curLength = textArea.val().length;   

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
            
            //延迟下拉框 用户信息
		    var t;

			$(".u-tit .u-name").mouseover(function(){
				clearTimeout(t);
				$(this).siblings(".hover-userbox").css("display","block");
			})
			$(".u-tit .u-name").mouseout(function(){		                                                                                              
				t = setTimeout(function(){
					$(this).siblings(".hover-userbox").css("display","none");
				},1500);
			});
			$(".hover-userbox").mouseover(function(){
				 clearTimeout(t);
			})
			$(".hover-userbox").mouseout(function(){
		        t = setTimeout(function(){
					$(".hover-userbox").css("display","none");
				},1500);
			})
	})


    $.get("data/hottalk.json",args,function(data){
	    var html1 = '';
	    var ht = data.htlist;
	    $.each(ht,function(index,a){
	    	html1 +='<li><a href="">'+ a.htTit +'</a><span class="horderg">'+ a.readCount +'</span></li>';
	    });
	   $(".hot-list>ul").append(html1);	
	});

	$.get("data/hotsws.json",args,function(data){
	    var html2 = '';
	    var ht = data.hotsws;
	    $.each(ht,function(index,a){
	    	html2 +='<li><div class="zj-info"><div class="tx"><a href="mypage.html?userId='+ a.userId +'"><img class="img-auto" src="'+ a.txUrl +'"></a></div><div class="mct"><div class="u-tit"><a class="u-name cslink" href="mypage.html?userId='+ a.userId +'">'+ a.userName +'</a><a class="rz" href=""><i class="iconfont">&#xe622;</i></a></div><div class="u-job">'+ a.userIntro +'</div></div><div class="rct"><a href=""><i class="iconfont">&#xe615;</i>关注</a></div></div></li>';
	    });
	   $(".zj-list>ul").append(html2);	
	})
}

