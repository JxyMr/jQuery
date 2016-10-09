$.fn.extend({
	page:function (length) {
			var _this=this;
            for(var i=0;i<length;i++){
            	$("<a href=\"#\" class=\"m\">"+(i+1)+"</a>").appendTo(this.find(".num"));
            }
            $("<a href=\"#\" class=\"n hide left\"><上一页</a>").prependTo(this);
            $("<a href=\"#\" class=\"n right\"><下一页</a>").appendTo(this);	
            var leftBtn=this.find(".left"),
				rightBtn=this.find(".right"),
				btn=this.find(".m");
			$(btn).eq(0).addClass("current");
			btn.click(function () {
				_this.btnClick($(this),$(this).index(),length);
			});
			leftBtn.click(function () {
				var index=_this.find(".current").index();
				_this.btnClick(btn.eq(index-1),index-1,length);
			});
			rightBtn.click(function () {
				var index=_this.find(".current").index();
				_this.btnClick(btn.eq(index+1),index+1,length);
			});
		},
	firstPage:function (ele,length) {
		var leftBtn=this.find(".left"),
			rightBtn=this.find(".right");
		if(ele.index()==0){
			leftBtn.addClass("hide");
		}else if(ele.index()==length-1){
			rightBtn.addClass('hide');
		}else {
			leftBtn.removeClass("hide");
			rightBtn.removeClass('hide');
		}
	},
	current:function(ele){
		ele.addClass("current").siblings("a").removeClass("current");
	},
	moveLeft:function(index,length){
		var btn=this.find(".m"),
			parent=btn.parent(),
			width=btn.width();
		if(index>5&&index<=length-5){
			parent.css("left",-(index-5)*(width+11)+"px");
		}else if(index>length-5){
			parent.css("left",-(length-10)*(width+11)+"px");
		}else{
			parent.css("left","0");
		}
	},
	btnClick:function(ele,index,length){		
		this.moveLeft(index,length);
		this.current(ele);
		this.firstPage(ele,length);		
	}
})
$(".page").page(20);