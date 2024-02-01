import  "./index.scss";
import { cssAttrDom, sideNavAnimations, toolboxFunc } from "./DOM";

let toolboxClick = false;

toolboxFunc.forgeBtn.addEventListener("click", attributeList);
cssAttrDom.displayBtn.forEach(displayAttrVals);

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

function displayAttrVals(btn) {
    let cssAttribute = false;
    btn.addEventListener("click", (e) => {
        if (!cssAttribute) {
            cssAttribute = true;
            e.target.parentNode.lastElementChild.style.maxHeight= "200px";
            e.target.classList.add();
        } else {
            cssAttribute = false;
            e.target.parentNode.lastElementChild.style.maxHeight= "0";
            e.target.classList.add("attribute-btns");
        }
    });
}

