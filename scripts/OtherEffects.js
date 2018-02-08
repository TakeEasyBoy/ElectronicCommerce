$(function  () {
	//移入和移出的样式
	$("#layerScroll li").hover(function () {
		//移入变宽
		$(this).delay(500).stop(true,true).animate({"width":"40"},100);
		//背景色改变
		var colorArray=["#44aeb8","#93d56f","#f55826","#ba9eee","#fe7594","#c2ed50","#c2341c","#93d56f"];
		$(this).css("background-color",colorArray[$(this).index()]);
		
		//改变图标的定位
		$(this).css("background-position-x","-40px");
	},function () {
		//移走恢复
		$(this).delay(500).stop(true,true).animate({"width":"0"},100);
		$(this).css("background-color","#F2F2F2");
		$(this).css("background-position-x","0px");
	});
	
	//返回顶部
	$("#layerScroll li:last").click(function () {
		$("html,body").delay(500).stop(true,true).animate({"scrollTop":0},500);
	});
	
	$("#layerScroll li:not(:last)").click(function () {
		var index=$(this).index();
		
		var topValue=$(".floor").eq(index).offset().top;
//		console.log(index,topValue);
		$("html,body").delay(500).stop(true,true).animate({"scrollTop":topValue},300);
	});
	
	//当滚动条有一定距离才显示
	$(window).scroll(function () {
		var topValue=$(document).scrollTop();
		if(topValue>300)
		{
			//显示楼层图标
			$("#layerScroll").delay(500).stop(true,true).fadeIn();
			//显示隐藏的顶部搜索按钮
			$("#topFixSearch").delay(100).stop(true,true).slideDown();
			//将搜索框直接扔到newSearch中,避免定义两个ID
			$("#newSearch").append($("#search"));
		}
		else
		{
			$("#layerScroll").delay(500).stop(true,true).fadeOut();
			//隐藏顶部搜索框
			$("#topFixSearch").delay(100).stop(true,true).slideUp();
			//将搜索框添加回去
			$("#shopCart").after($("#search"));
		}
	});
	//搜索框的焦点事件
	$("#keywords").focus(function () {
		
		$(this).prop("placeholder","");
		
	})
	$("#keywords").blur(function () {
		$(this).prop("placeholder","创意文具");
	})
	
//	首页
	//优惠券和二维码
	$("#QrCode").hover(function () {
		$("#QrCodeICON").stop(true,true).animate({"left":"-100px","opacity":"1"});
	},function () {
		$("#QrCodeICON").stop(true,true).animate({"left":"39px","opacity":"0.3"});
	});
	
	$("#loginTitle li").click(function () {
		var index = $(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		if (index == 0) {
			$("#qrcodeContent").show();
			$("#pcContent").hide();
		} else{
			$("#pcContent").show();
			$("#qrcodeContent").hide()
		}
	});
	//登录页面的代码
	//二维码的效果
	$("#qrCodeDetaile").hover(function () {
		//首先将二维码往左移动,
		$(this).stop(true,false).animate({"left":"0"},300,function () {
			$("#phone").stop(true,false).fadeIn(200);
		});
		//然后经过延时将电话图片搞出来
	},function () {
		//
		$("#phone").stop(true,false).fadeOut(100,function () {
			$("#qrCodeDetaile").stop(true,false).animate({"left":"74px"},500);
		});
	});
	
	//注册点击x的事件,点击后自身消失,清除输入框的内容
	$("#delICON").click(function () {
		$("#userName").prop("value","");
		$("#userName").prop("placeholder","会员名/邮箱/手机");
		$(this).hide();
	});
	//电脑登录的输入框,绑定三个事件,获取焦点,失去焦点以及按键抬起事件
	$("#userName").bind().focus(function () {
		$(this).prop("placeholder","");
	}).bind().blur(function () {
		if($(this).prop("value") == ""){
			$(this).prop("placeholder","会员名/邮箱/手机");
		}else{
			$(this).prop("placeholder","");
		}
	}).bind().keyup(function () {
//		console.log($(this).prop("value").length);
		if($(this).prop("value").length >= 0){
			$("#delICON").show();
		}
	});
	//用户提交表单的简单验证及提醒
	$("#userInform").submit(function  () {
		if($("#userName").prop("value") == ""){
			alert("兄弟,登录的时候能不能走点心,输入用户名撒");
			return false;
		}
		if($("#passWord").prop("value") == ""){
			alert("兄弟,不输入密码你就登录上去了算我输!");
			return false;
		}
	});
	//登录页面结束
	//结算中心开始
	//猜你喜欢添加鼠标移入背景
	$("#wouldLike .borderleft .content").hover(function () {
		$(this).addClass("bgF2F2F2").siblings().removeClass("bgF2F2F2");
	},function  () {
		$(this).removeClass("bgF2F2F2");
	});

});
