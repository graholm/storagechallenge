var input = $("#not-a-real-id")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    console.log ("entered")
   
    storeValue("gracesVariable", value);
  }
})

onNewValue("gracesVariable", function(value) {
  $("#value-output").html(value)
})