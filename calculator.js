const buttons = [...document.getElementsByTagName('button')];
const display = document.getElementById('display');
const numbersButton = buttons.filter(btn => btn.id === 'number');
const mathButton = buttons.filter(btn => btn.id === '-' || btn.id === '+' || btn.id === '/' || btn.id === '*');
const please_menus = document.getElementById('please_or_menus');
const equals = document.getElementById('equals');
const AC = document.getElementById('AC');
const percent = document.getElementById('%');

let resolt = '';
let bol = false;
let font = 99;

buttons.forEach(btn => btn.addEventListener('click', audio,false));

numbersButton.forEach(elem=>  elem.addEventListener('click', addNumber,  false));
mathButton.forEach(   elem=>  elem.addEventListener('click',  math, false));


please_menus.addEventListener('click',(e)=> {
  resolt = Number(resolt) * -1;
  display.innerHTML = resolt;
});

equals.addEventListener('click',()=> {
if(resolt.length >= 1){
    let a = resolt.split('');
    if(a[a.length - 1] !== '%'){
      debugger
          if(a[a.length - 1] === '+' || a[a.length - 1] === '-' || a[a.length - 1] === '*'  || a[a.length - 1] === '/'){
            delete a[a.length - 1];
            resolt = String(eval(a.join('')));
            display.innerHTML = resolt;
          }else{
            resolt =  String(eval(resolt));
            display.innerHTML = resolt
          }
    }else{
      delete a[a.length - 1];
      display.innerHTML = ( Number(resolt = a.join('')) * Number(display.innerHTML )) / 100 + '%';
    }
  }
});

AC.addEventListener('click', (e)=> {
   resolt = '';
   bol = false;
   font = 99;
   display.innerHTML = '0';
   display.style = `font-size: ${font}%`;
})

percent.addEventListener('click', (e)=>{ 
  resolt = eval(resolt) + e.target.id;
  display.innerHTML = '0';
});



function math(evn){
  if(resolt.length >=1){

  try{
    display.innerHTML = eval(resolt);
    if(display.innerHTML.length >= 17) {
      display.style = `font-size:${font/2-5}%; `;
    }
      
  }
  catch{
    console.log(Error);
  }
  resolt += evn.target.id;
  bol = true;
  let a = resolt.split('');
  if(a[a.length - 1] === '+' || a[a.length - 1] === '-' || a[a.length - 1] === '*'  || a[a.length - 1] === '/'){
        if( a[a.length - 2] === '+' || a[a.length - 2] === '-' || a[a.length - 2] === '*'  || a[a.length - 2] === '/'){
            delete a[a.length - 2];
            resolt = a.join('');
        }
  }
}
  
}



 function addNumber(evn){
      let a = resolt.split('');
      if(a[a.length - 1] !== '%'){
         resolt += evn.target.innerHTML;
      }
     if(Number(display.innerHTML.length) <= 18){
        if(display.innerText.length >= 9){
          if(font > 70)  font -= 6.3
          else if(font > 50) font -= 5
            display.style = `font-size:${font}%; `;
        }
        if(bol === true) clear();
      
         if(display.innerHTML === '0' && evn.target.innerHTML !== '.'){
            display.innerHTML = evn.target.innerHTML;
         } else{
            display.innerHTML += evn.target.innerHTML;
        }
        bol = false;
    }

  
 }



function clear(){
  display.innerHTML = '0';
}
function audio(){
  const audio = document.createElement('audio');
  audio.src = '/mixkit-gear-fast-lock-tap-2857.wav'
  audio.play();
}


