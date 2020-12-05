var animation; 
var rotation = 0;
var image = document.getElementById("image");
var timeInterval = 100;
startSpinning();

function spin() {
  rotation += 20;
  if (rotation >= 360) {
    rotation -= 360;
  }
  image.style.transform = "rotate("+rotation+"deg)";
}

function startSpinning() {
  image.onclick = pickMeme;
  image.src = "https://clipground.com/images/spinner-clipart-5.jpg";
  animation = setInterval(spin, timeInterval);
  
}

function pickMeme() {
  image.onclick = startSpinning;
  clearInterval(animation);
  image.style.transform = "rotate(0deg)";
  var index = Math.floor(rotation/(360/memes.length));
  image.src = memes[index];
}
  var memes = [ "https://i.pinimg.com/originals/9c/33/5f/9c335f09a7ec57b0e558d237cc95f589.jpg",
    "https://helpcrunch.com/blog/wp-content/uploads/2020/01/customer-service-meme-our-service-is-down.png",
    "https://lh3.googleusercontent.com/proxy/xyKAYASIEOAgob0Cjq-R1JwEpiWHcpizGuKJZtaALHQaTXNR1bfgOu5sF4cIO5iR4DeThBAsHmj_greWe5ShwFu8Jg0RF4Iyu8vcGVQjwCl3dZyrWeaG693qT_hxC7IaYhmzkePAo4zSMZJxWzDlC8jANhxTSS_PoVo",
    "https://www.liveabout.com/thmb/2DU_J0ZMDi1Zkk7BbQKQQpBKt6w=/667x374/filters:no_upscale():max_bytes(150000):strip_icc()/3bjzqd-316ae73412af4d76b43b8cccc4a97ba5.jpg",
  ]
