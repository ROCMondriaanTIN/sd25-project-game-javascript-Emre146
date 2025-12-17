'use strict'
const cells = document.querySelectorAll('.cells div')

function bindCells(){
    for(let c =0;c<cells.length;c++)

{
cells[c].addEventListener('click',handleCellClick) 
}   
 }

 function showFiches(){
    //loop de rijden af
    for(let rij=0;rij<6;rij++)
    {
        
        for(let kolom=0;kolom<7;kolom++)
        {
            let positie=rij*7+kolom;
            cells[positie].innerHTML=fiches[rij][kolom];
        }
        
        
    }
    
 }