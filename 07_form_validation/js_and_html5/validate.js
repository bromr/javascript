let input = document.getElementById("input-postcode")
let error = document.getElementById("error-postcode")
let button = document.getElementById("button")

// start the validation after the page is fully loaded
window.addEventListener("load", init);

function init() {
  // blur = validate a field after it loses focus
  input.addEventListener("blur", validatePostcode)
  button.addEventListener("click", validateAll)
}

/**
 * Validates all fields. If any field is invalid,
 * blocks the normal submit action and warns the user.
 *
 * @param event
 */
function validateAll(event) {
  // validate all fields (only one in this case)
  validatePostcode()
  // search for fields which are invalid
  let invalidFields = document.getElementsByClassName("invalid")
  if (invalidFields.length > 0) {
    // prevent the default submit action
    event.preventDefault()
    // alert the user
    window.alert("Niet alle velden zijn correct ingevuld.")
    // focus on the first invalid field
    invalidFields[0].focus()
  }
}

/**
 * Checks for errors in the postcode
 * and updates the visuals.
 */
function validatePostcode() {
  let message = getPostcodeError()
  showPostCodeValidity(message)
}

/**
 * Returns an error message if a requirement
 * for the postcode has NOT been met.
 * Else, returns an empty string.
 * @returns {string}
 */
function getPostcodeError() {
  // TODO
  // - return an error message if the input is invalid. The message should explain the problem.
}

/**
 * Updates the visuals of the input field
 * and shows the given message if it is not empty.
 * @param message
 */
function showPostCodeValidity(message) {
  if (message === "") {
    // no errors found
    input.className = "valid"
  } else {
    // errors encountered
    input.className = "invalid"
  }
  error.innerHTML = message
}
