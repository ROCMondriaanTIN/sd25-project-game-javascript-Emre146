'use strict'

const fiches= [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
];
function setFiche(id, fiche){
   // fiches[id]= fiches;
   let rij=Math.floor(id/7);
   let kolom=id%7;
   fiches[rij][kolom]=fiche;
   console.log('rij'+rij);
   console.log('kolom'+kolom);
   console.log(fiches);
}