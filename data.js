var entry = document.getElementById("entry");
entry.addEventListener("click", displaydetails);
var row = 1;

function displaydetails() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var dateofbirth = document.getElementById("dateofbirth").value;
  var department = document.getElementById("department").value;
  var emailid = document.getElementById("emailid").value;
  var mobilenumber = document.getElementById("mobilenumber").value;
  var gender = document.getElementById("gender").value;
  var address = document.getElementById("address").value;

  var display = document.getElementById("display");
  var newRow = display.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  var cell8 = newRow.insertCell(7);

  cell1.innerHTML = firstname;
  cell2.innerHTML = lastname;
  cell3.innerHTML = dateofbirth;
  cell4.innerHTML = department;
  cell5.innerHTML = emailid;
  cell6.innerHTML = mobilenumber;
  cell7.innerHTML = gender;
  cell8.innerHTML = address;
  row++;
}