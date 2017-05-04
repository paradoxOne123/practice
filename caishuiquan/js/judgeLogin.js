
//进入个人中心
$(".gotoUserCenter").click(function(){
	event.preventDefault();

	var isNeedLogin = needLogin();
	alert(isNeedLogin);
	// if(isNeedLogin == 1){
	// 	window.location.href = "login.html";
	// }else{
        window.location.href = "userInformation.html?userId="+isNeedLogin.userId;
	//}
})

//验证用户是否已登录
function needLogin(){
    // if(window.localStorage){

    //     if(window.localStorage.getItem('phone')!== ""&&null){

	    var phone = $.parseJSON(window.localStorage.getItem('phone'));
	   //      uname = $.parseJSON(window.localStorage.getItem('userName')),
	   //      pwd = $.parseJSON(window.localStorage.getItem('password'));

    //             $.ajax({
    //         	timeout:30000,
    //         	url:'',
    //         	type:"get",
    //         	dataType:'json',
    //         	data:{
    //         	    'phone':phone,
    //         	    'pwd':pwd
    //         	},
    //         	success:function(data){
    //         	    if(data.code == '200'){
	   //          		if(data.isNeedLogin == "1"){
	   //          		    window.localStorage.removeItem('phone');
	   //                          return 1;
	   //          		}else{
	   	                    var data = {"userId":"021","userName":"刘乐乐","phone":phone};
	            			return data;
	   //          		}
    //         	    }
    //         	    return false;
    //         	},
    //         	error:function(){
    //         	    return false;
    //         	}

    //         })
	   //  }
    // }
} 	