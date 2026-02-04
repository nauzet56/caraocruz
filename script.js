var foto = document.getElementById('coinImage');
var mensaje = document.getElementById('gameMessage');
var boton = document.getElementById('launchButton');

function jugar() {
  var eleccion = document.querySelector('input[name="choice"]:checked').value;
  
  boton.disabled = true;
  mensaje.innerText = "¡La moneda está en el aire...!";


  foto.innerHTML = '<img src="cara.png">';
  
  setTimeout(function() {

    foto.innerHTML = '<img src="cruz.jpg">';
    
    setTimeout(function() {
    
      foto.innerHTML = '<img src="cara.png">';
      
      setTimeout(function() {
      
        foto.innerHTML = '<img src="cruz.jpg">';
        
        setTimeout(function() {
         
          foto.innerHTML = '<img src="cara.png">';
          
          setTimeout(function() {
          
            foto.innerHTML = '<img src="cruz.jpg">';

            setTimeout(function() {
              

              var azar = Math.floor(Math.random() * 2);
              var resultado;

              if (azar == 0) {
                resultado = "cara";
                foto.innerHTML = '<img src="cara.png">';
              } else {
                resultado = "cruz";
                foto.innerHTML = '<img src="cruz.jpg">';
              }

              if (eleccion == resultado) {
                mensaje.innerText = "¡GANASTE! Era " + resultado;
              } else {
                mensaje.innerText = "PERDISTE... salió " + resultado;
              }

              boton.disabled = false;

            }, 200); 
          }, 200); 
        }, 200); 
      }, 200);
    }, 200); 
  }, 200);  
}

boton.onclick = jugar;