function createContact() {
  const main = document.createElement("main");

  const contact = document.createElement("section");
  contact.classList.add("contact");
  main.appendChild(contact);

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("contact-title");
  contact.appendChild(titleDiv);

  const title = document.createElement("h2");
  title.textContent = "Contact";
  titleDiv.appendChild(title);

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  contact.appendChild(contactContainer);

  const textDiv = document.createElement("div");
  textDiv.classList.add("contact-text");

  const company = document.createElement("h3");
  company.textContent = "Breadme";
  textDiv.appendChild(company);

  for (let i = 0; i < 6; i++) {
    const para = document.createElement("p");

    switch (i) {
      case 0:
        para.textContent = "Piotrkowska 113/13";
        break;
      case 1:
        para.textContent = "Łódź, 90-613";
        break;
      case 2:
        para.textContent = "(000)-123 4567";
        break;
      case 3:
        para.textContent = "mr.baker@breadme.com";
        break;
      case 4:
        para.textContent = "Mon-Thur: 8am - 8pm";
        break;
      case 5:
        para.textContent = "Fri-Sun: 8am - 11pm";
        break;
      default:
        console.log(`Sorry, problem`);
    }
    textDiv.appendChild(para);
  }
  contactContainer.appendChild(textDiv);

  const location = document.createElement("div");
  location.classList.add("map");
  contactContainer.appendChild(location);

  const frame = document.createElement("iframe");
  frame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1468.3339517418974!2d19.457268642845598!3d51.7616815611034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a34d6b72fc851%3A0x96dbeb8c2cd474b0!2zUGlvdHJrb3dza2EsIDkwLTAwMSDFgcOzZMW6!5e0!3m2!1sen!2spl!4v1616334217081!5m2!1sen!2spl";
  frame.height = "450";
  frame.allowfullscreen = "";
  frame.loading = "lazy";
  location.appendChild(frame);

  return main;
}

export default createContact;