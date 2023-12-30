const fs = require('fs').promises;
//const archivo=[{nombre:"alejandro",apellido:"rubira",edad:44},
//{nombre:"gabriel",apellido:"rubira",edad:26}];
// Convierte el array a una cadena JSON
//const contenidoJSON = JSON.stringify(archivo, null, 2);
/*// Guarda el contenido en un archivo
fs.writeFile('archiv.txt', contenidoJSON, (err) => {
    if (err) {
      console.error('Error al crear el archivo:', err);
      return;
    }
    console.log(`Archivo  creado con éxito.`);
  });
  // Lee el contenido del archivo de texto
fs.readFile('archiv.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }
  
    // Muestra el contenido del archivo en la consola
    console.log('Contenido del archivo:', data);
  
    // Imprime el mensaje al finalizar
    console.log('Fin de contenido del archivo');
  });*/
  // Guarda el contenido en un archivo de manera síncrona
/*try {
    //fs.writeFileSync('archiv.txt', contenidoJSON);
    //console.log('Archivo creado con éxito.');
  
    // Lee el contenido del archivo de texto de manera síncrona
    const data = fs.readFileSync('archiv.txt', 'utf8');
    
    // Muestra el contenido del archivo en la consola
    console.log('Contenido del archivo:', data);
  
    // Imprime el mensaje al finalizar
    console.log('Fin de contenido del archivo');
  } catch (err) {
    console.error('Error:', err);
  }*/
// Lee el contenido del archivo de texto de manera asíncrona con promesas
/*fs.readFile('archiv.txt', 'utf8')
  .then((data) => {
    // Muestra el contenido del archivo en la consola
    console.log('Contenido del archivo:', data);

    // Imprime el mensaje al finalizar
    console.log('Fin de contenido del archivo');
  })
  .catch((err) => {
    console.error('Error al leer el archivo:', err);
  });*/
  async function leerArchivo() {
    try {
      // Lee el contenido del archivo de texto de manera asíncrona con async/await
      const data = await fs.readFile('archiv.txt', 'utf8');
  
      // Muestra el contenido del archivo en la consola
      console.log('Contenido del archivo:', data);
  
      // Imprime el mensaje al finalizar
      console.log('Fin de contenido del archivo');
    } catch (err) {
      console.error('Error al leer el archivo:', err);
    }
  }
  
  // Llama a la función principal
  leerArchivo();