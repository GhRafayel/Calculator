const buttons = [...document.getElementsByTagName('button')];
const display = document.getElementById('display');
const numbersButton = buttons.filter(btn => btn.id === 'number');
const mathButton = buttons.filter(btn => btn.id !== 'number' && btn.id !== 'AC' && btn.id !== 'please_or_menus' && btn.id !== 'equals');
const please_menus = document.getElementById('please_or_menus');
const equals = document.getElementById('equals');
const AC = document.getElementById('AC');

let resolt = '';
let bol = false;
let font = 99;

please_menus.addEventListener('click',(e)=> {
  resolt = Number(resolt) * -1;
  display.innerHTML = resolt;
});
equals.addEventListener('click',()=> {
  let a = resolt.split('');
  if(a[a.length - 1] === '+' || a[a.length - 1] === '-' || a[a.length - 1] === '*'  || a[a.length - 1] === '/'){
    delete a[a.length - 1];
    resolt = eval(a.join(''));
    display.innerHTML = resolt;
  }else{
    resolt =  eval(resolt);
    display.innerHTML = resolt
  }
  });
AC.addEventListener('click', (e)=> {
   resolt = '';
   bol = false;
   font = 99;
   display.innerHTML = '0';
})
 numbersButton.forEach(elem=>  elem.addEventListener('click', addNumber,  false));
 mathButton.forEach(   elem=>  elem.addEventListener('click',  math, false));

function math(evn){
  try{
    display.innerHTML = eval(resolt);
    console.log(display.innerText.length)

    if(display.innerHTML.length >= 17) {
      display.style = `font-size:${font/2-3}%; `;
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

 function addNumber(evn){
      resolt += evn.target.innerHTML;
     if(Number(display.innerHTML.length) <= 18){
        if(display.innerText.length >= 9){
          if(font > 70)  font -= 6.3
          else if(font > 50) font -= 5
            display.style = `font-size:${font}%; `;
            console.log(font)
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


