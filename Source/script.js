var css = document.createElement("style");
css.type = "text/css";
var imgURL = chrome.extension.getURL("buttfart.png");
css.innerHTML = ".HeartAnimation { background : url('" + imgURL + "'); background-size: 2900%;}";
document.body.appendChild(css);