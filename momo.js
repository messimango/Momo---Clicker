var money = 12000;


// Money per sec
setInterval(function() {
    money = money + (handmadeOwned * .25) + (motherOwned * 5) + (standOwned * 50) + (shopOwned * 500) + (farmOwned * 2500) + (factoryOwned * 50000);
    document.getElementById("money").innerHTML = money;
}, 500)


// click


function addMomo() {
    money += 1;
	document.getElementById("money").innerHTML = money;
}
document.querySelector('#momo').onclick = addMomo;


// handmade

var handmadeCost = 5;
var handmadeOwned = 0;

function addHandmade() {
    if (money >= handmadeCost) {
        handmadeOwned += 1;
        money = money - handmadeCost;
        handmadeCost = Math.round(handmadeCost * 1.3);
        document.querySelector(".handmade-cost").innerHTML = handmadeCost;
        document.getElementById("money").innerHTML = money;
        document.querySelector('.shop-amount-hand').innerHTML = handmadeOwned;
    }  

}
document.querySelector('#hand').onclick = addHandmade;


// mother

var motherCost = 100;
var motherOwned = 0;

function addMother() {
    if (money >= motherCost) {
        motherOwned += 1;
        money = money - motherCost;
        motherCost = Math.round(motherCost * 1.3);
        document.querySelector(".mother-cost").innerHTML = motherCost;
        document.getElementById("money").innerHTML = money;
        document.querySelector('.shop-amount-mother').innerHTML = motherOwned;
    }  

}
document.querySelector('#mother').onclick = addMother;


// Stand

var standCost = 1000;
var standOwned = 0;

function addStand() {
    if (money >= standCost) {
        standOwned += 1;
        money = money - standCost;
        standCost = Math.round(standCost * 1.3);
        document.querySelector(".stand-cost").innerHTML = standCost;
        document.getElementById("money").innerHTML = money;
        document.querySelector('.shop-amount-stand').innerHTML = standOwned;
    }  

}
document.querySelector('#stand').onclick = addStand;

// Shop

var shopCost = 10000;
var shopOwned = 0;

function addShop() {
    if (money >= shopCost) {
        shopOwned += 1;
        money = money - shopCost;
        shopCost = Math.round(shopCost * 1.3);
        document.querySelector(".shop-cost").innerHTML = shopCost;
        document.getElementById("money").innerHTML = money;
        document.querySelector('.shop-amount-shop').innerHTML = shopOwned;
    }  

}
document.querySelector('#shop').onclick = addShop;

// farm 

var farmCost = 100000;
var farmOwned = 0;

function addFarm() {
    if (money >= farmCost) {
        farmOwned += 1;
        money = money - farmCost;
        farmCost = Math.round(farmCost * 1.3);
        document.querySelector(".farm-cost").innerHTML = farmCost;
        document.getElementById("money").innerHTML = money;
        document.querySelector('.farm-amount-farm').innerHTML = farmOwned;
    }  

}
document.querySelector('#farm').onclick = addFarm;


// Factory

var factoryCost = 1000000;
var factoryOwned = 0;

function addFactory() {
    if (money >= factoryCost) {
        factoryOwned += 1;
        money = money - factoryCost;
        factoryCost = Math.round(factoryCost * 1.3);
        document.querySelector(".factory-cost").innerHTML = factoryCost;
        document.getElementById("money").innerHTML = money;
        document.querySelector('.factory-amount-factory').innerHTML = factoryOwned;
    }  

}
document.querySelector('#factory').onclick = addFactory;
