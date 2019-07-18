/*
    Header section, Random joke section and Search joke section.
    Task 3: 
        First, I would like to start with the header section of the application
        -> I prefer starting with uploading the logo, fetch https://api.chucknorris.io/jokes/random
            and then get the url of the logo
        -> then, I would define the title of the header
        
*/

const url = 'https://api.chucknorris.io/jokes/random';

// html tags
let header = document.getElementById("header");
let logoImage = document.createElement("img");
let title = document.createElement('h1');

let app = {
    iconUrl: '',

    upload: () => {
        console.log('hello');
        fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(posts => {
            this.iconUrl = posts.icon_url;
            logoImage.setAttribute("src", this.iconUrl);
            header.appendChild(logoImage);
            let textnode = document.createTextNode("Everyone loves Chuck Norris");
            title.appendChild(textnode);
            header.appendChild(title);
        })
        .catch(err => console.log(err))
    }
};



document.addEventListener('DOMContentLoaded', app.upload);