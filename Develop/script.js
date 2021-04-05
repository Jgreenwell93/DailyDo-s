$(document).ready(function(){
    var currentHour=moment().format("H"); 
    console.log(currentHour);
    var inputBody=$(".todo-task")
    
    
    // Setting the date in the head
    var today = moment();
    $("#currentDay").text(today.format("MMMM Do, YYYY"));
    
    
    // checks the hour of the row and color codes it in relation to the current time
    inputBody.each(function(){
        var elementHour=($(this).data("hour"))
        console.log(elementHour);
        if(elementHour ==currentHour){
            $(this).addClass("present"); 

            }else if(elementHour > currentHour){
            $(this).addClass("future"); 

            }else if(elementHour < currentHour){
            $(this).addClass("past"); 

            };
    });
    
    // logs the information in the input box to local storage
    function saveInfo(){
        var todo=($(this).parent().parent().find("input").data("hour"));
        console.log(todo);
        var task=$(this).parent().siblings(".todo-task").val();
        localStorage.setItem(todo, task);
    };
    // retrieves the saved item for each row from local storage
    function todoUpdate(){
        $("#9AM").val(localStorage.getItem("9"));
        $("#10AM").val(localStorage.getItem("10"));
        $("#11AM").val(localStorage.getItem("11"));
        $("#12PM").val(localStorage.getItem("12"));
        $("#1PM").val(localStorage.getItem("13"));
        $("#2PM").val(localStorage.getItem("14"));
        $("#3PM").val(localStorage.getItem("15"));
        $("#4PM").val(localStorage.getItem("16"));
        $("#5PM").val(localStorage.getItem("17"));
    };

    // function todoUpdate(){
    //     inputBody.each(function(){
    //         var elementHour=($(this).data("hour"));
    //         console.log(typeof elementHour);
    //         var savedText=(localStorage.getItem(elementHour));
    //         console.log(savedText);
    //         if(elementHour){
    //         inputBody.textContent(savedText);
    //         }else{
    //             return;
    //         };
    //     });
    // };

    todoUpdate();
    
    $(".saveBtn").on("click",saveInfo);
})
