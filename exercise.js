/*jslint browser: true, devel: true */
function TableEvent() {
  "use strict";
  var rowCount = 0;
  //method for initiation
  this.init = function () { 
    this.addEventCheck = document.getElementById("insertRow");
    this.tableID = document.getElementById("dynamicTableData");
    this.rowCount = rowCount;
    this.bind_events(); 
  };
  //method for inserting a row
  this.rowInsert = function () {
    this.rowCount += 1;
    var newRow   = this.tableID.insertRow(this.rowCount);
    newRow.insertCell(0).innerHTML= '<input type="text" id="personName">';
    newRow.insertCell(1).innerHTML= '<input type="email" id="personEmail">';
    newRow.insertCell(2).innerHTML= '<input type="button" value = "Save" id="saveRow" >';
    //console.log(this.rowCount);
  };
    // Append a text node to the cell
    //var newText  = document.createTextNode('<input type="text" id="name">')
    //newCell.appendChild(newText);
    /*var table = document.getElementById("dynamicTableData"), rowCount = table.rows.length, row = table.insertRow(rowCount), cell1 = row.insertCell(0), element1 = document.createElement("input");
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
    cell3.appendChild(element3);*/ 
}

function TableEventAfterRow(TableEvent) {
  "use strict";
  //method for initiation
  this.init = function ( saveEventCheck) {
    this.saveEventCheck = saveEventCheck;
    this.bind_events(); 
  };
  this.rowInsert = function () {
    this.rowCount += 1;
    var newRow   = this.tableID.insertRow(this.rowCount);
    newRow.insertCell(0).innerHTML= '<input type="text" id="personName">';
    newRow.insertCell(1).innerHTML= '<input type="email" id="personEmail">';
    newRow.insertCell(2).innerHTML= '<input type="button" value = "Save" id="saveRow" >';
    console.log(this.rowCount);*/
  };
}

TableEvent.prototype.bind_events = function () {
  "use strict";
  var checkChoice = this;
  this.addEventCheck.onclick = function () {
    checkChoice.rowInsert();
    var tableEvent = new TableEvent(table);
    tableEvent.init();  
  };
};

TableEvent.prototype.bind_events = function (table) {
  "use strict";
  var checkChoice = this;
  this.addEventCheck = document.getElementById("insertRow");
  this.saveEventCheck = document.getElementById("saveRow");
  console.log('B')
  this.addEventCheck.onclick = function () {
    console.log("A");
    TableEvent();
     
    //return new TableEvent();
  };
  /*this.saveEventCheck.onclick = function () {
    checkChoice.rowSave();
    this.deleteEventCheck = document.getElementById("deleteRow");
    var obj2 = this;
    checkChoice.deleteEventCheck.onclick = function () {
      obj2.rowDelete(this);
    };
    return new TableEvent();
  };*/
  
};


window.onload = function () {
  "use strict";
  var tableEvent = new TableEvent();
  tableEvent.init();
};
