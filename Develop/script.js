$(document).ready(function(){
    var currentHour=moment().format("hA"); 
    var hour=$(".hour");
    // console.log(hour);
    var i=0;
    
    
    // Setting the date in the head
    var today = moment();
    $("#currentDay").text(today.format("MMMM Do, YYYY"));
    
    
    hour.each(function(){
        var elementHour=parseInt($(this).data("hour"))
        console.log(typeof elementHour);
        if(hour.text ===currentHour){
            hour.addClass(".present") 

            }else if(hour.text > currentHour){
            hour.addClass(".future") 

            }else if(hour.text < currentHour){
            hour.addClass(".past") 

            };
    });
    
    function saveInfo(){
        var todo=($(this).parent().parent().find("span").text());
        console.log(todo);
        // console.log($(this).parent().parent().find(".todo-task").val());
        console.log($(this).parent().siblings(".todo-task").val());
        var task=$(this).parent().siblings(".todo-task").val();
        localStorage.setItem(todo, task);
    };
    function todoUpdate(){
        $("#9AM").val(localStorage.getItem("9AM"));
        $("#10AM").val(localStorage.getItem("10AM"));
        $("#11AM").val(localStorage.getItem("11AM"));
    };
    todoUpdate();
    
    $(".saveBtn").on("click",saveInfo);
})
