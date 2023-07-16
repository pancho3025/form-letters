const email = document.querySelectorAll(".email");
const contra = document.querySelectorAll(".password");
const input = document.querySelectorAll(".inpu");
const span = document.querySelectorAll(".xd");

//Agarrar cada span y ponerle un transform translateY y transition
//cuando este el input en focus
input[0].addEventListener("focus", () => {
  email.forEach((e) => {
    e.style.transform = "translateY(-25px)";
  });
  span[0].classList.add("subir");
});
input[0].addEventListener("blur", () => {
  if (input[0].value != "") {
    input[0].classList.add("borde");
  }
  if (input[0].value == "") {
    email.forEach((e) => {
      e.style.transform = "translateY(0px)";
    });
    span[0].classList.remove("subir");
    input[0].classList.remove("borde");
  }
});
input[1].addEventListener("focus", () => {
  contra.forEach((e) => {
    e.style.transform = "translateY(-25px)";
  });
  span[1].classList.add("subir");
});
input[1].addEventListener("blur", () => {
  if (input[1].value != "") {
    input[1].classList.add("borde");
  }
  if (input[1].value == "") {
    contra.forEach((e) => {
      e.style.transform = "translateY(0px)";
    });
    span[1].classList.remove("subir");
    input[1].classList.remove("borde");
  }
});
