window.onload=function(){
        var video=$('.free-video').attr("video");
        var json={
             "code":200,
             "msg":"成功",
             "data":"json",
             "video":video
         };
         $.get("data/trainning.json",json,function(data){
             var fv=data.free_video;
             var video_box="";
             $.each(fv,function(index,a){
                 var video="";
                 var text="";
                 video_box='<div class="video-box"><a style="background-image:url('+a.bgi+')" href="lessonDetail.html?lessonId='+a.lessonId+'"><img src="'+a.play+'"></a><a href="'+a.href+'">'+a.pro+'</a><p><img src="images/eye.png"><span>'+a.watch+'</span>&nbsp;&nbsp;&nbsp;&nbsp;<img src="images/thumbup.png"><span>'+a.laud+'</span></p></div>';
                 $('.free-video').append(video_box);
             });      
         });
         $.get("data/work.json",json,function(data){
             var wk=data.work;
             $.each(wk,function(index,a){
                var lesson="";
                lesson='<div><a href="#"><img src="'+a.bgi+'"><p>'+a.class_pro+'</p><span>'+a.allclass+'</span></a><div><h4>'+a.mannerge+'</h4><p>'+a.product+'</p></div></div>'
                $('.lesson-pack').append(lesson); 
            })
         });
         $.get("data/teacher.json",json,function(data){
             var th=data.teacher;
             $.each(th,function(index,a){
                 var teacher_pro='';
                 var teacher_lesson='';
                 teacher_pro='<div class="'+a.status+'"><img src="'+a.teacher_img+'"><div><h4>讲师：'+a.teacher_name+'</h4><p>'+a.teacher_pro+'</p></div></div>';
                 $('.teacher-left').append(teacher_pro); 
                 teacher_lesson='<div class="lesson '+a.status+'"><img src="'+a.lesson_img+'"><div><h3>'+a.lesson_pro+'</h3><p>'+a.lesson_study+'</p><a href="'+a.lesson_href+'">查看详情</a><span>总时长'+a.lesson_time+'小时</span></div></div>';
                 $('.teacher-right').append(teacher_lesson);
                 $(".teacher-left").children("div:first").mouseover(function(){
	                 $(".teacher-left").children("div").removeClass("active");
		             $(this).addClass("active");
		             $(".teacher-right").children("div").removeClass("active");
		             $(".teacher-right").children("div:first").addClass("active");
	             });
	             $(".teacher-left").children("div:eq(1)").mouseover(function(){
		             $(".teacher-left").children("div").removeClass("active");
		             $(this).addClass("active");
		             $(".teacher-right").children("div").removeClass("active");
		             $(".teacher-right").children("div:eq(1)").addClass("active");
	            });
	            $(".teacher-left").children("div:eq(2)").mouseover(function(){
		             $(".teacher-left").children("div").removeClass("active");
		             $(this).addClass("active");
		             $(".teacher-right").children("div").removeClass("active");
		             $(".teacher-right").children("div:eq(2)").addClass("active");
	            });
             })
         });
}