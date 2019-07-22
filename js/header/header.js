import setSelectors from '../methods/setSelectors.js';
import addToMain from '../methods/addToMain.js';
import fetchAPI from '../methods/fetchAPI.js';

class Header {
    constructor() {
        this.header = document.createElement("div");
        this.title = document.createElement("h1");
        this.logo = document.createElement("img");
    }

    load() { 
        // header
        setSelectors(this.header, "header", "header");

        // title
        setSelectors(this.title, "header__title", "header__title");
        let titleText = document.createTextNode("Everyone loves Chuck Norris");
        this.title.appendChild(titleText);

        // logo
        setSelectors(this.logo, "header__logo", "header__logo");
        fetchAPI('https://api.chucknorris.io/jokes/random', posts => {
            this.logo.setAttribute("src", posts.icon_url)
        });
        
        // append tags to the header  
        this.header.appendChild(this.logo);
        this.header.appendChild(this.title);

        // add header to the main tag
        addToMain(this.header);
    }
    
}

export default new Header();

