$(document).ready(function() {
  $(".delete-data").on("click", function(event) {
    let id = $(this).attr("id");
    $.ajax("/delete/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("Deleted Burger at : " + id);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".update-data").click(function(event) {
    console.log($(this).attr("id"));
    // if we use arrow function it changes the context of ".insert-data" to
    // ".update-data" context and results in value "e" instead of the burger name
    $(".insert-data").each(function() {
      const element = $(this);
      const elementText = element.text().trim();
      console.log(elementText);
    });
  });

  $(".devour-data").click(function(event) {
    console.log(event);
    console.log($(this).attr("id"));
    let id = $(this).attr("id");
    let devourObj = { devoured: true };
    $.ajax("update/" + $(this).attr("id"), {
      type: "PUT",
      data: devourObj
    }).then(function() {
      console.log("Updated Burger at : " + id);
      location.reload();
    });
  });
});
