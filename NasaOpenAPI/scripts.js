
  // url to fetch

  const url = 'https://api.nasa.gov/planetary/apod?api_key=S9wIHzSzlzZsbGLjkkVYIJYfvXLpQKiJyZ0Jdnar';
  
  // fetch
  
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
  
  // get where the new content will be placed in document  

  const ul = document.getElementById('responseContent');
  
  // create new element function

  function createNode(element) {
      return document.createElement(element);
    }

  // append new elements to parents

  function append(parent, el) {
    return parent.appendChild(el);
    }

  // use create function

  let apod = data
  let li = createNode('li'),
  img = createNode('img'),
  h1 = createNode('h1')
  span = createNode('span');
  
  // content and append

  img.src = apod.url;
  h1.innerHTML = `${apod.title}`;
  span.innerHTML = `${apod.explanation} </br> </br>Author: ${apod.copyright}`;
  append(li, img);
  append(li, h1);
  append(li, span);
  append(ul, li);
  })
  .catch(function(error) {
    console.log(error);
  }); 




    
    

