var keyword= "itsuki";
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
    }, 28000);
    setTimeout(function() {
    $('#page').removeClass('d-none');
    $('#page').addClass('animated fadeIn');
    }, 28500);
  }
}
$('#pwForm').addClass('animated fadeInDown');

$('#like-btn').on('click', function(){
  if ($('#like-link').hasClass('bx-heart')){
      $('#like-link').addClass('bxs-heart');
      $('#like-link').removeClass('bx-heart');
      document.getElementById('permalabel').innerHTML = 'Gottem';
      $('#permalabel').addClass('black');
  }
  else {
    $('#like-link').addClass('bx-heart');
    $('#like-link').removeClass('bxs-heart');
    document.getElementById('permalabel').innerHTML = 'Deez Nuts';
    $('#permalabel').removeClass('black');
  }
});

$('#like-btn2').on('click', function(){
  if ($('#like-link2').hasClass('bx-heart')){
      $('#like-link2').addClass('bxs-heart');
      $('#like-link2').removeClass('bx-heart');
      document.getElementById('permalabel2').innerHTML = 'Gottem';
      $('#permalabel2').addClass('black');
  }
  else {
    $('#like-link2').addClass('bx-heart');
    $('#like-link2').removeClass('bxs-heart');
    document.getElementById('permalabel2').innerHTML = 'Deez Nuts';
    $('#permalabel2').removeClass('black');
  }
});

$('#like-btn3').on('click', function(){
  if ($('#like-link3').hasClass('bx-heart')){
      $('#like-link3').addClass('bxs-heart');
      $('#like-link3').removeClass('bx-heart');
      document.getElementById('permalabel3').innerHTML = 'Gottem';
      $('#permalabel3').addClass('black');
  }
  else {
    $('#like-link3').addClass('bx-heart');
    $('#like-link3').removeClass('bxs-heart');
    document.getElementById('permalabel3').innerHTML = 'Deez Nuts';
    $('#permalabel3').removeClass('black');
  }
});

$('#like-btn4').on('click', function(){
  if ($('#like-link4').hasClass('bx-heart')){
      $('#like-link4').addClass('bxs-heart');
      $('#like-link4').removeClass('bx-heart');
      document.getElementById('permalabel4').innerHTML = 'Gottem';
      $('#permalabel4').addClass('black');
  }
  else {
    $('#like-link4').addClass('bx-heart');
    $('#like-link4').removeClass('bxs-heart');
    document.getElementById('permalabel4').innerHTML = 'Deez Nuts';
    $('#permalabel4').removeClass('black');
  }
});

$('#like-btn5').on('click', function(){
  if ($('#like-link5').hasClass('bx-heart')){
      $('#like-link5').addClass('bxs-heart');
      $('#like-link5').removeClass('bx-heart');
      document.getElementById('permalabel5').innerHTML = 'Gottem';
      $('#permalabel5').addClass('black');
  }
  else {
    $('#like-link5').addClass('bx-heart');
    $('#like-link5').removeClass('bxs-heart');
    document.getElementById('permalabel5').innerHTML = 'Deez Nuts';
    $('#permalabel5').removeClass('black');
  }
});

$('#like-btn6').on('click', function(){
  if ($('#like-link6').hasClass('bx-heart')){
      $('#like-link6').addClass('bxs-heart');
      $('#like-link6').removeClass('bx-heart');
      document.getElementById('permalabel6').innerHTML = 'Gottem';
      $('#permalabel6').addClass('black');
  }
  else {
    $('#like-link6').addClass('bx-heart');
    $('#like-link6').removeClass('bxs-heart');
    document.getElementById('permalabel6').innerHTML = 'Deez Nuts';
    $('#permalabel6').removeClass('black');
  }
});