function createFooter() {
  const footer = document.createElement("footer");

  const para = document.createElement("p");
  para.textContent = "made by";
  footer.appendChild(para);

  const link = document.createElement("a");
  link.href = "https://github.com/alternateved";
  link.target = "_blank";
  para.appendChild(link);

  return footer;
}
