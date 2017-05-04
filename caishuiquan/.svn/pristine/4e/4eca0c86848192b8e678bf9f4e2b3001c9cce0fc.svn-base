 var args ={
	"code":'200',
	"msg":"success",
	"data":'personal',
	rmd:Math.random()    	
}

$.get("data/reht.json",args,function(data){
   
    var _html = '';
    var ht = data.htlist;

    $.each(ht,function(index,a){
        alert(a.htTit);
    	_html +='<li><a href="">'+ a.htTit +'</a><span class="horderg">'+ a.readCount +'</span></li>';
    })
   
   $(".right-cont .hot-cont .hot-list ul").append(_html);

})