import { NewBlog } from "./newBlog.js";

export const RelatedLinks = (links) =>{
    let markup = document.createElement("div");
    markup.classList.add('related-links');

    let linkHeading = document.createElement('h1');
    linkHeading.innerText = 'Related Links';
    let linkLists = document.createElement('ul');
    linkLists.classList.add('link-list');

    links.forEach((link) => {

        let linkItem = document.createElement('li')
        linkItem.innerText = link.title;
        linkItem.id = link.id ;
        linkItem.addEventListener('click' , () => {
            NewBlog(event);
        });
        linkLists.appendChild(linkItem);
    });

    markup.appendChild(linkHeading);
    markup.appendChild(linkLists);

    return markup;
}

