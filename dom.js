/*
let content=document.createElement('h1');
let btn=document.getElementById('btn');
btn.addEventListener('click',function(){
    window.document.body.appendChild(content);
    content.innerHTML = "hello world!";
    
})

//EX2:

let content2=document.createElement('input');
let btn=document.getElementById('btn');
btn.addEventListener('click',function(){
    content2.setAttribute("type","texte");
    content2.setAttribute("value","hello");
    document.body.appendChild(content2);
})

//Ex3:

let content=document.createElement('h3');


let affiche=document.querySelectorAll('h3');
let a=document.getElementById('p');
affiche.forEach(function (x) {
    x.addEventListener('click', function() {
        if(x.nextElementSibling.style.display!="none"){
            x.nextElementSibling.style.display="none";
        }else{
            x.nextElementSibling.style.display="block";
        }
      
     
      
    });
  });

  
//EX4:
saisie=prompt('saisir une reponse:');
window.onload=function(x){
    let para=document.querySelectorAll('p');
    document.x.style.display='none';
}

*/

//EX5




function createDom(element_name, text, parent) {
    const markup = document.createElement(element_name);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}



let button1=document.getElementById('b1');
let button2=document.getElementById('b2');
let button3=document.getElementById('b3');
let button4=document.getElementById('b4');
let button=document.querySelectorAll('button');

button2.addEventListener("click", () => {
  if(getComputedStyle(createDom("p","cours html",document.body)).display != "none"){
    createDom("p","cours html",document.body).style.display ='none' ;
  } else {
    createDom("p","cours html",document.body).style.remove();
  }
})

button3.addEventListener("click", () => {
    if(getComputedStyle(createDom("p","cours Css",document.body)).display != "block"){
      button3.style.display = "none";
    } else {
     
    }
  })


  button4.addEventListener("click", () => {
    if(getComputedStyle(createDom("p","cours Js",document.body)).display != "block"){
      button4.style.display = "none";
    } else {
     
    }
  })

button1.addEventListener("click", () => {
  if(getComputedStyle(createDom("p","cours html",document.body),createDom("p","cours Css",document.body),createDom("p","cours Js",document.body)).display != "block"){
    button2.style.display = "none";
  } else {
    
  }
})

//EX6

let h1 = document.getElementsByTagName('h1')[0];
let Demarrer = document.getElementById('strt');
let Arreter = document.getElementById('stp');
let Reset = document.getElementById('rst');
let s = 0;
let m = 0;
let h = 0;
let t;

function smh(){
    s++;
    if (s >= 60) {
        s = 0;
        m++;
        if (m >= 60) {
            m = 0;
            h++;
        }
    }
}
function add() {
    smh();
    h1.textContent = (h > 9 ? h : "0" + h) 
        	 + ":" + (m > 9 ? m : "0" + m)
       		 + ":" + (s > 9 ? s : "0" + s);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

timer();
Demarrer.onclick = timer;
Arreter.onclick = function() {
    clearTimeout(t);
}
Reset.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}

//EX7:

let euro=document.getElementById('euro');
let franc=document.getElementById('franc');
euro.addEventListener("input",function(){
    convEuro(this.id,this.value);
})
franc.addEventListener("input",function(){
    convEuro(this.id,this.value);
})