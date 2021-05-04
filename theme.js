const themeCheckboxRef = document.querySelector("#theme-switch-toggle");

const body = document.querySelector("body");
const page = document.querySelector("#page");

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const dark = Theme.DARK;
const light = Theme.LIGHT;

const localRef = localStorage.getItem("theme");
let localStatus;

function onRef(localStatus) {
  localStorage.setItem("theme", localStatus);
}

function changeTh(classAdd, classRem) {
  body.classList.add(classAdd);
  body.classList.remove(classRem);
}

if (localRef === null) {
  localStatus = light;
  onRef(localStatus);
} else if (localRef == light) {
  localStatus = light;
  onRef(localStatus);
  changeTh(`${light}`, `${dark}`);
} else if (localRef == dark) {
  themeCheckboxRef.setAttribute("checked", true);
  localStatus = dark;
  onRef(localStatus);
  changeTh(`${dark}`, `${light}`);
}

themeCheckboxRef.addEventListener("click", function change(event) {
  if (localStatus == light) {
    themeCheckboxRef.setAttribute("checked", true);
    localStatus = dark;
    onRef(localStatus);
    changeTh(`${dark}`, `${light}`);
  } else if (localStatus == dark) {
    themeCheckboxRef.setAttribute("checked", false);
    localStatus = light;
    onRef(localStatus);
    changeTh(`${light}`, `${dark}`);
  }
});
