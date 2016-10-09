setTimeout(function(){
	console.clear();
	console.info("第一题");
	console.log($(".logo"));
	console.log($(".logoPart").children(".logo"));
	console.log($(".search").siblings("a.logo"));
	console.info("第二题");
	var $b = $(".subNav .section h2 b"),
		bLen = $b.length,
		i = 0,
		arrTitles = [];
	while(i < bLen){
		arrTitles.push($b.eq(i++).attr("title"));
	}
	console.log(arrTitles);
	console.info("第三题");
	var arrImgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
		j = 0;
	setTimeout(function(){
		var $a = $(".banner a"),
		aLen = $a.length;
		while(j < aLen){
			$a.eq(j++).css({
				"background-image" : "url(" + arrImgs[parseInt(Math.random() * aLen)] + ")",
				"background-repeat" : "no-repeat",
				"background-position" : "center"
			});
		}
	}, 200);
	console.info("第四题");
	var $case = $(".gallary .case"),
		caseLen = $case.length,
		k = 0;
	while(k < caseLen){
		$(".gallary .w1200")[0].appendChild($case[caseLen - k - 1]);
	}
	var newSize = parseInt($case.css("width")) * 2.5 + "px";
	$(".gallary .case").css({
		width : newSize,
		height : newSize
	}).find(".detail").css("top", newSize);
	console.info("第五题");
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
}, 200);