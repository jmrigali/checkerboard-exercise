var body= document.getElementsByTagName('body')[0];

for(var i = 0; i < 81; i++) {
var tile= document.createElement('div');
var color= randomColor();
tile.style.width="11.1%";
tile.style.float="left";
tile.style.paddingBottom= "11.1%";
tile.style.backgroundColor= color;
body.appendChild(tile);
}

function randomColor () {
var letter="0123456789ABCDEF";
var color="#";

  for(var j = 0; j<6; j++) {
    color += letter[Math.floor(Math.random() *16)];
  }
  return color;
}
