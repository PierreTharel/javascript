let callBackGetSuccess = function(data) {
    let element = document.getElementById("localisation");
    element.innerHTML = "La temperature est de " + data.main.temp;
}

function buttonClickGET() {

    let url = ('https://api-adresse.data.gouv.fr/search/?q=chartres&type=street')

    $.get(url, callBackGetSuccess).done(function() {
        // alert( "second success" );
       })
       .fail(function() {
         alert( "error" );
       })
       .always(function() {
         // alert( "finished" );
       });
     
}
