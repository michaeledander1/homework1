// Write your JS here
var hero = {
    name: "Bernie Sanders",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "Fiery Oration",
        damage: 2,
    },
}

// Resting Code
function rest(object) {
    object.health = 10;
    return object
}

function sleepAtInn() {
    rest(hero);
};

// Items
var dagger = {
    type: "dagger",
    damage: 2
}

// Pick up items code
function pickUpItem(heroLikeObject, object) {
    heroLikeObject.inventory.push(object)
}

function pickUpDagger() {
    pickUpItem(hero, dagger)
    return hero
}

// equip code
function equipWeapon(heroLikeObject) {
    if (heroLikeObject.inventory.length !== 0) {
    heroLikeObject.weapon = heroLikeObject.inventory[0]
}}

function heroEquipWeapon() {
    equipWeapon(hero);
}