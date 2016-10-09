window.onload=function(){
	// 1
	console.clear();
	console.info("第一题")
	console.log($(".logo").eq(0));
	console.log($(".logo"));
	console.log($(".logo:eq(0)"));

	// 2
	console.info("第二题");
	var ab=$(".subNav .section h2").find("b"),
		len=ab.length,
		i=0,
		arr=[];
		while (i<len) {
			arr[i]=ab.eq(i).attr("title");
			i++;
		}
	console.log(arr);
	//3
	console.info("第三题")
		var arrSet=["./image/1.jpg","./image/2.jpg","./image/3.jpg","./image/4.jpg","./image/5.jpg","./image/6.jpg"];
		var t=setTimeout(function(){
			clearTimeout(t);
			var banner=$(".banner.tab").find('a');
			var bannerLen=banner.length;
			for(var i=0;i<bannerLen;i++){
			   	var index= Math.floor(Math.random()*arrSet.length);
			  	banner.eq(i).css("background-image","url("+arrSet[index]+")");
			}
		},200)

	// 4
	console.info("第四题")
	var ele=$(".gallary .w1200 a");	
	ele.css({"width":"570px","height":"570px"});
	ele.find(".detail").css("top","570px")
	var length=$(".gallary .w1200 a").length;
	for(var i=0;i<length;i++){
		$(".gallary .w1200").append(ele.eq(length-1-i));
	}
	// 5
	console.log("第五题")
	function setOrigin(){
		return $body.css({
			"transform-origin" : innerWidth / 2 + "px " + (scrollY + innerHeight / 2) + "px"
		});
	}
	var $body = $("body");
	window.onclick = function(){
		setOrigin().toggleClass("rotate");
	};
	window.onresize = window.onscroll = function(){
		setOrigin();
	};
}
/*function th(a){
	var arra=[];
	for(var j=0;j<leng;j++){	
		arra[j]=ele.eq(j).attr(a);
	}
	for(var x=0;x<leng;x++){
		ele.eq(x).attr(a,arra[leng-x-1])
	}
}
th("style");
th("title");
th("href");*/
