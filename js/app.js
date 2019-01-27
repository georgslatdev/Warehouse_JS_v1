function init() {
  $.getJSON('warehouse.json', loadWarehouse);
}

function loadWarehouse(data) {
  "use strict";
  //display to the page warehouse products
    //console.log(data); // check console(data) in browser
    var display = '';
    for (var key in data) {
        display+='<div class="content-box">';
          display+=`<h3>${data[key].name}</h3>`;
          display+=`<p> Papildus: ${data[key].extra}</p>`;
          display+=`<p> Cena: ${data[key].cost} €</p>`;
          display+=`<img src="${data[key].image}">`;
          display+=`<p>${data[key].description}</p>`;
          display+=`<button class="showModalDescription" onclick="myFunction()" data-id="${key}">Read more</button>`;
        display+='</div>';
    }
    $('.garage').html(display);
  }

$(document).ready(function () {
  init();
});
