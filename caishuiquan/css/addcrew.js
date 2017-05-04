$(document).ready(function(){
    // 检测身份证号和职称注册号是否唯一
$("#idNum").blur(function(){
    var idNum = $("#idNum").val();
    var _data = {
        "code": "200",
        "msg": "成功",
        "data": idNum
    }
    $.ajax({
        type: "GET",
        url: "some.php",
        data: _data,
        success: function(data) {
            $("#idNum").parent().append('<span style="position:absolute;top:0;right:200px;font-size:12px;line-height:17px;color:orange;">'+data.msg+'</span>')          
        },
        statusCode: {404: function(){
            console.log($(this))
            // alert("没网")            
        }
        }
    })
});
$("#licenceNum").blur(function(){
    var licenceNum = $("#licence").val();
    var _data = {
        "code": "200",
        "msg": "成功",
        "data": licenceNum
    }
    $.ajax({
        type: "GET",
        url: "some.php",
        data: _data,
        success: function(data) {
            $("#licenceNum").append('<span style="position:absolute;top:0;right:200px;font-size:12px;line-height:17px;color:orange;">'+data.msg+'</span>')          
        },
        statusCode: {404: function(){
            // alert("没网")            
        }
        }
    })
});
    // 提交信息
$("#submit").click(function(){
    if($("form>input:text:eq(0)").val().length!=0&&$("form>input:text:eq(1)").val().length!=0&&$("form>input:text:eq(2)").val().length!=0&&$("form>input:text:eq(3)").val().length!=0&&$("form>input:text:eq(4)").val().length!=0&&$("form textarea").val().length!=0){
        var formvalue = $("input,select,textarea").serializeArray();
        var searchcrew = {
            "code": "200",
            "msg": "成功",
            "data": "searchcrew",
            "formvalue": formvalue
        }
        $.ajax({
            type: "GET",
            url: "some.php",
            data: searchcrew,
            success: function() {
                $(".content-right").replaceWith('<h2 style="text-align:center;padding-top:30px;">我们会在2-3个工作日内审核您的资料，请耐心等候。</h2>')
            },
            statusCode: {404: function(){
                $(".content-right").replaceWith('<h2 style="text-align:center;padding-top:30px;">网络连接失败。</h2>')
            }}
        })
    }else{
        alert("所有信息未必填项，请填写完整")
    }

});
$('#as').diyUpload({
    url:'server/fileupload.php',
    success:function( data ) {
        console.info( data );
    },
    error:function( err ) {
        console.info( err );    
    },
    buttonText : '请上传文件',
    chunked:true,
    // 分片大小
    chunkSize:512 * 1024,
    //最大上传的文件数量, 总文件大小,单个文件大小(单位字节);
    fileNumLimit:50,
    fileSizeLimit:500000 * 1024,
    fileSingleSizeLimit:50000 * 1024,
    accept: {}
});
})
