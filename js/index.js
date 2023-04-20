import { header } from "../js/_header.js";
import { hero } from "../js/_hero.js";

const App = () => {
  const appHeader = header();
  document.body.append(appHeader);
  console.log(appHeader);

  const appHero = hero();
  document.body.append(appHero);
};

App();