function ValidateDOB() {

  //Get the date from the TextBox.
  var dateString = document.getElementById("dateofbirth").value;
  var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

  //Check whether valid dd/MM/yyyy Date Format.
  if (regex.test(dateString)) {
    var parts = dateString.split("/");
    var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
    var dtCurrent = new Date();
    lblError.innerHTML = "Eligibility 18 years ONLY."
    if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
      return false;
    }

    if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

      //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
      if (dtCurrent.getMonth() < dtDOB.getMonth()) {
        return false;
      }
      if (dtCurrent.getMonth() == dtDOB.getMonth()) {
        //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
        if (dtCurrent.getDate() < dtDOB.getDate()) {
          return false;
        }
      }
    }
    lblError.innerHTML = "";
    return true;
  } else {
    lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
    return false;
  }
}
