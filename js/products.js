 let URL_InfoAutos = "https://japceibal.github.io/emercado-api/cats_products/101.json";

  
 fetch(URL_InfoAutos)
 .then(res => res.json())
 .then(res => {
console.log(res.products);
MostrarData(res.products)
 })

 let productos=document.getElementById("productos");

 function MostrarData(dataArray) {

    for (const item of dataArray) {
      
      productos.innerHTML += `<div><img src="${item.image}" style>  <h1>${item.name} -${item.currency} ${item.cost}</h1> <p>${item.soldCount} vendidos</p>
      
      <p> ${item.description} </p></div>`; 
    }
  }
