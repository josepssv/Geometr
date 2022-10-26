// All 2D geometry like Midjourney in Discord interface :-)
// CI collective intelligence ;-) maybe in another version AI
// under construction
//

let conceptA;
var idata, sendidata;
var url;
var dad;
var divi;
var word;
var modelsPosition;

var ndraw = 1;
var phrase = [];
var rotation = 0;
var noBackground = false;
var contloop = 0;
var getS = [];
var general = { w: 400, h: 400, reduce: 260, magnify: 440, scale: 2 };
var similaring = false;
var mode = 0;
//same utility
var contdo = 0;
var doini = false;

var modelPosition = 0;
var modelColor = 0;
let maxModel = 23;
var arrcolors = [];

var s0i = new Image();
var s1i = new Image();
var s2i = new Image();
var s3i = new Image();
var s4i = new Image();
var srci = [];
var canvas0;
var user = "u1";

let sketch0 = function (p) {
  p.preload = function () {
    modelsPosition = p.loadStrings("modelPosition.txt");
  };
  p.setup = function () {
    canvas0 = p.createCanvas(
      general.w * general.scale,
      general.h * general.scale
    );
    s0i = p.createGraphics(p.width, p.height);
    p.noLoop();
  };
  p.draw = function () {
    p.image(s0i, 0, 0);
  };
};
var s0 = new p5(sketch0, "my0");
var canvas1;
let sketch1 = function (p) {
  p.setup = function () {
    canvas1 = p.createCanvas(general.w, general.h);
    s1i = p.createGraphics(p.width, p.height);
    p.noLoop();

    //getRtriangle(1, general.w, general.h);
  };

  p.draw = function () {
    /*
    var rw = p.random(p.width / 2) + 1;
    var rr = p.random(0.1);
    var rsw = p.random(p.width / 10) + 1;
    var c1 = getS[1].c1;
    var c2 = getS[1].c2;
    if (word == "point") {
      trianglePoints(rw, rw / 3, rr, p, c1, c2);
    }if (word == "rotating") {
      trianglePoints(rw, rw / 3, rr, p, c1, c2);
    }
    */
    //if (word == "triangle" || word == "two" || word == "diagonal") {
    if (doini) {
      decideModels(0, 1);
      models(p, 1);
      //var im=p.copy(canvas1, 0, 0, s1i.width, s1i.height, 0, 0, p.width, p.height)

      //var is0=s0.createGraphics(s0.width, s0.height);
      s0i.image(canvas1, 0, 0);
      s0.redraw();
      //-->src=p.canvas.toDataURL()

      //--> s1i=p.select("#myimg")
      //-->s1i.attribute('src', src);
      //s1i.position(0,0)
    }
  };
  p.mousePressed = function () {
    //var code=JSON.stringify(getS[1])
    //divi.html(code)
    //models(p,1)
  };
};
var s1 = new p5(sketch1, "my1");

//let my1 = new p5(sketch1);
var canvas2;
let sketch2 = function (p) {
  p.setup = function () {
    canvas2 = p.createCanvas(general.w, general.h);
    //s2i = createImage(p.width, p.height);
    //getRtriangle(2, general.w, general.h);
    p.noLoop();
  };
  p.draw = function () {
    if (doini) {
      decideModels(0, 2);
      models(p, 2);
      s0i.image(canvas2, p.width, 0);
      s0.redraw();
    }
  };
  p.mousePressed = function () {
    //var code=JSON.stringify(getS[1])
    //divi.html(code)
    //models(p,2)
  };
};
var s2 = new p5(sketch2, "my2");
//let my2 = new p5(sketch2);

var canvas3;
let sketch3 = function (p) {
  p.setup = function () {
    canvas3 = p.createCanvas(general.w, general.h);
    //s3i = createImage(p.width, p.height);
    //getRtriangle(3, general.w, general.h);
    p.noLoop();
  };

  p.draw = function () {
    /*
    var rw = p.random(p.width / 2) + 1;
    var rr = p.random(0.1);
    var rsw = p.random(p.width / 10) + 1;
    if (word == "point") {
      trianglePoints(100, 2, rr, p, getS[3].c1, getS[3].c2);
    }
   
    if (word == "rotating") {
      trianglePoints(100, 2, rr, p, getS[3].c1, getS[3].c2);
    }
    */
    if (doini) {
      decideModels(1, 3);
      models(p, 3);
      s0i.image(canvas3, 0, p.height);
      s0.redraw();
    }
  };
  p.mousePressed = function () {
    //var code=JSON.stringify(getS[1])
    //divi.html(code)
    //models(p,3)
  };
};
var s3 = new p5(sketch3, "my3");

var canvas4;
let sketch4 = function (p) {
  p.setup = function () {
    canvas4 = p.createCanvas(general.w, general.h);
    //s4i = createImage(p.width, p.height);
    //getRtriangle(4, general.w, general.h);
    p.noLoop();
  };

  p.draw = function () {
    /* var rw = p.random(p.width / 2) + 1;
    var rr = p.random(0.1);
    var rsw = p.random(p.width / 10) + 1;
    if (word == "point") {
      trianglePoints(100, 2, rr, p, getS[4].c1, getS[4].c2);
    }
   
    if (word == "rotating") {
      trianglePoints(100, 2, rr, p, getS[4].c1, getS[4].c2);
    }
    */
    if (doini) {
      decideModels(1, 4);
      models(p, 4);
      s0i.image(canvas4, p.width, p.height);
      s0.redraw();

      //window.scrollTo(0, document.querySelector("#flow").scrollHeight);
    }
  };
  p.mousePressed = function () {
    //var code=JSON.stringify(getS[1])
    //divi.html(code)
    //models(p,3)
  };
};
var s4 = new p5(sketch4, "my4");

//var getU = {};
var canvasU;
let unique = function (p) {
  p.setup = function () {
    var gene = 1;
    canvasU = p.createCanvas(general.w * gene, general.h * gene);
    canvasU.mouseOut(function () {
      mode = 0;
    });
    //getU = getS[ndraw];
    p.noLoop();
  };

  p.draw = function () {
    /*var rw = p.random(p.width / 2) + 1;
    rr = p.random(0.1);
    var rsw = p.random(p.width / 10) + 1;
    p.circle(p.width / 1, p.height / 2, 22);
    */
  };

  p.mousePressed = function () {
    if (mode == 0) {
      /* var s = sButtons.select("#groupS");
      s.style("visibility", "visible");
      var v = sButtons.select("#variety");
      v.style("visibility", "visible");
      var gs = sButtons.select("#groupS");
      gs.style("display", "block");
      gs.style("visibility", "visible");
      var u = sButtons.select("#unique");
      u.style("display", "none");
      */
    }
  };
};
var sUnique = new p5(unique, "mybig");

//let my3 = new p5(sketch3);

////////////////////////
function makeUButtons(idu) {
  var v1;
  var toname = "b" + idu;
  let subuttons = function (p) {
    p.setup = function () {
      p.createCanvas(200, 15);

      var psv = p.select("#" + toname);
      //psv.style("visibility", "hidden");

      v1 = p.createButton("Variations");
      v1.parent("#" + toname);
      v1.mousePressed(function () {
        ndraw = 1;
        v1.attribute("class", "touche");
        varietyU(idu);
        
      });
    };
  };
  var sUButtons = new p5(subuttons, "b" + idu);
}
var v1, v2, v3, v4;
var u1, u2, u3, u4;
////////////////////////
function makeButtons(idu) {
  var toname = "b" + idu;
  let sbuttons = function (p) {
    p.setup = function () {
      p.createCanvas(200, 15);
      var psv = p.select("#" + toname);
      //psv.style("visibility", "hidden");

      u1 = p.createButton("u1");
      u1.parent("#" + toname);
      //u1.attribute('title', idu)
      u1.mousePressed(function () {
        ndraw = 1;
        mode = 1;
        u1.attribute("class", "touche");
        /*
      var gs = p.select("#groupS");
      gs.style("display", "none");
      gs.style("visibility", "hidden");
      var u = p.select("#unique");
      u.style("display", "block");
      */
        //info(2);
        //drawGeometryBig(ndraw);
        drawGeometry(sUnique, 1, 1, idu);
        showImageU(1, idu);
      });

      u2 = p.createButton("u2");
      u2.parent("#" + toname);
      //u2.attribute('title', idu)
      u2.mousePressed(function () {
        ndraw = 2;
        mode = 1;
        u2.attribute("class", "touche");
        /*var gs = p.select("#groupS");
      gs.style("display", "none");
      gs.style("visibility", "hidden");
      var u = p.select("#unique");
      u.style("display", "block");
      */
        //info(2);
        //drawGeometryBig(ndraw);
        drawGeometry(sUnique, 2, 1, idu);
        showImageU(2, idu);
      });
      u3 = p.createButton("u3");
      u3.parent("#" + toname);
      //u3.attribute('title', idu)
      u3.mousePressed(function () {
        ndraw = 3;
        mode = 1;
        u3.attribute("class", "touche");
        /*var gs = p.select("#groupS");
      gs.style("display", "none");
      gs.style("visibility", "hidden");
      var u = p.select("#unique");
      u.style("display", "block");
      */
        //info(2);
        //drawGeometryBig(ndraw);
        drawGeometry(sUnique, 3, 1, idu);
        showImageU(3, idu);
        
      });
      u4 = p.createButton("u4");
      u4.parent("#" + toname);
      //u4.attribute('title', idu)
      u4.mousePressed(function () {
        ndraw = 4;
        mode = 1;
        u4.attribute("class", "touche");
        
        /*var gs = p.select("#groupS");
      gs.style("display", "none");
      gs.style("visibility", "hidden");
      var u = p.select("#unique");
      u.style("display", "block");
      */
        //info(2);
        //drawGeometryBig(ndraw);
        drawGeometry(sUnique, 4, 1, idu);
        showImageU(4, idu);
      });

      psv.html("<br>", 1);

      v1 = p.createButton("v1");
      v1.parent("#" + toname);
      v1.mousePressed(function () {
        ndraw = 1;
        variety(1);
        v1.attribute("class", "touche");
      });
      v2 = p.createButton("v2");
      v2.parent("#" + toname);
      v2.mousePressed(function () {
        ndraw = 2;
        variety(2);
        v2.attribute("class", "touche");
      });
      v3 = p.createButton("v3");
      v3.parent("#" + toname);
      v3.mousePressed(function () {
        ndraw = 3;
        variety(3);
         v3.attribute("class", "touche");
      });
      v4 = p.createButton("v4");
      v4.parent("#" + toname);
      v4.mousePressed(function () {
        ndraw = 4;
        variety(4);
        v4.attribute("class", "touche");
      });
      
      divi = p.createDiv("");
      //setTimeout(compose1, 500);
      //info(1);
      //p.noLoop();
    };
    /*p.keyPressed = function () {
      if (p.keyCode === p.ENTER) {
        //var tm = new Date().getTime();
        //var idu = user + "-" + tm;
        var idu = makeIdu()
        compose1(idu);
      }
    };
    */
  };
  var sButtons = new p5(sbuttons, "b" + idu);
}
//--------------
function makeIdu() {
  var tm = new Date().getTime();
  return user + "-" + tm;
}
//-----------

var idata;

let sfooter = function (p) {
  p.setup = function () {
    p.createCanvas(200, 15);

    idata = p.createInput("");
    idata.style("background-color:#ddd;");
    idata.style("width", "80%");
    idata.style("height", "28px");
    idata.style("padding-left", "13px");
    idata.style("margin-top", "0px");
    idata.attribute("id", "idata");
    idata.attribute("placeholder","Write your gometry here")
    idata.parent("#footer");
    idata.changed(function () {
      if (p.keyCode == p.ENTER) {
        doini = true;
        similaring = false;
        var idu = makeIdu();
        compose1(idu);
        contdo++;
      }
    });
    var sendidata = p.createButton("submit");
    sendidata.style("margin-top", "0px")
    sendidata.parent("#footer");
    sendidata.mousePressed(function () {
      doini = true;
      similaring = false;
      var idu = makeIdu();

      //var tm = new Date().getTime();
      //var idu = user + "-" + tm;
      compose1(idu);
      contdo++;
    });
  };
};
var sFooter = new p5(sfooter, "footer");
//let my3 = new p5(sketch3);
///-------------
//////////////////////

function showdata(n) {
  var s = JSON.stringify(getS[n]);
  divi.html(s, 1);
}

// Something is wrong
function varietyU(idu) {
  //showdata(n);
  index = srci.findIndex(function (item, i) {
    return item.idu === idu;
  });
  //console.log(index + " " + 1);
  //var etS = { ...srci[index].gets[0] };
  //var etS = { ...srci[index].gets };
  var etS = JSON.parse(JSON.stringify(srci[index].gets));
  etS.n = 1;
  var gets = [];
  gets[1] = etS;
  //console.log(JSON.stringify(etS));
  similaring = true;

  //var tid = idata.value();
  //tid = tid.replace(word, v.word);
  idata.value(etS.word);
  //word=v.word
  //idu = makeIdu();

  //var tm = new Date().getTime();
  //idu = user + "-" + tm;
  //srci.push({idu:idu,gets:gets})
  //compose1(idu);

  //getS[1] = { ...etS };
  getS[1] = JSON.parse(JSON.stringify(etS));
  getS[1].n = 1;

  //getS[2] = { ...etS };
  getS[2] = JSON.parse(JSON.stringify(etS));
  getS[2].interior = "" + parseInt(Math.random() * 12 + 1) + "ccrrci";
  getS[2].n = 2;

  //getS[3] = { ...etS };
  getS[3] = JSON.parse(JSON.stringify(etS));
  getS[3].interior = "" + parseInt(Math.random() * 6 + 1) + "cirrcc"; 
  getS[3].n = 3;
  
  //getS[4] = { ...etS };
  getS[4] = JSON.parse(JSON.stringify(etS));
  getS[4].interior = "" + parseInt(Math.random() * 24 + 1) + "rriicc";
  getS[4].n = 4;
  modelPosition = gets.modelPosition;
  modelColor = gets.modelColor;
  models(s1, 1);
  s0i.image(canvas1, 0, 0);
  s0.redraw();
  modelPosition = gets.modelPosition;
  modelColor = parseInt(Math.random() * 7);
  models(s2, 2);
  s0i.image(canvas2, s2.width, 0);
  s0.redraw();
  modelPosition = gets.modelPosition;
  modelColor = gets.modelColor;
  models(s3, 3);
  s0i.image(canvas3, 0, s3.height);
  s0.redraw();
  modelPosition = gets.modelPosition;
  modelColor = parseInt(Math.random() * 7);
  models(s4, 4);
  s0i.image(canvas4, s4.width, s4.height);
  s0.redraw();
  idu = makeIdu();
  showImage(idu);
  //drawGeometry(sUnique, 1, 1, idu)
}

function variety(n) {
  //showdata(n);
  var v = getS[n];
  for (var a = 1; a <= 4; a++) {
    if (a != n) {
      getS[a] = v;
    }
  }
  similaring = true;
  var tid = idata.value();
  tid = tid.replace(word, v.word);
  idata.value(tid);
  //word=v.word
  //var idu=makeidu()

  //var tm = new Date().getTime();
  //var idu = user + "-" + tm;
  var idu = makeIdu();
  compose1(idu);
}

function getRtriangle(n, w, h) {
  //bad,  delete
  //get Random triangle
  var rc1 = parseInt(Math.random() * 255);
  var rc2 = 255 - rc1;
  var rc3 = 0;
  var rw = parseInt((Math.random() * w) / 2 + 1);
  var rr = parseInt(Math.random() * 180);
  var rpw = parseInt(Math.random() * w - rw);
  var rph = parseInt(Math.random() * h - rw);
  var rsw = parseInt((Math.random() * w) / 10 + 1);
  var ar = Math.PI / 3;
  getS[n] = {
    n: n,
    word: word,
    modelPosition: modelPosition,
    modelColor: modelColor,
    c1: rc1,
    c2: rc2,
    c3: rc3,
    w: rw,
    r: rr,
    pw: rpw,
    ph: rph,
    sw: rsw,
    fills: true,
    strokes: 1,
    ar: ar,
  };
}

function putGeo(
  n,
  rc1,
  rc2,
  rc3,
  w,
  h,
  rpw,
  rph,
  fills,
  strokes,
  rr,
  ar,
  geo,
  interior,
  contour,
  exterior
) {
  var rw = w;
  getS[n] = {
    n: n,
    word: word,
    modelPosition: modelPosition,
    modelColor: modelColor,
    c1: rc1,
    c2: rc2,
    c3: rc3,
    w: rw,
    h: h,
    r: rr,
    pw: rpw,
    ph: rph,
    sw: strokes,
    fills: fills,
    strokes: strokes,
    ar: ar,
    geo: geo,
    interior: interior,
    contour: contour,
    exterior: exterior,
  };
}

function midPoint(A, B, n) {
  var midx = (1 - n) * A.x + n * B.x;
  var midy = (1 - n) * A.y + n * B.y;
  return { x: midx, y: midy };
}

function drawGeometry(p, n, s, idu) {
  var etS;
  var etS1;
  var index = -1;

  if (idu === "") {
    etS = JSON.parse(JSON.stringify(getS[n]));
  } else {
   //index = srci.findIndex(function (item, i) {  return item.idu === idu;   });
    index = srci.map(function(d) { return d['idu']; }).indexOf(idu)
    etS = JSON.parse(JSON.stringify(srci[index].gets[n]));
  }
  //console.log(index+' '+n+" " + JSON.stringify(etS));
  var c1 = etS.c1;
  var c2 = etS.c2;
  var c3 = etS.c3;
  var w = etS.w;
  var rh = etS.h;
  var pw = etS.pw;
  var ph = etS.ph;
  var r = etS.r;
  var fills = etS.fills;
  var strokes = etS.strokes;
  var ar = etS.ar;
  var geo = etS.geo;
  var interior = etS.interior;
  var contour = etS.contour;
  var exterior = etS.exterior;

  p.rectMode(p.CENTER);
  p.background(c1);
  if (fills) {
    p.fill(c2);
  } else {
    p.noFill();
  }
  if (strokes > 0) {
    p.strokeWeight(strokes);
    if (fills) {
      p.stroke(c3);
    } else {
      p.stroke(c2);
    }
  } else {
    p.noStroke();
  }
  p.push();
  p.translate(p.width / 2, p.height / 2);
  if (!Array.isArray(pw)) {
    p.translate(pw * s, ph * s);
  }
  p.scale(s);
  p.rotate(r);

  //p.rect(0, 0, w, w);
  //-->var rs=p.random(-1.9,1.9)
  //--> ar=p.map(rs,-2,2,-p.PI/2,p.PI/2)
  //ar= p.PI / 6; //equilateral
  //-->ar=0 //triangle rectangle
  //ar=p.PI*2/9.7640629073072400010001 //square
  //ar=p.PI/4.88203145365
  //-->ar=p.atan(3/4) //square

  var lr = { left: ar, right: p.PI - ar };
  var g = { w: w / 2, a: lr.left, b: lr.right, c: -p.PI / 2 };
  var sq = [
    { x: g.w * p.cos(g.a), y: g.w * p.sin(g.a) },
    { x: g.w * p.cos(g.b), y: g.w * p.sin(g.b) },
    { x: g.w * p.cos(g.c), y: g.w * p.sin(g.c) },
  ];
  var sizex = 1;
  var sizey = 1;
  if (geo == "triangle" || geo == "triangle line" || geo == "triangle grid") {
    if (geo == "triangle grid") {
      sizex = 24;
      sizey = 24;
    }
    if (geo == "triangle line") {
      sizex = 24;
      sizey = 0;
    }
    // INTERIOR
    var iin = parseInt(interior);
    if (iin == "1") {
      p.circle(0, 0, 5);
    }

    for (var uu = 0; uu < sizex; uu++) {
      for (var tt = 0; tt < sizey; tt++) {
        p.push();
        p.translate(uu * w, tt * w);
        p.beginShape();
        for (var i = 0; i < 3; i++) {
          var v = sq[i];
          p.vertex(v.x, v.y);
          if (interior.indexOf("rr") > -1) {
            p.line(0, 0, v.x, v.y);
          }
        }
        var vv = sq[0];
        p.vertex(vv.x, vv.y);
        p.endShape();
        if (strokes == 0) {
          p.strokeWeight(1);
          p.stroke(c3);
        }

        if (interior.indexOf("cc") > -1) {
          var ncc = 6;
          var ncm = 1 / ncc;
          var ssq = sq.slice();
          var mod = p.dist(0, 0, sq[0].x, sq[0].y) / ncc;
          var nm = 1;

          for (var jj = 0; jj < ncc; jj++) {
            p.fill(40 * jj);
            //p.strokeWeight(8)
            p.beginShape();
            for (var kk = 0; kk < 3; kk++) {
              //ssq[kk].x = p.lerp(0, sq[kk].x, nm);
              //ssq[kk].y = p.lerp(0, sq[kk].y, nm);
              ssq[kk] = midPoint({ x: 0, y: 0 }, sq[kk], nm);
              var ww = ssq[kk];
              p.vertex(ww.x, ww.y);
            }
            var gg = ssq[0];
            p.vertex(gg.x, gg.y);
            p.endShape();
            nm -= ncm;
          }
        }
        if (interior.indexOf("rr") > -1) {
          for (var cc = 0; cc < 3; cc++) {
            var m = sq[cc];
            if (interior.indexOf("rr") > -1) {
              p.line(0, 0, m.x, m.y);
            }
          }
        }
        p.pop();
      }
    }
    //INTERIOR CIRCLE
  }

  var g1 = { d: w, a: p.PI / 2, b: p.PI + p.PI / 6, c: -p.PI / 6 };
  var sq1 = [
    { x: g1.d * p.cos(g1.a), y: g1.d * p.sin(g1.a) },
    { x: g1.d * p.cos(g1.b), y: g1.d * p.sin(g1.b) },
    { x: g1.d * p.cos(g1.c), y: g1.d * p.sin(g1.c) },
  ];

  var l = (w / 3) * (2 * p.sqrt(3));
  var h = w / 2 + w / 2 / 2; //only for equilateral , p.sqrt(3)*l/2;//  //
  var sideDist = p.dist(sq[0].x, sq[0].y, sq[2].x, sq[2].y);
  var sideDist2 = p.dist(sq[1].x, sq[1].y, sq[2].x, sq[2].y);
  h = (sideDist * sideDist2) / w; //only for equilateral?
  var mid = midPoint(sq[0], sq[1], 0.5);
  var hh = p.dist(mid.x, mid.y, sq[2].x, sq[2].y);
  var side1 = p.dist(sq[0].x, sq[0].y, sq[1].x, sq[1].y);

  var g2 = { w: w, a: g.a, b: g.b, c: -p.PI / 6, l: l, h: hh };
  var sq2 = [
    { x: sq[0].x, y: sq[0].y },
    { x: sq[1].x, y: sq[1].y },
    { x: sq[1].x + h * p.cos(g.c), y: sq[1].y + h * p.sin(g.c) },
    { x: sq[0].x + h * p.cos(g.c), y: sq[0].y + h * p.sin(g.c) },
  ];
  var midSquare = midPoint(mid, sq[2], 0.5);

  if (geo == "circle") {
    if (strokes == 0) {
      p.strokeWeight(1);
      p.stroke(c3);
    }
    p.circle(0, 0, w);
    //INTERIOR CIRCLE
    var jjn = parseInt(interior);
    if (jjn == "1") {
      p.circle(0, 0, 5);
    }
    if (jjn > 1 && interior.indexOf("ci") > -1) {
      p.circle(0, 0, 5);
      for (var ii = 0; ii < jjn; ii++) {
        var iwc = p.lerp(0, w, 1 / (ii + 1));
        p.circle(0, 0, iwc);
      }
    }
    if (jjn > 1 && interior.indexOf("cc") > -1) {
      var proporw = (w * 2) / jjn;
      var iwc2 = 0;
      for (var qq = 0; qq < jjn; qq += proporw) {
        p.circle(0, 0, iwc2);
        iwc2 += proporw;
      }
    }
    if (jjn > 1 && interior.indexOf("rr") > -1) {
      var propora = (p.PI * 2) / jjn;
      var iac2 = 0;
      for (var ss = 0; ss <= jjn; ss++) {
        p.line(0, 0, (w / 2) * p.cos(iac2), (w / 2) * p.sin(iac2));
        iac2 += propora;
      }
    }
  }
  if (geo == "ellipse") {
    p.ellipse(0, 0, w, rh);
  }
  if (geo == "same circles") {
    if (Array.isArray(pw)) {
      for (var nn = 0; nn < pw.length; nn++) {
        p.circle(pw[nn], ph[nn], w);
      }
    }
  }
  if (geo == "circles") {
    if (Array.isArray(pw)) {
      for (var pp = 0; pp < pw.length; pp++) {
        p.circle(pw[pp], ph[pp], w[pp]);
      }
    }
  }

  if (geo.includes("polygon ")) {
    var nn1 = geo.split(" ");
    var nn2 = parseInt(nn1[1]);
    if (nn2 > 2) {
      var proporb = (p.PI * 2) / nn2;
      var iac3 = 0;
      p.beginShape();
      for (var mm = 0; mm <= nn2; mm++) {
        p.vertex((w / 2) * p.cos(iac3), (w / 2) * p.sin(iac3));
        iac3 += proporb;
      }
      p.endShape();
    }
  }

  var metric = false;
  if (metric) {
    p.noFill();
    p.stroke(255);
    p.strokeWeight(0.5);

    p.circle(0, 0, w / 2);
    p.circle(0, 0, w * 2);

    var v1;
    p.beginShape();
    for (var k = 0; k < 3; k++) {
      v1 = sq1[k];
      p.vertex(v1.x, v1.y);
    }
    v1 = sq1[0];
    p.vertex(v1.x, v1.y);
    p.endShape();

    //---

    //var d1=p.dist(sq[0].x,sq[0].y,sq[1].x,sq[1].y)
    //var d2=p.dist(sq[0].x,sq[0].y,sq2[3].x,sq2[3].y)
    //console.log(d1+ ' '+ d2)
    //var midx = p.lerp(sq[0].x, sq[1].x, 0.5);
    //var midy = p.lerp(sq[0].y, sq[1].y, 0.5);

    // like h - duplicate
    //var hh=p.dist(mid.x,mid.y,sq[2].x,sq[2].y)
    //console.log(hh+' '+h)
    p.fill(255, 0, 0);
    p.circle(mid.x, mid.y, 5);
    p.circle(midSquare.x, midSquare.y, 5);

    p.fill(255);
    p.circle(0, 0, 5);
    p.circle(sq[0].x, sq[0].y, 5);
    p.circle(sq[1].x, sq[1].y, 5);
    p.circle(sq[2].x, sq[2].y, 5);
    p.fill(0, 255, 0);
    p.circle(sq2[2].x, sq2[2].y, 5);
    p.circle(sq2[3].x, sq2[3].y, 5);
  }

  if (geo.includes("parallel")) {
    if (strokes == 0) {
      p.strokeWeight(1);
      p.stroke(c3);
    }
    var more1 = midPoint(sq2[0], sq2[3], 50);
    var more2 = midPoint(sq2[3], sq2[0], 50);
    var more3 = midPoint(sq2[1], sq2[2], 50);
    var more4 = midPoint(sq2[2], sq2[1], 50);
    var n1 = geo.split(" ");
    var n2 = parseInt(n1[1]);
    //console.log(n2);
    if (n2 == 1) {
      p.beginShape();
      p.vertex(more1.x, more1.y);
      p.vertex(more2.x, more2.y);
      p.endShape();
    }

    if (n2 == 2) {
      p.beginShape();
      p.vertex(more1.x, more1.y);
      p.vertex(more2.x, more2.y);
      p.endShape();
      p.beginShape();
      p.vertex(more3.x, more3.y);
      p.vertex(more4.x, more4.y);
      p.endShape();
    }
    if (n2 > 2) {
      for (var bb = 0; bb < n2; bb++) {
        p.push();
        p.translate(-p.width / 2, 0);
        p.push();
        p.translate(bb * w, 0);
        p.beginShape();
        p.vertex(more1.x, more1.y);
        p.vertex(more2.x, more2.y);
        p.endShape();
        p.pop();
        p.pop();
      }
    }
    /*
    var rc=20
    p.circle(more1.x,more1.y,rc)
    p.circle(more2.x,more2.y,rc)
    p.circle(more3.x,more3.y,rc)
    p.circle(more4.x,more4.y,rc) 
      
    */
  }
  if (geo == "square" || geo == "square line" || geo == "square grid") {
    var v3;
    sizex = 1;
    sizey = 1;
    if (geo == "square grid") {
      sizex = 24;
      sizey = 24;
    }
    if (geo == "square line") {
      sizex = 24;
      sizey = 0;
    }
    for (var u = 0; u < sizex; u++) {
      for (var t = 0; t < sizey; t++) {
        p.push();
        p.translate(u * w, t * w);
        p.push();
        p.translate(0, -midSquare.y);
        p.stroke(c3);

        p.fill(c2);

        p.beginShape();
        for (var j = 0; j < 4; j++) {
          v2 = sq2[j];
          p.vertex(v2.x, v2.y);
        }
        v2 = sq2[0];
        p.vertex(v2.x, v2.y);
        p.endShape();
        p.pop();
        p.pop();
      }
    }
  }
  //p.line(sq[0].x, sq[0].y, sq[1].x, sq[1].y);
  //p.line(sq[1].x, sq[1].y, sq[2].x, sq[2].y);
  //p.line(sq[2].x, sq[2].y, sq[0].x, sq[0].y);

  p.pop();
}

function models(p, n) {
  //INPUT LAYER
  var rc1 = parseInt(Math.random() * 255);
  var rc2 = 255 - rc1;
  var rc3 = 0;
  var rw = parseInt((Math.random() * p.width) / 2 + 3);
  var rh = 1;
  var rr = parseInt(Math.random() * 180);
  var rpw1 = parseInt((Math.random() * p.width) / 2);
  var rpw2 = Math.random() < 0.5 ? -1 : 1;
  var rpw = rpw1 * rpw2;
  //var rph1 = parseInt(Math.random() * p.height - rw);
  var rph1 = parseInt((Math.random() * p.height) / 2);

  //var rph = p.map(rph1,0,p.height/2,-p.heigth/2,p.height/2)
  var rph2 = Math.random() < 0.5 ? -1 : 1;
  var rph = rph1 * rph2;
  //console.log(rph)
  var rsw = parseInt((Math.random() * p.width) / 10 + 1);
  var ar = Math.PI / 6;
  var interior = "1";
  var contour = "0";
  var exterior = "0";

  var geo = "triangle";
  contloop++;
  //if(contloop>2){contloop=0;noBackground=true}

  p.rectMode(p.CENTER);
  p.ellipseMode(p.CENTER);
  //HIDDEN LAYER

  var fills = true;
  var strokes = 0;
  //modelPosition=4
  //OUTPUT LAYER ;-)
  if (!noBackground) {
    p.background(rc1);
  }

  if (modelPosition == 0) {
    //equilateral triangle, in middle, leaning on one side, in circumscribed circle
    rr = 0;
    rpw = 0;
    rph = 0;
    fills = false;
    strokes = 1;
    rc1 = 0;
    rc2 = 255;
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 1) {
    //equilateral triangle in the middle leaning on a vertex, symmetrical, with perpendicular height,in circumscribed circle
    rr = p.PI / 3;
    rpw = 0;
    rph = 0;
    rc1 = 0;
    rc2 = 255;
    strokes = 1;
    fills = false;
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 2) {
    //equilateral triangle in the middle leaning on a vertex, ss the play symbol, as an arrow to the left, in circumscribed circle
    rr = p.PI / 6;
    rpw = 0;
    rph = 0;
    //rph = p.height / 2 - rw / 2; //in bottom line
    rc1 = 0;
    rc2 = 255;
    strokes = 1;
    fills = false;
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }

  if (modelPosition == 3) {
    //equilateral triangle in the middle leaning on a vertex, ss the play symbol, as an arrow to the right, in circumscribed circle
    rr = -p.PI / 6;
    rpw = 0;
    rph = 0;
    //rph = p.height / 2 - rw / 2; //in bottom line
    rc1 = 0;
    rc2 = 255;
    strokes = 1;
    fills = false;
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }

  if (modelPosition == 4) {
    //square in middle, leading in a size
    ar = p.atan(3 / 4);
    rr = 0;
    rpw = 0;
    rph = 0;
    //rph = p.height / 2 - (rw * p.sqrt(2)) / 2;
    rc1 = 0;
    rc2 = 255;
    strokes = 1;
    fills = false;
    geo = "square";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 5) {
    //triangle in the cornet left top
    ar = p.atan(3 / 4); // angle for square
    rr = p.PI / 4;
    //rpw = -p.width / 2 + rw / 2;
    //rph = -p.height / 2 + rw / 2;
    rpw = 0;
    rph = 0;
    rc1 = 0;
    rc2 = 255;
    strokes = 1;
    fills = false;
    geo = "square";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 6) {
    //random equilateral triangle leading in a side
    rr = 0;
    //rpw = p.width / 2 - rw / 2;
    //rph = -p.height / 2 + rw / 2;
    rc1 = 0;
    rc2 = 255;
    strokes = 1;
    fills = false;
    geo = "triangle";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 7) {
    //random square leading in a side
    ar = p.atan(3 / 4);
    rr = 0;
    //rpw = p.width / 2 - rw / 2;
    //rph = p.height / 2 - rw / 2;
    rc1 = 0;
    rc2 = 255;
    strokes = 1;
    fills = false;
    geo = "square";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 8) {
    //random equilateral triangle
    //ar = p.atan(3/4)
    //rr = 0;
    //rpw = p.width / 2 - rw / 2;
    //rph = p.height / 2 - rw / 2;
    rc1 = 0;
    rc2 = 255;
    strokes = 1;
    fills = false;
    geo = "triangle";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 9) {
    //random square
    ar = p.atan(3 / 4);
    rc1 = 0;
    rc2 = 255;
    strokes = 1;
    fills = false;
    geo = "square";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 10) {
    //equilateral triangle leaning on the lower side of the screen
    //ar = 0;
    rr = 0;
    //rpw = -p.width + rw;
    rpw = 0;
    rph = p.height / 2 - rw / 3.5;

    rc1 = 0;
    rc2 = 255;
    strokes = 1;
    fills = false;
    geo = "triangle";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }

  if (modelPosition == 11) {
    //square leaning on the lower side of the screen
    ar = p.atan(3 / 4);
    rr = 0;
    rpw = 0;
    rph = p.height / 2 - rw / 2.5;
    rc1 = 0;
    rc2 = 255;
    strokes = 1;
    fills = false;
    geo = "square";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 12) {
    //equilateral triangle grid
    //ar = p.atan(3 / 4);
    rr = 0;
    rpw = -p.width + rw;
    rph = -p.height + rw;
    rc1 = 0;
    rc2 = 255;
    strokes = 1;
    fills = false;
    geo = "triangle grid";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 13) {
    //square grid
    ar = p.atan(3 / 4);
    rr = 0;
    rpw = -p.width + rw;
    rph = -p.height + rw;
    rc1 = 0;
    rc2 = 255;
    strokes = 1;
    fills = false;
    geo = "square grid";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 14) {
    //circle in middle
    //ar = p.atan(3 / 4);
    //rr = p.PI/13;
    rpw = 0;
    rph = 0;
    rc1 = 0;
    rc2 = 255;
    strokes = 1;
    fills = false;
    geo = "circle";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 15) {
    //circle in random position
    //ar = p.atan(3 / 4);
    //rr = p.PI/13;
    rc1 = 0;
    rc2 = 255;
    strokes = 1;
    fills = false;
    geo = "circle";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 16) {
    //random circles same radius
    //ar = p.atan(3 / 4);
    rr = 0;
    rpw = [];
    rph = [];
    for (var nn = 0; nn < 28; nn++) {
      rpw.push(p.random(-p.width / 2, p.width / 2));
      rph.push(p.random(-p.height / 2, p.height / 2));
    }
    geo = "same circles";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 17) {
    //random circles diferent radius
    rr = 0;
    rpw = [];
    rph = [];
    var rrw = rw;
    rw = [];
    for (var nn = 0; nn < 28; nn++) {
      rpw.push(p.random(-p.width / 2, p.width / 2));
      rph.push(p.random(-p.height / 2, p.height / 2));
      rw.push(p.random(3, rrw));
    }
    geo = "circles";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 18) {
    //ellipse in middle, random size, 3/4 proportion
    //ar = p.atan(3 / 4);
    //rr = p.PI/13;
    rh = (rw * 3) / 4;
    rr = 0;
    rpw = 0;
    rph = 0;
    geo = "ellipse";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 19) {
    //isosceles triangle in middle
    var rs = p.random(-1.9, 1.9);
    ar = p.map(rs, -2, 2, -p.PI / 2, p.PI / 2);
    rr = 0;
    rpw = 0;
    rph = 0;
    geo = "triangle";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 20) {
    //rectangle in middle
    var rs = p.random(-1.9, 1.9);
    ar = p.map(rs, -2, 2, -p.PI / 2, p.PI / 2);
    rr = 0;
    rpw = 0;
    rph = 0;
    geo = "square";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 21) {
    //ellipse in middle, frame width
    //ar = p.atan(3 / 4);
    //rr = p.PI/13;
    rw = p.width;
    rh = p.height;
    rr = 0;
    rpw = 0;
    rph = 0;
    geo = "ellipse";
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 22) {
    //n parallel lines
    var nlines = p.int(p.random(1, 40));
    //ar = p.atan(3 / 4);
    //rr = p.PI/13;
    rr = p.random(p.PI);
    rpw = 0;
    rph = 0;
    geo = "parallel " + nlines;
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  if (modelPosition == 23) {
    //n regular polygon centered
    var nsides = p.int(p.random(5, 16));
    //ar = p.atan(3 / 4);
    //rr = p.PI/13;
    //rr = p.random(p.PI);
    rpw = 0;
    rph = 0;
    geo = "polygon " + nsides;
    putGeo(
      n,
      rc1,
      rc2,
      rc3,
      rw,
      rh,
      rpw,
      rph,
      fills,
      strokes,
      rr,
      ar,
      geo,
      interior,
      contour,
      exterior
    );
  }
  ////////////////////
  ///////////////////
  if (modelColor == 0) {
    //black background an white line
    getS[n].c1 = 0;
    getS[n].c2 = 255;
  }
  if (modelColor == 1) {
    //white background and black line
    getS[n].c1 = 255;
    getS[n].c2 = 0;
  }
  if (modelColor == 2) {
    //random grey background and complementary line
    getS[n].c1 = Math.random() * 255;
    getS[n].c2 = 255 - getS[n].c1;
  }

  if (modelColor == 3) {
    //black background an white filled
    getS[n].fills = true;
    getS[n].strokes = 0;
    getS[n].c1 = 0;
    getS[n].c2 = 255;
  }
  if (modelColor == 4) {
    //white background and black filled
    getS[n].fills = true;
    getS[n].strokes = 0;
    getS[n].c1 = 255;
    getS[n].c2 = 0;
  }
  if (modelColor == 5) {
    //random grey background and complementary filled
    getS[n].fills = true;
    getS[n].strokes = 0;
    getS[n].c1 = Math.random() * 255;
    getS[n].c2 = 255 - getS[n].c1;
  }
  if (modelColor == 6) {
    //random background and complementary filled
    getS[n].fills = true;
    getS[n].strokes = 0;
    getS[n].c1 = [
      Math.random() * 255,
      Math.random() * 255,
      Math.random() * 255,
    ];
    getS[n].c2 = [
      255 - getS[n].c1[0],
      255 - getS[n].c1[1],
      255 - getS[n].c1[2],
    ];
  }
  if (modelColor == 7) {
    getS[n].fills = true;
    getS[n].strokes = 0;
    getS[n].c1 = [0, 0, 255];
    getS[n].c2 = 255;
    getS[n].c3 = 0;
    if (arrcolors.length > 0) {
      getS[n].c1 = arrcolors[0];
      if (arrcolors.length > 1) {
        getS[n].c2 = arrcolors[1];
      }
      if (arrcolors.length > 2) {
        getS[n].c3 = arrcolors[2];
        getS[n].strokes = 2;
      }
    }
  }
  getS[n].modelPosition = modelPosition;
  //console.log(modelColor);
  getS[n].modelColor = modelColor;
  drawGeometry(p, n, 1, "");
  //showImage()

  ///////////////
}
function fdate(ut){
//var date = new Date(ut) * 1000);
var di = new Date(parseInt(ut))
var dj= di.toLocaleString(); 
var d=dj.split(',')
//return d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear() 
  return d[0]
}
function getColorwrited() {
  //get if text a writed a color
  var iphrase = idata.value();
  var cc = testStrcolor(iphrase);
  return cc;
}
function trianglePoints(rw, rsw, rr, p, c1, c2) {
  //var co=p.color(rc1)
  p.background(c1);
  p.push();
  p.translate(p.width / 2, p.height / 2);
  if (rr > 0) {
    p.rotate(rotation);
    rotation += rr;
  }
  //fill(0);
  p.stroke(c2);
  p.strokeWeight(rsw);
  var sq = [
    { x: -rw / 2, y: -rw / 2 },
    { x: rw / 2, y: -rw / 2 },
    { x: rw / 2, y: rw / 2 },
    { x: -rw / 2, y: rw / 2 },
  ];
  /*p.line(sq[0].x, sq[0].y, sq[1].x, sq[1].y);
  p.line(sq[1].x, sq[1].y, sq[2].x, sq[2].y);
  p.line(sq[2].x, sq[2].y, sq[3].x, sq[3].y);
  p.line(sq[3].x, sq[3].y, sq[0].x, sq[0].y);
  */
  if (word == "diagonal") {
    drawDiagonal(0, 0, rw / 2, p, c2);
  }
  p.fill(c2);
  p.noStroke();
  p.ellipse(sq[0].x, sq[0].y, rsw + 2, rsw + 2);
  p.ellipse(sq[1].x, sq[1].y, rsw + 2, rsw + 2);
  p.ellipse(sq[2].x, sq[2].y, rsw + 2, rsw + 2);
  p.ellipse(sq[3].x, sq[3].y, rsw + 2, rsw + 2);
  p.pop();
}

function decideModelsU(count, n) {
  modelColor = 1;
  modelPosition = 1;
}

function decideModels(count, n) {
  //if (word == "triangle" || word == "two" || word == "diagonal") {
  //modelPosition = parseInt(Math.random() * 23);
  //modelPosition = 22;
  arrcolors = getColorwrited();
  if (arrcolors.length > 0) {
    modelColor = 7;
  } else {
    modelColor = parseInt(Math.random() * 7);
  }
  //modelColor=7

  var iphrase = idata.value();
  if (iphrase == "write your geometry" || iphrase == "") {
    modelPosition = parseInt(Math.random() * (maxModel + 1));
    // modelPositon=maxModel
    //console.log("no writed");
    //console.log(srci);
    return true;
  }
  //console.log(modelsPosition)
  var sim,
    simi = [];
  for (var i in modelsPosition) {
    var v = modelsPosition[i];
    // for (var j in modelsPosition) {
    //var v2 = modelsPosition[j];
    //console.log('vs "' + v2 + '"');
    //var sim = similarity(v, v2);
    sim = similar(iphrase, v);
    //sim=Math.round(sim * 100)
    simi.push(sim);

    //}
  }
  //simi.sort();
  //simi.reverse()
  //var maxi = Math.max.apply(null, simi);
  //const isLargeNumber = (element) => element == maxi;
  //var found=simi.findIndex(isLargeNumber);

  //modelPosition = parseInt(found);
  //var found=sortIndex(simi)
  //modelPosition = parseInt(found[found.length-1]);
  var si = simi.slice();
  si.sort();
  si.reverse();
  var found = simi.indexOf(si[count]);
  //console.log("maxi: " + found + " " + si[count]);

  modelPosition = parseInt(found + 2);
}
function openw(mo) {
  //var cus = canvas0.elt.toDataURL();
  if (mo == 1) {
    s0.saveCanvas(canvas0, "myCanvas", "png");
  }
  if (mo == 2) {
    sUnique.saveCanvas(canvasU, "myCanvas", "png");
  }
}

function magnify(mo, idu) {
  //var cus= document.getElementById(idu).getAttribute("src")
  var cu = document.getElementById(idu);
  //var cu= s0.select('#'+idu)
  //console.log(idu)
  var cus = cu.src;
  var cad =
    '<div class="block2" id="block2" ><div id="ims"><img src="' +
    cus +
    '" width="' +
    general.magnify +
    'px" id="x-' +
    idu +
    '"></div><div id="gfi" onclick="openw(' +
    mo +
    ')" style="cursor:pointer;">Get full image</div></div>';
  var sm = s0.select("#match");
  sm.style("display", "block");
  sm.html(cad);
  sm.mouseClicked(function (evt) {
    evt.stopPropagation();
    document.querySelectorAll("#block2 > div").forEach((el) => {
      if (el.id == "ims" && evt.target.id == "match") {
        //console.log(evt.target.id);
        sm.style("display", "none");
      }
    });
  });
  //return;
  //console.log(document.getElementById(evt.target))

  // })
  //var sei = s0.select("#flow");
  //sei.html(cad, 1);
}

function toBottom(idu) {
  //window.scrollTo(0, 500*contdo)
  //window.location.hash='#page-bottom'
  var id = "page-bottom";
  var yScroll = document.body.scrollTop;
  window.location.hash = idu;
  document.body.scrollTop = yScroll;
}


function showImage(idu) {
  var cus = canvas0.elt.toDataURL();
  var gets = getS.slice();
  var wp=gets[1].word
  srci.push({ idu: idu, gets: gets });
  
  var dd=idu.split('-')
  var ddd=fdate(dd[1])
  //console.log(idu+' '+dd[1])
  var cad =
    '<div class="block2" ><div id="wu-'+idu+'" class="infoImageUup"> '+user+': '+ddd+'</div><div id="w-'+idu+'" class="infoImageUp"> '+''+' '+wp+'</div><img id="' +
    idu +
    '" src="' +
    cus +
    '" width="' +
    general.reduce +
    'px" title="' +
    idu +
    '" onclick="magnify(1,' +
    "'" +
    idu +
    "'" +
    ')" style="cursor:pointer"><div id="b' +
    idu +
    '"></div></div>';
  var sei = s0.select("#flow");
  sei.html(cad, 1);
  makeButtons(idu);
  
  //console.log(src)
  toBottom(idu);
}

function showImageU(ndraw, idu) {
  index = srci.findIndex(function (item, i) {
    return item.idu === idu;
  });

  var cus = canvasU.elt.toDataURL();
  //var tm = new Date().getTime();
  //var idu = user + "-" + tm;
  idu=makeIdu()
  //var gets = { ...srci[index].gets[ndraw] };
  var gets = JSON.parse(JSON.stringify(srci[index].gets[ndraw]));
  
  srci.push({ idu: idu, gets: gets });
  var wp=gets.word
  srci.push({ idu: idu, gets: gets });
  var dd=idu.split('-')
  var ddd=fdate(dd[1])
  var cad =
    '<div class="block2" ><div id="wu-'+idu+'" class="infoImageUup"> '+user+': '+ddd+'</div><div id="w-'+idu+'" class="infoImageUp"> '+''+' '+wp+'</div><img id="' +
    idu +
    '" src="' +
    cus +
    '" width="' +
    general.reduce +
    'px" onclick="magnify(2,' +
    "'" +
    idu +
    "'" +
    ')" style="cursor:pointer"><div id="b' +
    idu +
    '"></div></div>';
  var sei = s0.select("#flow");
  sei.html(cad, 1);
  makeUButtons(idu);
  if (ndraw == 1) {
    u1.attribute("class", "touche");
    u1.attribute("title", idu);
  }
  if (ndraw == 2) {
    u2.attribute("class", "touche");
    u2.attribute("title", idu);
  }
  if (ndraw == 3) {
    u3.attribute("class", "touche");
    u3.attribute("title", idu);
  }
  if (ndraw == 4) {
    u4.attribute("class", "touche");
    u4.attribute("title", idu);
  }
  toBottom(idu);
}

function compose1(idu) {
  mode = 0;
  //v1.style('display','none')
  /*var s = sButtons.select("#groupS");
  s.style("visibility", "hidden");
  var v = sButtons.select("#variety");
  v.style("visibility", "hidden");
  var gs = sButtons.select("#groupS");
  gs.style("display", "block");
  gs.style("visibility", "visible");
  var u = sButtons.select("#unique");
  u.style("display", "none");
  */
  setTimeout(function () {
    compose2(idu);
  }, 1000);
}

function compose2(idu) {
  if (contdo == 0) {
    //info(1);
  } else {
    //info(0);
  }
  //HIDDEN LAYER

  //divi.html('loading...')

  var iphrase = idata.value();

  word = iphrase;
  phrase = iphrase.split(" ");
  /*
  if (phrase.includes("triangle")) {
    word = "triangle";
  }
  if (phrase.includes("point")) {
    word = "point";
  }
  if (phrase.includes("rotating")) {
    word = "rotating";
  }
  if (phrase.includes("2") || phrase.includes("two")) {
    word = "two";
  }
  if (phrase.includes("diagonal")) {
    word = "diagonal";
  }
  //let url = "https://api.conceptnet.io/c/en/" + word;
  //dad = loadJSON(url, GotDads);
  */
  noBackground = false;
  //if (word == "triangle") {
  //p.noLoop()

  //models(sketch4);
  s1.noLoop();
  s2.noLoop();
  s3.noLoop();
  s4.noLoop();
  s1.draw();
  s2.draw();
  s3.draw();
  s4.draw();

  showImage(idu);
  //}
  /*var arrp=[
    {img:s1i,x:0,y:0,w:general.w,h:general.h},
    {img:s2i,x:general.x/2,y:0,w:general.w,h:general.h},
    {img:s3i,x:0,y:general.y/2,w:general.w,h:general.h},
  {img:s4i,x:general.x/2,y:general.y/2,w:general.w,h:general.h}
  ]
  
  s0.image(createMapImg(s0,arrp,1))
  */
  if (!similaring) {
    //getRtriangle(1, general.w, general.h);
    //getRtriangle(2, general.w, general.h);
    //getRtriangle(3, general.w, general.h);
    //getRtriangle(4, general.w, general.h);
  }
  if (doini) {
    /*var s = sButtons.select("#groupS");
    s.style("visibility", "visible");
    s.style("display", "block");
    var v = sButtons.select("#variety");
    v.style("visibility", "visible");
    v.style("display", "block");
    */
  }
  // window.scrollTo(0, 500);
}

function info(n) {
  var s = "";
  if (n == 1) {
    s = "Options:  two, triangle, point, diagonal, or/and rotating <br>";
  }
  if (n == 2) {
    divi.html(JSON.stringify(getS[ndraw]));
  }

} 
