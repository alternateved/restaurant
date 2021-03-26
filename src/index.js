import createHeader from "./header";
import createFooter from "./footer";
import createHR from "./horizontal-rule";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

const mainContent = document.querySelector("#content");

// render whole layout
mainContent.appendChild(createHeader());
mainContent.appendChild(createHR());
mainContent.appendChild(createHome());
mainContent.appendChild(createHR());
mainContent.appendChild(createFooter());

const navigationTabs = document.querySelectorAll(".tab");

// add event listener to each tab
navigationTabs.forEach(tab => tab.addEventListener("click", (event) => {
    // remove main html tag from page and append new node after first hr tag
    if (event.target.htmlFor === "tab-1" && !document.querySelector("section").classList.contains("home")) {
        document.querySelector("main").remove();
        document.querySelector("hr").after(createHome());
    } else if (event.target.htmlFor === "tab-2" && !document.querySelector("section").classList.contains("menu")) {
        document.querySelector("main").remove();
        document.querySelector("hr").after(createMenu());
    } else if (event.target.htmlFor === "tab-3" && !document.querySelector("section").classList.contains("contact")) {
        document.querySelector("main").remove();
        document.querySelector("hr").after(createContact());
    }
}))