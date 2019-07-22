import setSelectors from '../methods/setSelectors.js';
import addToMain from '../methods/addToMain.js';

class Search {
    constructor() {
        this.search = document.createElement("div");
        this.searchInput = document.createElement("input");
        this.searchInputSubmit = document.createElement("button");
        this.searchedJokesContainer = document.createElement("div");
        this.searchedJokes = document.createElement("p");
    }

    load() {
        // search input
        setSelectors(this.searchInput, "search__input", "search__input");
        this.searchInput.type = 'text';
        this.searchInput.placeholder = 'search for a joke ...';
        this.search.appendChild(this.searchInput);

        // search button
        this.searchInputSubmit.appendChild(document.createTextNode("submit"));
        this.appendChild(this.searchInputSubmit);
        
        // searched jokes and theri container

        // add the tags to search
        // add searchInput to search
        addToMain(this.search);
    }
}

export default new Search();