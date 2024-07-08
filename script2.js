// Obtener referencias a los elementos necesarios
const listaDeTareas = document.querySelector("#lista-tareas");
const tareaInput = document.querySelector("#input-tarea");
const btnAgregar = document.querySelector(".input-boton-agregar");
const contadorTareas = document.querySelector("#cuenta-tareas");
const contadorCompletadas = document.querySelector("#cuenta-completadas");

// PARTE 1: Crear lista de tareas
const tareas = [
  { id: 1234567870001, nombre: "Hacer la tarea", completado: false },
  { id: 1234562319878, nombre: "Limpiar la casa", completado: true },
  { id: 3231456712318, nombre: "Ir al gimnasio", completado: false },
];

/* Actualizamos la información en el HTML */
function renderTareas() {
  let tablaActualizada = `
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>ID</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
  `;
  let tareasCompletadas = 0;
  for (let tarea of tareas) {
    let estadoTexto = tarea.completado ? "Completada" : "Pendiente";

    if (tarea.completado) {
      colorTexto = "color: green;";
      tareasCompletadas++;
    } else {
      colorTexto = "color: red;";
    }

    tablaActualizada =
      tablaActualizada +
      `
      <tr>
        <td style="${colorTexto}">${tarea.nombre}</td>
        <td>${tarea.id}</td>
        <td>${estadoTexto}</td>
        <td>
          <button class="eliminar" data-index="${tarea.id}" onclick="borrar(${tarea.id})">Eliminar</button>
          <button class="cambiar" data-index="${tarea.id}" onclick="cambiarEstado(${tarea.id})">Cambiar Estado</button>
        </td>
      </tr>
    `;
  }
  tablaActualizada += `
      </tbody>
    </table>
  `;
  listaDeTareas.innerHTML = tablaActualizada;
  contadorTareas.textContent = `Total de tareas: ${tareas.length}`;
  contadorCompletadas.textContent = `Tareas completadas: ${tareasCompletadas}`;
}

renderTareas();

btnAgregar.addEventListener("click", () => {
  const nuevaTarea = tareaInput.value;
  tareas.push({ id: Date.now(), nombre: nuevaTarea, completado: false });
  tareaInput.value = "";
  renderTareas();
});

function borrar(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  tareas.splice(index, 1);
  renderTareas();
}

function cambiarEstado(id) {
  const index = tareas.findIndex((ele) => ele.id == id);
  tareas[index].completado = !tareas[index].completado;
  renderTareas();
}
