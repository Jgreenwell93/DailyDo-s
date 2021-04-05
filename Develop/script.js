$(document).ready(function () {
    var currentHour = moment().format("H");
    var inputBody = $(".todo-task")


    // Setting the date in the head
    var today = moment();
    $("#currentDay").text(today.format("MMMM Do, YYYY"));


    // checks the hour of the row and color codes it in relation to the current time
    inputBody.each(function () {
        var elementHour = $(this).data("hour")
        if (elementHour == currentHour) {
            $(this).addClass("present");

        } else if (elementHour > currentHour) {
            $(this).addClass("future");

        } else if (elementHour < currentHour) {
            $(this).addClass("past");

        };
    });

    // logs the information in the input box to local storage
    function saveInfo() {
        var todo = $(this).parent().parent().find("input").data("hour");
        var task = $(this).parent().siblings(".todo-task").val();
        localStorage.setItem(todo, task);
    };
    
    // retrieves the saved item for each row from local storage
    function todoUpdate() {
        inputBody.each(function () {
            var elementHour = ($(this).data("hour"));
            var savedText = (localStorage.getItem(elementHour));
            if (savedText) {
                $(this).val(savedText);
            };
        });
    };

    todoUpdate();

    $(".saveBtn").on("click", saveInfo);
})
