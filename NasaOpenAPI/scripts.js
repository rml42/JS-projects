

        function createNode(element) {
            return document.createElement(element);
        }

        function append(parent, el) {
          return parent.appendChild(el);
        }
        const ul = document.getElementById('responseContent');
        const url = 'https://api.nasa.gov/planetary/apod?api_key=S9wIHzSzlzZsbGLjkkVYIJYfvXLpQKiJyZ0Jdnar';
        fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let apod = data
            let li = createNode('li'),
            img = createNode('img'),
            h1 = createNode('h1')
            span = createNode('span');
        
        img.src = apod.url;
        h1.innerHTML = `${apod.title}`;
        span.innerHTML = `${apod.explanation} </br> </br> ${apod.copyright}`;
        append(li, img);
        append(li, h1);
        append(li, span);
        append(ul, li);
        })
        .catch(function(error) {
          console.log(error);
        }); 


    var menuClick = new Audio();
    menuClick.src = "sounds/CLICK10A.WAV"

    
    

