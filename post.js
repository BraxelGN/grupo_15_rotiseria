const apiUrl = 'https://api.punkapi.com/v2/beers';

// Realiza una solicitud para obtener una lista de cervezas
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {

    // Elemento donde se mostrarán los datos
    const container = document.getElementById("data-container");
    
    // Iterar a través de los datos
    data.forEach(item => {
      // Crear un elemento <li> para cada dato
      const listItem = document.createElement("li");
      
      // Agregar el contenido del dato al elemento <li>
      listItem.textContent = item.name; // Supongamos que 'name' es una propiedad de tus datos
    
      // Agregar el elemento <li> al contenedor
      container.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error('Error al obtener la lista de cervezas:', error);
  });
