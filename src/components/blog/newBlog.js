import { blogsArray } from "../../app.js";
import { BlogContent } from "./blogContent.js";
import { RelatedLinks } from "./relatedLinks.js";

export const NewBlog = (event) =>{
    document.querySelector('#ourblog').innerHTML= '';
    let newblog = blogsArray.find((blog) => {
        return blog.id === event.target.id ;
    });
    ourblog.appendChild(BlogContent(newblog));  
    ourblog.appendChild(RelatedLinks(newblog.links))
}