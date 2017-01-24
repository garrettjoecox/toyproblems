var should = require('should');

describe('sortableTable', function() {

  it('should have jQuery available', function(){
    // did you forget to include jQuery in index.html?
    should.exist($);
  });

  it('should be an HTML table', function(){
    // should have at least one of each of the following elements:
    $('table').length.should.be.ok;
    $('th').length.should.be.ok;
    $('tbody').length.should.be.ok;
    $('tr').length.should.be.ok;
    $('td').length.should.be.ok;
  });

  it('should contain a first column of words', function(){
    var col = 0;
    var values = [];

    // get the values from the column
    $('td:nth-child('+ col+1 +')').each(function (i, value) {
      values.push($(value).text());
    });

    // test that each value is a string that cannot be converted to a number
    for (var i = 0; i < values.length; i++) {
      values[i].should.be.a.String;
      parseInt(values[i]).should.be.NaN;
    }
  });

  it('should sort the first column of words when table header clicked', function(){
    var col = 0;
    var values = [];
    var sortedValues = [];

    // click the column header, then get the values from that column
    $('th:eq('+ col +')').click();
    $('td:nth-child('+ col+1 +')').each(function (i, value) {
      values.push($(value).text());
    });

    // sort the values
    sortedValues = values.concat().sort(function (a, b) {
      return a > b;
    });

    // test that values match sorted values
    for (var i = 0; i < values.length; i++) {
      values[i].should.eql(sortedValues[i]);
    }
  });

  it('should sort the entire row, not just the values in the column', function(){
    var col = 0;
    var rowValues = [];
    var sortedRowValues = [];

    // select the first row, and save the values
    var $row = $('tbody tr').first();
    $row.each(function (i, td) {
      rowValues.push($(td).text());
    });

    // click the header
    $('th:eq('+ col +')').click();

    // save the new values of the row
    $row.each(function (i, td) {
      sortedRowValues.push($(td).text());
    });

    // test that old values and new values match
    for (var i = 0; i < rowValues.length; i++) {
      rowValues[i].should.eql(sortedRowValues[i]);
    }
  });

  it('should contain a second column of integers', function(){
    var col = 1;
    var values = [];

    // get the values from the column
    $('td:nth-child('+ (col+1) +')').each(function (i, value) {
      values.push($(value).text());
    });

    // test that each value is an even number
    for (var i = 0; i < values.length; i++) {
      var val = parseFloat(values[i]);
      val.should.not.be.NaN;
      // test for integer
      (val % 1).should.eql(0);
    }
  });

  it('should sort the second column of integers when table header clicked', function(){
    var col = 1;
    var values = [];
    var sortedValues = [];

    // click the column header, then get the values from that column
    $('th:eq('+ col +')').click();
    $('td:nth-child('+ (col+1) +')').each(function(i, value) {
      values.push($(value).text());
    });

    // sort the integers
    sortedValues = values.concat().sort(function (a, b) {
      return a - b;
    });

    // test that values match sorted values
    for (var i = 0; i < values.length; i++) {
      values[i].should.eql(sortedValues[i]);
    }
  });

  it('should contain a third column of floats', function(){
    var col = 2;
    var values = [];

    // get the values from the column
    $('td:nth-child('+ (col+1) +')').each(function (i, value) {
      values.push($(value).text());
    });

    // test that each value is a string, and cannot be converted to a number
    for (var i = 0; i < values.length; i++) {
      var val = parseFloat(values[i]);
      val.should.not.be.NaN;
    }
  });

  it('should sort the third column of floats when table header clicked', function(){
    var col = 2;
    var values = [];
    var sortedValues = [];

    // click the column header, then get the values from that column
    $('th:eq('+ col +')').click();
    $('td:nth-child('+ (col+1) +')').each(function(i, value) {
      values.push($(value).text());
    });

    // sort the floats
    sortedValues = values.concat().sort(function (a, b) {
      return a - b;
    });

    // test that values match sorted values
    for (var i = 0; i < values.length; i++) {
      values[i].should.eql(sortedValues[i]);
    }
  });

  it('should contain a fourth column of dates in the format YYYY-MM-DD', function(){
    var col = 3;
    var values = [];

    // get the values from the column
    $('td:nth-child('+ (col+1) +')').each(function (i, value) {
      values.push($(value).text());
    });

    // test that each value is a date in the format of YYYY-MM-DD
    for (var i = 0; i < values.length; i++) {
      var val = values[i];
      val.should.not.be.NaN;
      val.split('-').length.should.eql(3);
    }
  });

  it('should sort the fourth column of dates when table header clicked', function(){
    var col = 3;
    var values = [];
    var sortedValues = [];

    // click the column header, then get the values from that column
    $('th:eq('+ col +')').click();
    $('td:nth-child('+ (col+1) +')').each(function(i, value) {
      values.push($(value).text());
    });

    // sort the dates
    sortedValues = values.concat().sort(function (a, b) {
      return a > b;
    });

    // test that sorted values match actual values
    for (var i = 0; i < values.length; i++) {
      values[i].should.eql(sortedValues[i]);
    }
  });
  
});