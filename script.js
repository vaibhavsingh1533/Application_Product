<<<<<<< HEAD
// Load JSON files
async function loadData() {

    const research = await fetch("research.json");
    const apps = await research.json();

    const analysis = await fetch("analysis.json");
    const stats = await analysis.json();

    loadCards(stats);

    loadTable(apps);

    loadCharts(stats);

    setupSearch(apps);

}

// ---------------------
// Summary Cards
// ---------------------

function loadCards(stats){

    document.getElementById("totalApps").textContent =
        stats.totalApps;

    document.getElementById("selfServeApps").textContent =
        stats.selfServe.Yes;

    document.getElementById("buildableApps").textContent =
        stats.buildability.Yes;

    document.getElementById("mcpApps").textContent =
        stats.mcpSupport.Yes;

}

// ---------------------
// Table
// ---------------------

function loadTable(apps){

    const table=document.getElementById("tableBody");

    table.innerHTML="";

    apps.forEach(app=>{

        table.innerHTML+=`

        <tr>

            <td>${app.id}</td>

            <td>${app.name}</td>

            <td>${app.category}</td>

            <td>${app.authMethod}</td>

            <td>${app.selfServe}</td>

            <td>${app.apiSurface}</td>

            <td>${app.buildability}</td>

        </tr>

        `;

    });

}

// ---------------------
// Search
// ---------------------

function setupSearch(apps){

    document
    .getElementById("search")
    .addEventListener("keyup",function(){

        const value=this.value.toLowerCase();

        const filtered=apps.filter(app=>{

            return(

                app.name.toLowerCase().includes(value)

                ||

                app.category.toLowerCase().includes(value)

            );

        });

        loadTable(filtered);

    });

}

// ---------------------
// Charts
// ---------------------

function loadCharts(stats){

// Auth Chart

new Chart(

document.getElementById("authChart"),

{

type:"pie",

data:{

labels:Object.keys(stats.authMethods),

datasets:[{

data:Object.values(stats.authMethods)

}]

}

}

);

// Category

new Chart(

document.getElementById("categoryChart"),

{

type:"bar",

data:{

labels:Object.keys(stats.categories),

datasets:[{

label:"Apps",

data:Object.values(stats.categories)

}]

}

}

);

// Buildability

new Chart(

document.getElementById("buildChart"),

{

type:"doughnut",

data:{

labels:Object.keys(stats.buildability),

datasets:[{

data:Object.values(stats.buildability)

}]

}

}

);

}

=======
// Load JSON files
async function loadData() {

    const research = await fetch("research.json");
    const apps = await research.json();

    const analysis = await fetch("analysis.json");
    const stats = await analysis.json();

    loadCards(stats);

    loadTable(apps);

    loadCharts(stats);

    setupSearch(apps);

}

// ---------------------
// Summary Cards
// ---------------------

function loadCards(stats){

    document.getElementById("totalApps").textContent =
        stats.totalApps;

    document.getElementById("selfServeApps").textContent =
        stats.selfServe.Yes;

    document.getElementById("buildableApps").textContent =
        stats.buildability.Yes;

    document.getElementById("mcpApps").textContent =
        stats.mcpSupport.Yes;

}

// ---------------------
// Table
// ---------------------

function loadTable(apps){

    const table=document.getElementById("tableBody");

    table.innerHTML="";

    apps.forEach(app=>{

        table.innerHTML+=`

        <tr>

            <td>${app.id}</td>

            <td>${app.name}</td>

            <td>${app.category}</td>

            <td>${app.authMethod}</td>

            <td>${app.selfServe}</td>

            <td>${app.apiSurface}</td>

            <td>${app.buildability}</td>

        </tr>

        `;

    });

}

// ---------------------
// Search
// ---------------------

function setupSearch(apps){

    document
    .getElementById("search")
    .addEventListener("keyup",function(){

        const value=this.value.toLowerCase();

        const filtered=apps.filter(app=>{

            return(

                app.name.toLowerCase().includes(value)

                ||

                app.category.toLowerCase().includes(value)

            );

        });

        loadTable(filtered);

    });

}

// ---------------------
// Charts
// ---------------------

function loadCharts(stats){

// Auth Chart

new Chart(

document.getElementById("authChart"),

{

type:"pie",

data:{

labels:Object.keys(stats.authMethods),

datasets:[{

data:Object.values(stats.authMethods)

}]

}

}

);

// Category

new Chart(

document.getElementById("categoryChart"),

{

type:"bar",

data:{

labels:Object.keys(stats.categories),

datasets:[{

label:"Apps",

data:Object.values(stats.categories)

}]

}

}

);

// Buildability

new Chart(

document.getElementById("buildChart"),

{

type:"doughnut",

data:{

labels:Object.keys(stats.buildability),

datasets:[{

data:Object.values(stats.buildability)

}]

}

}

);

}

>>>>>>> 1d00b65ece2c0b2e804fa539b3fa08899c8c7138
loadData();