$(function () {
	// 添加头像内容到sns-userbanner
	var userbanner = {
		"code": "200",
		"msg": "成功",
		"data": "userInfo"
	}
	$.get("data/userInfo.json",userbanner,function(data){
		$(".sns-userbanner>img")[0].src = data.userInfo.userPic;
		$(".sns-userbanner>p").html(data.userInfo.userName);
		$(".sns-userbanner>span").html(data.userInfo.userDescribe);	
	})
	// 添加左侧简介内容到sns-thumbnail
	var userthumbnail = {
		"code": "200",
		"msg": "成功",
		"data": "userInfo"
	}
	$.get("data/userInfo.json",userthumbnail,function(data){
		$(".thumbnail-level").html(data.userInfo.level);
		$(".locationP").html(data.userInfo.locationP);
		$(".locationC").html(data.userInfo.locationC);
		$(".sns-thumbnail>div:nth-child(3)>span>span").html(data.userInfo.userDescribe);
	})
	// 异步加载关注、粉丝json数据
	var fanslist = {
		"code": "200",
		"msg": "成功",
		"data": "fanslist"
	}
	var followlist = {
		"code": "200",
		"msg": "成功",
		"data": "followlist"
	}
	$.get("data/fanslist.json",fanslist,function(data){
		var relaOuterbox = '<div class="sns-relation clearfix"><h4>圈子关系</h4><div class="fanswrap"></div><div><a href="#">查看更多 ></a></div></div>';
		$(".maincontent-left").append(relaOuterbox);
		var fansnum = '<h5>她的粉丝（'+data.fanslist[0].people+'）</h5><div class="my-follow clearfix"></div>';
		$(".fanswrap").append(fansnum);
		$.each(data.fanslist[1].peoplelist,function(ky,vl) {
			var myFollow ='';
			myFollow += '<a href="#"><img src="'+vl.userpic+'"><span>'+vl.username+'</span></a>'
			if ($(".my-follow>a").length<4) {
				$(".my-follow").append(myFollow)
			}else {
				return false
			}
			})
	})
	$.get("data/followerlist.json",fanslist,function(data){
		var follownum = '<h5>她的关注（'+data.fanslist[0].people+'）</h5><div class="my-follower clearfix"></div>';
		$(".fanswrap").append(follownum);
		$.each(data.fanslist[1].peoplelist,function(ky,vl) {
			var myFollower ='';
			myFollower += '<a href="#"><img src="'+vl.userpic+'"><span>'+vl.username+'</span></a>'
			if ($(".my-follower>a").length<4) {
				$(".my-follower").append(myFollower)
			}else {
				return false
			}
			})
	})
	// 异步加载左侧文章区域
	var arti = {
		"code": "200",
		"msg": "成功",
		"data": "dtlist"
	}
	$.get("data/myblogs.json",arti,function(data){
		var part1 = '<div class="sns-article clearfix"><h4>文章 ['+data.dtlist.length+']</h4><div class="my-article">';
		var part2 = '</div><div><a href="#">查看更多 ></a></div></div>';
		$(".maincontent-left").append(part1+part2)
		$.each(data.dtlist,function(index,a){
			// alert(a.user.textimgUrl)
			var inner = '';
				inner += '<a href="#"><img src="'+a.user.textimgUrl+'"><p>'+a.dttext+'</p></a>'
				if ($(".my-article>a").length<4) {
					$(".my-article").append(inner)
				}else {
					return false
				}
		})
	})
	// 异步加载赞json数据
	var zan = {
		"code": "200",
		"msg": "成功",
		"data": "thumbsup"
	}
	$.get("data/thumbup.json",zan,function(data){
		var zanOuterbox = '<div class="sns-thumbsup clearfix"><h4>赞</h4><div class="my-thumbsup clearfix"></div><div><a href="#">查看更多 ></a></div></div>';
		$(".maincontent-left").append(zanOuterbox);
		$.each(data.thumbsup,function(ky,vl){
			var zanImg = '';
			zanImg += '<a href="#" class="clearfix"><img src="'+vl.imgsrc+'"><div><p>'+vl.thumbname+'</p><span>'+vl.thumbcontent+'</span></div></a>';
			if ($(".my-thumbsup>a").length<4) {
				$(".my-thumbsup").append(zanImg);
			}else {
				return false
			}
		})
	})
	// 异步加载blog内容
	var myblogs = {
		"code": "200",
		"msg": "成功",
		"data": "dtlist"
	}
	$.get("data/myblogs.json",myblogs,function(data){
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
		            right += '<div class="rct"><div class="u-tit"><a class="u-name" href="">' + a.user.userName + '</a><a class="rz" href=""><img src="images/rz.png"></a><a class="hy" href=""><img src="images/hy.png"></a></div><div class="u-time"><a class="time" href="">' + a.data + ' ' + a.time + '</a></div><div class="u-word">' + a.dttext + '</div><div class="u-img"></div></div></div></div>';
		            box = left + right;
		           // alert(a.comments.length);  

		            botmNav += '<div class="sj-botm-nav"><ul class="clear"><li><a href=""><span class="sc"><i class="iconfont">&#xe60b;</i><em>收藏</em></span></a></li><li><a href="javascript:;"><span class="zf"><i class="iconfont">&#xe609;</i><em>' + a.zf + '</em></span></a></li><li><a href="javascript:void(0);"><span class="hf"><i class="iconfont">&#xe676;</i><em>' + a.comments.length + '</em></span></a><span class="arrow-t" style="display: none;"></span></li><li><a href=""><span class="like"><i class="iconfont">&#xe624;</i><em>' + a.dz + '</em></span></a></li></ul>';

		            commentHead += '<div class="comment"><div class="cont"><div class="commentbox"><div class="tx left"><a href="mypage.html?'+ a.user.userId +'"><img src="' + a.user.txUrl + '"></a></div><div class="rct"><div class="art-replay"><div class="comt-edit bottom10"><textarea class="cot-input"></textarea><span style="display:none;" class="cot-input-count">1000</span></div><div class="comt-subm clear"><div class="zf left"><input type="checkbox" name="zf" id="zf"><label for="zf" class="f12">同时转发到我的主页</label></div><div class="submit comt-submit right"><a href="">评论</a></div></div></div><div class="comtcont">';

		            $.each(a.comments,function(b,c){
                        //alert(b+c);
                        commentLsit += '<div class="comt-art"><div class="tx left"><a href="mypage.html?'+ c.userId +'"><img class="img-auto" src="' + c.txUrl + '"></a></div><div class="rct"><div class="comt-word"><a href="mypage.html?'+ c.userId +'" class="u-name cslink">'+ c.userName +'</a>'+ c.comtxt +'</div><div class="comt-info clear"><div class="comt-time left f12">' + c.data +' '+ c.time + '</div><div class="comt-act right"><a href="javascript:void(0);" class="jubao">举报</a><a href="javascript:void(0);" class="reply">回复</a><a href="javascript:void(0);" class="like"><i class="iconfont"></i>12</a></div></div><!--回复框--><div class="comt-replay"><span class="arrow-t"></span><div class="comt-edit bottom10"><textarea class="cot-input"></textarea><span style="display:none;" class="cot-input-count">1000</span></div><div class="comt-subm clear"><div class="zf left"><input type="checkbox" name="zf" id="zf"><label for="zf" class="f12">同时转发到我的主页</label></div><div class="replay-submit submit right"><a href="">评论</a></div></div></div></div></div>';
                        
		            })

		            botmNavEnd += '</div></div></div>';

		            var ending = '</div></div></div>';

		            var ztbox = head + box + botmNav + commentHead + commentLsit +botmNavEnd +ending;

		            $(".maincontent-right").append(ztbox);
		            //alert(box);
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
				 $.extend({ 
					a:function(){ 
					    var $b = $(".hover-userbox"); 
					    $b.hide();
				    } 
			    }); 
			    var t;
				$(".u-tit .u-name").mouseover(function(){
					clearTimeout(t);
					$(this).siblings(".hover-userbox").css("display","block");
				})
				$(".u-tit .u-name").mouseout(function(){		                                                                                              
					t = setTimeout("$.a()",1500);
				});
				$(".hover-userbox").mouseenter(function(){
					 clearTimeout(t);
				})
				$(".hover-userbox").mouseleave(function(){
					clearTimeout(t);
			        setTimeout("$.a()",1500);
				})
            
           //$("body").append("<script src="js/d/index.js"></d/script>");
            //$("body").append("<script src="js/d/hover-userbox.js"></d/script>");
        })
})
	// userbanner处显示更多内容
	$(".sns-more").mouseover(function(){
		$(this).css('background','#5C606A');
		$(".more-operation").slideDown(200);
	});
	$(".sns-more").mouseleave(function(){
		$(this).css('background','#656A74');
		$(".more-operation").hide();
	});