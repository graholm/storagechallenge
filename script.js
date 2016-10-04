var input = $("#not-a-real-id")

input.keydwn(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    storeValue("gracesVariable", valueeeee);
  }
})

onNewValue("gracesVariable", function(value) {
  $("#value-output").html(value)
})