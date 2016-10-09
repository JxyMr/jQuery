// 表单二提交
$(".form2 input[type=\"button\"]").click(function(){
	$("form").submit();
})
// 表单三提交
$(".form3 input[type=\"button\"]").click(function () {
	$.ajax({
		type : "post",
		url : "http://www.ikindness.cn/api/test/post",
		data : {
			input : $(".input").val(),
			test : $(".test").val()
		},
		success : function (data) {
			console.log(data);
		}
	})
})
// 表单四提交
$(".form4 input[type=\"button\"]").click(function () {
	$.ajax({
		/*同之前原生ajax方法封装中的queryString方法*/
		/*jq包装后的表单对象serializeArray方法，同之前原生ajax方法封装中的queryString方法*/
		url : "http://www.ikindness.cn/api/test/get?"+$(".form4").serialize(),
		success : function (data) {
			console.log(data);
		}
	})
})


$(".reset").click(function () {
	for(var i=0;i<$("form").length;i++){
		$("form")[i].reset();
	}
	
})

$(".submit").click(function () {
	for(var i=0;i<$("form").length;i++){
		$("form")[i].submit();
	}
	
})
