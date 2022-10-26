//  https://stackoverflow.com/questions/10473745/compare-strings-javascript-return-of-likely

function similar(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (
    (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
  );
}

function editDistance(s1, s2) {
  //-->s1 = s1.toLowerCase();
  //-->s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}

///////////////////


Array.prototype.max = function () {
  return Math.max.apply(null, this);
};

Array.prototype.min = function () {
  return Math.min.apply(null, this);
};

function sortIndex(toSort) {
  for (var i = 0; i < toSort.length; i++) {
    toSort[i] = [toSort[i], i];
  }
  toSort.sort(function (left, right) {
    return left[0] < right[0] ? -1 : 1;
  });
  toSort.sortIndices = [];
  for (var j = 0; j < toSort.length; j++) {
    toSort.sortIndices.push(toSort[j][1]);
    toSort[j] = toSort[j][0];
  }
  return toSort;
}

function toArrColor(englishColor) {
  // create a temporary div.
  var div = document.createElement("div");
  div.style.color = englishColor;
  document.body.appendChild(div);

  // get computed color.
  var cc = window.getComputedStyle(div).color;
  div.remove();
  var bb = cc.substring(4);
  bb = bb.slice(0, -1);
  var dd = bb.split(",").map(Number);
  return dd;
}

function validColor(cstring) {
  var check = false,
    dummy = document.createElement("span");
  try {
    dummy.style.color = cstring;
    return !!dummy.style.color;
  } catch (er) {
    return false;
  } finally {
    dummy = null;
  }
}

function testStrcolor(cad) {
  var ca = cad.split(" ");
  var pp = [];
  for (var a = 0; a < ca.length; a++) {
    var ss = validColor(ca[a]);
    if (ss) {
      var co1 = toArrColor(ca[a]);
      pp.push(co1);
    }
  }
  return pp;
}

//https://stackoverflow.com/questions/67490356/merge-images-in-p5-js
function createMapImg(p,arrp,scl) {
  let gameImg = p.createGraphics(p.width *scl, p.height * scl);
  gameImg.background(p.color("black"));
  for (var c=0; c<arrp.length; c++) {
      gameImg.image(
        arrp[c].img,
        arrp[c].x * scl,
        arrp[c].y * scl,
        arrp[c].width * scl,
        arrp[c].height * scl,
      );
    }
  return gameImg;
}
