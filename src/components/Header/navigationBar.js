// import { navData } from "../data/data.js";
import { Hamburger } from "./hamburger.js";
import { logo } from "./logo.js";
import { NavLinks } from "./navLinks.js";

export const navigationBar=(navData)=>{
    const markUp =document.createElement("div");
    markUp.classList.add("navigation");

    markUp.appendChild(logo(navData.logo));
    markUp.appendChild(NavLinks(navData.navLinks));
    markUp.appendChild(Hamburger(navData.menuUrl));
    return markUp;
    
};