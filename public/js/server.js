$(document).ready(function(){
  var myObj;
 $("#submit").click(function(e){
  e.preventDefault();
  setTimeout(function(){window.location.reload(true);},100);
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
// AJAX Code To Submit Form.
   $.ajax({
   type: "POST",
   url: "http://localhost:3000/addname",
   data: dataString,
   cache: false,
   success: function(result){
   // myObj = JSON.parse(result);

   // $( ".id" ).append( "<p>The ID of the submitted record is " + myObj.inserted_id + "</p>" );

  }
   });

  }
 });
});
