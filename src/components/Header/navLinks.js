

export const NavLinks = (props) => {
    const markup = document.createElement('ul');
    markup.classList.add('nav-container');
    props.forEach((link) => {
        let navItem = document.createElement('li');
        navItem.classList.add('nav-item');
        navItem.id = link.id;

        let navlink = document.createElement('a');
        navlink.href=link.href;
        navlink.innerText= link.title;

        link.isCta ? navlink.classList.add('nav-link', 'btn') : navlink.classList.add('nav-link');
        // anchor.href = link.href;

        navItem.appendChild(navlink);
        markup.appendChild(navItem);
    });
    return markup;
};