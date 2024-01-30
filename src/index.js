import  "./index.scss";

const forgeBtn = document.getElementById("open-nav");
const sideNav = document.getElementById("side-nav");
const toolbox = document.getElementById("toolbox");
const attributeBtns = document.querySelectorAll(".attribute-btns");


let toolboxClick = false;
let cssAttribute = false;

attributeBtns.forEach(attrBtns);
forgeBtn.addEventListener("click", attributeList);
// displayAttr.addEventListener("click", cssDisplay);

function attributeList() {
    if (!toolboxClick) {
        sideNav.style.width = "240px";
        toolbox.style.left = "250px";
        toolboxClick = true;
    } else {
        sideNav.style.width = "0";
        sideNav.style.paddingLeft = "0";
        toolbox.style.left = "30px";    
        toolboxClick = false;
    }   
}

function attrBtns(element) {
    element.addEventListener("click", () => {
        console.log("clicked");
        if (!cssAttribute) {
            displayVal.style.display = "block";
            displayAttr.style.padding = "5px 0 0px 0px";
            displayVal.style.maxHeight = "200px";
            cssAttribute = true;
        } else {
            displayVal.style.display = "block";
            displayAttr.style.padding = "5px 0 0 0";
            displayVal.style.maxHeight = "0";
            cssAttribute = false;
        }
    });
}
// function cssDisplay() {
//     if (!cssAttribute) {
//         displayVal.style.display = "block";
//         displayAttr.style.padding = "5px 0 0px 0px";
//         displayVal.style.maxHeight = "200px";
//         cssAttribute = true;
//     } else {
//         displayVal.style.display = "block";
//         displayAttr.style.padding = "5px 0 0 0";
//         displayVal.style.maxHeight = "0";
//         cssAttribute = false;
//     }
// }