
//String Manipulation Functions//

//1- Reverse a String//

function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}

const chaineOriginale = "gomycode";
const chaineInverse = inverserChaine(chaineOriginale);
console.log(chaineInverse);




//2-Count Characters//
function compterCaracteres(chaine) {
    
    return chaine.length;
}


var chaine = "ghada is the best instructor";
var nombreCaracteres = compterCaracteres(chaine);
console.log("Le nombre de caractères dans la chaîne est : " + nombreCaracteres);






//3 Capitalize Words//

function capitaliserPremiereLettreMots(phrase) {
    
    var mots = phrase.split(" ");
    
    for (var i = 0; i < mots.length; i++) {
        
        mots[i] = mots[i].charAt(0).toUpperCase() + mots[i].slice(1).toLowerCase();
    }
    
    return mots.join(" ");
}


var phrase = "ghada is the best instructor";
var phraseCapitalisee = capitaliserPremiereLettreMots(phrase);
console.log(phraseCapitalisee); 


//Array Fonctions//
//1-Find Maximum and Minimum//
function trouverMaximum(tableau) {
    
    let maximum = tableau[0]; 

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > maximum) {
            maximum = tableau[i]; 
        }
    }

    return maximum;
}
function trouverMinimum(tableau) {
    
    
    let minimum = tableau[0]; 

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] < minimum) {
            minimum = tableau[i]; 
        }
    }

    return minimum;
}
const tableau = [5, 8, 9, 10, 3, 16];
const maximum = trouverMaximum(tableau);
const minimum = trouverMinimum(tableau);

console.log("Maximum:", maximum); 
console.log("Minimum:", minimum);


//2-Sum of Array//

function sommeTableau(tableau) {
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}

const monTableau = [5, 12, 3, 8, 2, 9];
console.log(sommeTableau(monTableau)); 

//3-Filter Array//


function filtrerTableau(tableau, condition) {
    return tableau.filter(element => condition(element));
}

const Tableau = [9, 7, 3, 14, 5, 6, 1];


const autreTableauFiltre = filtrerTableau(Tableau, element => element > 3);

console.log(autreTableauFiltre); 


//Mathematical Functions//

//1-Factorial//

function factorielle(nombre) {
    
    if (nombre < 0) {
        return "La factorielle d'un nombre négatif n'est pas définie.";
    }
    
    else if (nombre === 0) {
        return 1;
    }
    
    else {
        return nombre * factorielle(nombre - 1);
    }
}


console.log(factorielle(-5));
//2-Prime Number Check//

function estPremier(nombre) {
    
 
        for (let i = 2; i <= Math.sqrt(nombre); i++) {
            if (nombre % i === 0) {
                return 'premier';
            }
        }
        return  ' non premier';
    }

console.log(estPremier(13)); 
console.log(estPremier(25)); 

//3-Fibonacci Sequence//

function generateFibonacci(numTerms) {
    let fibonacciSequence = [0, 1]; 
    
    while (fibonacciSequence.length < numTerms) {
        let nextTerm = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2]; 
        fibonacciSequence.push(nextTerm); 
    }
    
    return fibonacciSequence;
}

let numTerms = 12;
let fibSequence = generateFibonacci(numTerms);
console.log(fibSequence);