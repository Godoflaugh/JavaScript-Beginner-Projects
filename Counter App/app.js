//Set initial count
let count = 0

// select value and buttons

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList
    if (styles.contains('decrease')) {
      count--
    }
    else if (styles.contains('increase')) {
      count++
    }
    if (styles.contains('reset')) {
      count = 0
    }
    if (count > 0) {
      value.style.color = 'green'
    }
    else if (count < 0) {
      value.style.color = "red"
    }
    if (count === 0) {
      value.style.color = "pink"
    }
    value.textContent = count
  })
})