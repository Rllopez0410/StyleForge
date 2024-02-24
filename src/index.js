import  "./index.scss";
import { cssAttrDom, nodes, sideNavAnimations, toolboxFunc, cssRenderVal } from "./DOM";

toolboxFunc.forgeBtn.addEventListener("click", attributeList);
cssAttrDom.displayBtn.forEach(displayAttrVals);
cssRenderVal.displayValues.forEach(renderDisplayCss);
cssRenderVal.flexDirValues.forEach(renderFlexDirCss);
cssRenderVal.jusConValues.forEach(renderJusConCss);
cssRenderVal.alignItemsValue.forEach(renderAlignItemsCss);

let toolboxClick = false;
let cssAttribute = false;

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
        sideNavAnimations.displayAttr.innerHTML = `display: <span>${e.target.id}</span>;`;
        e.target.parentNode.style.maxHeight= "0";
        cssAttribute = false;
    });
}

function renderFlexDirCss(btn) {
    btn.addEventListener("click", (e) => {
        nodes.childHolder.style.flexDirection = e.target.id;
        sideNavAnimations.flexDirAttr.innerHTML = `flex-direction: <span>${e.target.id}</span>;`;
        e.target.parentNode.style.maxHeight= "0";
        cssAttribute = false;
    });
}

function renderJusConCss(btn) {
    btn.addEventListener("click", (e) => {
        nodes.childHolder.style.justifyContent = e.target.id;
        sideNavAnimations.jusConAttr.innerHTML = `justify-content: <span>${e.target.id}</span>;`;
        e.target.parentNode.style.maxHeight= "0";
        cssAttribute = false;
    });
}

function renderAlignItemsCss(btn) {
    btn.addEventListener("click", (e) => {
        nodes.childHolder.style.alignItems = e.target.id;
        sideNavAnimations.alignitemsAttr.innerHTML = `align-items: <span>${e.target.id}</span>;`;
        e.target.parentNode.style.maxHeight= "0";
        cssAttribute = false;
    });
}