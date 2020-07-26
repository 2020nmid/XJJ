	
	//登录页的操作DOM
	var register = document.getElementById('register');//获得登录页的注册按钮元素
	var getVertify = document.getElementById('getVertify');//获得获取验证码的按钮元素
	var userName = document.getElementById('userName');//获取邮箱框框元素
	var vertify = document.getElementById('vertify');//获取验证码框框元素
	var userPwd = document.getElementById('userPwd');//获取密码框框元素
	var login = document.getElementById('login');//获取登录按钮元素
	//全局变量
	var vertifyCode , yourEmail ,yourPwd;
	
	//获取验证码函数
	getVertify.onclick = function(ev1){
	myAjax('GET',"http://120.24.93.68:8085/api/register/sendCheckCode",{"email":""+userName.value+""},
	function(xhr){
		var str = xhr.responseText;
		var myObj = JSON.parse(str);
		console.log(myObj);
		vertifyCode = myObj.data;
		vertify.value = vertifyCode;
		console.log(vertifyCode);
		console.log(myObj.code,myObj.message);
		},function(xhr){
			alert('请求失败!');
		})	;		
	 //点击注册进行跳转到注册页面
	 register.onclick = function(){
		 if(vertify.value != vertifyCode)
		 {
			 alert('当前验证码出错或超时!');
		 }
		 else
		 {
			 window.location.href = "register.html";
		 }
	 }
		
	
}

//登录函数
login.onclick = function(){
	 if(userPwd.value.length == 0 || userName.value.length == 0)
	{
		alert('密码和邮箱不能为空!');
	}
	else
	{
		myAjax('POST','http://120.24.93.68:8085/api/login',
		{
			"email":""+userName+"",
			"password":""+userPwd+""
		},
		function(xhr){
			var str = xhr.responseText;
			var myObj = JSON.parse(str);
			console.log(myObj);
			if(myObj.code != 200)
			{
				alert('密码或用户名错误');
			}
			else
			alert('登录成功');
		},
		function(xhr){
			alert('登录失败！');
		})
	}
}

//对象转字符串
function objToStr(obj){
	obj.time = new Date().getTime();
	var res = [];
	for(var key in obj){	
		res.push(encodeURIComponent(key)+"="+encodeURIComponent(obj[key]));//encodeURIComponent进行中文转码
	}
	return res.join("&");
}

//封装Ajax函数
function myAjax(type ,url , obj, success, error){
	//将对象转换成为字符串
	var str = objToStr(obj);
	//创建一个异步对象
	var xmlhttp , timer;
	
	if(window.XMLHttpRequest){   //IE7+ , 火狐 , 谷歌 等浏览器
		xmlhttp = new XMLHttpRequest();
	}
	else{	//兼容IE6,IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	//判断请求方式并设置请求
	if(type === "GET"){
	//发送GET请求
		xmlhttp.open("GET", url + "?" + str)
		xmlhttp.send();
	}
	else{
		xmlhttp.open("POST",url,true);
		xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
			xmlhttp.send(JSON.stringify(obj));
	}
	
	//监听状态变化
	xmlhttp.onreadystatechange = function(e){
		if(xmlhttp.readyState === 4){	
			if(xmlhttp.status === 200 ){
				success(xmlhttp);
			}
			else{
				error(xmlhttp);
			}
		}
	}
}
