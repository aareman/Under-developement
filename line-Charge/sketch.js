// experimenting with the E and M lib.

function setup(){
    createCanvas(640,480);
    frameRate(8);

    //sliders
    rslider = createSlider(1,40,10,1);
    rslider.position(20,140);

    //code to manage the adding of charges.
    /*
    valman = -100;
    b = createButton('Add a charge');
    b.position(20,20);
    b.mousePressed(function(){v.addCharge(200,200,valman); valman*=-1;});
    */

    v = new field2();
    //v.addCharge();
    // "on" is used for the pause and resume at the end of file
    // that allows for stopping/starting the sketch w/o prob.
    on = true;


    //setup the initial field
    var r = 20;
    for(var i = 0; i<r;i++){
        v.addCharge(300,width/r*i, 100);
        v.addCharge(500,width/r*i, -100);
    }
    //v.addCharge(500,height/2,100);
}
function draw(){
    background(255);
    /*
    fill(0);
    text('charge on right particle: '+c.charge,20,50);
    text('charge on left particle: '+c1.charge,20,90);
    text('resoloution: '+f.resoloution,20,130);
    c.charge = cslider.value();
    c1.charge = c1slider.value();
    f.resoloution = rslider.value();
    //c.draw();
    f.draw();
    p.value = cslider.value();
    p.resoloution = rslider.value();
    p.figCharge();
    p.draw();
    */
    v.setRes(rslider.value());
    v.draw();
}
function mouseDragged(){
    //code to manage the draggability of charges. 
    //NOTE: only the last charge created is draggable.
    /*
    if(v.objects.length > 1){
        v.dragCheck();
    }
    */
}
