function func(){ 
var k, j, n, d, m, a;
a=document.getElementById("pictures").getElementsByTagName("img");
j=k=a.length;
m=[];
while(k--){m.push(a[k].src)};
k=j;
while(k--){
n=Math.floor(Math.random()*(k+1));
d=m[n];
m[n]=m[k];
m[k]=d};
k=j;
while(k--){a[k].src=m[k]};
};

const PICT = document.getElementById('pictures'); 
PICT.addEventListener('click', (event) => {
PICT.querySelectorAll('img').forEach(el => el.classList.remove('img_pic_active'));
event.target.classList.add('img_pic_active');
});

const MENU = document.getElementById('menu'); 
MENU.addEventListener('click', (event) => {
MENU.querySelectorAll('li').forEach(el => el.classList.remove('nav_active'));
event.target.classList.add('nav_active');
});

const anchors = document.querySelectorAll('a[href*="#"]') 
for (let anchor of anchors) {
anchor.addEventListener('click', function (e) {
e.preventDefault()
const blockID = anchor.getAttribute('href').substr(1)
document.getElementById(blockID).scrollIntoView({
behavior: 'smooth',
block: 'start'
})})};

const TAGS = document.getElementById('tags'); 
TAGS.addEventListener('click', (event) => {
TAGS.querySelectorAll('button').forEach(el => el.classList.remove('tags_active'));
event.target.classList.add('tags_active');
});

function validate_form(){ 
  var x=document.forms["form"]["name"].value;
  var y=document.forms["form"]["email"].value;
  if (x.length==0){
  return false;
  }  
  if (y.length==0){
  return false;
  }
  at=y.indexOf("@");
  dot=y.indexOf("."); 
  if (at<1 || dot <1){
  return false;
  }
   else {
  const SUBMIT = document.getElementById('submit'); 
  SUBMIT.addEventListener('click', () => {
  const subject = document.getElementById('subject').value.toString();
  if (document.getElementById("subject").value == ''){
  document.getElementById('result').innerText="Без темы";}
  else {
  document.getElementById('result').innerText=subject;}

  const describe = document.getElementById('describe').value.toString();
  if (document.getElementById("describe").value == ''){
    document.getElementById('result_desc').innerText="Без описания";}
    else {
  document.getElementById('result_desc').innerText=describe;}
  document.getElementById('message_block').classList.remove('hidden');
    });}
  }

const CLOSE = document.getElementById('close_button'); 
CLOSE.addEventListener('click', () => {
  document.getElementById('result').innerText="";
  document.getElementById('result_desc').innerText="";
  document.getElementById('message_block').classList.add('hidden');
});

/* Индекс слайда по умолчанию */  
var slideIndex = 1;
showSlides(slideIndex);

/* Следующй слайд */
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Предыдущий слайд */
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Слайдер */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

var pressed=0;  
function fon()
{
document.getElementById('but').value = ++pressed;
if (pressed%2!=0)  {
document.getElementById('slider').style.backgroundColor='#648bf0';}
if (pressed%2==0)  {
document.getElementById('slider').style.backgroundColor='#f06c64';}
}

var vert=0;
const PHOTO = document.getElementById('photo'); 
PHOTO.addEventListener('click', () => {
document.getElementsByClassName('tel1').value = ++vert;
if (vert%2!=0) {
document.getElementById('photo1').classList.remove('hidden');}
if (vert%2==0) {
document.getElementById('photo1').classList.add('hidden');}
});

var horiz=0;
const PHOTOO = document.getElementById('photo_'); 
PHOTOO.addEventListener('click', () => {
document.getElementsByClassName('tel2').value = ++horiz;
if (horiz%2!=0) {
document.getElementById('photo1_').classList.remove('hidden');}
if (horiz%2==0) {
document.getElementById('photo1_').classList.add('hidden');}
});
