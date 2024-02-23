import  "./index.scss";
import { cssAttrDom, nodes, sideNavAnimations, toolboxFunc, cssRenderVal } from "./DOM";

toolboxFunc.forgeBtn.addEventListener("click", attributeList);
cssAttrDom.displayBtn.forEach(displayAttrVals);
cssRenderVal.displayValues.forEach(renderDisplayCss);
cssRenderVal.flexDirValues.forEach(renderFlexDirCss);
cssRenderVal.jusConValues.forEach(renderJusConCss);

function attributeList() {
    let toolboxClick = false;
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
        } else {
            cssAttribute = false;
            e.target.parentNode.lastElementChild.style.maxHeight= "0";
        }
    });
}

function renderDisplayCss(btn) {
    btn.addEventListener("click", (e) => {
        nodes.childHolder.style.display = e.target.id;
    });
}

function renderFlexDirCss(btn) {
    btn.addEventListener("click", (e) => {
        nodes.childHolder.style.flexDirection = e.target.id;
    });
}

function renderJusConCss(btn) {
    btn.addEventListener("click", (e) => {
        nodes.childHolder.style.justifyContent = e.target.id;
    });
}