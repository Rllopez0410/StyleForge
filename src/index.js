import  "./index.scss";

const forgeBtn = document.getElementById("open-nav");
const sideNav = document.getElementById("side-nav");
const toolbox = document.getElementById("toolbox");
const displayAttr = document.getElementById("display-attribute");
const displayVal = document.getElementById("display-values");

let click = false;

forgeBtn.addEventListener("click", attributeList);
displayAttr.addEventListener("click", cssDisplay);

function attributeList() {
    if (!click) {
        sideNav.style.width = "240px";
        toolbox.style.left = "250px";
        console.log("click");
        click = true;
    } else {
        sideNav.style.width = "0";
        sideNav.style.paddingLeft = "0";
        toolbox.style.left = "30px";    
        click = false;
    }
    
}

function cssDisplay() {
    displayVal.style.display = "block";
    displayAttr.style.padding = "5px 0 0px 0px";
    displayVal.style.maxHeight = "200px";
}