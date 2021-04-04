$(document).ready(function(){
    var currentHour=moment().format("H"); 
    console.log(currentHour);
    var inputBody=$(".todo-task")
    
    
    // Setting the date in the head
    var today = moment();
    $("#currentDay").text(today.format("MMMM Do, YYYY"));
    
    
    inputBody.each(function(){
        var elementHour=($(this).data("hour"))
        console.log(elementHour);
        if(elementHour ===currentHour){
            $(this).addClass("present"); 

            }else if(elementHour > currentHour){
            $(this).addClass("future"); 

            }else if(elementHour < currentHour){
            $(this).addClass("past"); 

            };
    });
    
    function saveInfo(){
        var todo=($(this).parent().parent().find("input").data("hour"));
        console.log(todo);
        var task=$(this).parent().siblings(".todo-task").val();
        localStorage.setItem(todo, task);
    };
    function todoUpdate(){
        $("#9AM").val(localStorage.getItem("9AM"));
        $("#10AM").val(localStorage.getItem("10AM"));
        $("#11AM").val(localStorage.getItem("11AM"));
        $("#12PM").val(localStorage.getItem("12PM"));
        $("#1PM").val(localStorage.getItem("1PM"));
        $("#2PM").val(localStorage.getItem("2PM"));
        $("#3PM").val(localStorage.getItem("3PM"));
        $("#4PM").val(localStorage.getItem("4PM"));
        $("#5PM").val(localStorage.getItem("5PM"));
    };
    todoUpdate();
    
    $(".saveBtn").on("click",saveInfo);
})
