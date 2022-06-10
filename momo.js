var money = 1000000;
var clickMulti = 1;

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
  
// upgrade checker
var upgradeCheck1 = true;
var upgradeCheck2 = true;
var upgradeCheck3 = true;
var upgradeCheck4 = true;
var upgradeCheck5 = true;

// STATS
var total = 0;
var totalClicks = 0;
var totalBuild = 0;  


// Momo per sec for buildings
var handmadePS = 0.2;
var motherPS = 1;
var standPS = 10;
var shopPS = 50;
var farmPS = 250;
var factoryPS = 5000;


// Money per sec
setInterval(function() {
    money = money + (handmadeOwned * (handmadePS / 10)) + (motherOwned * (motherPS / 10)) + (standOwned * (standPS / 10)) + (shopOwned * (shopPS / 10)) + (farmOwned * (farmPS / 10)) + (factoryOwned * (factoryPS / 10));
    total = total + (handmadeOwned * (handmadePS / 10)) + (motherOwned * (motherPS / 10)) + (standOwned * (standPS / 10)) + (shopOwned * (shopPS / 10)) + (farmOwned * (farmPS / 10)) + (factoryOwned * (factoryPS / 10));
        
    money = Math.round(money * 100) / 100;
    document.getElementById("money").innerHTML = formatter.format(money);
    document.getElementById("total").innerHTML = formatter.format(total);

}, 100)


// click


function addMomo() {
    money += clickMulti;
    total++;
    totalClicks++;
	document.getElementById("money").innerHTML = formatter.format(money);
    document.getElementById("total-click").innerHTML = totalClicks;
}
document.querySelector('#momo').onclick = addMomo;


// handmade

var handmadeCost = 5;
var handmadeOwned = 0;

function addHandmade() {
    if (money >= handmadeCost) {
        handmadeOwned++;
        totalBuild++;
        money = money - handmadeCost;
        handmadeCost = Math.round(handmadeCost * 1.13);
        document.querySelector(".handmade-cost").innerHTML = formatter.format(handmadeCost);
        document.getElementById("money").innerHTML = formatter.format(money);
        document.querySelector('.shop-amount-hand').innerHTML = handmadeOwned;
        document.getElementById("total-build").innerHTML = totalBuild;
        document.getElementById("hand-ps").innerHTML = Math.round((handmadeOwned * handmadePS) * 100) / 100;

        if (handmadeOwned > 4 && upgradeCheck1) {
            document.getElementById("mother").classList.remove("hidden");
            upgrade1.style.display = 'inline-block';
            upgradeCheck1 = false;
        }
        if (handmadeOwned > 9 && upgradeCheck2) {
            upgrade2.style.display = 'inline-block';
            upgradeCheck2 = false;
        }
        if (handmadeOwned > 19 && upgradeCheck4) {
            upgrade4.style.display = 'inline-block';
            upgradeCheck4 = false;
        }
        if (handmadeOwned > 19 && upgradeCheck5) {
            upgrade5.style.display = 'inline-block';
            upgradeCheck5 = false;
        }
    }  

}
document.querySelector('#hand').onclick = addHandmade;


// mother

var motherCost = 100;
var motherOwned = 0;

function addMother() {
    if (money >= motherCost) {
        motherOwned++;
        totalBuild++;
        money = money - motherCost;
        motherCost = Math.round(motherCost * 1.13);
        document.querySelector(".mother-cost").innerHTML = formatter.format(motherCost);
        document.getElementById("money").innerHTML = formatter.format(money);
        document.querySelector('.shop-amount-mother').innerHTML = motherOwned;
        document.getElementById("total-build").innerHTML = totalBuild;
        document.getElementById("mother-ps").innerHTML = Math.round((motherOwned * motherPS) * 100) / 100;
        
        if (motherOwned > 4 && upgradeCheck3) {
            document.getElementById("stand").classList.remove("hidden");
            upgrade3.style.display = 'inline-block';
            upgradeCheck3 = false;
        }
    }          
}
document.querySelector('#mother').onclick = addMother;


// Stand

var standCost = 1000;
var standOwned = 0;

function addStand() {
    if (money >= standCost) {
        standOwned++;
        totalBuild++;
        money = money - standCost;
        standCost = Math.round(standCost * 1.13);
        document.querySelector(".stand-cost").innerHTML = formatter.format(standCost);
        document.getElementById("money").innerHTML = formatter.format(money);
        document.querySelector('.shop-amount-stand').innerHTML = standOwned;
        document.getElementById("total-build").innerHTML = totalBuild;
        document.getElementById("stand-ps").innerHTML = Math.round((standOwned * standPS) * 100) / 100;
       
       
        if (standOwned > 4) {
            document.getElementById("shop").classList.remove("hidden");
        }
    }  
}  

document.querySelector('#stand').onclick = addStand;

// Shop

var shopCost = 10000;
var shopOwned = 0;

function addShop() {
    if (money >= shopCost) {
        shopOwned++;
        totalBuild++;
        money = money - shopCost;
        shopCost = Math.round(shopCost * 1.13);
        document.querySelector(".shop-cost").innerHTML = formatter.format(shopCost);
        document.getElementById("money").innerHTML = formatter.format(money);
        document.querySelector('.shop-amount-shop').innerHTML = shopOwned;
        document.getElementById("total-build").innerHTML = totalBuild;
        document.getElementById("shop-ps").innerHTML = Math.round((shopOwned * shopPS) * 100) / 100;

        if (shopOwned > 4) {
            document.getElementById("farm").classList.remove("hidden");
        }
    }  
}  

document.querySelector('#shop').onclick = addShop;

// farm 

var farmCost = 100000;
var farmOwned = 0;

function addFarm() {
    if (money >= farmCost) {
        farmOwned++;
        totalBuild++;
        money = money - farmCost;
        farmCost = Math.round(farmCost * 1.13);
        document.querySelector(".farm-cost").innerHTML = formatter.format(farmCost);
        document.getElementById("money").innerHTML = formatter.format(money);
        document.querySelector('.shop-amount-farm').innerHTML = farmOwned;
        document.getElementById("total-build").innerHTML = totalBuild;
        document.getElementById("farm-ps").innerHTML = Math.round((farmOwned * farmPS) * 100) / 100;


        if (farmOwned > 4) {
            document.getElementById("factory").classList.remove("hidden");
        }
    }  
}  

document.querySelector('#farm').onclick = addFarm;


// Factory

var factoryCost = 1000000;
var factoryOwned = 0;

function addFactory() {
    if (money >= factoryCost) {
        factoryOwned++;
        totalBuild++;
        console.log("clicked")
        money = money - factoryCost;
        factoryCost = Math.round(factoryCost * 1.13);
        document.querySelector(".factory-cost").innerHTML = formatter.format(factoryCost);
        document.getElementById("money").innerHTML = formatter.format(money);
        document.querySelector('.shop-amount-factory').innerHTML = factoryOwned;
        document.getElementById("total-build").innerHTML = totalBuild;
        document.getElementById("factory-ps").innerHTML = Math.round((factoryOwned * factoryPS) * 100) / 100;
    }  

}

document.querySelector('#factory').onclick = addFactory;


// show menu
const menu = document.querySelector(".nav-bar");
const openButton = document.querySelector(".open-menu");
const closeButton = document.querySelector(".close-menu");

openButton.addEventListener('click', function() {
    menu.classList.add('show-nav');
});

closeButton.addEventListener('click', function() {
    menu.classList.remove('show-nav');
});

// upgrades

var upgrade1 = document.querySelector(".upgrade1");
var navUpgrade1 = document.querySelector(".nav-upgrade1");

upgrade1.addEventListener('click', function() {
    if (money >= 100) {
        upgrade1.style.display = 'none';
        navUpgrade1.style.display = 'inline';
        money = money - 100;
        clickMulti = clickMulti * 2;
    }
})

var upgrade2 = document.querySelector(".upgrade2");
var navUpgrade2 = document.querySelector(".nav-upgrade2");

upgrade2.addEventListener('click', function() {
    if (money >= 500) {
        upgrade2.style.display = 'none';
        navUpgrade2.style.display = 'inline';
        money = money - 500;
        handmadePS = handmadePS * 2;
        document.getElementById("hand-ps").innerHTML = Math.round((handmadeOwned * handmadePS) * 100) / 100;
    }
})

var upgrade3 = document.querySelector(".upgrade3");
var navUpgrade3 = document.querySelector(".nav-upgrade3");

upgrade3.addEventListener('click', function() {
    if (money >= 1000) {
        upgrade3.style.display = 'none';
        navUpgrade3.style.display = 'inline';
        money = money - 1000;
        motherPS = motherPS * 2;
        document.getElementById("mother-ps").innerHTML = Math.round((motherOwned * motherPS) * 100) / 100;
    }
})

var upgrade4 = document.querySelector(".upgrade4");
var navUpgrade4 = document.querySelector(".nav-upgrade4");

upgrade4.addEventListener('click', function() {
    if (money >= 10000) {
        upgrade4.style.display = 'none';
        navUpgrade4.style.display = 'inline';
        money = money - 10000;
        clickMulti = clickMulti * 4;
    }
})

var upgrade5 = document.querySelector(".upgrade5");
var navUpgrade5 = document.querySelector(".nav-upgrade5");

upgrade5.addEventListener('click', function() {
    if (money >= 50000) {
        upgrade5.style.display = 'none';
        navUpgrade5.style.display = 'inline';
        money = money - 50000;
        handmadePS = handmadePS * 4;
        document.getElementById("hand-ps").innerHTML = Math.round((handmadeOwned * handmadePS) * 100) / 100;
    }
})






// upgrade info
const textBox = document.querySelector(".text-box")

const messages = {
  u1: "Remove grime from cursor, clicks produce 2x the MoMos",
  u2: "Silver hands, Makes 2x handmade MoMos",
  u3: "Buy Mommy new appliances so she makes MoMos 2x faster",
  u4: "New Razor mouse, clicks produce 4x the MoMos",
  u5: "Golden Hands, Make 4x handmade MoMos",
};

document.querySelectorAll('.msg').forEach(button => {
  button.addEventListener("mouseover", e => textBox.innerHTML = messages[e.currentTarget.dataset.msg], false);
  button.addEventListener("mouseout", func1, false);
});

function func1() {
  textBox.innerHTML = "See details here"
}

// menu upgrades 

document.querySelectorAll('.nmsg').forEach(button => {
    button.addEventListener("mouseover", e => menuTextBox.innerHTML = messages[e.currentTarget.dataset.msg], false);
    button.addEventListener("mouseout", func2, false);
});

const menuTextBox = document.querySelector(".nav-info-box")

function func2() {
    menuTextBox.innerHTML = "Hover over upgrades to see details"
}