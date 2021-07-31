// import { footerData } from "../data/data.js";
import { FooterLogo } from "./footerLogo.js";
import { FooterLinks } from "./footerLinks.js";

export const Footer=(footerData)=>{
    const markUp =document.createElement("div");
    markUp.classList.add("footer");

    markUp.appendChild(FooterLogo(footerData.footerLogo));
    markUp.appendChild(FooterLinks(footerData));
    return markUp;
    
};