import setSelectors from '../methods/setSelectors.js';
import addToMain from '../methods/addToMain.js';
import fetchAPI from '../methods/fetchAPI.js';

// const categoriesURL = 'https://api.chucknorris.io/jokes/categories';

class DropDown {
    constructor() {
        this.dropDown = document.createElement("div");
        this.dropDownOptions = document.createElement("select");
        this.selectedJoke = document.createElement("p");
    }

    load() {
        // dropdown box
        setSelectors(this.dropDown, "dropDown", "dropDown");
        
        // dropdown selector
        setSelectors(this.dropDownOptions, "dropDown__options", "dropDown__options");
        this.dropDownOptions.name = "dropDown__options";

        fetchAPI('https://api.chucknorris.io/jokes/categories', posts => {
            posts.forEach(element => {
                let dropDownOption = document.createElement("option");
                dropDownOption.appendChild(document.createTextNode(element));
                dropDownOption.value = element;
                this.dropDownOptions.appendChild(dropDownOption);
            });

            fetchAPI(`https://api.chucknorris.io/jokes/random?category=${posts[0]}`, posts => {
                this.selectedJoke.appendChild(document.createTextNode(posts.value));
            })
        });

        // selected joke
        setSelectors(this.selectedJoke, "dropDown__selectedJoke", "dropDown__selectedJoke");
        

        // append tags to the header  
        this.dropDown.appendChild(this.dropDownOptions);
        this.dropDown.appendChild(this.selectedJoke);

        // add drop down to the main tag
        addToMain(this.dropDown);
    }
}

export default new DropDown();

