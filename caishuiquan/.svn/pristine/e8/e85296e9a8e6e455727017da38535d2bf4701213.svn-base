$(document).ready(function () {
	var crewlist = {
		"code": "200",
		"msg": "成功",
		"data": "crewlist"
	}
	$.get("data/crewlist.json",crewlist,function(data){
		$.each(data.crewlist,function(k,v){
			var _html='';
			_html += '<tr class="clearfix"><td>'+v.licenceId+'</td><td><a href="addcrew.html?licenceId='+v.licenceId+'">'+v.name+'</a></td><td>'+v.level+'</td><td>'+v.describe+'</td><td>'+v.status+'</td><td><a href="task.html?taskId='+v.licenceId+'">查看</a></td></tr>';
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

