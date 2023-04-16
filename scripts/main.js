import { series } from "./data.js";
var seriesTbody = document.getElementById("series");
var average = document.getElementById("average");
llenarTabla();
average.innerHTML = "Seasons Average: ".concat(calcularPromedio());
function llenarTabla() {
    series.forEach(function (serie) {
        var fila = document.createElement("tr");
        fila.id = "S".concat(serie.id);
        fila.innerHTML = "\n        <td> \n            ".concat(serie.id, "\n        </td>\n        <td style=\"color: blue\">\n            ").concat(serie.title, "\n        </td>\n        <td>\n            ").concat(serie.channel, "\n        </td>\n        <td>\n            ").concat(serie.seasons, "\n        </td>");
        seriesTbody.appendChild(fila);
    });
}
function calcularPromedio() {
    var promedio = 0;
    series.forEach(function (serie) { return promedio += serie.seasons; });
    promedio /= series.length;
    return promedio.toFixed(2);
}
var foto = document.getElementById("imagen");
var title = document.getElementById("title");
var synopsis = document.getElementById("synopsis");
var url = document.getElementById("url");
crearBotones();
function crearBotones() {
    series.forEach(function (c) {
        var boton = document.getElementById("S".concat(c.id));
        boton.onclick = function () { limpiarRows(); crearCard(boton); };
    });
}
function crearCard(boton) {
    boton.style.backgroundColor = "#CCCCCC";
    var idSerie = parseInt(boton.id.replace("S", ""));
    var serie = series[idSerie - 1];
    foto.setAttribute("src", serie.image);
    title.innerHTML = "".concat(serie.title);
    synopsis.innerHTML = "".concat(serie.synopsis);
    url.setAttribute("href", "".concat(serie.url));
    url.innerHTML = "".concat(serie.url);
}
var card = document.getElementById("card");
function limpiarRows() {
    card.style.border = "1px solid #DFDFDF";
    series.forEach(function (c) {
        var boton = document.getElementById("S".concat(c.id));
        boton.style.backgroundColor = "#F2F2F2";
    });
}
//crearCard(document.getElementById("S1")!);
