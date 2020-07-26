var num = 0;
var correct = 1 ;//判断变量
var flag = 0;
var login = document.getElementById('login');
var geetest = document.getElementById('geetest');
var imagesBox = document.getElementById('imagesBox');
var confirm = document.getElementById('confirm');
var backgroundImg = document.getElementById('backgroundImg');
var geetest_tip_img = document.getElementById('geetest_tip_img');
var coordinate = [];//储存图片所点击的位置的X坐标与Y坐标
//定义两张图片的对象
var img1 ={
	src:'imgs/background.jpg',
	X:[[39,93],[117,176],[129,182]],
	Y:[[118,167],[175,225],[102,151]],
}
var img2 = {
	src:'imgs/background1.jpg',
	X:[[67,213],[161,216],[162,215]],
	Y:[[125,174],[11,69],[101,157]],
}


//点击按钮出现汉字顺序验证
login.onclick = function(){
 geetest.style.display = 'block';
}


//点击图片获得坐标,并且以数组的形式进行储存
imagesBox.onclick = function(event){
	if(num < 9)
	{
		var X = event.offsetX;
		var Y = event.offsetY;
		coordinate.push([X,Y]);
		num++;
		//创建节点
		var node = document.createElement('div');
		node.id = num;
		node.innerHTML = "<div style=\"height:20px;width:20px;background-color:cornflowerblue;color:white;position:absolute;border-radius:50%;text-align:center;top:"+Y+"px; left:"+X+"px;\">"+ num + "<div>";
		imagesBox.appendChild(node);
	}
	else
	{
		alert('超过次数！');
	}
	console.log(X,Y);
}



//点击确认按钮进行判断
confirm.onclick = function(){
	console.log(coordinate);
	//如果两个数组length不相等直接认为出错
	if(coordinate.length != img1.X.length)
	{	
		flag = 1;
		correct = 0;
		console.log('触发了长度不一致！');
	}
	else
	{
		//判断是第几张图片
		if(flag === 0) //第一张图，所以使用对象img1
		{
			for(var i = 0 ; i < coordinate.length ; i++)
			{	
				console.log(coordinate[i][0] <= img1.X[i][1] && coordinate[i][0] >= img1.X[i][0] && coordinate[i][1] >= img1.Y[i][0] && coordinate[i][1] <= img1.Y[i][1])
				//同时判断X的坐标与Y坐标的正确性
				if(coordinate[i][0] <= img1.X[i][1] && coordinate[i][0] >= img1.X[i][0] && coordinate[i][1] >= img1.Y[i][0] && coordinate[i][1] <= img1.Y[i][1] )
				{	
					continue;
				}
				else
				{	
					flag = 1;
					correct = 0;
					break;
				}
			}
		}
		else
		{
			
			for(var i = 0 ; i < coordinate.length ; i++)
			{
				//同时判断X的坐标与Y坐标的正确性
				if(coordinate[i][0] <= img2.X[i][1] && coordinate[i][0] >= img2.X[i][0] && coordinate[i][1] >= img2.Y[i][0] && coordinate[i][1] <= img2.Y[i][1] )
				{
					correct=1;
				}
				else
				{	
					flag = 0;
					correct = 0;
					break;
				}
			}
		}
	}
	
	//根据判断结果做出改变图片，弹出验证失败
	if(correct === 1)
	{
		alert('验证成功');
		geetest.style.display = 'none';
	}
	else
	{	
		alert('验证失败！');
		if(flag === 1)
		{
			backgroundImg.src = img2.src;
			geetest_tip_img.style.background = "url(imgs/doumianqiu.jpg) no-repeat";
			
		}
		else
		{
			backgroundImg.src = img1.src;
			geetest_tip_img.style.background = "url(imgs/duoweiguo.jpg) no-repeat"
		
		}
	}
	for(var i = 0 ; i < num ; i++)
	{
		document.getElementById(i+1).remove();
	}
	//每验证完，就释放coordinate数组和num的值
	coordinate = [];
	num = 0; 
}