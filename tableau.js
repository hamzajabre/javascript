/*
//EX8:

let tabFruits=["banane","pomme","melon","fraise","mangue"];
for(let i=0; i<tabFruits.length; i++){
    console.log(tabFruits[i]);
}

//EX9:

let semaine=["lun","mra","mer","jeu","ven","sam","ddi"];

semaine.pop();
console.log(semaine);
semaine.push("dim");
semaine[1]="mar";
console.log(semaine.length);
console.log(semaine[2]);


//EX10

let tab=["banane","pomme","melon","fraise","mangue","orange","clementine"];
for (let fruit in tab)
{
  document.write(tab[fruit] + "<br>");
}
let trouvé=0;
let index=0;
let demande=prompt("choisissez un fruit:");
for(fruit in tab){
    if(demande===tab[fruit]){
        tab[index]='';
        alert("ok!");
        trouvé=1;
        

       
    }
    index++

}    
if(trouvé==0){
    alert("indisponible");
}
let fruit=0;
for(fruit in tab){
    document.write(tab[fruit]+ "<br>");
}


var fruits = ["banane","pomme","melon","fraise","mangue","orange","clementine"];
 //Affiche la liste de fruits disponibles;
 for (var i in fruits)
  {
    document.write(fruits[i] + "<br>");
  }
//Demande au client quel fruit il désire acheter:
  var demande_client = prompt("Quelle fruit voulez vous acheter");
  var trouve=0;
  var t=0;
  for (var i in fruits)
  {
    if(demande_client===fruits[i])
      {
        fruits[t]='';
        alert('ok');
        trouve=1; 
      }
      t++;   
  }
  if(trouve==0){
      document.write("</br>Indisponible</br>");
  }
  document.write("</br>Deuxième affichage</br>");
  var i=0;
  for (var i in fruits)
    {
      document.write(fruits[i] + "<br>");
    }

//EX11:
let classe1 = {
    eleve: [
      {
        name: "Jean",
        notes: [1, 4, 6]
        
      }
      
    ]
   
    
  }

  let classe2 = {
    eleve: [
      {
        name: "pascal",
        notes: [4, 8, 2]
    
      }
    
    ]
  
  }
console.log(classe1)  ;



Notes = new Array([10,12,14],[13,16,19],[13,11,14],[16,12,10],[20,13,13]);
NomEleves = new Array("Dupont", "Durand", "Petit", "Martin", "Legrand");
console.log(Notes);


let obj={};
obj['name']=['alex','jeff','flo','marc'];
obj['note']=[[5,6,8],[8,6,7],[5,6,7],[5,9,4]];
console.log(obj);



let classe1 = [
        {
            nom: "alex",
            note: [5, 6, 8]
        },
        {
            nom: "flo",
            note: [5, 2, 7]
        },
        {
            nom: "mark",
            note: [4, 8, 9]
        }
    ]

let classe2 = [
        {
            nom: "jean",
            note: [4, 8, 7]
        },
        {
            nom: "karl",
            note: [5, 7, 7]
        },
        {
            nom: "mike",
            note: [4, 9, 7]
        }
    ]


let sum;
for(let classe in classe1){
    sum= classe1[classe].note;
    console.log(sum);
    const initialValue=0;
    const sum2=sum.reduce((a,b) => a+b,initialValue);
    console.log(sum2);
    console.log(classe1[classe].nom +" a une moyenne de "+ Math.round(sum2/3));
   
}


for(let classe in classe2){
    sum= classe2[classe].note;
    console.log(sum);
    const initialValue=0;
    const sum2=sum.reduce((a,b) => a+b,initialValue);
    console.log(sum2);
    console.log(classe2[classe].nom +" a une moyenne de "+ Math.round(sum2/3));
}

moyenne_classe1=(6+5+7)/3;
moyenne_classe2=(6+6+7)/3;
console.log("moyenne de la classe1 "+moyenne_classe1);
console.log("moyenne de la classe2 "+moyenne_classe2);
console.log("la classe vainqueur est la classe2");





 
let tab = [3, 4, 50, -45, 64];
let max = tab.reduce(function (x, y) {
  return Math.max(x, y);
});

console.log(max);


function MyMax(tab){
    let a = tab.length;
    max = tab[a-1];
    while (a--){
        if(tab[a] > max){
            max = tab[a]
        }
    }
            return max;
};
let tab2 = [1, 5, 65, 2, 3];
console.log(MyMax(tab));

//EX13

let tab=[1,2,3];
let tab2=[...tab,...tab.splice(0,2).reverse()];
console.log(tab2);

//EX14

tab=[1,2,5,8,-2,-3];
let result=tab.filter(function(number){
    return number>0;
});

console.log(result);
*/
//EX15


/* tab = [1, 5, 6, 7, 9];
n = 3;
function multiple(tab, n) {
    let result2 = tab.filter(function (number) {
        return number % n === 0;
    });
    console.log(result2);
}
multiple(); 
//EX15

function multiples(nums, n) {
    return nums.filter(function (x) {
        return x % n === 0;
    });
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 2; let result = multiples(nums, n);
console.log(result);



//EX16
let recherche=prompt("veuillez saisir votre nom de film:")
recherche=recherche.toLowerCase();
function tab(t,recherche){
  
  let result=t.filter(x=>x.toLowerCase().includes(recherche));
    return  result;
   
}

t=["filmun","filmdeux","starun","startrois"];
recherche="film";
console.log(tab(t,recherche) );


//EX17

function chaine(t){
  let result=t.map(x=>x.length<5);
  return result;
}


t=["azer","qdgete","sqddgrt","sdgfgfh","azerty"];
console.log(chaine(t));



//EX18

let t = [
  {
    food: "salade",
    isVegetarian: true
  },
  {
    food: "sandwich",
    isVegetarian: true
  },
  {
    food: "burger",
    isVegetarian: false
  }
]

function tab(t) {
  let result = t.map(x => {
    if (x.isVegetarian == true) {
      return "food est cosommable par les végétariens";
      
    }
    else {
      return "food n'est pas consommable par les végétariens";
    }
  }
  )
  return result;
}
console.log(tab(t));


//EX19

let movies = 
[
  {
    name: 'Crazy Rich Asians',
    rating: 93
  },
  {
    name: 'Skyscraper',
    rating: 46
  },
  {
    name: 'Leave No Trace',
    rating: 100
  },
  {
    name: 'White Boy Rick',
    rating: 60
  }
]

const determinateLabel = rating => {
    if (rating < 60)
      return 'rotten';
    else if((rating >= 60) && (rating <= 75))
      return 'fresh';
    else if(rating > 75)
      return 'certified fresh';
  }
  
  const ratingMovies = movies => {
    return movies.map(movie => {
      movie.label = determinateLabel(movie.rating);//creation du label et appel de fonction .
      return movie;
    })
  }
  

  console.log(ratingMovies(movies));

  

  //EX20
  t=[2,2.5,3.66,5,8];
  function circonférence(t){
    t.map(r=>{
      circ=2*Math.PI*t;
     
    })
    return circ ;
  
}

console.log(circonférence(t));



//EX21
class Personne{
  constructor(nom,prenom){
    this.nom=nom
    this.prenom=prenom
  }
  direBonjour(){
    console.log("bonjour,je m'appelle " +this.nom ,this.prenom);
  }
}

let Nicolas=new Personne("Maligue","Nicolas");
Nicolas.direBonjour();

class Walk extends Personne{
  constructor(nom,prenom,walk){
    super(nom,prenom)
    this.walk=walk
  }
  isWalk(){
    super.direBonjour()
    if(this.walk===true){
      console.log("et je marche");
    }else{
      console.log("et je ne marche pas");
    }
  }
}
let Hamza = new Walk("jabre","Hamza",false);
Hamza.isWalk();

//EX23
class Velo{
  constructor(nom,poids,couleur){
    this.nom=nom
    this.couleur=couleur
    this.poids=poids
   
    
  }
  move(start,end){
    console.log("je me deplace de "+start+" à "+end+" avec mon "+this.nom+ " "+this.couleur);
    
  }
  
}
let vtt= new Velo("velo","","rouge");
vtt.move("montpellier","sete");

//EX24

class VeloElectrique extends Velo{
  constructor(nom,poids,couleur,puissance,vitesse){
    super(nom,poids,couleur)
    this.puissance=puissance
    this.vitesse=vitesse
  }
  marche(){
    super.move("montpellier","nimes")
    console.log(" à "+this.vitesse+"km/h."+" mon velo fait "+this.puissance+"watt,"+" c'est une bombe!")
  }
}
let vel =new VeloElectrique("velo","","rouge");
vel.marche("200","400");
*/
//EX25

class Titulaire{
  constructor(nom,prenom){
    this.nom=nom
    this.prenom=prenom
  }
  sePresenter()
 
}

class Compte extends Titulaire{
  constructor(nom,prenom,montant){
    super(nom,prenom)
    this.montant=0

  }
  créditer(){

  }
  débiter(){

  }
  afficherSolde(){

  }
}

class enfantCompteEpargne extends Compte{
  constructor(nom,prenom,montant,taux){
    super(nom,prenom,montant)
    this.taux=taux
  }
  setInterval()
}