$.fn.extend({
	timerBtn : function (time) {
		var _this=this,
			value=this.val();
		this.click(function(){
			var second=time;
			var t=setInterval(function () {
				if(second==0){
					_this.removeAttr("disabled");
					_this.val("重新发送！");
					clearInterval(t);
				}else{
				_this.val(--second+"秒后重新发送");
				_this.attr("disabled","disabled");
			}
				
			},1000)
		})
	}
});
$("input").timerBtn(20);
