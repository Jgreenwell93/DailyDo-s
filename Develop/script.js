var currentHour=moment().format("hA"); 
var hour=$(".hour");
console.log(hour);
var i=0;


// Setting the date in the head
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));


$('.hour').each(function(i, $(this)){
       if(hour.value ===currentHour){
          hour.addClass(".present") 
          i++;
       }else if(hour.value > currentHour){
        hour.addClass(".future") 
        i++;
       }else if(hour.value < currentHour){
        hour.addClass(".past") 
        i++;
       };
   };