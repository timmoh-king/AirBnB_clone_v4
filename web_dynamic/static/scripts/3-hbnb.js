#!/usr/bin/node

/*
 * Your script must be executed only when DOM is loaded
 * Listen for changes on each input checkbox tag
 * if the checkbox is checked, you must store the Amenity ID in a variable (dictionary or list)
 * if the checkbox is unchecked, you must remove the Amenity ID from the variable
 * update the h4 tag inside the div Amenities with the list of Amenities checked
 */

$(document).ready(function () {
    
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
    
    /*
     * Based on 1-hbnb.js
     * Request http://0.0.0.0:5001/api/v1/status/
     * If in the status is “OK”, add the class available to the div#api_status
     * Otherwise, remove the class available to the div#api_status
     */
    
    function checkAPIStatus () {
    $.get(
        "http://' + window.location.hostname + ':5001/api/v1/status/",
        function(data) {
            if (data.status === 'OK') {
                $('#api_status').addClass('available');
            } else {
                $('#api_status').removeClass('available');
            }
        }
    )};
    
    checkAPIStatus();

    /*
    * Based on 2-hbnb.js
    * Request http://0.0.0.0:5001/api/v1/places_search/
    * Send a POST request with Content-Type: application/json and an empty dictionary in the body - cURL version: curl "http://0.0.0.0:5001/api/v1/places_search" -XPOST -H "Content-Type: application/json" -d '{}'
    * Loop into the result of the request and create an article tag representing a Place in the section.places. (you can remove the Owner tag in the place description)
    */

    });
    