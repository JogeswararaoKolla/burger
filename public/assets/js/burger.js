$(document).ready(function() {
  $(".delete-data").on("click", function() {
    console.log("Delete button Clicked!");
    console.log($(this).attr("id"));
    let id = $(this).attr("id");
    $.ajax("/delete/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("Deleted Burger at : " + id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
