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

var creepyRatThing = {
    name: "Creepy rat thing",
    health: 5,
    weapon: {
        type: "bite",
        damage: 1
    }
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
    displayHeroStats(hero)
}

//Write `displayStats` function that writes your hero's name, health, weapontype, weapon damage to the page. Call it at the end of your script


function writeStats(character) {
    const stats = `Hero's name: ${character.name}, Hero's weapon: ${character.weapon.type}, Damage Dealt with ${character.weapon.type}: ${character.weapon.damage}`
    return stats
}


function displayHeroStats() {
    const displayStatsSpot = document.getElementById('displayHeroStats')
    displayStatsSpot.innerHTML = writeStats(hero);
}

displayHeroStats(hero);

//Name Change
function changeName() {
    function change() { 
        var userName = document.getElementById('newName').value
        hero.name = userName
        console.log(userName)
        return hero.name
    }
    change()
    displayHeroStats(hero);
}
//fighting
function fightFunction(health, damage) {
    var attack = health - damage
    creepyRatThing.health = attack
}
function fight() {
    fightFunction(creepyRatThing.health, hero.weapon.damage)
    var badGuy = document.getElementById('badGuy');   
    if (creepyRatThing.health <= 0) {
        badGuy.parentNode.removeChild(badGuy);
    }
    console.log(creepyRatThing.health)
    return creepyRatThing.health
}

function powerAttack() {
    ddb = fight()
    return ddb * 2
}