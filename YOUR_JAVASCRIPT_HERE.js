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

function rest(object) {
    object.health = 10;
    return object
}

function sleepAtInn() {
    rest(hero);
};

document.getElementById("inn").addEventListener('click', function(){
    rest(hero);
});



function pickUpItem() {

}

function equipWeapon() {

}

