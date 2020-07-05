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