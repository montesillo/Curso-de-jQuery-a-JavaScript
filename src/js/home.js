console.log('hola mundo!');
const noCambia = "Hiram";
let cambia = "@Hiram Montesillo";

function cambiarNombre(nuevoNombre){
  cambia = nuevoNombre;
}

const getUserAll = new Promise(function(todoBien, todoMal) {
  //llamar a un api
  setTimeout(function() {
  todoBien('se acabó el tiempo 5')
  }, 5000);
});
const getUser = new Promise(function(todoBien, todoMal) {
  //llamar a un api
  setTimeout(function() {
  todoBien('se acabó el tiempo 3')
  }, 3000);
});

// getUser
//   .then(function() {
//     console.log("Todo esta bien");
//   })
//   .catch(function(msg){
//     console.log(msg);
//   })
  
  Promise.race([
    getUser,
    getUserAll,
  ])
  .then(function(message){
    console.log(message)
  })
  .catch(function(message){
    console.log(message)
  })

  // $.ajax('https://randomuser.me/api', {
  //   method: 'GET',
  //   success: function(data){
  //     console.log(data)
  //   },
  //   error: function(error){
  //     console.log(error);
  //   }
  // })

fetch('https://randomuser.me/api')
  .then(function(response){
    console.log(response)
    return response.json()
  })
  .then(function(user){
    console.log('user', user.results[0].name.first)
  })
  .catch(function(){
    console.log('algo fallo')
  });

(async function load(){
  // await
  // action
  //terror
  // animation
  async function getData(url){
    const response = await fetch(url)
    const data = await response.json()
    return data;
  }
  const $form = document.getElementById('form');
  const $home = document.getElementById('home');
  const $featuringContainer = document.getElementById('featuring')

  function setAttributes($element, attributes){
    for (const attribute in attributes){
      $element.setAttribute(attribute, attributes[attribute]);
    }
  }

  $form.addEventListener('submit', (event) => {
    event.preventDefault();
    $home.classList.add('search-active');
    const $loader = document.createElement('img');
    setAttributes($loader, {
      src: 'src/images/loader.gif',
      height: 50,
      width: 50,
    })
    $featuringContainer.append($loader);
  })
  const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama');
  const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation');
  console.log(actionList, dramaList, animationList);
  function videoItemTemplate(movie){
    return(
      `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    )
  }
  function createTemplate(HTMLString){
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }
  function addEventClick($element){
    $element.addEventListener('click', () =>{
      showModal()
    })
  }

  
  function renderMovieList(list, $container){
    // actionList.data.movies
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie);
      const movieElement = createTemplate(HTMLString)
      
      $container.append(movieElement)
      addEventClick(movieElement);
    })
  }
  const $actionContainer = document.querySelector('#action')
  renderMovieList(actionList.data.movies, $actionContainer)
  const $dramaContainer = document.getElementById('drama')
  renderMovieList(dramaList.data.movies, $dramaContainer)
  const $animationContainer = document.getElementById('animation')
  renderMovieList(animationList.data.movies, $animationContainer)




  

  // const $home = $('.home .list #item')
  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

  const $modalTitle = $modal.querySelector('h1');
  const $modalImage = $modal.querySelector('img');
  const $modalDescription = $modal.querySelector('p');

  function showModal(){
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
  }

  $hideModal.addEventListener('click', hideModal);
  function hideModal(){
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }

  // console.log(videoItemTemplate('src/images/covers/bitcoin.jpg', 'bitcoin'))
})()