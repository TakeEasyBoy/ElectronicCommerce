//配置轮播的参数
$(function () {
	//主banner的轮播参数
	$("#bannerPlay").tyslide({
		boxh:430,//盒子的高度
		w:1000,//盒子的宽度
		h:400,//图片的高度
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
	
	//主菜单隐藏和显示
	$("#mainMenu li").hover(function () {
		//添加点亮效果
		$(this).find(".mainMenuText").addClass("current");
		$(this).find(".subMenu").show();
	},function () {
		$(this).find(".mainMenuText").removeClass("current");
		$(this).find(".subMenu").hide();
	});
	
	//电子书部分的轮播参数,由于需要三个页签,所以需要设置三个不同的ID
	$("#ebookBanner").tyslide({
		boxh:220 ,//盒子的高度
		w:330,//盒子的宽度
		h:216,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:14,//控制按钮宽度
		controlsH:2,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"white",//普通控制按钮的颜色
		controlsCurrentColor:"#7F7F7F",//当前控制按钮的颜色
		isNumber:false				//显示数字
	});
	$("#ebookBanner2").tyslide({
		boxh:220 ,//盒子的高度
		w:330,//盒子的宽度
		h:216,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:14,//控制按钮宽度
		controlsH:2,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"white",//普通控制按钮的颜色
		controlsCurrentColor:"#7F7F7F",//当前控制按钮的颜色
		isNumber:false				//显示数字
	});
	$("#ebookBanner3").tyslide({
		boxh:220 ,//盒子的高度
		w:330,//盒子的宽度
		h:216,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:14,//控制按钮宽度
		controlsH:2,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"white",//普通控制按钮的颜色
		controlsCurrentColor:"#7F7F7F",//当前控制按钮的颜色
		isNumber:false				//显示数字
	});
	//电子书效果
	$("#ebook .ebookright ul li").hover(function () {
		//移入的时候需要将当前的图文显示,同时隐藏纯文字
		$("#ebook .ebookright ul li").find(".ebookRightImgText:eq(0)").removeClass("disYes");
		$("#ebook .ebookright ul li").find(".ebookRightImgText:eq(1)").addClass("disYes");
		//设置当前移入的Li的样式,同时移除纯文字的显示
		$(this).find(".ebookRightImgText:eq(0)").addClass("disYes");
		$(this).find(".ebookRightImgText:eq(1)").removeClass("disYes");
	},function () {
		
	});
	//电子书tab切换效果
	$("#ebookLists li").hover(function () {
		//添加滑动菜单的效果
		$(this).addClass("current").siblings().removeClass("current");
		$("#ebookCenters .center").eq($(this).index()).show()
					.siblings().hide();
	},function () {
		
	});
	//推广的tab换页效果
	$("#popularityTab li").click(function () {
		//添加当前样式,同时移除未选中的样式
		var index = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$("#popularityContents").delay(200).stop(true,true).animate({"left":-1200*index},500)		//显示当前页
								
	});
	
	$("#popularityContents .popularityContent").hover(function () {
		$(this).addClass("bgF2F2F2").siblings().removeClass("bgF2F2F2");
	},function () {
		$(this).removeClass("bgF2F2F2");
	});
	//服装部分的轮播参数
	$("#clothingBanner").tyslide({
		boxh:340 ,//盒子的高度
		w:430,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:14,//控制按钮宽度
		controlsH:2,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"white",//普通控制按钮的颜色
		controlsCurrentColor:"#7F7F7F",//当前控制按钮的颜色
		isNumber:false				//显示数字
	});
	$("#clothingBanner1").tyslide({
		boxh:340 ,//盒子的高度
		w:430,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:14,//控制按钮宽度
		controlsH:2,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"white",//普通控制按钮的颜色
		controlsCurrentColor:"#7F7F7F",//当前控制按钮的颜色
		isNumber:false				//显示数字
	});
	$("#clothingBanner2").tyslide({
		boxh:340 ,//盒子的高度
		w:430,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:14,//控制按钮宽度
		controlsH:2,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"white",//普通控制按钮的颜色
		controlsCurrentColor:"#7F7F7F",//当前控制按钮的颜色
		isNumber:false				//显示数字
	});
	//服装切换效果
	$("#clothingLists li").hover(function () {
		$(this).addClass("current").siblings().removeClass("current");
		$("#clothing .clothingCenters").hide().eq($(this).index()).show();
	},function  () {
		
	});
	//户外运动部分的轮播参数
	$("#outdoorsBanner").tyslide({
		boxh:340 ,//盒子的高度
		w:430,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:14,//控制按钮宽度
		controlsH:2,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"white",//普通控制按钮的颜色
		controlsCurrentColor:"#7F7F7F",//当前控制按钮的颜色
		isNumber:false				//显示数字
	});
	//户外运动部分的轮播参数
	$("#outdoorsBanner1").tyslide({
		boxh:340 ,//盒子的高度
		w:430,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:14,//控制按钮宽度
		controlsH:2,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"white",//普通控制按钮的颜色
		controlsCurrentColor:"#7F7F7F",//当前控制按钮的颜色
		isNumber:false				//显示数字
	});
	//户外运动部分的轮播参数
	$("#outdoorsBanner2").tyslide({
		boxh:340 ,//盒子的高度
		w:430,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:14,//控制按钮宽度
		controlsH:2,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"white",//普通控制按钮的颜色
		controlsCurrentColor:"#7F7F7F",//当前控制按钮的颜色
		isNumber:false				//显示数字
	});
	//户外运动滑动切换效果
	$("#outdoorLists li").hover(function () {
		$(this).addClass("current").siblings().removeClass("current");
		$("#outdoors .outdoorCenters").hide().eq($(this).index()).show();
	},function  () {
		
	});
	//童装交互
	$("#childrenBanner").tyslide({
		boxh:340 ,//盒子的高度
		w:430,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:14,//控制按钮宽度
		controlsH:2,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"white",//普通控制按钮的颜色
		controlsCurrentColor:"#7F7F7F",//当前控制按钮的颜色
		isNumber:false				//显示数字
	});
	//童装的轮播1
	$("#childrenBanner1").tyslide({
		boxh:340 ,//盒子的高度
		w:430,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:14,//控制按钮宽度
		controlsH:2,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"white",//普通控制按钮的颜色
		controlsCurrentColor:"#7F7F7F",//当前控制按钮的颜色
		isNumber:false				//显示数字
	});
	//童装的轮播2
	$("#childrenBanner2").tyslide({
		boxh:340 ,//盒子的高度
		w:430,//盒子的宽度
		h:338,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:14,//控制按钮宽度
		controlsH:2,//控制按钮高度
		radius:0,//控制按钮圆角度数
		controlsColor:"white",//普通控制按钮的颜色
		controlsCurrentColor:"#7F7F7F",//当前控制按钮的颜色
		isNumber:false				//显示数字
	});
	//童装运动滑动切换效果
	$("#childrenLists li").hover(function () {
		$(this).addClass("current").siblings().removeClass("current");
		$("#children .childrenCenters").hide().eq($(this).index()).show();
	},function  () {
		
	});
	//童装交互
	//好读书的js交互内容
	//主banner的轮播参数
	$("#bookbannerPlay").tyslide({
		boxh:450,//盒子的高度
		w:1000,//盒子的宽1度
		h:400,//图片的高度
		isShow:true,//是否显示控制器
		isShowBtn:true,//是否显示左右按钮
		controltop:2,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW:20,//控制按钮宽度
		controlsH:20,//控制按钮高度
		radius:10,//控制按钮圆角度数
		controlsColor:"#D8D8D8",//普通控制按钮的颜色
		controlsCurrentColor:"#FF6600",//当前控制按钮的颜色
		isNumber:true				//显示数字
	});
	
	//新书推荐榜交互
	$("#banner .right ul li").hover(function () {
		//移入的时候需要将当前的图文显示,同时隐藏纯文字
		$("#banner .right ul li").find(".hotSales:eq(0)").removeClass("disYes");
		$("#banner .right ul li").find(".hotSales:eq(1)").addClass("disYes");
		//设置当前移入的Li的样式,同时移除纯文字的显示
		$(this).find(".hotSales:eq(0)").addClass("disYes");
		$(this).find(".hotSales:eq(1)").removeClass("disYes");
	},function () {
	});
	
	//主编推荐区域的交互
	//电子书效果
	$("#newBook .ebookright ul li").hover(function () {
		//移入的时候需要将当前的图文显示,同时隐藏纯文字
		$("#newBook .ebookright ul li").find(".ebookRightImgText:eq(0)").removeClass("disYes");
		$("#newBook .ebookright ul li").find(".ebookRightImgText:eq(1)").addClass("disYes");
		//设置当前移入的Li的样式,同时移除纯文字的显示
		$(this).find(".ebookRightImgText:eq(0)").addClass("disYes");
		$(this).find(".ebookRightImgText:eq(1)").removeClass("disYes");
	},function () {
		
	});
});