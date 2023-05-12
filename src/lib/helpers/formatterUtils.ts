export function capitalizeText() {
  const elems = document.querySelectorAll("h1, p:not(.comments)");
  elems.forEach((elem) => {
    if (elem.textContent)
      elem.textContent =
        elem.textContent?.charAt(0).toUpperCase() + elem.textContent?.slice(1);
  });
  return elems;
}
