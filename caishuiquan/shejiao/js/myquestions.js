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
	// 异步加载audio内容
	var wenda = {
		"code": "200",
		"msg": "成功",
		"data": "wenda"
	}
	$.get("data/myquestion.json",wenda,function(data){
		$.each(data.audioblog,function(ky,vl){
			var _question ='',_answer='',_describe='';
			if (vl.anserAudio!="") {
				_answer +='<div class="answer-box clearfix"><p>'+vl.anserName+' | '+vl.anserDes+'</p><a href=mypage.html?userid="'+vl.anserId+'" class="profile-pic"><img src="'+vl.anserImg+'" alt=""></a><div class="clearfix"><div class="arrow"></div><div class="answer-audio"><img src="images/wave.png" alt="" class="wave"><span class="charge-type">免费试听</span><audio src="'+vl.anserAudio+'" class="answer-wave"></audio></div><div class="listen-num"><span class="cost-time"><i>'+vl.audioSec+'</i>"</span><span class="paid-num">'+vl.listenNum+'人偷听</span></div></div></div>';
			}else{
				_answer +='<div class="answer-box clearfix"><p>'+vl.anserName+' | '+vl.anserDes+'</p><a href=mypage.html?userid="'+vl.anserId+'" class="profile-pic"><img src="'+vl.anserImg+'" alt=""></a><div class="clearfix"><p>等待 "'+vl.anserName+'" 回答中…</p></div></div></div>';
			}
			_question += '<div class="question-container"><div class="question-box clearfix"><a href="mypage.html?userid='+vl.quserId+'" class="profile-pic"><img src="'+vl.quserImg+'" alt=""></a><div><p>'+vl.quserTxt+'</p></div></div>';
			_describe +='<a href=mypage.html?userid="'+vl.anserId+'" class="expert-infos clearfix"><div class="clearfix"><img src="'+vl.anserImg+'" alt=""><div><p>'+vl.anserName+'</p><span>已帮助'+vl.helpNum+'人，总收入'+vl.income+'元</span><i class="icon iconfont">&#xe600;</i></div></div><p class="expert-intro">'+vl.anserDes+'</p></a></div>';

			$(".my-questions").append(_question+_answer+_describe);
		});
		// audio播放
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
	})

	// 切换tab
    $(".audio-tab>span").click(function(){
        $(this).parent().find("span").removeClass("active");
        $(this).addClass("active");
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