//绘制五角星
function drawStar(cxt,x,y,R,rot){//rot为旋转角度
    cxt.save();//状态保存

    cxt.translate(x,y);//将基坐标从(0,0)变换到(x,y)
    cxt.rotate(rot/180*Math.PI);
    cxt.scale(R,R);//放大一倍，会把所有带数值的参数都放大
    starPath(cxt);

    cxt.fillStyle="#fb3";
   
    cxt.fill();

    cxt.restore();//状态恢复        
}
//一个标准星星
function starPath(cxt){
   cxt.beginPath();
    for (var i = 0; i < 5; i++) {
        cxt.lineTo(Math.cos((18+i*72)/180*Math.PI),
                       -Math.sin((18+i*72)/180*Math.PI));

        cxt.lineTo(Math.cos((54+i*72)/180*Math.PI)*0.5,
                       -Math.sin((54+i*72)/180*Math.PI)*0.5);
    };
    cxt.closePath(); 
}



//画月亮
function fillMoon(cxt,x,y,R,rot,/*optional*/fillColor,d){
        cxt.save();
        cxt.translate(x,y);
        cxt.rotate(rot*Math.PI/180);//旋转角度
        cxt.scale(R,R);//缩放比例
        pathMoon(cxt,d);//d为控制点横坐标
        cxt.fillStyle=fillColor||"#fb5";
        cxt.fill();
        cxt.restore();
}
function pathMoon(cxt,d){
    cxt.beginPath();
    cxt.arc(0,0,1,0.5*Math.PI,1.5*Math.PI,true);
    cxt.moveTo(0,-1);
    // cxt.arcTo(d,0,0,1,dis(0,-1,d,0)/d);
    cxt.quadraticCurveTo(1.1,0,0,1);//二次贝塞尔曲线
    cxt.closePath();
}

//两点间距离
function dis(x1,y1,x2,y2){
    return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}

//画绿地
function drawLand(cxt){
    cxt.save();

    cxt.beginPath();
    cxt.moveTo(0,650);
    cxt.bezierCurveTo(540,500,660,800,1200,600);//三次贝塞尔曲线
    cxt.lineTo(1200,800);
    cxt.lineTo(0,800);
    cxt.closePath();

    var landStyle=cxt.createLinearGradient(0,800,0,0);
    landStyle.addColorStop(0,"#030");
    landStyle.addColorStop(1,"#580");
    cxt.fillStyle=landStyle;

    cxt.fill();

    cxt.restore();
}