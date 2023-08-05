#!/usr/bin/node

/*
 * Your script must be executed only when DOM is loaded
 * Listen for changes on each input checkbox tag
 * if the checkbox is checked, you must store the Amenity ID in a variable (dictionary or list)
 * if the checkbox is unchecked, you must remove the Amenity ID from the variable
 * update the h4 tag inside the div Amenities with the list of Amenities checked
 */

let amenities = [];
$("input[type=checkbox]").change(function () {
  const id = $(this).data("id");
  $("input").each((index, element) => {
    let name = $(element)[0].dataset["name"];
    if ($(element)[1]) return;
    else {
      amenities.push({ id: parseInt(id), name: name });
    }
  });
  $("#amenities h4")[0].innerHTML +=
    "<span>" + $(this).data("name") + "</span>";
  console.log($("#amenities h4"));
});
