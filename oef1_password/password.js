/**
 * Schrijf hieronder de code om de sterkte van het wachtwoord
 * weer te geven in de meter.
 * - de berekening gebeurt telkens wanneer de gebruiker iets invult
 *    (een 'input' event)
 * - het ingevulde wachtwoord is de 'value' van het inputveld
 * - de 'sterkte' is de lengte van het wachtwoord
 */
let password = document.getElementById("password")
let meter = document.getElementById("security")
document.addEventListener("input",function (){
    meter.value = password.value.length
})
