

// const jokeURL = 'https://api.chucknorris.io/jokes/random?category=';
// const searchURL = 'https://api.chucknorris.io/jokes/search?query=';



// // search section 
// let search = document.getElementById("search");
// let searchInput = document.getElementById("searchInput");
// let matchedJokes = document.getElementById("matchedJokes");
// // let searchInput = document.createElement("input");
// // searchInput.type = 'text';
// // searchInput.placeholder = 'search...';


// let app = {
//   
//     categories: [],
//     optionChanged: function () {
//         fetch(jokeURL + `${dropDownSelect.value}`)
//         .then(res => res.json())
//         .then(posts => {
//             if (posts.value != joke.innerHTML) { 
//                 joke.innerHTML = '';
//                 joke.appendChild(document.createTextNode(posts.value ));
//                 randomJOke.appendChild(joke);
//             }
//         })
//         .catch(err => console.log(err))
//     },
//     textInserted() {
//         fetch(searchURL + `${searchInput.value}`)
//         .then(res => res.json())
//         .then(posts => {
//             posts.result.forEach(element => {
//                 let matchedItem = document.createElement("p");
//                 matchedItem.appendChild(document.createTextNode(element.value));
//                 matchedJokes.appendChild(matchedItem);
//             });
//         })
//         .catch(err => console.log(err))
//     },
//     upload: () => {
//         fetch(headerURL)
//         .then(res => res.json())
//         .then(posts => {
//             fetch(categoriesURL)
//             .then(res => res.json())
//             .then(posts => {
//                 this.categories = posts;

//                 // random joke section
//                 this.categories.forEach(element => {
//                     let opt = document.createTextNode(element); 
//                     let dropDownOption = document.createElement("option");
//                     dropDownSelect.value = element;
//                     dropDownOption.appendChild(opt);
//                     dropDownSelect.appendChild(dropDownOption);
//                 });
//                 randomJOke.appendChild(dropDownSelect);

//                 fetch(`https://api.chucknorris.io/jokes/random?category=animal`)
//                     .then(res => res.json())
//                     .then(posts => {
//                         joke.appendChild(document.createTextNode(posts.value));
//                         randomJOke.appendChild(joke);
//                     })
//                     .catch(err => console.log(err))
//             })
//         })
//         .catch(err => console.log(err))
//     }
// };



// document.addEventListener('DOMContentLoaded', app.upload);

import Header from './header/header.js';
import DropDown from './dropDown/dropDown.js';
import Seach from './search/search.js';
import search from './search/search.js';



document.addEventListener('DOMContentLoaded', () => {
    Header.load();
    DropDown.load();
    // document.getElementById("dropDown__options").addEventListener("onchange", () => console.log("hi"));
    search.load();
});