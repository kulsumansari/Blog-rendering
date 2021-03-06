
export const BlogContent = (data) =>{
    console.log(data.id);
    let markup = document.createElement('div');
    markup.classList.add('blog-content');

    let heading = document.createElement('h1');
    heading.innerText = data.title;

    let author = document.createElement('h4');
    author.innerText = `By : ${data.author}`;
    
    let image = document.createElement('img');
    image.src = data.imageUrl;

    let para = document.createElement('p');
    para.innerText = data.content;

    markup.appendChild(heading);
    markup.appendChild(author);
    markup.appendChild(image);
    markup.appendChild(para);
    
    return markup;
}