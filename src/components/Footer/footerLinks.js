// import { footerData } from "./data/data.js";
export const FooterLinks =(footerData)=>{
    
    let markUp= document.createElement("div");
    let linkHead= document.createElement("h4");
    markUp.classList.add('footerlink-header');
    linkHead.innerText= footerData .footerLinkHead;
    markUp.appendChild(linkHead)

    footerData.footerLinks.forEach(link => {
        let footerlink = document.createElement('a');
        footerlink.classList.add('footer-link');
        footerlink.href=link.href;

        let icon= document.createElement('i');
        icon.classList.add("fab")
        icon.classList.add(link.linkclass);

        footerlink.appendChild(icon);
        // footerlink.innerText= link.title;
        markUp.appendChild(footerlink)
    });

    return markUp;
}