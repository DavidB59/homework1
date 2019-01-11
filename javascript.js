// Write your JS here

let hero = {
 name : 'M\'bak Nana',
 heroic : true,
 inventory : [{type : 'sword',damage :2}],
 health : 10,
 weapon : {
     type : 'sword',
     damage :5
 }
}

let goblin = {
    health : 4,
    weapon : {
        type : 'dagger',
        damage :2
    }
   }

   let ogre = {
    health : 12,
    weapon : {
        type : 'gourdin',
        damage :4
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
let fought = 0





function fight (ennemy){

    let initialHealthEnnemy = ennemy.health
    let damageReceived;
    let damageInflicted;

    while( hero.health > 0 && ennemy.health >0) {
    damageReceived = Math.floor(Math.random()*ennemy.weapon.damage)
    damageInflicted = Math.floor(Math.random()*hero.weapon.damage)
    
    hero.health = hero.health - damageReceived;
    ennemy.health = ennemy.health - damageInflicted;
    }

    
   
    let whoWin
    if (hero.health <= 0) {
        whoWin ='you lose'
    
    }
    else (  whoWin ='you win'
        )
        displayStats();

    fightID = document.getElementById("fightDiv")


    if (fought === 0){
        let victory = document.createElement("h2");
        victory.id = "victory"

        fightID.appendChild(victory);
        victory.innerText =whoWin
        fought =1
        console.log( 'condition fulfilled ' + fought)
    }

    else {   victory.innerText =whoWin
        console.log(whoWin)
    }

    ennemy.health = initialHealthEnnemy
}

function test(){
    let damageInflicted = Math.floor(Math.random()*hero.weapon.damage)
console.log(damageInflicted)
console.log(test)

}