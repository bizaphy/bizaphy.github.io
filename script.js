// Seleccionar en el DOM los elementos
const userInput = document.querySelector("#amount-clp");
const convertido = document.querySelector(".convertido");
const valoresDiarios = document.querySelector(".test");
const botonBuscar = document.querySelector(".boton-buscar");
let graficoIndicador;

//FUNCION PARA OBTENER LOS DATOS DESDE LA API
async function mostrarIndicadoresEconomicos() {
  try {
    const res = await fetch("https://mindicador.cl/api");
    const indicadoresDiarios = await res.json();

    // Escoger valores
    const euroValor = indicadoresDiarios.euro.valor;
    const ufValor = indicadoresDiarios.uf.valor;
    const dolarValor = indicadoresDiarios.dolar.valor;

    // Obtener la moneda seleccionada por el usuario
    const currencySelect = document.getElementById("currency");
    const selectedCurrency = currencySelect.value;

    // Calcular monedas a CLP
    if (selectedCurrency === "euro") {
      let valorPrint = ((1 * userInput.value) / euroValor).toFixed(4);
      convertido.textContent = `${userInput.value} CLP equivale a ${valorPrint} Euros`;
    } else if (selectedCurrency === "dolar") {
      let valorPrint = ((1 * userInput.value) / dolarValor).toFixed(4);
      convertido.textContent = `${userInput.value} CLP equivale a ${valorPrint} USD`;
    } else if (selectedCurrency === "uf") {
      let valorPrint = ((1 * userInput.value) / ufValor).toFixed(4);
      convertido.textContent = `${userInput.value} CLP equivale a ${valorPrint} UF`;
    } else {
      console.log("Opción no válida");
    }

    // Generar el gráfico según la moneda seleccionada
    await generarGrafico(selectedCurrency);
  } catch (error) {
    //Elemento para mostrar el error, en caso de existir
    const errorTexto = document.createElement("p");
    errorTexto.textContent = "Error al consumir la API: " + error;
    valoresDiarios.appendChild(errorTexto);
  }
}

// evento CLICK
botonBuscar.addEventListener("click", mostrarIndicadoresEconomicos);

async function generarGrafico(indicador) {
  try {
    // Obtener el contexto del canvas
    const contexto = document.getElementById("grafico").getContext("2d");
    // Solicitud a la API
    const response = await fetch("https://mindicador.cl/api/" + indicador);
    const data = await response.json();

    // Para obtener solo los ultimos 10 días del indicador
    let indicadorData = data.serie.slice(-10);

    // Formato de datos para chart
    let labels = indicadorData.map((entry) => entry.fecha.slice(0, 10)); // Usar solo la parte de la fecha sin la hora
    let valores = indicadorData.map((entry) => entry.valor);

    // Configuracion del grafico y cuando debe destruirse y crear uno nuevo
    if (graficoIndicador) {
      graficoIndicador.destroy(); // Destruir el gráfico anterior
    }
    graficoIndicador = new Chart(contexto, {
      type: "line",
      data: {
        labels: labels.reverse(), // Para que las mas recientes queden al final, y tenga sentido cronologico el grafico.
        datasets: [
          {
            label: "Valor del " + data.nombre,
            data: valores.reverse(), // Se invierten valores para que coincida con las labels
            backgroundColor: "#888",
            borderColor: "#777",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  } catch (error) {
    console.error("Error al generar el gráfico:", error);
  }
}
