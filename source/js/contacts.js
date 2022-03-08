const feedbackForm = document.querySelector('#js-feedback-form')
const telInput = feedbackForm.querySelector('input[type=tel]')
const nameInput = feedbackForm.querySelector('input[type=text]')
const emailInput = feedbackForm.querySelector('input[type=email]')
const textarea = feedbackForm.querySelector('textarea')

function formValidate() {
  const incorrectInputs = []

  if (!validator.isEmail(emailInput.value)) {
    incorrectInputs.push(emailInput)
  }

  if (validator.isEmpty(textarea.value)) {
    incorrectInputs.push(textarea)
  }

  if (validator.isEmpty(nameInput.value)) {
    incorrectInputs.push(nameInput)
  }

  if (!validator.isMobilePhone(telInput.value, ['pl-PL'])) {
    incorrectInputs.push(telInput)
  }

  return incorrectInputs
}

function showResult(incorrectInputs) {
  if (incorrectInputs.length !== 0) {
    incorrectInputs.forEach(v => {
      v.classList.add('incorrect')
    })
  }

  // Тут отправим данные на сервер
}

if (feedbackForm) {
  feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault()
    showResult(formValidate());
  })
}
