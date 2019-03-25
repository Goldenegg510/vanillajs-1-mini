console.log("hello world")
let count = 0;

let element = document.getElementById("counter")

function increase() {
  count++
  element.innerText = count
}

function decrease() {
  count--
  console.log(count)
  element.innerText = count
}

function reset() {
  count = 0
  element.innerText = count
}

function selectTheme(theme) {
  document.getElementsByTagName("body")[0].className = theme
  document.getElementsByTagName("main")[0].className = theme
  const buttons = document.getElementsByTagName("button")
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = theme
  }
}
