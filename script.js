var button = document.getElementById('btn');

button.onclick = function() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var RGBcolor = "rgb(" + red + ", " + green + ", " + blue + ")";

    document.getElementsByTagName('body')[0].style.backgroundColor = RGBcolor;
    button.style.backgroundColor = RGBcolor;
}
