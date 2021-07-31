

export const logo =(data)=>{
    // console.log(data);
    let markUp= document.createElement("div");
    markUp.classList.add('company-logo');
    let logoImg =document.createElement("img")
    logoImg.classList.add("logo");
    logoImg.src = data.imgSrc;
    logoImg.alt = data.alt;
    markUp.appendChild(logoImg);
    return markUp;
}
