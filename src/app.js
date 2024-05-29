/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let veces = prompt("¿Cuantas frases aleatorias quieres hacer?");

  let frase = {
    who: ["El perro", "El gato", "La abuela", "El cartero"],
    action: [
      "ha comido",
      "ha volado",
      "ha saltado",
      "ha caido",
      "ha dicho que"
    ],
    what: [
      "mis deberes",
      "mi telefono",
      "el coche",
      "la radio",
      "la barca",
      "la clase"
    ],
    when: [
      "cuando estaba en clase",
      "mientras estaba comiendo",
      "durante estaba comiendo",
      "mientras estaba rezando",
      "durante el descanso",
      "mientras el otro día iba a la ciudad"
    ]
  };

  let tag = document.querySelector("#personas");
  veces = parseInt(veces);
  console.log(frase.who);
  let fraseLista = "";
  for (let i = 0; i <= veces; i++) {
    let who = aleatorio(frase.who);
    let action = aleatorio(frase.action);
    let what = aleatorio(frase.what);
    let when = aleatorio(frase.when);
    console.log(who, action, what, when);
    fraseLista +=
      "<li class='list-group-item'>" +
      who +
      " " +
      action +
      " " +
      what +
      " " +
      when +
      " " +
      "</li>";
    console.log(fraseLista);
    tag.innerHTML = fraseLista;
  }
  /*
  Función llamada aleatorio que lo que hace es 
  */
  function aleatorio(array) {
    console.log(array.length);

    return array[Math.floor(Math.random() * array.length)];
  }

  /*
  EXPLICACIÓN CLASE JS
  // console.log("Hello Rigo from the console!");
  let cohorte = "Spain-72"; // Type: string
  let age = 35; // Type: nubmer
 
  let person1 = {
    name: "Joe",
    age: 35,
    lastname: "Doe",
    sports: ["futbol", "running", "atletismo"]
  };
  let person2 = {
    name: "Jane",
    age: 27,
    lastname: "Doe",
    sports: ["tennis", "baloncesto", "voleyball", "natación"]
  };
  let person3 = {
    name: "Jimmy",
    age: 10,
    lastname: "Doe",
    sports: ["rugby", "besisball"]
  };
 
  let family = [person1, person2, person3];
  console.log(family[0].name);
  
  Esta recorriendo el objeto family y te devuelve hola
  
  console.log(family.map(item => "hola"));
  
  AQUI LO QUE HACE ES RECORRER CADA UNO DE LOS OBJETO Y LE ASIGNA ESE VALOR
  También podemmos hacer que poddamos llamar a eso atributos
  
  console.log(family.map(item => item));
  console.log(family.map(item => item.name));
  let lista = family.map(item => "<li>" + item.name + "</li>");
  //className, innerHTML, innertext
 
  let personas = "";
  En el map tenemos dos
  que uno es el item que son
  nos da el index del array
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  family.map((item, index) => {
    personas += "<li>" + item.name + "</li>";
    
      let tag = document.querySelector("#personas");
      tag.innerHTML = personas;
  });
  */
  /*

    frase.map((item, index) => {
      //console.log(aleatorio(item.who));
      console.log(item.who);
      // fraseLista += "<li>" + aleatorio(item.who) + "</li>";
    });
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];

  let action = ['ate', 'peed', 'crushed', 'broke'];
  
  let what = ['my homework', 'my phone', 'the car'];
  
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
  
  document.getElementById("frase").innerHTML = "Hola";
  */
};
