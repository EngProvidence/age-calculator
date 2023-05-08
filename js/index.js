$(document).ready(function () {
  
$("#confirm").click(function () {
  
      // collecting values

        var day =$("#day").val();
        var month =$("#month").val();
        var year =$("#year").val(); 

        alert(day+" "+month+" "+year);
        
      // ensuring a value is enterred
 // Check if input values are valid
 if (isNaN(year)||(year==" ")) {
   $(".spa3"). text("This field is required");
 } else if (year > new Date().getFullYear()) {   // year is greater than the current year
  $(".span3").text("Must be in the past");
 } else {
    $(".span3").text(" ");
    $(".spa3"). text("");
 }
 if (isNaN(month)||(month==" ")) {
  $(".spa2").text("This field is required"); 
 } else if (month < 1 || month > 12 || month > new Date().getMonth()+1 && year === new Date().getFullYear()) {     
        // month is less than 1 or greater than 12 or month is greater than current month if the current year is selected  
$(".span2"). text("Must be a valid month"); 

 } else {
        $(".span3").text("");
    $(".spa3"). text("");
     }

 if (isNaN(day)||(day==" ")) {
   $(".spa").text("This field is required"); 
 } else if (day < 1 || day > 31 || day > new Date().getDate() && year === new Date().getFullYear()) {
   // day is less than 1 or day is greater than 31 or day is greater than the current day if the current year is selected
   $(".span").text("Must be a valid day");
   
 } else {
      $(".span").text("");
     $(".spa").text("");
 }
 // Get current date
  var currentDate = new Date();

  // Get birth date
  var birthDate = new Date(year, month - 1, day);

  // Calculate age
  var ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
  var age = new Date(ageInMilliseconds);
  var years = age.getFullYear() - 1970;
  var months = age.getMonth() ;
  var days = age.getDate() - 2;
   
   // finalmanwswer
    $("#dd").text(days);
    $("#mm").text(months);
    $("#yyyy").text(years);
    })
    });
