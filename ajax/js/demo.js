$.ajax({
	url:"http://www.ikindness.cn/api/test/get?len=1",
	dataType:"json",
	type:"get",
	data:"",
	success:function (data) {
		console.log(data)
	}
})