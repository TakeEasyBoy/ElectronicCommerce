
$(function () {
	//商品详情的放大镜效果
	var showproduct = {
		"boxid":"showbox", //展示图片盒子ID
		"sumid":"showsum", //缩略图盒子ID
		"boxw":360,//宽度,该版本中请把宽高填写成一样
		"boxh":360,//高度,该版本中请把宽高填写成一样
		"sumw":50,//列表每个宽度,该版本中请把宽高填写成一样
		"sumh":50,//列表每个高度,该版本中请把宽高填写成一样
		"sumi":7,//列表间隔
		"sums":5,//列表显示个数
		"sumsel":"sel",
		"sumborder":1,//列表边框，没有边框填写0，边框在css中修改
		"lastid":"showlast", //上一张ID
		"nextid":"shownext"  //下一张ID
	};//参数定义	  
   	$.ljsGlasses.pcGlasses(showproduct);//方法调用，务必在加载完后执行
  	//商品页面选择摸个类型的js操作
	$(".categeCheck p").click(function () {
		$(this).addClass("current").siblings().removeClass("current")	 
	});
	
	//购物车数量增减
	
	$(".addToCart .buyNumCon .minus").click(function () {
		var shopCarNum = $(this).next().find(".buyNumber").prop("value");
		if(shopCarNum > 1){
			$(this).next().find(".buyNumber").prop("value",--shopCarNum);
		}
	})
   	$(".addToCart .buyNumCon .plus").click(function () {
		var shopCarNum = $(this).prev().find(".buyNumber").prop("value");
		if (shopCarNum >= 999) {
			$(this).prev().find(".buyNumber").prop("value",999);
		}else{
			$(this).prev().find(".buyNumber").prop("value",++shopCarNum);
		}
	})
   	//添加人气单品的js特效
   	$("#popSingleProduct .borderleft .content").hover(function () {
   		$(this).addClass("bgF2F2F2").siblings().removeClass("bgF2F2F2");
   	},function  () {
   		$(this).removeClass("bgF2F2F2");
   	});
   	
   	//好中差评价tab切换
   	$("#commentsDetaileTab li").click(function () {
   		$(this).addClass("current").siblings().removeClass("current");
   	});
   	//评价页数跳转 以及样式切换
   	$("#pageTag li").click(function () {
   		$(this).addClass("current").siblings().removeClass("current");
   	});
});
