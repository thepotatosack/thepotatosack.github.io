var keyword= "egg";
var password= "";

function formChanged(){
  password = document.getElementsByName("password")[0].value;
  console.log(password);
}
//animation initial menu + svg
function pwCheck(){
  if(password != keyword){
    console.log(password);
      $('#pwField').addClass('animated shake');
        $('#pwField').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $('#pwField').removeClass('animated shake');
        });
      }
  else{
    console.log("success!");
    $('#pwPage').addClass('animated fadeOutUp');
    setTimeout(function() {
    $('#heart').removeClass('d-none');
  }, 500);
    setTimeout(function() {
    $('#heart').fadeOut('normal');
  }, 2000);
    setTimeout(function() {
    $('#sizer').removeClass('d-none');
    $('#load').removeClass('d-none');
    $('#loader').addClass('animated bounce');
  }, 2500);
    setTimeout(function() {
    $('#load').fadeOut('normal');
    $('#sizer').fadeOut('normal');
    }, 13500);
    setTimeout(function() {
      $('#load2').removeClass('d-none');
    }, 14000);
    setTimeout(function() {
      $('#load2').fadeOut('normal');
    }, 19000);
    setTimeout(function() {
      $('#load3').removeClass('d-none');
    }, 19500);
    setTimeout(function() {
      $('#load3').fadeOut('normal');
    }, 23000);
    setTimeout(function() {
    $('#page').removeClass('d-none');
    $('#page').addClass('animated fadeIn');
    }, 23500);
  }
}
$('#pwForm').addClass('animated fadeInDown');

$('#like-btn').on('click', function(){
  if ($('#like-link').hasClass('bx-coffee')){
      $('#like-link').addClass('bxs-coffee');
      $('#like-link').removeClass('bx-coffee');
      document.getElementById('permalabel').innerHTML = 'EGGS DEE';
      $('#permalabel').addClass('black');
  }
  else {
    $('#like-link').addClass('bx-coffee');
    $('#like-link').removeClass('bxs-coffee');
    document.getElementById('permalabel').innerHTML = 'Egg';
    $('#permalabel').removeClass('black');
  }
});

$('#like-btn2').on('click', function(){
  if ($('#like-link2').hasClass('bx-coffee')){
      $('#like-link2').addClass('bxs-coffee');
      $('#like-link2').removeClass('bx-coffee');
      document.getElementById('permalabel2').innerHTML = 'EGGS DEE';
      $('#permalabel2').addClass('black');
  }
  else {
    $('#like-link2').addClass('bx-coffee');
    $('#like-link2').removeClass('bxs-coffee');
    document.getElementById('permalabel2').innerHTML = 'Egg';
    $('#permalabel2').removeClass('black');
  }
});

$('#like-btn3').on('click', function(){
  if ($('#like-link3').hasClass('bx-coffee')){
      $('#like-link3').addClass('bxs-coffee');
      $('#like-link3').removeClass('bx-coffee');
      document.getElementById('permalabel3').innerHTML = 'EGGS DEE';
      $('#permalabel3').addClass('black');
  }
  else {
    $('#like-link3').addClass('bx-coffee');
    $('#like-link3').removeClass('bxs-coffee');
    document.getElementById('permalabel3').innerHTML = 'Egg';
    $('#permalabel3').removeClass('black');
  }
});

$('#like-btn4').on('click', function(){
  if ($('#like-link4').hasClass('bx-coffee')){
      $('#like-link4').addClass('bxs-coffee');
      $('#like-link4').removeClass('bx-coffee');
      document.getElementById('permalabel4').innerHTML = 'EGGS DEE';
      $('#permalabel4').addClass('black');
  }
  else {
    $('#like-link4').addClass('bx-coffee');
    $('#like-link4').removeClass('bxs-coffee');
    document.getElementById('permalabel4').innerHTML = 'Egg';
    $('#permalabel4').removeClass('black');
  }
});

$('#like-btn5').on('click', function(){
  if ($('#like-link5').hasClass('bx-coffee')){
      $('#like-link5').addClass('bxs-coffee');
      $('#like-link5').removeClass('bx-coffee');
      document.getElementById('permalabel5').innerHTML = 'EGGS DEE';
      $('#permalabel5').addClass('black');
  }
  else {
    $('#like-link5').addClass('bx-coffee');
    $('#like-link5').removeClass('bxs-coffee');
    document.getElementById('permalabel5').innerHTML = 'Egg';
    $('#permalabel5').removeClass('black');
  }
});

$('#like-btn6').on('click', function(){
  if ($('#like-link6').hasClass('bx-coffee')){
      $('#like-link6').addClass('bxs-coffee');
      $('#like-link6').removeClass('bx-coffee');
      document.getElementById('permalabel6').innerHTML = 'EGGS DEE';
      $('#permalabel6').addClass('black');
  }
  else {
    $('#like-link6').addClass('bx-coffee');
    $('#like-link6').removeClass('bxs-coffee');
    document.getElementById('permalabel6').innerHTML = 'Egg';
    $('#permalabel6').removeClass('black');
  }
});


var container = document.getElementById('animate');
var emoji = ['🦵', '🥚', '🍳', '🐳', '🐋', '🐝', '☕', '🥔'];
var circles = [];

for (var i = 0; i < 7; i++) {
  addCircle(i * 1500, [10 + 0, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 1500, [10 + 0, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 1500, [10 - 200, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 1500, [10 + 200, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 1500, [10 - 400, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 1500, [10 + 400, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 1500, [10 - 600, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 1500, [10 + 600, 300], emoji[Math.floor(Math.random() * emoji.length)]);
}



function addCircle(delay, range, color) {
  setTimeout(function() {
    var c = new Circle(range[0] + Math.random() * range[1], 80 + Math.random() * 4, color, {
      x: -0.15 + Math.random() * 0.3,
      y: 1 + Math.random() * 1
    }, range);
    circles.push(c);
  }, delay);
}

function Circle(x, y, c, v, range) {
  var _this = this;
  this.x = x;
  this.y = y;
  this.color = c;
  this.v = v;
  this.range = range;
  this.element = document.createElement('span');
  /*this.element.style.display = 'block';*/
  this.element.style.opacity = 0;
  this.element.style.position = 'absolute';
  this.element.style.fontSize = '26px';
  this.element.style.color = 'hsl('+(Math.random()*360|0)+',80%,50%)';
  this.element.innerHTML = c;
  container.appendChild(this.element);

  this.update = function() {
    if (_this.y > 2820) {
      _this.y = 300 + Math.random() * 4;
      _this.x = _this.range[0] + Math.random() * _this.range[1];
    }
    _this.y += _this.v.y;
    _this.x += _this.v.x;
    this.element.style.opacity = 1;
    this.element.style.transform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.webkitTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.mozTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
  };
}

function animate() {
  for (var i in circles) {
    circles[i].update();
  }
  requestAnimationFrame(animate);
}

animate();