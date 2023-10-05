window.onload = function() { 
     // Obtener referencias a elementos del DOM
     const enlace = document.getElementById('miEnlace');
     const mostrarInfoBtn = document.getElementById('mostrarInfo');
     const cambiarEnlaceBtn = document.getElementById('cambiarEnlace');
     const  Mostrado = document.getElementById("Mostrado");
     const Cambiado = document.getElementById('Cambiado');


     const Incrementar = document.getElementById('Sumar');
     const Decrementar = document.getElementById('Restar');
     const Contador = document.getElementById('Contador');

    /*Compruebo que el elemento existe y no es nulo, sino me da error al usar el mismo script en otro html no correspondiente : "Cannot read property 'addEventListener' of null".
    Este error  se produce cuando intentas agregar un evento a un elemento que no existe en la página actual y aparece en la consola del navegador. CTRL +SHIFT+J*/
    
    if(Incrementar){ 
        Incrementar.addEventListener('click', function() {
            let numero = parseInt(Contador.textContent);
            numero++;
            Contador.textContent=numero; 
        });
    }


    if(Decrementar){
        Decrementar.addEventListener('click', function() {
            let numero = parseInt(Contador.textContent);
            numero--;
            Contador.textContent=numero;
        });
    }

   
    if(mostrarInfoBtn){
         // Función para mostrar la información del enlace
         mostrarInfoBtn.addEventListener('click', function() {
            const url = enlace.getAttribute('href');
            const texto = enlace.textContent;
            Mostrado.textContent="URL del enlace:" +url+ "\nTexto del enlace: " + texto;
            Cambiado.style.display = 'none'; // Ocultar el párrafo de Cambiado
            Mostrado.style.display = 'block'; // Mostrar el párrafo de Mostrado
        });   
    }

    if(cambiarEnlaceBtn){
             // Función para cambiar la URL y el texto del enlace
     cambiarEnlaceBtn.addEventListener('click', function() {
        enlace.setAttribute('href', 'https://www.example.com');
        enlace.textContent = 'He cambiado';
        Cambiado.textContent = "URL del enlace: https://www.example.com\nTexto del enlace: He cambiado";
        Cambiado.style.display = 'block'; // Mostrar el párrafo de Cambiado
        Mostrado.style.display = 'none'; // Ocultar el párrafo de Mostrado 
    });
    }

    



    }
