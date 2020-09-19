import html from "./goulag.html";
import layout from "./newsletter.html";
import "./goulag.css";
import { doStyles } from "../services";

let elements = [];
let body;

export function show() {
  doStyles();

  // convert plain HTML string into DOM elements
  let temporary = document.createElement("div");
  temporary.innerHTML = layout;

  // append elements to body
  body = document.getElementsByTagName("body")[0];
  while (temporary.children.length > 0) {
    elements.push(temporary.children[0]);
    body.appendChild(temporary.children[0]);
  }

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .then((json) => {
      document.getElementById("legalText").innerHTML = json.body;
    });

  function handler(e) {
    let email = document.getElementById("email").value;
    if (email !== "") {
      document.getElementById("email").value = "";
    }
    // TODO Send data to Kuzzle or Reach5
  }

  document.getElementById("register").addEventListener("click", handler);
}

export function showWithParams(text) {
  // convert plain HTML string into DOM elements
  let temporary = document.createElement("div");
  temporary.innerHTML = html;
  temporary.getElementsByClassName(
    "js-widget-kaaris-content"
  )[0].textContent = text;

  // append elements to body
  body = document.getElementsByTagName("body")[0];
  while (temporary.children.length > 0) {
    elements.push(temporary.children[0]);
    body.appendChild(temporary.children[0]);
  }
}
