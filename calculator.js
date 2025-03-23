function calculateTip() {
  let bill = parseFloat(document.getElementById("bill").value);
  let tip = parseFloat(document.getElementById("tip").value);
  let people = parseInt(document.getElementById("people").value);

  if (isNaN(bill) || isNaN(tip) || isNaN(people)) {
    document.getElementById("result").innerText = "Please fill all fields";
    return;
  }

  let total = (bill + tip) / people;
  document.getElementById("result").innerText ="Each pays: " + total.toFixed(2) + " Tk";
}

function resetBtn() {
  document.getElementById("bill").value = "";
  document.getElementById("tip").value = "";
  document.getElementById("people").value = "";
  document.getElementById("result").innerText = "";
}
