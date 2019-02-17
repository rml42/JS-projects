// both functions need createNode and append so they are defined first

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function marsPhotos(){

document.getElementById("responseGallery").innerHTML = "";

// get where new content will be put

const ul = document.getElementById('responseGallery');

// url to fetch
const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=S9wIHzSzlzZsbGLjkkVYIJYfvXLpQKiJyZ0Jdnar';

// fetch, create and append

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let spacePhotos = data.photos;
    return spacePhotos.map(function(space) {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = space.img_src;
      span.innerHTML = `${space.camera.full_name} ${space.earth_date}`;
      append(li, img);
      append(li, span);
      append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
}); 
}  
// second image row
function curiosityRear() {

document.getElementById("responseGallery").innerHTML = "";
const ul1 = document.getElementById('responseGallery');
const url1 = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=NAVCAM&api_key=S9wIHzSzlzZsbGLjkkVYIJYfvXLpQKiJyZ0Jdnar';
fetch(url1)
.then((resp) => resp.json())
.then(function(data) {
    let rovercam = data.photos;
    return rovercam.map(function(space) {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = space.img_src;
      span.innerHTML = `${space.camera.full_name} ${space.earth_date}`;
      append(li, img);
      append(li, span);
      append(ul1, li);
  })
})
.catch(function(error) {
  console.log(error);
}); 
}

function curiosityFront(){

document.getElementById("responseGallery").innerHTML = "";
const ul2 = document.getElementById('responseGallery');
const url2 = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=FHAZ&api_key=S9wIHzSzlzZsbGLjkkVYIJYfvXLpQKiJyZ0Jdnar';
fetch(url2)
.then((resp) => resp.json())
.then(function(data) {
    let rovercam = data.photos;
    return rovercam.map(function(space) {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = space.img_src;
      span.innerHTML = `${space.camera.full_name} ${space.earth_date}`;
      append(li, img);
      append(li, span);
      append(ul2, li);
  })
})
.catch(function(error) {
  console.log(error);
}); 
}