import "./home.styles.css";
import DumplingImg from "./dumplings.jpg";

function home() {
  // Homepage
  const homepage = document.createElement("div");

  // Homepage Hero
  const hero = document.createElement("div");
  hero.classList.add("hero");
  homepage.appendChild(hero);

  // Hero Img
  const heroImage = new Image();
  heroImage.src = DumplingImg;
  heroImage.classList.add("hero-img");
  hero.appendChild(heroImage);

  // Hero Text
  const heroText = document.createElement("h1");
  heroText.classList.add("hero-text");
  heroText.textContent = "Pop Up Restaurant In NY";
  hero.appendChild(heroText);

  return homepage;
}

document.body.appendChild(home());

export default home;
