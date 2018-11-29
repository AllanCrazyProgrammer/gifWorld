$(document).ready(function () {

    $("#addBtn").on("click", function () {
        var snack = $("#addSnack").val();
        var arrayButton = $("<button>");
        arrayButton.addClass("btn m-1 selected-snack");
        arrayButton.attr("data-snack", snack);
        arrayButton.text(snack);
        $("#snack").prepend(arrayButton);
    })




    $("body").on("click", "button.selected-snack", function () {
        debugger;
        var snack = $(this).attr("data-snack");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            snack + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(queryURL);
            var results = response.data;
            for (let i = 0; i < results.length; i++) {
                console.log(results);
                var snackDiv = $("<div>");
                var p = $("<p>").text(results[i].rating);
                var snackImage = $("<img>");
                snackImage.attr("src", results[i].images.fixed_height.url);
                snackDiv.append(p);
                snackDiv.append(snackImage);
                $("#snackGifs").prepend(snackDiv);
            }
        });
    });
});

