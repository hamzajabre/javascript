/*
let maVariable='azer';
console.log(typeof(maVariable));

let a1='12.45.565fgfs';
let b1=545;
parseInt(a1);
console.log(parseInt(a1));//convertit une chaine de charactères en entier
console.log(parseFloat(a1));//convertit une chaine en float
console.log(b1.toString());//convertit un number en chaine de charactère

let ab="bonjour ";
let ac="tout le monde";
console.log(ab + ac);

let v1='45';
let v2='45aezr';
console.log(v1!==45);


//exercice

let a=1;
let b=8;
let c=4;

if(a==b && b==c){
        console.log('les valeurs sont identiques');
}else if(a==b || a==c || b==c){
        console.log('deux valeurs sont identiques');
}
else{
    console.log('les valeurs sont différentes');
}
//ex
let d=prompt('valeur','entrez une valeur');
if(d>=100){
    console.log('bravo');
}
else{
    console.log('retentez votre chance');
}

//ex
let age=prompt("saisir un age:");
if(age<18){
    console.log("vous etes mineur");
}else if(age==18){
    console.log("super tu peux picoler");
}else if(age>18 && age<65){
    console.log("tu es majeur");
}else if(age>=65 && age<67){
    console.log("super cest la retraite");
}else if(age>67){
    console.log("RIP");
}



let couleur1=prompt('entrer la couleur1');
let couleur2=prompt('entrer la couleur 2')
if(couleur1=='bleu' && couleur2=='rouge' || couleur1=='rouge' && couleur2=='bleu'){
    console.log('violet');
}
else if(couleur1=='rouge' && couleur2=='jaune'){
    console.log('orange');
}
else if(couleur1=='bleu' && couleur2=='jaune' ){
    console.log('vert');
}
else{
    console.log('invalid color');
}



let age=prompt("saisir un age:");
switch(true){
    case age<18:
        console.log('vous etes mineur');
        break;
    case age==18:
        console.log('vous etes mineur');
        break;
    case age>18 && age<65:
        console.log('tu es majeur');
        break;
    case age>=65 && age<67:
        console.log('super cest la retraite');
        break;
    case age>67:
        console.log('RIP');
}



//EX3

function name1(nom,prenom){
    console.log("je suis "+ nom +" " + prenom);
}

name1('jabre','hamza');

let name2=(nom,prenom)=>{
    console.log("je suis " +nom +" "  +prenom);
}
name2("jabre","hamza");



//EX4

let n=0;
let id=setInterval(num,1000);
function num(){
    n++;
    console.log(n);
    if(n==5){
        clearInterval(id)  ;    
    }    
}

let a=0;
function num2(){
    setTimeout(()=>{
        a++
        console.log(a)
        if(a<5){
            num2()
        }
    }, 1000)
}
num2()

//Ex6

function bissextile(annee){
    if(annee%4!==0 ){
        return false;
    }else if(annee%100!==0 && annee%4==0){
        return true;
    }else if(annee%400!==0 && annee%100==0 && annee%4==0){
        return false;
    }else if(annee%100==0 && annee%400==0 && annee%4==0){
        return true;
    }


}
console.log(bissextile(2012));

let input=prompt('veuillez entrer une annee');
let year=parseInt(input);
function bissextile2(annee){

    if ((annee%4==0) && ((annee%100!==0) || (annee%400==0))){
        console.log(true," c'est une anne bissextile");
    } 
    else{
        console.log(false);
    } 
}
bissextile2(year);



//EX7:
let number = Math.round(Math.random()*10)
let essais = 3
let saisie = window.prompt("Trouver un chiffre entre 1 et 10")

while(saisie != number && essais > 0){
    essais--
    if(saisie > number){
        window.alert("Le nombre est en dessous")
    }else{
        window.alert("Le nombre est au dessus")
    }
    if(essais > 0){
        saisie = window.prompt("Trouver un chiffre entre 1 et 10")
    }
}

if(saisie == number){
    window.alert("Bravo vous avez trouvé !")
}else{
    alert("Vous n'avez plus d'essais")
}

*/

