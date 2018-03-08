$(document).ready(function(){

  $("#form").validate({wrapper: "li",
    submitHandler: function(form) { DoSubmit()
  }});

  var myObj;
 $("#submit").submit(function(e){
  e.preventDefault();
  setTimeout(function(){window.location.reload(true);},1000);
  var fname = $("#fname").val();
  var lname = $("#lname").val();
  var email = $("#email").val();
// Returns successful data submission message when the entered information is stored in database.
  var dataString = 'fname='+ fname + '&lname=' + lname + '&email='+ email;
   if(fname==''||lname==''||email=='')
    {
    alert("Please Fill All Fields");
    }
  else
  {

function doSubmit(){
   $.ajax({
   type: "POST",
   url: "http://localhost:3000/addname",
   data: dataString,
   cache: false,
   success: function(result){

  }
   });
 }
  }
 });
});
