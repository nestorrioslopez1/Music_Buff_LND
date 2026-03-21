function agregar(){
    const fila=document.getElementById("tabla").getElementsByTagName("tbody")[0].insertRow();
    const celda1=fila.insertCell(0);
    const celda2=fila.insertCell(1);
    const celda3=fila.insertCell(2);
    celda1.innerText=document.getElementById("producto").value;
    celda2.innerText=document.getElementById("cantidad").value;
    celda3.innerText=document.getElementById("tienda").value;
    document.getElementById("producto").value="";
    document.getElementById("cantidad").value="";
    document.getElementById("tienda").value="";
}

