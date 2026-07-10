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

console.log("research.json generated.");