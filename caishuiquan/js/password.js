$(document).ready(function () {
	$(".login-password").find(".submit").click(function(){
		var $former = $(".login-password").find(".former-password").val();
		var $password = $(".login-password").find(".new-password").val();
		var $confirm = $(".login-password").find(".confirm-password").val();
		if ($password == $confirm && $password!=="" && $former!=="") {
			$(".login-password").replaceWith("<div class='login-password'><p style='font-size: 20px;text-align:center;color:#07EF05;margin-top: 20px;'>更改密码成功</p></div>");
		} else if ($former==!"" && $password !== $confirm) {
			$(".login-password").find(".error-danger").remove();
			$(".login-password").find(".confirm-password").parent().append("<span class='error-danger' style='display:inline-block;margin-top:10px;font-size:14px;padding:5px 10px;border-radius:5px;color:#fff;background:red;'>请确认新密码两次输入一致</span>")
		} else if ($former=="" && $password !== $confirm) {
			$(".login-password").find(".error-danger").remove();
			$(".login-password").find(".former-password").parent().append("<span class='error-danger' style='display:inline-block;margin-top:10px;font-size:14px;padding:5px 10px;border-radius:5px;color:#fff;background:red;'>请输入当前密码</span>");
			$(".login-password").find(".confirm-password").parent().append("<span class='error-danger' style='display:inline-block;margin-top:10px;font-size:14px;padding:5px 10px;border-radius:5px;color:#fff;background:red;'>请确认新密码两次输入一致</span>")
		} else if ($former=="" && $password == $confirm) {
			$(".login-password").find(".error-danger").remove();
			$(".login-password").find(".former-password").parent().append("<span class='error-danger' style='display:inline-block;margin-top:10px;font-size:14px;padding:5px 10px;border-radius:5px;color:#fff;background:red;'>请输入当前密码</span>")
		} else if ( $password == "") {
			$(".login-password").find(".error-danger").remove();
			$(".login-password").find(".new-password").parent().append("<span class='error-danger' style='display:inline-block;margin-top:10px;font-size:14px;padding:5px 10px;border-radius:5px;color:#fff;background:red;'>请输入新密码</span>")
		} else if ($former!=="" && $password !== $confirm) {
			$(".login-password").find(".error-danger").remove();
			$(".login-password").find(".confirm-password").parent().append("<span class='error-danger' style='display:inline-block;margin-top:10px;font-size:14px;padding:5px 10px;border-radius:5px;color:#fff;background:red;'>请确认新密码两次输入一致</span>")
		}
	});
	$(".pay-password").find(".submit").click(function(){
		var $former = $(".pay-password").find(".former-password").val();
		var $password = $(".pay-password").find(".new-password").val();
		var $confirm = $(".pay-password").find(".confirm-password").val();
		if ($password == $confirm && $password!=="" && $former!=="") {
			$(".pay-password").replaceWith("<div class='pay-password' style='display:block;'><p style='font-size: 20px;text-align:center;color:#07EF05;margin-top: 20px;'>更改密码成功</p></div>");
		} else if ($former==!"" && $password !== $confirm) {
			$(".pay-password").find(".error-danger").remove();
			$(".pay-password").find(".confirm-password").parent().append("<span class='error-danger' style='display:inline-block;margin-top:10px;font-size:14px;padding:5px 10px;border-radius:5px;color:#fff;background:red;'>请确认新密码两次输入一致</span>")
		} else if ($former=="" && $password !== $confirm) {
			$(".pay-password").find(".error-danger").remove();
			$(".pay-password").find(".former-password").parent().append("<span class='error-danger' style='display:inline-block;margin-top:10px;font-size:14px;padding:5px 10px;border-radius:5px;color:#fff;background:red;'>请输入当前密码</span>");
			$(".pay-password").find(".confirm-password").parent().append("<span class='error-danger' style='display:inline-block;margin-top:10px;font-size:14px;padding:5px 10px;border-radius:5px;color:#fff;background:red;'>请确认新密码两次输入一致</span>")
		} else if ($former=="" && $password == $confirm) {
			$(".pay-password").find(".error-danger").remove();
			$(".pay-password").find(".former-password").parent().append("<span class='error-danger' style='display:inline-block;margin-top:10px;font-size:14px;padding:5px 10px;border-radius:5px;color:#fff;background:red;'>请输入当前密码</span>")
		} else if ( $password == "") {
			$(".pay-password").find(".error-danger").remove();
			$(".pay-password").find(".new-password").parent().append("<span class='error-danger' style='display:inline-block;margin-top:10px;font-size:14px;padding:5px 10px;border-radius:5px;color:#fff;background:red;'>请输入新密码</span>")
		} else if ($former!=="" && $password !== $confirm) {
			$(".pay-password").find(".error-danger").remove();
			$(".pay-password").find(".confirm-password").parent().append("<span class='error-danger' style='display:inline-block;margin-top:10px;font-size:14px;padding:5px 10px;border-radius:5px;color:#fff;background:red;'>请确认新密码两次输入一致</span>")
		}
	});
})