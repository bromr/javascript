window.addEventListener("load", fillTable)


/**
 * Fills the table with data of users.
 *
 * In a real website, you would create a page with data at the server side
 * and send it to the client.
 * This function mimics this behaviour for the purpose of this exercise.
 * It should not be used in a real application.
 */
function fillTable() {
  // the data
  const students = [
    {name: "Arnaut", studies: "Psychologie"},
    {name: "Bea", studies: "Fysica"},
    {name: "Dries", studies: "Toegepaste Economie"},
    {name: "Evelien", studies: "Geneeskunde"}
  ]
  // fill the table with rows based on the data
  for (let i = 1; i < students.length; i++) {
    // We use insertRow() and insertCell() as this is the preferred way to manipulate tables with JS
    // More information:
    // https://www.w3schools.com/jsref/met_table_insertrow.asp
    // https://www.w3schools.com/jsref/met_tablerow_insertcell.asp
    const student = students[i]
    let row = document.getElementByID("tableData").insertRow(-1)
    let name = row.insertCell(1)
    let studies = row.insertCell(2)
    name.innerHTML = student.name
    studies.innerHTML = student.studies
  }
}
