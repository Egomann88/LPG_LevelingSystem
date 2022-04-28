/**
 * @author Justin Urbanek
 * @copyright any reuse or personal use is prohibited
 */

// onload page

window.onload = function init() {
  this.loadPage(); // loading the Header
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
 * @function loadModal will load modal page in html 
 */
async function toggleModal(BoxId) {
  this.loadModal(BoxId);
  document.getElementById("modalPage").classList.toggle("hidden");
}
/**
 * 
 * @param {Number} MapId Id of Map, which shall be loaded
 * @returns 0
 */
async function loadModal(MapId) {
  let path = "./maps/"; // path of to html
  let HtmlId = "insertModal"; // id of html, which page will be loaded in
  switch (MapId) {
    case 0: // close Modal
      return 0;
    case 1:
      this.loadPage(HtmlId, path + "Namek.html");
      break;
    case 2:
      this.loadPage(HtmlId, path + "Lorkarniya.html");
      break;
    case 3:
      this.loadPage(HtmlId, path + "Asterya.html");
      break;
    default:
      alert("Page could not be loaded.");
      console.error("MapId was not found: ", MapId);
      return 0;
  }
}