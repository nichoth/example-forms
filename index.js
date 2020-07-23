var inputs = document.querySelectorAll('input')

function formIsValid () {
    return Array.prototype.reduce.call(inputs, (acc, input) => {
        return acc && input.validity.valid
    }, true)
}

var btn = document.querySelector('button[type="submit"]')
btn.disabled = true

Array.prototype.forEach.call(inputs, function (input) {
    input.addEventListener('blur', function (ev) {
        input.classList.add('has-focused')
    })

    input.addEventListener('input', function (ev) {
        btn.disabled = !formIsValid()
    })
})

