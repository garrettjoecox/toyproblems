/**
 * Use jQuery to make an HTML table that is sortable by column.
 *
 * Clicking a table header should sort all the table rows
 * by the values in that column. The table should sort
 * words, integers, floats, and dates (in the form YYYY-MM-DD).
 *
 * Use the table provided in index.html.
 **/

$(function () {
  // TODO: your code here!

  /* START SOLUTION */
  // select elements to change
  var $tbody = $('tbody');
  var $rows = $tbody.children();

  // helper to get table cell value from row + column index
  var getCellValue = function (row, colIdx) {
    var td = row.children[colIdx];
    return $(td).text();
  };

  // helper to determine whether cell value is a string or number
  var getType = function (columnIdx) {
    var val = getCellValue($('tr')[1], columnIdx);
    return isNaN(val) ? 'string': 'number';
  };

  // Sort column when table header clicked
  $('th').on('click', function () {
    // get the index of the column to sort
    var columnIdx = $(this).index();
    var type = getType(columnIdx);

    // detach the rows, and and sort them by cell value
    $rows.detach().sort(function (row1, row2) {
      var value1 = getCellValue(row1, columnIdx);
      var value2 = getCellValue(row2, columnIdx);
      if (type === 'string') return value1 > value2;
      if (type === 'number') return value1 - value2;
    });

    // append the sorted rows back onto the tbody
    $tbody.append($rows);
  });
  /* END SOLUTION */
});

