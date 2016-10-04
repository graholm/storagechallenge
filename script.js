var input = $("#value-input")

input.keydown(function(e) {	
  console.log ("entered")
  if (e.keyCode == "13") {
   
    var valueToSave = input.val();
   
   
    storeValue("gracesVariable", value);
  }
})

onNewValue("gracesVariable", function(value) {
  $("#value-output").html(value)
})