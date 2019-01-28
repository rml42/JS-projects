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
document.getElementById("searchForm").innerHTML = ""; //clear div when new search is done
let inputValue = document.getElementById("search").value; //search word
const uri = `http://www.omdbapi.com/?s=${inputValue}&apikey=ac918fb5&r`;    
fetch(uri)
.then(resp => resp.json())
.then(function(data) {
    movieData = data.Search;
    console.log(movieData);
    return movieData.map(function(movie) {
    let li = createNode('li'),
    img = createNode('img'),
    h1 = createNode('h1'),
    span = createNode ('span');

    img.src = movie.Poster;
    h1.innerHTML = `${movie.Title}`;
    span.innerHTML = `${movie.Type}  </br> </br> ${movie.Year}  </br> </br> <a href="https://www.imdb.com/title/${movie.imdbID}/">ImdbID</a>  </br> </br>   </br> </br> `;
    append(li, img);
    append(li, h1);
    append(li, span);
    append(ul, li);;
    })
    
})
.catch(function (error) {
    console.log(error)
})
}


