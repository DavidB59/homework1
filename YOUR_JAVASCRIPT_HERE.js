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
object.health =10;
console.log(object.health);
console.log('function rest');
return object;


};


function pickUpItem (hero,object) {
   hero.inventory.push(object)
   console.log('function pickUpItem');

};


function equipWeapon (hero) {
   if (hero.inventory[0]!==undefined){
        hero.weapon = hero.inventory[0]

    }
    console.log('function equipWeapon');

};
