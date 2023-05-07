export function capitalizeText() {
  const elems = document.querySelectorAll("h1, h5, h5, p:not(.comments)");
  elems.forEach((elem) => {
    if (elem.textContent)
      elem.textContent =
        elem.textContent?.charAt(0).toUpperCase() + elem.textContent?.slice(1);
  });
}
