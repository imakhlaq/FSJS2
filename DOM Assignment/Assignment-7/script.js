const removeEle = document.querySelectorAll(".main__languages a");
console.log(removeEle);

removeEle.forEach((ele) => {
  if (ele.textContent.includes("2.0")) {
    ele.style.display = "none";
  }
});

const btn = document.querySelector(".main__form-btn");
btn.disabled = false;

const input = document.querySelector(".main__form-input");
input.disabled = false;

btn.addEventListener("click", (event) => {
  event.preventDefault();
  removeEle.forEach((ele) => {
    ele.style.display = "inline";
  });
});
