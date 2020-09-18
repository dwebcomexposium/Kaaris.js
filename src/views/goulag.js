import html from './goulag.html';
import layout from './newsletter.html';
import './goulag.css';

let elements = [];
let body;

export function show() {
  // convert plain HTML string into DOM elements
  let temporary = document.createElement("div");
  temporary.innerHTML = layout;

  // append elements to body
  body = document.getElementsByTagName("body")[0];
  while (temporary.children.length > 0) {
    elements.push(temporary.children[0]);
    body.appendChild(temporary.children[0]);
  }

  //body.addEventListener('click', close);



  // Create new link Element
  const link = document.createElement("link");
  const link2 = document.createElement("link");

  // set the attributes for link element
  link.rel = "stylesheet";
  link2.rel = "stylesheet";
  link.type = "text/css";
  link2.type = "text/css";
  link.href = "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.0/css/foundation.min.css";
  link2.href = "https://use.fontawesome.com/releases/v5.0.6/css/all.css";

  // Get HTML head element to append
  // link element to it
  document.getElementsByTagName("HEAD")[0].appendChild(link);
  document.getElementsByTagName("HEAD")[0].appendChild(link2);

  function handler (e) {
    let email = document.getElementById("email").value;
      if (email !== "") {
        document.getElementById("email").value = "";
      }
    // TODO API Call to Kuzzle or Reach5
  }

  document.getElementById("register").addEventListener("click", handler);

}

export function showWithParams(text) {
  // convert plain HTML string into DOM elements
  let temporary = document.createElement("div");
  temporary.innerHTML = html;
  temporary.getElementsByClassName("js-widget-kaaris-content")[0].textContent = text;

  // append elements to body
  body = document.getElementsByTagName("body")[0];
  while (temporary.children.length > 0) {
    elements.push(temporary.children[0]);
    body.appendChild(temporary.children[0]);
  }
}