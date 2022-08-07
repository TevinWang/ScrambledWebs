function animate(element, direction) {
  let elementWidth = element.offsetWidth;
  if (element.parentElement != null) {
    let parentWidth = element.parentElement.offsetWidth;
  }
  let flag = 0;

  setInterval(() => {
      flag -= 5;

      if (direction === "bottom") {
        element.style.marginBottom = flag + "px";
      } else if (direction === "up") {
        element.style.marginTop = flag + "px";
      } else if (direction === "right") {
        element.style.marginRight = flag + "px";
      } else {
        element.style.marginLeft = flag + "px"
      }

      if (elementWidth == -flag && parentWidth != null) {
          flag = parentWidth;
      }
  }, 10);
}

var texts = document.querySelectorAll('i,p,a,span,li,h2,h1');
for (var i = 0, l = texts.length; i < l; i++) {
  texts[i].innerText = texts[i].innerText.split('').sort(function(){return 0.5-Math.random()}).join('');
  var randomInt = Math.random();
  if (randomInt < 0.25) {
    animate(texts[i], "top");
  } else if (randomInt < 0.5 && randomInt > 0.25) {
    animate(texts[i], "bottom");
  } else if (randomInt < 0.75 && randomInt > 0.5) {
    animate(texts[i], "right");
  } else {
    animate(texts[i], "left");
  }
}