$(document).ready(function () {
	var tasklist = {
		"code": "200",
		"msg": "成功",
		"data": "tasklist"
	}
	$.get("data/taskList.json",tasklist,function(data){
		$.each(data.taskList,function(k,v){
			var _html='';
			_html += '<tr class="clearfix"><td>'+v.taskId+'</td><td><a href="task.html?taskId='+v.taskId+'">'+v.taskName+'</a></td><td>'+v.budget+'</td><td>'+v.date+'</td><td>'+v.taskStatus+'</td><td><a href="task.html?taskId='+v.taskId+'">查看</a></td></tr>';
			$("tbody").append(_html);
		})
	});
	$(".page-control").find("a").click(function(){
		$(this).parent().find("a").removeClass("active");
		$(this).addClass("active");
	});
	$(".side-nav-klass").click(function(){
		$(this).parent().find("ul").hide();
		$(this).parent().find(".side-nav-klass").removeClass("active");
		$(this).find("ul").slideDown(200);
		$(this).addClass("active");
	});
});

