// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newBurger = {
          burger_name: $("#createburger").val().trim()
        };
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDev = $(this).data("newdevour");
    
        var newdevourBoo = {
          devoured: 1
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newdevourBoo
        }).then(
          function() {
            console.log("changed devoured to", newDev);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
  });
  