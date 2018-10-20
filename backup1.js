// Write your JS here

let hero = {
 name : 'M\'bak Nana',
 heroic : true,
 inventory : [],
 health : 10,
 weapon : {
     type : 'sword',
     damage :2
 }
}

function rest (object) {
object.health =10
return object;
};


function pickUpItem (hero,object) {
   hero.inventory.push(object)
};


function equipWeapon (hero) {
   if (hero.inventory[0]!==undefined){
        hero.weapon = hero.inventory[0]

    }
};
