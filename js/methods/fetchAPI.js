let fetchAPI = (url, callback) => {
    fetch(url)
    .then(res => res.json())
    .then(posts => callback(posts)) 
    .catch(error => console.log(error))
}

export default fetchAPI;
