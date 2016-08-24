// experimenting with the E and M lib.

function setup(){
    createCanvas(640,480);
    frameRate(8);

    //sliders
    rslider = createSlider(1,40,10,1);
    rslider.position(20,140);

    radius = createSlider(0,200,130,10);
    radius.position(20,100);

    v = new field2();
    r = radius.value();
}
function draw(){
    background(255);
    r = radius.value();
    fieldSetup(r);
    v.setRes(rslider.value());
    v.draw();
    
    fill(100,175,255,80);
    rect(10,60,160,100);
    fill(0);
    text('Radius: ' + r, 20,85);
    text('Resoloution: ' + rslider.value(),20,125);
}
function fieldSetup(_r){
    v.objects = [];
    var R = 50;
    for(var i = 0; i<2*PI;i+=2*PI/R){
        v.addCharge(width/2+cos(i)*_r,height/2+sin(i)*_r, 100);
    }
}
