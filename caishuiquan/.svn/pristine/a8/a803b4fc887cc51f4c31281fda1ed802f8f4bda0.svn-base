$(function(){
    var args = {
        "code": "200",
        "msg": "成功",
        "data": "args"
    }
    $.get("data/taskCenter.json",args,function(data){
        $.each(data.postedTask,function(ky,vl){
            var _task='',_title='',_name='',_budget='',_check='',_deadline='',_thumbnail='';
            _task = '<div class="posted-task"><a href="task.html?'+vl.taskId;
            _title = '" class="task-title">'+vl.title;
            _name = '</a><span class="task-poster">'+vl.username;
            _budget = '</span><span class="task-sumup">￥'+vl.budgetBtm+'~￥'+vl.budgetTop;
            _check = '</span><span class="task-check">'+vl.checknum+'/'+vl.applynum;
            _deadline = '</span><span class="task-status">'+vl.deadline+'截止';
            _thumbnail = '</span><a href="task.html?'+vl.taskId+'" class="task-fetch">我要报价</a><div class="task-thumbnail">'+vl.thumbnail+'</div></div>';
            $(".task-detail").append(_task+_title+_name+_budget+_check+_deadline+_thumbnail);
        });
        $(".pages>span>b").html($(".posted-task").length);
        if($(".posted-task").length>=10) {
            $(".pages>span>i").html("10")
        }else {
            $(".pages>span>i").html($(".posted-task").length)
        }
    })
    
})