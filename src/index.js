import  "./index.scss";
import { cssAttrDom, sideNavAnimations, toolboxFunc } from "./DOM";

let toolboxClick = false;
let cssAttribute = false;

toolboxFunc.forgeBtn.addEventListener("click", attributeList);
cssAttrDom.displayBtn.addEventListener("click", cssDisplay);

function attributeList() {
    if (!toolboxClick) {
        sideNavAnimations.sideNav.style.width = "240px";
        toolboxFunc.toolbox.style.left = "250px";
        console.log("click");
        toolboxClick = true;
    } else {
        sideNavAnimations.sideNav.style.width = "0";
        sideNavAnimations.sideNav.style.paddingLeft = "0";
        toolboxFunc.toolbox.style.left = "30px";    
        toolboxClick = false;
    }   
}

function cssDisplay() {
    if (!cssAttribute) {
        sideNavAnimations.displayVal.style.display = "block";
        sideNavAnimations.displayAttr.style.padding = "5px 0 0px 0px";
        sideNavAnimations.displayVal.style.maxHeight = "200px";
        console.log("click");
        cssAttribute = true;
    } else {
        sideNavAnimations.displayVal.style.display = "block";
        sideNavAnimations.displayAttr.style.padding = "5px 0 0px 0px";
        sideNavAnimations.displayVal.style.maxHeight = "0";
        cssAttribute = false;
    }
}