import "./nav.styles.css";

function nav() {
  // Navbar
  const nav = document.createElement("div");
  nav.classList.add("nav");

  // Home
  const home = document.createElement("div");
  home.classList.add("home");
  home.textContent = "Home";
  nav.appendChild(home);

  // Menu
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.textContent = "Menu";
  nav.appendChild(menu);

  // Contact
  const contact = document.createElement("div");
  contact.classList.add("contact");
  contact.textContent = "Contact";
  nav.appendChild(contact);

  return nav;
}

document.body.appendChild(nav());

export default nav;
