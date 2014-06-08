// creating a base class
var TableEvent = function() {
  this.init = function (tableRef, addCheckEvent) {
  	var that = this;
    this.tableRef = tableRef;
  	this.addCheckEvent = addCheckEvent;
    this.addCheckEvent.onclick = function() { that.insertRow(); };
  };  
};

// creating a new class for a Row
var Row = function(rowIndex) {  
  this.row = document.getElementsByTagName("tr")[rowIndex];
  this.cell = this.row.getElementsByTagName("td");
  var count = 0;
// method to check cave button clicked or not
  this.saveEventCheck = function() {
    this.saveClickEvent = this.row.getElementsByTagName("button")[0];
    console.log(this.saveClickEvent);
    var that = this;
    this.saveClickEvent.onclick = function() { 
      that.saveRow(rowIndex);
    };
  };

// method to save the values of a row
  this.saveRow = function(rowIndex) {
    //if(this.count < 1 ) {
    this.input = this.row.getElementsByTagName("input");
    this.cell[0].innerHTML = this.input[0].value;
    this.cell[1].innerHTML = this.input[0].value; 
    this.cell[2].innerHTML = '<a  name= "editRow" href="#">Edit</a> / <a name = "deleteRow" href="#">Delete</a>';
    this.count = this.count + 1;
    this.editDeleteClickEvent();
  };

// edit and delete event 
  this.editDeleteClickEvent = function(rowIndex) {
  var edit = this.row.getElementsByTagName("a")[0];
  var del = this.row.getElementsByTagName("a")[1];
  var that = this;
    edit.onclick = function() {
      that.editRowValues(this,rowIndex);
    };
    del.onclick = function() {
      console.log('a');
      this.row.remove();
    };
  };

// method to edit the row
  this.editRowValues = function (obj,rowIndex) {
    var index = rowIndex + 1;
    var that = this;
    this.input = this.row.getElementsByTagName("td");
    
    var element1 = document.createElement("input");
    element1.type = "text";
    element1.name = "personName";
    element1.innerText = this.input[0].innerHTML;
    //cell1.appendChild(element1);

    var element2 = document.createElement("input");
    element2.type = "text";
    element2.name = "personEmail";
    element2.innerText = this.input[0].innerHTML;
   
    //this.cell[2].remove();
    var element3 = document.createElement("button");
    element3.type = "button";
    element3.name= "saveRow";
    element3.innerHTML = "Save";
    
    //this.cell[2].appendChild(element3);
    if (this.cell[0].innerText === "") { 
      that.cell[0].appendChild(element1);
    } else {
      that.cell[0].replaceChild(element1, that.cell[0]);
    }
    

    //if (this.cell[1].innerText === "") { 
      //this.cell[1].appendChild(element2);
    //} else {
      //this.cell[1].replaceChild(element2,this.cell[1]);
    //}*/ 
    //this.saveEventCheck();
  };

  //return new TableEvent();
};

// creating rows and instances of Row class
TableEvent.prototype.insertRow = function() {
  var row = this.tableRef.insertRow(-1);
  row.setAttribute("class", "tableRow");
  var cell1 = row.insertCell(0), element1 = document.createElement("input");
  element1.type = "text";
  element1.name = "personName";
  cell1.appendChild(element1);
 
  var cell2 = row.insertCell(1), element2 = document.createElement("input");
  element2.type = "text";
  element2.name = "personEmail";
  cell2.appendChild(element2);
    
  var cell3 = row.insertCell(2), element3 = document.createElement("button");
  element3.type = "button";
  element3.name= "saveRow";
  element3.innerHTML = "Save";
  cell3.appendChild(element3);
  var rowObj = new Row(this.tableRef.rows.length - 1);
  rowObj.saveEventCheck();
};

window.onload = function () {
  "use strict";
  var tableRef = document.getElementById("dynamicTable"), addCheckEvent = document.getElementById("insertRow"), tableEvent = new TableEvent();
  tableEvent.init (tableRef, addCheckEvent);
};