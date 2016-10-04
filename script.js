var input = $("#not-a-real-id")

input.keydwn(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    console.log
    storeValue("gracesVariable", value);
  }
})

onNewValue("gracesVariable", function(value) {
  $("#value-output").html(value)
})