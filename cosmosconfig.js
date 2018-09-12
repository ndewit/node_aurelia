const cosmosconfig = {};

cosmosconfig.host = process.env.HOST || "https://efourty.documents.azure.com:443/";
cosmosconfig.authKey = process.env.AUTH_KEY || "HhdGVF5IRxDCGM7mzfItVnkqZdVEoJSNjZTdlhCFXA5MSZFGZrDlLFVbIOQgDrqhTdV5iQ19o5jwjCTCfph1ng==";
cosmosconfig.databaseId = "ToDoList";
cosmosconfig.containerId = "Items";

if (cosmosconfig.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}

module.exports = cosmosconfig;