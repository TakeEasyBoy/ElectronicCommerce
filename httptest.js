//http模块提供http网络交互功能
var http = require("http");
var fs = require('fs');
//创建http服务器端，并传入回调函数，在浏览器发送请求到达执行。浏览器客户端每一次请求服务器都会执行一次传入的函数。
var server = http.createServer();
server.on('request',function(req,res){
	//req:请求对象，包含用户提交的数据和客户端的信息；
	//res:响应对象，服务端响应客户端数据，并且可以是动态的；
	fs.readFile('./index.html',function(err,data){
		res.write(data);//服务端响应内容
		res.end();//服务端结束响应
	})
})

//监听网络端口
server.listen(3000,function(){
	console.log("服务器已成功启动")
});//网络端口：计算机中安装了很多软件，而大部分软件需要使用到网络，为了划分网络通道，所以就需要端口。 QQ有自己网络端口，飞秋也有自己的端口。
