let inputvalue = document.getElementById("input-field")
let button = document.querySelector(".btn")

button.addEventListener("click", function () {
      let input = inputvalue.value
      document.body.style.backgroundColor = input
})