var input = $("#not-a-real-id")


input.keydown(function(e) {	

  if (e.keyCode == "13") {
    console.log ("entered")
    var valueToSave = input.val();
   
   
    storeValue("gracesVariable", value);
  }
})

onNewValue("gracesVariable", function(value) {
  $("#value-output").html(value)
})