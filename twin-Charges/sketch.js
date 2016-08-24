// experimenting with the E and M lib.

function setup(){
    createCanvas(640,480);
    frameRate(8);

    //sliders
    rslider = createSlider(1,40,20,1);
    rslider.position(20,140);

    //code to manage the changing of the charges.
    valman = -100;
    b = createButton('Negate Charge');
    b.position(20,20);
    b.mousePressed(function(){valman*=-1;v.objects[1].value = valman;});

    v = new field2();
    //v.addCharge();

    //setup the initial field
    v.addCharge(width/3,height/2,100);
    v.addCharge(width/3*2,height/2,valman);
}
function draw(){
    background(255);
    v.setRes(rslider.value());
    v.draw();
}
function mouseDragged(){
    v.dragCheck();
}
