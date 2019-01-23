

        function createNode(element) {
            return document.createElement(element);
        }

        function append(parent, el) {
          return parent.appendChild(el);
        }
      
        const ul = document.getElementById('responseContent');
        const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=S9wIHzSzlzZsbGLjkkVYIJYfvXLpQKiJyZ0Jdnar';
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
         


        const ul1 = document.getElementById('responseContent1');
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

        const ul2 = document.getElementById('responseContent1');
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


        var menuClick = new Audio();
        menuClick.src = "sounds/CLICK10A.WAV"