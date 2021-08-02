

export const Hamburger=(menuUrl)=>{
    let markUp = document.createElement("div");
    markUp.classList.add("menu");
    let isMenuOpen = false;
    let img=document.createElement("img");
    img.src=menuUrl;
    img.addEventListener('click',()=>{
        isMenuOpen = !isMenuOpen;
        console.log('menu clicked',isMenuOpen);
        createMenuItem(isMenuOpen);
    })
    markUp.appendChild(img);
    return markUp;
}
export const MenuLinks = (props) => {
    const markup = document.createElement('ul');
    markup.classList.add('menu-item');
    props.forEach((link) => {
        let navItem = document.createElement('li');
        navItem.classList.add('nav-item');
        navItem.id = link.id;

        let navlink = document.createElement('a');
        navlink.href=link.href;
        navlink.innerText= link.title;

        link.isCta ? navlink.classList.add('nav-link', 'btn') : navlink.classList.add('nav-link');

        navItem.appendChild(navlink);
        markup.appendChild(navItem);
    });
    return markup;
};

const createMenuItem=(isMenuOpen)=>{
    let menus=document.querySelector('.menu-item');
    if(isMenuOpen){  
        menus.style.display='unset';
        document.querySelectorAll('.nav-link').forEach((link)=>{link.classList.add('menu-nav-links')});
    }
    else{
        menus.style.display= 'none'
        document.querySelectorAll('.nav-link').forEach((link)=>{link.classList.remove('menu-nav-links')});    }

}