import {series} from "./data.js";
import {Serie} from "./serie.js";

const seriesTbody: HTMLElement = document.getElementById("series")!;
let average: HTMLElement = document.getElementById("average")!;

llenarTabla();
average.innerHTML = `Seasons Average: ${calcularPromedio()}`;

function llenarTabla(): void {
    series.forEach((serie) => {
        let fila = document.createElement("tr");
        fila.id = `S${serie.id}`;
        fila.innerHTML = `
        <td> 
            ${serie.id}
        </td>
        <td style="color: blue">
            ${serie.title}
        </td>
        <td>
            ${serie.channel}
        </td>
        <td>
            ${serie.seasons}
        </td>`;        
        seriesTbody.appendChild(fila);
    });
}

function calcularPromedio(): string {
    let promedio = 0;
    series.forEach(serie => promedio += serie.seasons);
    promedio /= series.length;
    return promedio.toFixed(2)
}

let foto:HTMLElement = document.getElementById("imagen")!;
let title:HTMLElement = document.getElementById("title")!;
let synopsis: HTMLElement = document.getElementById("synopsis")!;
let url: HTMLElement = document.getElementById("url")!;

crearBotones();

function crearBotones(): void {
    series.forEach(c=>{
        let boton = document.getElementById(`S${c.id}`)!;
        boton.onclick = () => {limpiarRows(); crearCard(boton);};
    });
}

function crearCard(boton: HTMLElement): void {
    boton.style.backgroundColor = "#CCCCCC";
    let idSerie: number = parseInt(boton.id.replace("S", ""));
    let serie: Serie = series[idSerie - 1]; 
    foto.setAttribute("src", serie.image);
    title.innerHTML = `${serie.title}`;
    synopsis.innerHTML = `${serie.synopsis}`;
    url.setAttribute("href", `${serie.url}`);
    url.innerHTML = `${serie.url}`;
}

let card = document.getElementById("card")!;

function limpiarRows(): void {
    card.style.border = "1px solid #DFDFDF";
    series.forEach(c=>{
        let boton = document.getElementById(`S${c.id}`)!;
        boton.style.backgroundColor = "#F2F2F2";
    });
}

//crearCard(document.getElementById("S1")!);