window.addEventListener('scroll', function() {
  const targetElement = document.getElementById('cont5mini');
  if (window.scrollY >= 1500) {
    targetElement.classList.add('active');
  } else {
    targetElement.classList.remove('active');
  }
  var x=0;

function myfun(){
 if(x<256){
    x++;
    document.getElementById("count").innerHTML=x;
 }
}
setInterval(myfun,1);

var y=0;

function myfun1(){
 if(y<28){
    y++;
    document.getElementById("count1").innerHTML=y;
 }
}
setInterval(myfun1,1);

var z=0;

function myfun2(){
 if(z<1306){
    z++;
    document.getElementById("count2").innerHTML=z;
 }
}
setInterval(myfun2,1);

  var a=0;
  function myfun3(){
    if(a<326){
       a++;
         document.getElementById("count3").innerHTML=a;
    }
   }
     setInterval(myfun3,20);
});


  window.addEventListener('scroll', function() {
    const targetElement1 = document.getElementById('abcouple1img');
    const targetElement2 = document.getElementById('abcoupleinfo');
    if (window.scrollY >= 50) {
      targetElement1.classList.add('active');
      targetElement2.classList.add('active');
    } else {
      targetElement1.classList.remove('active');
      targetElement2.classList.remove('active');
    }
  });
  window.addEventListener('scroll', function() {
    const targetElement3 = document.getElementById('abcont6img');
    const targetElement4 = document.getElementById('modulation');
    if (window.scrollY >= 1000) {
      targetElement3.classList.add('active');
      targetElement4.classList.add('active');
    } else {
      targetElement3.classList.remove('active');
      targetElement4.classList.remove('active');
    }
  });
  