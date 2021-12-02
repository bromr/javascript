// The function filter() (see below) should be called
// when the user writes something in the search field.
// However, the page has to be completely loaded first.
// Write extra code here that accomplishes this.




/**
 * Hides or shows table rows, based on the search term of the user.
 */
function filter() {
  // write code to check the table values. Some tips:
  // - get a list of table rows with 'table.rows'.
  // - get all cells inside a row with 'row.cells' (also a list).
  // - change the visibility of a row with 'row.style.display'. Use either 'table row' or 'none'.
  // make sure to ask for help or search online if you have trouble using these properties and methods.
    let search = document.getElementById("searchfield")
    let list = document.getElementById("table-data")
    let rows = list.table.rows
    let cells = rows.cells
    if (cells !== search){
        rows.style.display === none
    }

}
