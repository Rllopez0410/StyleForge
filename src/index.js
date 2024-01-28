import  "./index.scss";

const closeNav = document.getElementById("close-btn");
const openNav = document.getElementById("open-nav");
const sideNav = document.getElementById("side-nav");

closeNav.addEventListener("click", closeSideNav);
openNav.addEventListener("click", openSideNav);

function closeSideNav() {
    sideNav.style.width = "0";
    sideNav.style.paddingLeft = "0";

}

function openSideNav() {
    sideNav.style.width = "240px";
    sideNav.style.paddingLeft = "10px";
}