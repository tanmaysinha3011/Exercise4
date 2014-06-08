/*jslint browser: true, devel: true */
function TableEvent() {
  "use strict";
  //method for initiation
  this.init = function () {
    this.bind_events(); 
  };
  //method for inserting a row
  this.rowInsert = function () {
    var table = document.getElementById("dynamicTableData"), rowCount = table.rows.length, row = table.insertRow(rowCount), cell1 = row.insertCell(0), element1 = document.createElement("input");
    element1.type = "text";
    element1.name = "personName";
    element1.value = "A";
    cell1.appendChild(element1);
 
    var cell2 = row.insertCell(1), element2 = document.createElement("input");
    element2.type = "text";
    element2.name = "personEmail";
    element2.value = "B";
    cell2.appendChild(element2);
    
    var cell3 = row.insertCell(2), element3 = document.createElement("input");
    element3.type = "button";
    element3.id = "saveRow";
    element3.value = "Save";
    cell3.appendChild(element3);
  }; 
}

function TableEventAfterRow(TableEvent) {
  "use strict";
  //method for initiation
  this.init = function () {
    this.bind_events(); 
  };
  //method for inserting a row
  this.rowInsert = function () {
    var table = document.getElementById("dynamicTableData"), rowCount = table.rows.length, row = table.insertRow(rowCount), cell1 = row.insertCell(0), element1 = document.createElement("input");
    element1.type = "text";
    element1.name = "personName";
    element1.value = "A";
    cell1.appendChild(element1);
 
    var cell2 = row.insertCell(1), element2 = document.createElement("input");
    element2.type = "text";
    element2.name = "personEmail";
    element2.value = "B";
    cell2.appendChild(element2);
    
    var cell3 = row.insertCell(2), element3 = document.createElement("input");
    element3.type = "button";
    element3.id = "saveRow";
    element3.value = "Save";
    cell3.appendChild(element3);
  };

  //method for saving a row
  this.rowSave = function () {
    //if(this.checkEmail===true  && this.checkName===true){
      var table = document.getElementById("dynamicTableData"); 
      var rowCount = table.rows.length;
      var personID = document.getElementsByTagName("input");
      rowCount -= 1;
      console.log(rowCount);
      
      //table.deleteRow(rowCount); 
      var row = table.insertRow(rowCount);
      var cell1 = row.insertCell(0);
      var element1 = document.createElement("td");
      element1.name = "personName";
      element1.innerHTML = personID[0].value;
      cell1.appendChild(element1);
 
      var cell2 = row.insertCell(1);
      var element2 = document.createElement("td");
      element2.name = "personEmail";
      element2.innerHTML = personID[1].value;
      cell2.appendChild(element2);
    
      var cell3 = row.insertCell(2);
      var element3 = document.createElement("td");
      element3.id = "savedRow";
      element3.innerHTML = '<a id = "rowEdit" href="#">Edit</a> /<a id = "rowDelete" href="#">Delete</a>';
      cell3.appendChild(element3);
      table.rows.length -= 1;
    //}
  };
  //method for editing a row
  this.rowEdit = function () {
  };
  //method for deleting a row
  this.rowDelete=function(obj) {
    var table = document.getElementById("dynamicTableData");
    var index = obj.parentNode.rowIndex;
    console.log(index);
    table.deleteRow(index);
  };
  /*this.addEventCheck = function () {
    return document.getElementById("insertRow");
  };*/
  this.deleteEventCheck = function () {
    var deleteRowIndex
    this.rowDelete();
    return document.getElementsByName("deleteRow");
  };

  //
};

//method to bind event on first click
TableEvent.prototype.bind_events = function () {
  "use strict";
  var checkChoice = this, eventCount = 0;
  this.addEventCheck = document.getElementById("insertRow");
  this.addEventCheck.onclick = function () {
    checkChoice.rowInsert();
    var tableEventAfterRow = new TableEventAfterRow(TableEvent);
    tableEventAfterRow.init();
  };
};

TableEventAfterRow.prototype.bind_events = function () {
  "use strict";
  var checkChoice = this, eventCount = 0;
  this.addEventCheck = document.getElementById("insertRow");
  this.saveEventCheck = document.getElementById("saveRow");
  this.addEventCheck.onclick = function () {
    checkChoice.rowInsert();
    var tableEventAfterRow = new TableEventAfterRow(TableEvent);
    tableEventAfterRow.init();
  };
  this.saveEventCheck.onclick = function () {
    checkChoice.rowSave();
    this.deleteEventCheck = document.getElementById("deleteRow");
    var obj2 = this;
    checkChoice.deleteEventCheck.onclick = function () {
      obj2.rowDelete(this);
    };
    return new TableEvent();
  };
  
};

//method to run javascript after loading whole page (mentioned script in head portion)
window.onload = function () {
  "use strict";
  var tableEvent = new TableEvent();
  tableEvent.init();
};


