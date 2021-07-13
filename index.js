let menu = document.getElementsByTagName("nav")
let newLink = document.createElement("a");
let textLink = document.createElement("Google");
newLink.appendChild(textLink);
newLink.setAttribute('href','http://www.google.com')
menu.appendChild(newLink);
