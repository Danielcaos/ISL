let state = false
window.onload = init()

const data = {
  "kdwrfq43das": true,
  "nhwrgqfgdq": true,
  "hdfgertgsdg": true,
  "gsdfasdq12": true,
  "fsdfeghsd": true
}

const validateAnswer = (answer) => {
  return data[answer]
}

function init() {
  document.getElementById("submit").addEventListener("click", submitTest)
  document.querySelectorAll('input[type="radio"]').forEach((el) => {
    el.addEventListener("change", trigger)
  })
}

function trigger() {
  if (state) {
    document.querySelectorAll('input[type="radio"]').forEach((el) => {
      el.classList.remove("bg-success", "border-success", "bg-danger", "border-danger")
      el.parentElement.querySelector("label").classList.remove("text-success", "text-danger")
      el.checked = false
    })
  }
  state = false
}

function submitTest() {
  const radios = document.querySelectorAll('input[type="radio"]:checked');
  if (radios.length < 5) {
    Swal.fire(
      'oops...',
      'Debes responder todas las preguntas',
      'error'
    )
    return
  }
  let success = 0
  radios.forEach((el) => {
    if (validateAnswer(el.dataset.answer)) {
      el.classList.add("bg-success", "border-success")
      el.parentElement.querySelector("label").classList.add("text-success")
      success++
    } else {
      el.classList.add("bg-danger", "border-danger")
      el.parentElement.querySelector("label").classList.add("text-danger")
    }
  })
  if (success === 5) {
    Swal.fire(
      'Has estado excelente!',
      'Te estás convirtiendo en un experto del lenguaje de señas',
      'success'
    )
  }
  if (success === 4 || success === 3) {
    Swal.fire(
      'Bien hecho!',
      'Lo estas haciendo bien, pero aún puedes mejorar',
      'warning'
    )
  }
  if (success < 3) {
    Swal.fire(
      '¿Qué ha sucedido?',
      'Tal vez no haz practicado lo suficiente, intenta otra vez!',
      'question'
    )
  }
  state = true
}