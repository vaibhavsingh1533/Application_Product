import fs from "fs";

// Read research.json
const research = JSON.parse(
    fs.readFileSync("research.json", "utf8")
);

const analysis = {
    totalApps: research.length,

    authMethods: {},

    categories: {},

    selfServe: {
        Yes: 0,
        No: 0
    },

    buildability: {
        Yes: 0,
        No: 0
    },

    mcpSupport: {
        Yes: 0,
        No: 0
    }
};

// Loop through all apps
research.forEach(app => {

    // Categories
    analysis.categories[app.category] =
        (analysis.categories[app.category] || 0) + 1;

    // Auth Methods
    if (app.authMethod) {

        analysis.authMethods[app.authMethod] =
            (analysis.authMethods[app.authMethod] || 0) + 1;

    }

    // Self Serve
    if (app.selfServe === "Yes")
        analysis.selfServe.Yes++;
    else if (app.selfServe === "No")
        analysis.selfServe.No++;

    // Buildability
    if (app.buildability === "Yes")
        analysis.buildability.Yes++;
    else if (app.buildability === "No")
        analysis.buildability.No++;

    // MCP
    if (app.mcp === "Yes")
        analysis.mcpSupport.Yes++;
    else if (app.mcp === "No")
        analysis.mcpSupport.No++;

});

// Save analysis.json
fs.writeFileSync(
    "analysis.json",
    JSON.stringify(analysis, null, 2)
);

console.log("analysis.json created successfully!");