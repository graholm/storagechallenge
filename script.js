var input = $("#value-input")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
  
   
    var valueToSave = input.val();
   
   
    storeValue("grace", valueToSave);
  }
})

onNewValue("grace", function(value) {
  $("#value-output").html(value)
})
