// Write your JS here

let hero = {
 name : 'M\'bak Nana',
 heroic : true,
 inventory : [{type : 'sword',damage :2}],
 health : 10,
 weapon : {
     type : 'sword',
     damage :2
 }
}

function rest (object) {
object.health =10;
console.log(object.health);
console.log('function rest');
displayStats();

return object;


};


function pickUpItem (hero,object) {
   hero.inventory.push(object)
   console.log('function pickUpItem');
   displayStats();


};


function equipWeapon (hero) {
   if (hero.inventory[0]!==undefined){
        hero.weapon = hero.inventory[0]

    }
    console.log('function equipWeapon');

};
let displayed = 0;
function displayStats () {
    if (displayed === 0){
        let liste1 = document.createElement("ul");
        let heroName = document.createElement("li");
        let heroic = document.createElement("li");
        let inventory = document.createElement("li");
        let health = document.createElement("li");
    
        heroName.id="heroName";
        heroic.id="heroic";
        inventory.id="inventory";
        health.id="health";
        let displayStat = document.getElementById("displayStat");
    
        heroName.innerText = 'Name :' + hero.name 
        heroic.innerText = 'heroic :' + hero.heroic
        inventory.innerText = 'inventory :'+ hero.inventory[0].type
        health.innerText = 'health :'+hero.health
    
        console.log('calling display stats')
        console.log(heroName.innerText)
    
        displayStat.appendChild(liste1);
    
        liste1.appendChild(heroName);
        liste1.appendChild(heroic);
        liste1.appendChild(inventory);
        liste1.appendChild(health);
    
        displayed = 1   
    }

    if (displayed ===1) {
        heroName.innerText = 'Name :' + hero.name 
        heroic.innerText = 'heroic :' + hero.heroic
        inventory.innerText = 'inventory :'+ hero.inventory[0].type
        health.innerText = 'health :'+hero.health
    }
   


    //let heroName = document.createElement("h2");

}



function submitNewName (){
    let newName
    newName = document.getElementById("newName")
    console.log(newName)
    console.log(newName.value)
    hero.name = newName.value
    displayStats();

}