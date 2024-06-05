// Massive thanks to Copro ❤️
// Alternate app entry point, as suggested here:
// https://stackoverflow.com/questions/69297449/how-can-i-correct-this-esm-error-with-phusion-passenger
async function loadApp() {
const { app } = await import("./src/app.js");
}
loadApp();