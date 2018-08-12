//Starting last 4 hours

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
    var removeDagger = document.getElementById('dagger');
    removeDagger.parentNode.removeChild(removeDagger);    
    return (hero, removeDagger)
}

// equip code
function equipWeapon(heroLikeObject) {
    if (heroLikeObject.inventory.length !== 0) {
    heroLikeObject.weapon = heroLikeObject.inventory[0]
}}

function heroEquipWeapon() {
    equipWeapon(hero);
}

//Write `displayStats` function that writes your hero's name, health, weapontype, weapon damage to the page. Call it at the end of your script


function writeStats(character) {
    const stats = `Hero's name: ${character.name}, Hero's weapon: ${character.weapon.type}, Damage Dealt with ${character.weapon.type}: ${character.weapon.damage}`
    return stats
}
console.log(writeStats(hero));


function displayHeroStats() {
    const displayStatsSpot = document.getElementById('displayHeroStats')
    displayStatsSpot.innerHTML = writeStats(hero);
}

displayHeroStats(hero);

//Working on changing name via form
function changeName() {
    var userName = window.prompt("Change hero name")
    hero.name = userName
    console.log(userName)
    return hero.name
    }

changeName();