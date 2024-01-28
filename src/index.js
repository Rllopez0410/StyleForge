import  "./index.scss";

const forgeBtn = document.getElementById("open-nav");
const sideNav = document.getElementById("side-nav");
const toolbox = document.getElementById("toolbox");

let click = false;

forgeBtn.addEventListener("click", attributeList);

function attributeList() {
    if (!click) {
        sideNav.style.width = "240px";
        sideNav.style.paddingLeft = "10px";
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