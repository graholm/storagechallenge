var input = $("#value-input")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    console.log ("entered")
   
    var valueToSave = input.val();
   
   
    storeValue("gracesVariable", valueToSave);
  }
})

onNewValue("gracesVariable", function(value) {
  $("#value-output").html(value)
})