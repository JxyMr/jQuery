//html方法，类似innerHTML
//获取
console.log($("body").html());
//设置
$("body").html("<p>2333<a>666</a></p>");

//text方法，类似innerText
//获取
console.log($("body").text());
//设置
$("body").text("<p>66632222</p>");

//append方法,向子级的最后添加文本或字符串创建的标签或dom对象
$("body").append("&lt;a&gt;哈哈&lt;/a&gt;").append("<a>哈哈</a>").append(document.createElement("p"));

//appendTo方法，append方法的被动形式
$("<b>666</b>").appendTo("body"/*选择器*/);

//prepend方法,向子级的最前添加文本或标签
$("body").prepend("<cf>233</cf>").prepend("&lt;cf&gt;哈哈&lt;/cf&gt;");

//prependTo方法，prependTo方法的被动形式
$("<cf>666</cf>").prependTo("html > body");

//after,为被选中的每一个标签后添加一个标签或文本
$("cf").after("after");

//before,为被选中的每一个标签前添加一个标签或文本
$("cf").before("before");

//如果第二个参数传入整个jq选择器，则会剪切这个标签，黏贴到每个目标标签中
//所有的jq对dom操作的方法都有此特性
$("cf").append($("b"));
$("a").append($("cf"));
$("cf").appendTo($("body"));

//wrap方法
$("P").wrap("<div></div>")
$("P").wrap($("a"))

//clone方法
$("body").append($("ul").clone());

//remove方法, 删除标签内部及自身
$("a b").remove();

//empty方法，清空标签内部的所有标签
$("body").empty();




