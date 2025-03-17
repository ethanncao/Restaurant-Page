import { homePage } from "./home-load.js";
import { menuPage } from "./menu-load.js";
import { contactPage } from "./contact-load.js";
import "./styles.css";

homePage();

const content = document.getElementById('content');
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

homeBtn.addEventListener("click", () => {
  //emptying out the content
  content.innerHTML = "";
  //then load the home page
  homePage();
})

menuBtn.addEventListener("click", () => {
  //emptying out the content
  content.innerHTML = "";
  menuPage();
})

contactBtn.addEventListener("click", () => {
  content.innerHTML = "";
  contactPage();
})