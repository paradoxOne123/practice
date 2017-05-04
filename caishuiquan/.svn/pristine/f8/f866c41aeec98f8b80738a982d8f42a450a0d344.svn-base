$(function () {

vat lessonId = $.getUrlParma("lessonId");

var lsn = {
	"code": "200",
	"msg": "成功",
	"data": "lsn",
    "lessonId" :lessonId
}
$.get("data/lessonDetail.json",lsn,function(data) {
    $(".lesson-banner>img")[0].src = data.mainInfo.banner;
    $(".lesson-info>h3").html(data.mainInfo.heading);
    $(".lesson-teacher span:eq(0)").html(data.mainInfo.teacher);
    $(".lesson-teacher span:eq(1)").html(data.mainInfo.suitfor);
    $(".lesson-teacher span:eq(2)").html(data.mainInfo.time);
    $(".lesson-teacher span:eq(3)").html(data.mainInfo.signup);
    $(".lesson-rate span span").html(data.mainInfo.ratenum);
    $(".detail-right>div:eq(0)>img")[0].src = data.mainInfo.profilepic;
    $(".detail-right>div:eq(0)>p").html(data.mainInfo.teacher);
    $(".detail-right>div:eq(0)>span").html(data.mainInfo.field);
    $(".detail-right>p").html(data.mainInfo.describe);
    
    $.each(data.lsnDetail,function(ky,vl){
        var tit = '',end = '',para = '';
        tit += '<div><h4>'+vl.title+'</h4>';
        end += '</div>';
        $.each(vl.content,function(ky1,vl1) {
            para += '<p>'+vl1.para+'</p>';
        })
        $(".content-info").append(tit+para+end)
    });
    $.each(data.videos,function(ky,vl){
        var _href = '',_title = '', _time = '';
        _href = '<li><a href="video.html?'+vl.videoId;
        _title = '"class="clear-fix"><div><img src="images/lesson-play.png"><span>'+vl.title;
        _time = '</span></div><div><img src="images/time.png"><span>'+vl.time+'</span></div></li>';
        $(".content-list>ul").append(_href+_title+_time);
    });
    $.each(data.quests,function(ky,vl){
        var _href = '',_pic = '',_name='',_time='',_txt='';
        _href +='<div class="clear-fix"><a href="checkuser?'+vl.userid;
        _pic +='"><img src="'+vl.profilepic;
        _name +='"></a><div><span class="username">'+vl.username;
        _time +='</span><span class="quest-time">'+vl.time;
        _txt +='</span><p class="quest-content">'+vl.txt+'</p></div></div>';
        $(".from-students").append(_href+_pic+_name+_time+_txt);
    });
    $.each(data.othervideos,function(ky,vl) {
        var _href='',_pic='',_heading='',_seenum='';
        _href+='<a href="lessonDetail.html?'+vl.lessonId;
        _pic+='" class="clear-fix"><img src="'+vl.pic;
        _heading+='"><div><p>'+vl.heading;
        _seenum+='</p><img src="images/eye.png" alt=""><span>'+vl.seenum+'</span></div></a>'
        $(".other-lesson").append(_href+_pic+_heading+_seenum);
    })
})
})
