/**
 * @author Justin Urbanek
 * @copyright any reuse or personal use is prohibited
 */

// onload page

window.onload = function init() {
  this.loadHeader(); // loading the Header
  //this.insertCssClasses();
}

// functions

/**
 * When the pages loads, random css-Classes will be given to the map Containers.<br />
 * Creates an array, with all css, which shall be used.<br />
 * a for-loop run 20 times inwhich two rnd number will be generated.<br />
 * @rndClasses array which all css classes.<br />
 * @id id the id off the Map Containers.<br />
 * @css css will be the insertet class.<br />
 */
async function insertCssClasses() {
  let rndClasses = [
    "mt-10", "mt-20", "mt-30", "mt-40", "mt-50", "mt-60",
    //"py-10", "py-20", "py-30", "py-40", "py-50", "py-60"
  ];

  for (let i = 0; i <= 6; i++) {
    let id = Math.floor((Math.random() * 6) + 1); // between 1 and 20
    let css = Math.floor((Math.random() * rndClasses.length) + 1); // all rndClasses
    document.getElementById(id.toString().padStart(2, "0")).classList.add(rndClasses[css - 1]);
  }
}
/**
 * 
 * @param {Number} BoxId 
 */
async function toggleModal(BoxId = 0) {
  console.log("BoxId: ", BoxId);
  document.getElementById("modalPage").classList.toggle("hidden");
}
/**
 * 
 * @param {Number} MapId 
 */
async function fillModal(MapId) {
  console.log("mapid", MapId);
}