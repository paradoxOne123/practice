window.onload=function(){
    $('.user_pic').append('<div class="user-tx"><img class="userr"/></div><h3></h3><p></p>');
    $('.flw >a').append('<span class="follow"></span>');
    $('.grp >a').append('<span class="group"></span>');
    $('.fans >a').append('<span class="fan_s"></span>');
    $('.bl >a').append('<span class="black_list"></span>');
    var json={
        "code":'200',
        'msg':'成功',
        'data':'json'
    };
    $.get("data/content.json",json,function(data){
        $('.userr')[0].src=data.usermsg.userpic;
        $('.user_pic>h3').html(data.usermsg.username);
        $('.user_pic>p').html(data.usermsg.userpro);
        $('.user_pic>h3>img')[0].src=data.usermsg.usersex;
        $('.follow').html(data.fanslist.follow);
        $('.group').html(data.fanslist.group);
        $('.fan_s').html(data.fanslist.fans);
        $('.black_list').html(data.fanslist.black_list);
    });
    $('.blacktips>a').append('<b></b>');
    $.get("data/blacklist.json",json,function(data){
        $('.title_nav>a>b').html(data.blacklist[0].list.people);
        var  bl=data.blacklist[1].blackpeople;
        $.each(bl,function(index,a){
            var userpic='';
            var usermsg='';
            var box='';
            userpic+='<div class="blacklist_content"><div class="pic"><img src="'+a.userpic+'"/></div>';
            usermsg+='<div class="msg"><p><span>'+a.username+'  </span><img class="reg" src="'+a.userreg+'"/><img class="sex"src="'+a.usersex+'"/></p><p>屏蔽时间：<i>'+a.date+'</i></p><p><button class="btn">移除黑名单</button></p></div></div>';
            box+=userpic+usermsg;
            $('.blacklist').append(box);
            $('.btn').click(function(){
                $('.modal').css('display','block');
            });
            $('.close,.btn2,.btn1').click(function(){
                 $('.modal').css('display','none');
            });
        })
    });
    $.get('data/follow.json',json,function(data){
        $('.title_nav>a>i').html(data.followlist[0].people)
        var fol=data.followlist[1].peoplelist;
        $.each(fol,function(index,a){
            var userpic='';
            var userpro='';
            var box='';
            userpic+='<div class="friend_pro"><img src="'+a.userpic+'">';
            userpro+='<div><p><span>'+a.username+'</span> <img src="'+a.userreg+'"> <img src="'+a.usersex+'"></p><p>关注 <a href=""> '+a.userfollow+' </a> | 粉丝 <a href=""> '+a.userfans+' </a> | 消息 <a href=""> '+a.usermsg+' </a></p><p>'+a.usercity+'</p><p><i>'+a.usercompany+'</i></p><p>通过<a href="">'+a.userway+'</a>关注</p></div></div>';
            box+=userpic+userpro;
            $('.fans_list').append(box);
        });
    });
     $.get('data/fans.json',json,function(data){
        $('.flo>a>i').html(data.fanslist[0].people)
        var da=data.fanslist[1].peoplelist1;
        $.each(da,function(index,a){
            var userpic1='';
            var userpro1='';
            var box1='';
            userpic1+='<div class="friend_pro"><img src="'+a.userpic+'">';
            userpro1+='<div><p><span>'+a.username+'</span> <img src="'+a.userreg+'"> <img src="'+a.usersex+'"></p><p>关注 <a href=""> '+a.userfollow+' </a> | 粉丝 <a href=""> '+a.userfans+' </a> | 消息 <a href=""> '+a.usermsg+' </a></p><p>'+a.usercity+'</p><p><i>'+a.usercompany+'</i></p><p>通过<a href="">'+a.userway+'</a>关注</p></div></div>';
            box1+=userpic1+userpro1;
            $('.flo_list').append(box1);
        });
    });
}