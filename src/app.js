import { Blog } from "./components/blog/blog.js";
import { navigationBar } from "./components/Header/navigationBar.js";
import { Footer } from "./components/Footer/footer.js";

const queryUrl='https://kulsumansari.github.io/webpage-data/blogs.json';

export let blogsArray = [];
fetch(queryUrl)
    .then((response)=>{
        return response.json();
    })
    .then((res)=>{
        root.appendChild( navigationBar(res.navData) );
        blogsArray = res.blogData;
        console.log(blogsArray)
        let blogIndex = Math.floor(Math.random() * blogsArray.length);
        Blog( blogsArray[blogIndex] );
        root.appendChild( Footer(res.footerData) );
    })
    .catch((err)=>{
        console.log(err);
        document.querySelector('#errDiv').innerText = 'Error While fetching data !'
    })


