// creating object for new HTML tags
var creatingElements = {
  button : function() {
    var button = document.createElement("button");
    button.setAttribute("class", "save");
    button.innerText = "Save";
    return button;
  },

  anchor : function(choice) {
    var anchor = document.createElement("a");
    anchor.innerText = choice;
    anchor.setAttribute("class", choice);
    anchor.setAttribute("href", "#");
    return anchor;
  },

  input : function(choice) {
    var input = document.createElement("input");
    if (choice) {
      input.setAttribute("value", choice.innerText);
    }
    return input;
  }
}

// creating a class Row
var Row = function(index) {  
  this.row = document.getElementsByTagName("tr")[index];
  this.cell = this.row.getElementsByTagName("td");
  this.saveEvent();
}

// save event
Row.prototype.saveEvent = function() {
  var save = this.row.getElementsByClassName("save")[0];
  var that = this;
  save.onclick = function() { that.inputValues(); };
}

// method to add values to the row
Row.prototype.inputValues = function() {
  var input = this.row.getElementsByTagName("input");
  this.cell[0].innerText = input[0].value;
  this.cell[1].innerText = input[0].value; 
  this.cell[2].replaceChild(creatingElements.anchor("Edit"), this.cell[2].childNodes[0]);
  this.cell[2].appendChild(creatingElements.anchor("Delete"));  
  this.editAndDeleteEvent();
}

// edit and delete event 
Row.prototype.editAndDeleteEvent = function() {
  var edit = this.row.getElementsByClassName("Edit")[0];
  var del = this.row.getElementsByClassName("Delete")[0];
  var that = this;
  edit.onclick = function() { that.editRowValues(); };
  del.onclick = function() { that.row.remove(); };
}

// method to edit the row
Row.prototype.editRowValues = function() {
  this.cell[0] = this.insertInputTags(this.cell[0]);
  this.cell[1] = this.insertInputTags(this.cell[1]);
  this.cell[2].childNodes[1].remove();
  this.cell[2].replaceChild(creatingElements.button(), this.cell[2].childNodes[0]); 
  this.saveEvent();
}

// inserting values to cell1 and cell2
Ro.insertInputTags = function(choice) {
  if (choice.innerText === "") {
    choice.appendChild(creatingElements.input(choice));
  } else {
    choice.replaceChild(creatingElements.input(choice), choice.childNodes[0]);  
  }
}

// creating a new class
var Table = function(id) {
  var that = this;
  this.table = document.getElementById(id);
  this.add = document.getElementById("button"); 
  this.add.onclick = function() { that.createRow(); };
}

// creating rows and instances of Row class
Table.prototype.createRow = function() {
  var row = this.table.insertRow(-1);
  row.setAttribute("class", "tablerow");
  row.insertCell(0).appendChild(creatingElements.input());
  row.insertCell(1).appendChild(creatingElements.input());
  row.insertCell(2).appendChild(creatingElements.button()); 
  new Row(this.table.rows.length - 1);
}

// new Instance of Table
new Table("table");