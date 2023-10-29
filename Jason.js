let nom =["Emmanuel_Macron","Marine_Le_Pen","Jean-Luc_Mélenchon","François_Hollande","Nicolas_Sarkozy","Édouard_Philippe","Anne_Hidalgo"]
let caracterstique=["poltron","téméraire","agile","héroïque","cannibale"]
let santé = 50

class Personnage {
    constructor (nom , caractéristique) {
        this.nom = nom;
        this.caracterstique = caractéristique
    }
}

let survivant1 = new Personnage (nom.splice(Math.floor(Math.random() * nom.length),1) , caracterstique.splice(Math.floor(Math.random() * caracterstique.length),1));
let survivant2 = new Personnage (nom.splice(Math.floor(Math.random() * nom.length),1) , caracterstique.splice(Math.floor(Math.random() * caracterstique.length),1));
let survivant3 = new Personnage (nom.splice(Math.floor(Math.random() * nom.length),1) , caracterstique.splice(Math.floor(Math.random() * caracterstique.length),1));
let survivant4 = new Personnage (nom.splice(Math.floor(Math.random() * nom.length),1) , caracterstique.splice(Math.floor(Math.random() * caracterstique.length),1));
let survivant5 = new Personnage (nom.splice(Math.floor(Math.random() * nom.length),1) , caracterstique.splice(Math.floor(Math.random() * caracterstique.length),1));

let survivantVivant = [survivant1,survivant2,survivant3,survivant4,survivant5]
let survivantMort = []

while (santé > 0 && survivantVivant.length > 0){
    let survivantAttacked = survivantVivant.splice(Math.floor(Math.random() * survivantVivant.length),1);
    let chance = Math.random() * 1;
    if (chance > 0.5){
        if (chance > 0.7){
            survivantMort.push(survivantAttacked);
            console.log("le survivant " + survivantAttacked[0].nom + " est mort sans chance de se défendre ");
            console.log(santé);
        } else {
            console.log("le survivant  " + survivantAttacked[0].nom + " esquive et inflige 10 dégats");
            santé -= 10 ;
            console.log(santé);
            survivantVivant.push(survivantAttacked);
        }

    }else {
        console.log(survivantAttacked[0].nom + " meurt mais dans son dernier souffle attaque Jason et lui inlige 15 dégâts" );
        santé-= 15 ;
        console.log(santé);
        
        survivantMort.push(survivantAttacked);
    }
    
}

function comptage(liste){
    for (let i = 0 ; i < liste.length ; i++  ){
        console.log(liste[i].nom);
    }
}


if (santé <= 0 && survivantVivant.length == 0 ) {
    console.log(" tout le monde est mort ")
}else if (santé > 0) {
    console.log("Jason à tué tout le monde et les morts sont " + comptage (survivantMort)+" il restait " + santé +" points de vie à Jason")
}else {
    console.log("les survivants " + comptage(survivantVivant) + " et font un mémorial en l'honneur des morts qui sont " +  comptage(survivantMort))
}

function comptage(liste){
    for (let i = 0 ; i < liste.length ; i++  ){
        console.log(liste[i].nom);
    }
}

//j'ai commencé le code à 14h37 et il est 22h21 je n'ai pas truvé de solutions après trop de méthode utilisés
