import { BlogContent } from "./blogContent.js";
import { RelatedLinks } from "./relatedLinks.js";

export const Blog = (blog) => {
    
    let markup = document.createElement("div");
    markup.id = "ourblog";
    markup.classList.add("blog");

    markup.appendChild(BlogContent( blog ));
    markup.appendChild(RelatedLinks( blog.links ));

    document.getElementById("root").appendChild(markup);

}