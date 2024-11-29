
const primoDiv = document.getElementById("primo_div");
const secondoDiv = document.getElementById("secondo_div");




function Ordina_array() {
    const arr = document.getElementById("vettore").value;
    const arr1 = arr.split(" ");

    



    //ordinamento del vettore e conseguente stampa (ordine crescente)
    const arrCrescente = arr1.sort((a, b) => a - b);
    arrCrescente.forEach(element => {
        const div = document.createElement("div");
        div.className = "div";
        const contenuto = document.createTextNode(element);


        div.appendChild(contenuto);
        primoDiv.appendChild(div);
    });




    //ordinamento del vettore e conseguente stampa (ordine decrescente)
    const arrDecrescente = arr1.sort((a, b) => b - a);
    arrDecrescente.forEach(dato => {
        const div = document.createElement("div");
        const contenuto = document.createTextNode(dato);
        div.className = "div";


        div.appendChild(contenuto);
        secondoDiv.appendChild(div);
    });
}
