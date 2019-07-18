/*
    Header section, Random joke section and Search joke section.
    Task 3: header section:
        First, I would like to start with the header section of the application
        -> I prefer starting with uploading the logo, fetch https://api.chucknorris.io/jokes/random
            and then get the url of the logo
        -> then, I would define the title of the header

    Task 4: Random joke section:
        -> add a dropdown
        -> fetch the joked and add them to the dropdown (There is a dropdown fulfilled with joke categories.)
        NOTE: If no category is selected, select first one by default. 
        -> When category is selected, show random joke for that category.
            --> first add a onchange attribute to control the changes
*/

const headerURL = 'https://api.chucknorris.io/jokes/random';
const categoriesURL = 'https://api.chucknorris.io/jokes/categories';

// html tags

// header tags
let textnode = document.createTextNode("Everyone loves Chuck Norris");

let header = document.getElementById("header");
let logoImage = document.createElement("img");
let title = document.createElement('h1');

// random joke section tags
let randomJOke = document.getElementById("randonJoke");
let dropDownSelect = document.getElementById("jokeCategory");
let joke = document.createElement("p");

let app = {
    iconUrl: '',
    categories: [],
    optionChanged: function () {
        fetch(`https://api.chucknorris.io/jokes/random?category=${dropDownSelect.value}`)
        .then(res => res.json())
        .then(posts => {
            if (posts.value != joke.innerHTML) { 
                joke.innerHTML = '';
                joke.appendChild(document.createTextNode(posts.value ));
                randomJOke.appendChild(joke);
            }
        })
        .catch(err => console.log(err))
    },
    upload: () => {
        fetch(headerURL)
        .then(res => res.json())
        .then(posts => {
            // header section 
            this.iconUrl = posts.icon_url;
            logoImage.setAttribute("src", this.iconUrl);
            header.appendChild(logoImage);
            title.appendChild(textnode);
            header.appendChild(title);

            fetch(categoriesURL)
            .then(res => res.json())
            .then(posts => {
                this.categories = posts;
                // random joke section
                this.categories.forEach(element => {
                    let opt = document.createTextNode(element); 
                    let dropDownOption = document.createElement("option");
                    dropDownSelect.value = element;
                    dropDownOption.appendChild(opt);
                    dropDownSelect.appendChild(dropDownOption);
                });
                randomJOke.appendChild(dropDownSelect);
                
                fetch(`https://api.chucknorris.io/jokes/random?category=animal`)
                    .then(res => res.json())
                    .then(posts => {
                        joke.appendChild(document.createTextNode(posts.value));
                        randomJOke.appendChild(joke);
                    })
                    .catch(err => console.log(err))
            })

        })
        .catch(err => console.log(err))
    }
};



document.addEventListener('DOMContentLoaded', app.upload);