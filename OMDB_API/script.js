// create new node for movies
function createNode(element) {
    return document.createElement(element);
}
//append childs to parents
function append(parent, el) {
return parent.appendChild(el);
}
// where it will append in html
const ul = document.getElementById('searchForm');

function findMovie() {

//clear div when new search is done
    
document.getElementById("searchForm").innerHTML = "";

//search word from input field

let inputValue = document.getElementById("search").value; 

// fetch magic

const uri = `http://www.omdbapi.com/?s=${inputValue}&apikey=ac918fb5&r`;    
fetch(uri)
.then(resp => resp.json())
.then(function(data) {
    movieData = data.Search;
    console.log(movieData);
    return movieData.map(function(movie) {
    
    // create new elements

    let li = createNode('li'),
    img = createNode('img'),
    h1 = createNode('h1'),
    p = createNode ('p');

    // append created elements

    img.src = movie.Poster;
    h1.innerHTML = `${movie.Title}`;
    p.innerHTML = `Type: ${movie.Type}  </br> </br>Year: ${movie.Year}  </br> </br>Link to Imdb: <a href="https://www.imdb.com/title/${movie.imdbID}/">ImdbID</a>  </br> </br>   </br> </br> `;
    append(li, img);
    append(li, h1);
    append(li, p);
    append(ul, li);;
    
    // give class to new elements
    
    h1.className = "listHeader"; 
    img.className = "listImg"; 
    p.className = "listSpan"; 
    })
    
})
.catch(function (error) {
    console.log(error)
})
}


