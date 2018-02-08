$(function () {
	//购物车逻辑交互的功能
	//初始化
	calcTotalePrice();
	//1.实现每个商品的数量减少以及价格的更新
	$(".minus").click(function () {
		//获取当前输入框的对象
		var numObject = $(this).next().find(".buyNumber");
		var num = numObject.val();
//		console.log(num);
		if(num >= 2){
			numObject.val(--num);
		}
		else{
			numObject.val(1);
		}
		//计算当前的价格
		//1.2获取单价
		var price =$(this).parent().parent().prev().text() ;
//		console.log(price);
		//1.3获取当前数量
		var curNum = numObject.val();
//		console.log(curNum);
		//1.4计算当前价格,并保留两位小数
		var rowsTatlePrice = (price * curNum).toFixed(2);
//		console.log(rowsTatlePrice);
		//将价格赋值给rowsTotalPrice
		$(this).parent().parent().next().text(rowsTatlePrice);
		
		//
		calcTotalePrice();
	});
	//2.实现每个商品的数量增加和价格的更新
	$(".plus").click(function () {
		//获取当前输入框的对象
		var numObject = $(this).prev().find(".buyNumber");
		var num = parseInt(numObject.val());
//		console.log(num);
		//点击一次增加 1
		numObject.val(++num);
		if(num >=999){
			numObject.val(999);
		}
//		console.log(num);
		//计算当前的价格
		//1.2获取单价
		var price = $(this).parent().parent().prev().text();
		//1.3获取当前数量
		var curNum = numObject.val();
		//1.4计算当前价格,并保留两位小数
		var rowsTatlePrice = (price * curNum).toFixed(2);
//		console.log(rowsTatlePrice);
		//将价格赋值给rowsTotalPrice
		$(this).parent().parent().next().text(rowsTatlePrice);
		
		calcTotalePrice();
	});
	
	//阻止默认行为（不让选中+和-）
	$(".minus,.plus").mousedown(function () {
		return false;
	});
	
	//全选
	$(".checkAll").click(function () {
		//同时设置全选的值为当前的值
		$(".checkAll,.rowsCheck").prop("checked",$(this).prop("checked"));
		calcTotalePrice();
	});
	//取消单行的时候,调用函数
	$(".rowsCheck").click(function () {
		calcTotalePrice();
	});
	//获取原来的购买数量
	var oldBuyNumber=0;
	$(".buyNumber").focus(function () {
		oldBuyNumber=$(this).val();
	});
	
	$(".delItem").click(function () {
		if (confirm("确定要移除购物车嘛?")) {
			$(this).parent().parent().remove();
			calcTotalePrice();
		}
	});
	//删除用户选中的商品
	$("#delContent").click(function () {
		$(".rowsCheck").each(function () {
			var isChecked = $(this).prop("checked");
			console.log(isChecked);
			if (isChecked) {
				if (confirm("确定要移除购物车嘛?")) {
					$(this).parent().parent().remove();
					calcTotalePrice();
				}
			}
		});
	});
	//输入框失去焦点时候,调用函数
	$(".buyNumber").blur(function () {
		//数量
		var buyNumber=$(this).val();
		
		//验证是否是数字
		//isNaN() 函数用于检查其参数是否是非数字值。 不是数字true  是数字false
		
		if(isNaN(buyNumber))
		{
			//不是数字就报错
			$(this).next().show();
		}
		else
		{
			//是数字才进行以下操作
			if(buyNumber>0)
			{
				//找到单价
				var buyNumberParent=$(this).parent().parent().parent();
				var rowsPrice=buyNumberParent.prev().text();
				
				
				//更新小计
				buyNumberParent.next().text((rowsPrice*parseInt(buyNumber)).toFixed(2));
				
				$(this).next().hide();
				
				calcTotalePrice();
			}
			else
			{
				$(this).val(oldBuyNumber);
			}
		}
	});
	//需要定义一个函数来对总价格和总数量进行计算,因此每次有状态改变的时候都会调用
	//这个函数,达到实时更新价格的功能
	function calcTotalePrice() {
		//需要计算三个数据,
		var totalProducts = 0;
		var totalPrice = 0;
		var totalNums = 0;
//		var priceObj = $(".rowsTotalPrice").parent();
		//1.0需要遍历每行的价格,实现累加
		$(".rowsTotalPrice").each(function () {
			//1.2判断是否处于选中状态
			//1.1商品种类的数量
			totalProducts++;
			var isChecked = $(this).parent().find(".rowsCheck").prop("checked");
			//选中状态才计算其值
//			console.log(isChecked);
			if(isChecked){
				//获取每个的价格综合
				var singleLinePrice = parseFloat($(this).text());
				//计算所有行的总价
				totalPrice += singleLinePrice;
				console.log(totalPrice);
				//更新商品数,找到当前行的数量,进行累加
				var buyNum = parseInt($(this).prev().find(".buyNumber").val());
				totalNums += buyNum;
				console.log(totalNums);
				
			}
		});
		
		//遍历结束后将数目 总价格 总数量更新
		$("#totalProducts").text(totalProducts);
		$("#buyNums").text(totalNums);
		$("#totalPrice").text(totalPrice.toFixed(2));
		
	}
	//点确认按钮执行的动作
	$(document).on('confirmation', '.remodal', function () {
//	    console.log('confirmation');
	    alert("支付页面升级中,看看就好");
	});
	
	 	//添加人气单品的js特效
   	$("#wouldLike .borderleft .content").hover(function () {
   		$(this).addClass("bgF2F2F2").siblings().removeClass("bgF2F2F2");
   	},function  () {
   		$(this).removeClass("bgF2F2F2");
   	});
	
});
