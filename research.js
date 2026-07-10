<<<<<<< HEAD
import fs from "fs";

const apps = JSON.parse(
    fs.readFileSync("apps.json","utf8")
);

const research = [];

for(const app of apps){

    research.push({

        id:app.id,

        name:app.name,

        category:app.category,

        website:app.website,

        description:null,

        authMethod:null,

        selfServe:null,

        apiSurface:null,

        mcp:null,

        buildability:null,

        blocker:null,

        evidence:null

    });

}

fs.writeFileSync(

    "research.json",

    JSON.stringify(research,null,2)

);

=======
import fs from "fs";

const apps = JSON.parse(
    fs.readFileSync("apps.json","utf8")
);

const research = [];

for(const app of apps){

    research.push({

        id:app.id,

        name:app.name,

        category:app.category,

        website:app.website,

        description:null,

        authMethod:null,

        selfServe:null,

        apiSurface:null,

        mcp:null,

        buildability:null,

        blocker:null,

        evidence:null

    });

}

fs.writeFileSync(

    "research.json",

    JSON.stringify(research,null,2)

);

>>>>>>> 1d00b65ece2c0b2e804fa539b3fa08899c8c7138
console.log("research.json generated.");