export function doStyles () {
  // Create new link Element
  const link = document.createElement("link");
  const link2 = document.createElement("link");

  // set the attributes for link element
  link.rel = "stylesheet";
  link2.rel = "stylesheet";
  link.type = "text/css";
  link2.type = "text/css";
  link.href =
    "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.0/css/foundation.min.css";
  link2.href = "https://use.fontawesome.com/releases/v5.0.6/css/all.css";

  // Get HTML head element to append
  // link element to it
  document.getElementsByTagName("HEAD")[0].appendChild(link);
  document.getElementsByTagName("HEAD")[0].appendChild(link2);
}