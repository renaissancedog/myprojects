function q(id) {
    return document.getElementById(id);
}
var FPS=15;
class Building {
    constructor(baseCps, cost) {
        this.multiplier = 1;
        this.baseCps = baseCps;
        this.baseCost = cost;
        this.cost = cost;
        this.costMultiplier = 1.15;
        this.count = 0;
    }
    buy(cookies) {
        if (cookies >= this.cost) {
            game.remove(this.cost);
            this.count++;
            this.cost *= this.costMultiplier;
        }
    }
    getCps() {
        return this.count * this.baseCps * this.multiplier;
    }
}

const cursors = new Building(0.1, 15);
const grandmas = new Building(1, 100);
const farms = new Building(8, 1100);
const mines = new Building(47, 12000);
const factories = new Building(260, 130000);
const banks = new Building(1400, 1400000);
const temples = new Building(7800, 20000000);
const wizards = new Building(44000, 330000000);
const shipments = new Building(260000, 5100000000);
const labs = new Building(1600000, 75000000000);
const portals = new Building(10000000, Math.pow(10, 12));
const timemachines = new Building(65000000, 14 * Math.pow(10, 12));
const condensers = new Building(430000000, 170 * Math.pow(10, 12));
const prisms = new Building(29 * Math.pow(10, 8), 21 * Math.pow(10, 14));
const chancemakers = new Building(21 * Math.pow(10, 9), 26 * Math.pow(10, 15));
const fractals = new Building(150 * Math.pow(10, 9), 310 * Math.pow(10, 15));
const jsconsoles = new Building(11 * Math.pow(10, 11), 71 * Math.pow(10, 18));
const idleverses = new Building(83 * Math.pow(10, 11), 12 * Math.pow(10, 21));
const cortexbakers = new Building(64 * Math.pow(10, 12), 19 * Math.pow(10, 23));
const you = new Building(510 * Math.pow(10, 12), 540 * Math.pow(10, 24));
const buildings = [cursors, grandmas, farms, mines, factories, banks, temples, wizards, shipments, labs, portals, timemachines, condensers, prisms, chancemakers, fractals, jsconsoles, idleverses, cortexbakers, you];
class CookieClicker {
    constructor() {
        this.cookies = 0;
        this.totalcookies = 0;
        this.cps = 0;
        this.clickmulti = 1;
    }
    add(amt) {
        this.cookies += amt;
    }
    remove(amt) {
        this.cookies -= amt;
    }
    clicked() {
        this.cookies += this.clickmulti;
        this.totalcookies += this.clickmulti;
    }
    update() {
        this.cps = cursors.getCps() + grandmas.getCps() + farms.getCps() + mines.getCps() + factories.getCps() + banks.getCps() + temples.getCps() + wizards.getCps() + shipments.getCps() + labs.getCps() +
            portals.getCps() + timemachines.getCps() + condensers.getCps() + prisms.getCps() + chancemakers.getCps() + fractals.getCps() + jsconsoles.getCps() + idleverses.getCps() + cortexbakers.getCps() + you.getCps();

        q("cursor-data").innerHTML = "You have " + cursors.count + " cursors, producing " + Math.round(cursors.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(cursors.cost + 0.49)) + " cookies.";
        q("grandma-data").innerHTML = "You have " + grandmas.count + " grandmas, producing " + Math.round(grandmas.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(grandmas.cost + 0.49)) + " cookies.";
        q("farm-data").innerHTML = "You have " + farms.count + " farms, producing " + Math.round(farms.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(farms.cost + 0.49)) + " cookies.";
        q("mine-data").innerHTML = "You have " + mines.count + " mines, producing " + Math.round(mines.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(mines.cost + 0.49)) + " cookies.";
        q("factory-data").innerHTML = "You have " + factories.count + " factories, producing " + Math.round(factories.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(factories.cost + 0.49)) + " cookies.";
        q("bank-data").innerHTML = "You have " + banks.count + " banks, producing " + Math.round(banks.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(banks.cost + 0.49)) + " cookies.";
        q("temple-data").innerHTML = "You have " + temples.count + " temples, producing " + Math.round(temples.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(temples.cost + 0.49)) + " cookies.";
        q("wizard-data").innerHTML = "You have " + wizards.count + " wizard towers, producing " + Math.round(wizards.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(wizards.cost + 0.49)) + " cookies.";
        q("shipment-data").innerHTML = "You have " + shipments.count + " shipments, producing " + Math.round(shipments.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(shipments.cost + 0.49)) + " cookies.";
        q("lab-data").innerHTML = "You have " + labs.count + " alchemy labs, producing " + (Math.round(labs.getCps() * 10) / 10) + " cps. Buy one for " + (Math.round(labs.cost + 0.49)) + " cookies.";
        q("portals-data").innerHTML = "You have " + portals.count + " portals, producing " + Math.round(portals.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(portals.cost + 0.49)) + " cookies.";
        q("timemachines-data").innerHTML = "You have " + timemachines.count + " time machines, producing " + Math.round(timemachines.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(timemachines.cost + 0.49)) + " cookies.";
        q("condensers-data").innerHTML = "You have " + condensers.count + " condensers, producing " + Math.round(condensers.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(condensers.cost + 0.49)) + " cookies.";
        q("prisms-data").innerHTML = "You have " + prisms.count + " prisms, producing " + Math.round(prisms.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(prisms.cost + 0.49)) + " cookies.";
        q("chancemakers-data").innerHTML = "You have " + chancemakers.count + " chancemakers, producing " + Math.round(chancemakers.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(chancemakers.cost + 0.49)) + " cookies.";
        q("fractals-data").innerHTML = "You have " + fractals.count + " fractals, producing " + Math.round(fractals.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(fractals.cost + 0.49)) + " cookies.";
        q("jsconsoles-data").innerHTML = "You have " + jsconsoles.count + " javascript consoles, producing " + Math.round(jsconsoles.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(jsconsoles.cost + 0.49)) + " cookies.";
        q("idleverses-data").innerHTML = "You have " + idleverses.count + " idleverses, producing " + Math.round(idleverses.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(idleverses.cost + 0.49)) + " cookies.";
        q("cortexbakers-data").innerHTML = "You have " + cortexbakers.count + " cortex bakers, producing " + Math.round(cortexbakers.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(cortexbakers.cost + 0.49)) + " cookies.";
        q("you-data").innerHTML = "You have " + you.count + " of yourself, producing " + (Math.round(you.getCps() * 10) / 10) + " cps. Buy one for " + (Math.round(you.cost + 0.49)) + " cookies.";
        this.cookies += this.cps / FPS;
        this.totalcookies += this.cps / FPS;

        q("cookie_counter").innerHTML = "Cookies: " + Math.round(this.cookies - 0.5);
        q("cps_counter").innerHTML = "CPS: " + Math.round(this.cps * 10) / 10;
        q("total_cookies").innerHTML = "Total Cookies produced ever: " + Math.round(this.totalcookies - 0.5);
    }
    exportSave() {
        var exportCode = this.cookies + "/" + this.totalcookies + "/" + this.clickmulti + "/" + this.cps + "/"
        for (let i = 0; i < buildings.length; i++) {
            exportCode += buildings[i].count + "/";
        }
        navigator.clipboard.writeText(exportCode);
    }
    importSave() {
        var importCode = prompt("Enter save code: ");
        const importArray = importCode.split("/");
        this.cookies = parseInt(importArray[0]);
        this.totalcookies = parseInt(importArray[1]);
        this.clickmulti = parseInt(importArray[2]);
        this.cps = parseInt(importArray[3]);
        for (let i = 4; i < buildings.length + 4; i++) {
            buildings[i - 4].count = parseInt(importArray[i]);
            buildings[i - 4].cost = buildings[i - 4].baseCost * (Math.pow(1.15, buildings[i - 4].count));
        }
    }
}
const game = new CookieClicker();
setInterval(() => {
    game.update();
}, 1000/FPS);