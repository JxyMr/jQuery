//同querySelectorAll
console.log($(".l.a"));

//选择方法
//eq方法
console.log($(".l").eq(0)[0]);
console.log($(".l:eq(3)").eq(0).eq(0));
//链式调用
function People () {
	this.walk =function(){
		console.log('walk');
		return this;
	};
	this.run =function(){
		console.log('run');
		return this;
	}
	this.laugh=function(){
		console.log('laugh');
		return this;
	}
}
var jack = new People;
jack.run().walk().laugh();


//find方法，查找子级
console.log("------------------------------")
console.log($("body").find());
console.log($("body").find(".a").find("span"));
//children方法，查找直接子级
console.log("------------------------------")
console.log($("body").children());
console.log($("body").children("ul"));
//siblings方法,查找兄弟
console.log("------------------------------")
console.log($("body").siblings())
console.log($("body").siblings("li"))
//prev方法，查找前一个兄弟标签
console.log($(".b").prev());
//prevAll方法，查找前面的所有兄弟标签
console.log($(".c").prevAll());
//next方法， 查找后一个兄弟标签
console.log($(".c").next());
//nextAll方法，查找前面的所有兄弟标签
console.log($(".c").nextAll());
//parent方法
console.log($(".b").parent());

$(".a").click(function() {
    $(this).css({
      width: function(index, value) {
        return parseFloat(value) * 1.2;
      }, 
      height: function(index, value) {
        return parseFloat(value) * 1.2;
      }
    });
});