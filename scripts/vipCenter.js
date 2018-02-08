$(function  () {
	$("#vipTabTag li").click(function () {
		$(this).addClass("current").siblings().removeClass("current");
	})
	//vip的轮播
	$("#vipBannerPlay").tyslide({
		boxh:480,//盒子的高度
		w:732,//盒子的宽度
		h:474,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:20,//控制按钮高度
		radius:10,//控制按钮圆角度数
		controlsColor:"#D8D8D8",//普通控制按钮的颜色
		controlsCurrentColor:"#FF6600",//当前控制按钮的颜色
		isNumber:true				//显示数字
	});
	
	//vip 2楼层增加鼠标移动的属性
	$("#exchangeTicket .exTicketContents .content").hover(function () {
		$(this).find(".vipAddToCart").stop(true,true).slideDown(200);
	},function () {
		$(this).find(".vipAddToCart").stop(true,true).slideUp(200);
	});
	$(".vipAddToCartBtn").click(function () {
		alert("加入购物车--成功!");
	});
});