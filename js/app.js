function mostrarBotones(event) {
    event.preventDefault(); 

    if (document.getElementById('ocultarForm').checkValidity()) {
      document.getElementById('mostrarBotonGeneracion').style.display = 'block';
      document.getElementById('mostrarBotonEdad').style.display = 'block';
      document.getElementById('mostrarDatos').style.display = 'block';
      document.getElementById('ocultarForm').style.display = 'none';
    }
  }

  let persona;

  function crearPersona(){
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const anioNacimiento = document.getElementById('anioNacimiento').value;

    persona = {
        nombre: nombre,
        edad: edad,
        genero: genero,
        peso: peso,
        altura: altura,
        anioNacimiento: anioNacimiento
    };

    

  }

  function mostrarGeneracion() {
    if(persona){
      alert("Generación: " + determinarGeneracion(persona.edad));
    } else {
      alert("Primero debes crear una persona.");
    }
  }

  function determinarGeneracion(edad) {
    if (edad >= 0 && edad <= 30) {
        return "Generación Z : Irreverencia";
      } else if (edad >= 31 && edad <= 43) {
        return "Generación Y : Frustración";
      } else if (edad >= 43 && edad <= 55) {
        return "Generación X : Obsesión por el exito";
      } else if (edad >= 56 && edad <= 75) {
        return "Generación Baby Boom : Ambición";
      } else if (edad >= 75 && edad <= 94) {
        return "Silent Generation: Austeridad";
      } else {
        return "Generacion no clasificada";
      }
  }

  function mayorEdad() {
    if (persona) {
      const resultado =
        persona.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
      alert(resultado);
    } else {
      alert("Primero debes crear una persona.");
    }
  }
  
  function mostrarDatos() {
    alert(
        "Persona creada:\nNombre: " +
          persona.nombre +
          "\nEdad: " +
          persona.edad +
          "\nGenero: " +
          persona.genero +
          "\nPeso: " +
          persona.peso +
          "\nAltura: " +
          persona.altura +
          "\nAño de Nacimiento: " +
          persona.anioNacimiento
      );
  }

  document.getElementById('botonCrear').addEventListener('click', function(event) {
    mostrarBotones(event);
    crearPersona();
  });

  document.getElementById('mostrarBotonGeneracion').addEventListener( 'click',mostrarGeneracion);

  document.getElementById('mostrarBotonEdad').addEventListener( 'click', mayorEdad);

  document.getElementById('mostrarDatos').addEventListener('click', mostrarDatos)

