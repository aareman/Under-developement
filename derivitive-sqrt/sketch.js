// sim to demonstrate how a derivitive works
// the example here is the derivitive of x^2

//TODO: add secant and tangent approx.
//DONE: fix tiles/axis/labels/etc...
//TODO: fix coloring of labels and add
//      full equations not just the result.
//TODO: add latex of eq.

//******************************
//        P5.js functions
//******************************
function setup(){
    createCanvas(640,480);
    frameRate(15);

    //sliders
    rslider = createSlider(0.01,6,5.5,.0001);
    rslider.position(420,30);
    g = new Graph(400,400,0,10,0,4,10,10);
    g.title = 'Approximating the \nslope of a Point';
    g.xlabel = 'x';
    g.ylabel = 'sqrt(x)';
    g.showLegend = true;
}
function draw(){
    background(255);
    g.plots = [];
    g.addPlot(get_xx(10));
    //g.addPlot(get_xa(20,rslider.value()));
    //g.addPlot(get_xp(20));
    g.addPlot(get_tangent(2));
    g.addPlot(get_secant(2,2+rslider.value()));
    g.addPlot(get_secPoints(2, 2+rslider.value()));
    g.plots[3].show = false;
    
    g.drawBg();
    g.plotAll();

    //print information
    fill(0);
    stroke(0);
    text("h: " + rslider.value(),420,15);

    fill(255,0,0);
    text('f(2): ' + xsq(2),420,100);
    fill(0,0,255);
    text("F(2) ~= [f(2+h)-f(2)]/h: " + xsqPrime_approx(2,rslider.value()),420,130);
    fill(0);
    text("F(2): " + xsqPrime_actual(2),420,160);
    
//    text('Resolution: ', 20, 120);
}

//******************************
//        Other functions
//******************************
function xsq(x){
    return Math.sqrt(x);
}
function xsqPrime_approx(a, h){
    //info: f'(x) = lim(h->0) of (f(x+h)-f(x))/h
    if(h == 0) return 0;
    else  return (xsq(a+h)-xsq(a))/h;
}
function xsqPrime_actual(x){
    return .5*1/Math.sqrt(x);
}
function get_xx(res){
    pa = [];
    for(var i = 0;i<res;i+=.2){
        p = new Point(i,xsq(i));
        pa.push(p);
    }
    pl = new Plot(pa,255,0,0,2,'sqrt(x)');
    pl.pointSize = 0;
    return pl;
}
function get_xa(res,h){
    pa = [];
    for(var i = 0;i<res;i++){
        p = new Point(i,xsqPrime_approx(i,h));
        pa.push(p);
    }
    pl = new Plot(pa,0,0,0,2);
    pl.pointSize = 0;
    return pl;
}
function get_xp(res){
    pa = [];
    for(var i = 0;i<res;i++){
        p = new Point(i,xsqPrime_actual(i));
        pa.push(p);
    }
    pl = new Plot(pa,0,0,255,2,'2x');
    pl.pointSize = 0;
    return pl;
}
function get_tangent(x){
    var pl = get_secant(x,x+0.001);
    pl.color = color(100,200,20);
    pl.plotTitle = 'Tangent line';
    return pl;
}
function get_secant(h0, h){
    //if(h-h0 == 0) h = h0+=0.01;
    var m = (xsq(h)-xsq(h0))/(h-h0);
    //var fx = m*(x-6) + 36;

    pa = [];
    for(var i=0;i<20;i+=.05){
        p = new Point(i, (m*(i-h))+xsq(h));
        pa.push(p);
    }
    //pa.push(new Point(0, (m*(0-h))+xsq(h)));
    //pa.push(new Point(10, (m*(10-h))+xsq(h)));

    pl = new Plot(pa, 0,0,255,2,'Secant line');
    pl.pointSize = 0;
    return pl;
}
function get_secPoints(h0, h){
    pa=[];
    p1 = new Point(h0, xsq(h0));
    p2 = new Point(h, xsq(h));
    pa.push(p1);
    pa.push(p2);
    pl = new Plot(pa, 0, 0, 255, 0);
    pl.pointSize = 10;
    return pl;
}
