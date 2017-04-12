var body= document.getElementsByTagName('body')[0];

for(var i = 0; i < 81; i++) {
var tile= document.createElement('div');

tile.style.width="11.1%";
tile.style.float="left";
tile.style.paddingBottom= "11.1%";
if (i===40) {
  tile.style.backgroundColor = "red";
  body.appendChild(tile);
} else if(i%2 === 0) {
  tile.style.backgroundColor = "navy";
  body.appendChild(tile);
} else {
  tile.style.backgroundColor = "white";
  body.appendChild(tile);
}

}
