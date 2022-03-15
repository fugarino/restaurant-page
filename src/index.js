import home from "./components/homepage/home";

function navBar() {
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  return nav;
}

document.body.appendChild(navBar());
home();
