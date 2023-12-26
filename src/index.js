document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("#menu-btn");
  const linksWrapper = document.querySelector("#links");

  linksWrapper.setAttribute("data-active", false);

  menuBtn.addEventListener("click", () => {
    const IS_ACTIVE = linksWrapper.getAttribute("data-active") === "true";

    linksWrapper.setAttribute("data-active", !IS_ACTIVE);
  });
});
