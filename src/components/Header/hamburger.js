

export const Hamburger=(menuUrl)=>{
    let markUp = document.createElement("div");
    markUp.classList.add("menu");

    let img=document.createElement("img");
    img.src=menuUrl;
    markUp.appendChild(img);
    
    return markUp;
}