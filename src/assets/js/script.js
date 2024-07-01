const casaVenta = [
  {
    imagen: "./src/assets/img/arbol.avif",
    nombre: "Casa del arbol",
    descripcion: "Hermosos paisajes. Cuidado con los osos.",
    direccion: "Muy, muy, muy al interior del Bosque",
    habitaciones: "2",
    precio: "$31000",
    fumar: false,
    mascotas: false,
  },
  {
    imagen: "./src/assets/img/cerro.jpg",
    nombre: "Casa en el cerro",
    descripcion: "Mucho espacio, pocos vecinos. Necesitaras un auto.",
    direccion: "Cerro Azul, Calle 84, CA 34",
    habitaciones: "3",
    precio: "$65000",
    fumar: true,
    mascotas: true,
  },
  {
    imagen: "./src/assets/img/antigua.jpg",
    nombre: "Casa antigua",
    descripcion: "Con un poco de esfuerzo podrias vivir aqui.",
    direccion: "Calle del Parque 654, Bosque.",
    habitaciones: "4",
    precio: "$70000",
    fumar: false,
    mascotas: true,
  },
  {
    imagen: "./src/assets/img/selva.jpg",
    nombre: "Casa en la selva",
    descripcion: "Cuidado con los mosquitos.",
    direccion: "Selva del este. Rio Negro, 2",
    habitaciones: "2",
    precio: "$30000",
    fumar: true,
    mascotas: false,
  },
  {
    imagen: "./src/assets/img/casa2.jpeg",
    nombre: "Casa moderna amplia.",
    descripcion: "Lejos del ruido, cerca de tus vecinos.",
    direccion: "Calle Curie, 345",
    habitaciones: "4",
    precio: "$90000",
    fumar: true,
    mascotas: true,
  },
  {
    imagen: "./src/assets/img/madera.webp",
    nombre: "Casa a orillas del rio",
    descripcion: "Cerca de bellos parques.",
    direccion: "Calle Rio Babel, 175.",
    habitaciones: "2",
    precio: "$45000",
    fumar: false,
    mascotas: true,
  },
];

const casaRenta = [
  {
    imagen: "./src/assets/img/casona.jpg",
    nombre: "Casona antigua",
    descripcion: "Restaurada y con aires modernos.",
    direccion: "Avenida antigua, 56.",
    habitaciones: "7 Habitaciones",
    precio: "$5000",
    fumar: true,
    mascotas: true,
  },
  {
    imagen: "./src/assets/img/roja.jpg",
    nombre: "Casa roja restaurada",
    descripcion: "Sobreviviente de mejores tiempos.",
    direccion: "Avenida Roja, Calle 55, CA 12.",
    habitaciones: "4 Habitaciones",
    precio: "$2000",
    fumar: true,
    mascotas: true,
  },
  {
    imagen: "./src/assets/img/chinatown.jpg",
    nombre: "Departamento en Chinatown",
    descripcion:
      "Poco espacio, mucho ruido, muchos vecinos. Cerca de todos los servicios.",
    direccion: "Mingtao 3, Torre 7, CA 545.",
    habitaciones: "2",
    precio: "$2500",
    fumar: true,
    mascotas: true,
  },
  {
    imagen: "./src/assets/img/gotica.jpg",
    nombre: "Casa gotica",
    descripcion: "Para amantes de lo oscuro y del new wave.",
    direccion: "Fascination Street 23.",
    habitaciones: "Calle del Parque 654, Bosque",
    precio: "$1500",
    fumar: true,
    mascotas: true,
  },
  {
    imagen: "./src/assets/img/cueva.webp",
    nombre: "Casa en la cueva",
    descripcion: "Perfecta para hacer queso.",
    direccion: "Bosque del sur, arbol 547.",
    habitaciones: "1",
    precio: "$500",
    fumar: true,
    mascotas: false,
  },
  {
    imagen: "./src/assets/img/moderna.webp",
    nombre: "Casa moderna en alquiler",
    descripcion: "Con las comodidades digitales.",
    direccion: "Avenida nueva, sector 2, 45.",
    habitaciones: "4",
    precio: "$1500",
    fumar: false,
    mascotas: true,
  },
];

const agregarCasa = function (casas, contenedor) {
  const Seleccion = document.querySelector(contenedor);

  // Verificar si el contenedor existe antes de intentar agregar las tarjetas
  if (Seleccion) {
    let lista = "";

    for (const casa of casas) {
      let fumarClass, fumarText, mascotasClass, mascotasText;

      if (casa.fumar == true) {
        fumarClass = "fumadores-si";
        fumarText = "<i class='fa-solid fa-smoking'></i> Permitido fumar";
      } else {
        fumarClass = "fumadores-no";
        fumarText =
          "<i class='fa-solid fa-ban-smoking'></i> No se permite fumar";
      }

      if (casa.mascotas == true) {
        mascotasClass = "mascotas-si";
        mascotasText = "<i class='fa-solid fa-paw'></i> Mascotas permitidas";
      } else {
        mascotasClass = "mascotas-no";
        mascotasText =
          "<i class='fa-solid fa-ban'></i> No se permiten mascotas";
      }

      const card = `
      <div class = "card">
        <img src="${casa.imagen}" alt="${casa.nombre}">
        <div class="name">${casa.nombre}</div>
        <p class="description">${casa.descripcion}</p>
        <p class="address"><strong>Dirección:</strong> ${casa.direccion}</p>
        <p><strong>Habitaciones:</strong> ${casa.habitaciones}</p>
        <p><strong>Precio:</strong> ${casa.precio}</p>
        <div class="permisos">
          <span class="${fumarClass}">${fumarText}</span>
          <span class="${mascotasClass}">${mascotasText}</span>
        </div>
      </div>  
      `;

      lista = lista + card;
    }
    Seleccion.innerHTML = lista;
  }
};

const SeleccionVenta = document.querySelector(".cards-venta");
const SeleccionRenta = document.querySelector(".cards-renta");

if (SeleccionVenta) {
  agregarCasa(casaVenta, ".cards-venta");
}

if (SeleccionRenta) {
  agregarCasa(casaRenta, ".cards-renta");
}

// SEPARADOR

const agregarCasaIndex = function (casas, contenedor) {
  const indexSeleccion = document.querySelector(contenedor);

  // Verificar si el contenedor existe antes de intentar agregar las tarjetas
  if (indexSeleccion) {
    let lista = "";

    for (let i = 0; i < 3; i++) {
      const casa = casas[i];

      let fumarClass, fumarText, mascotasClass, mascotasText;

      if (casa.fumar == true) {
        fumarClass = "fumadores-si";
        fumarText = "<i class='fa-solid fa-smoking'></i> Permitido fumar";
      } else {
        fumarClass = "fumadores-no";
        fumarText =
          "<i class='fa-solid fa-ban-smoking'></i> No se permite fumar";
      }

      if (casa.mascotas == true) {
        mascotasClass = "mascotas-si";
        mascotasText = "<i class='fa-solid fa-paw'></i> Mascotas permitidas";
      } else {
        mascotasClass = "mascotas-no";
        mascotasText =
          "<i class='fa-solid fa-ban'></i> No se permiten mascotas";
      }

      const card = `
      <div class = "card">
        <img src="${casa.imagen}" alt="${casa.nombre}">
        <div class="name">${casa.nombre}</div>
        <p class="description">${casa.descripcion}</p>
        <p class="address"><strong>Dirección:</strong> ${casa.direccion}</p>
        <p><strong>Habitaciones:</strong> ${casa.habitaciones}</p>
        <p><strong>Precio:</strong> ${casa.precio}</p>
        <div class="permisos">
          <span class="${fumarClass}">${fumarText}</span>
          <span class="${mascotasClass}">${mascotasText}</span>
        </div>
      </div>  
      `;

      lista = lista + card;
    }
    indexSeleccion.innerHTML = lista;
  }
};

const indexSeleccionVenta = document.querySelector(".cards-venta-index");
const indexSeleccionRenta = document.querySelector(".cards-renta-index");

if (indexSeleccionVenta) {
  agregarCasaIndex(casaVenta, ".cards-venta-index");
}

if (indexSeleccionRenta) {
  agregarCasaIndex(casaRenta, ".cards-renta-index");
}
