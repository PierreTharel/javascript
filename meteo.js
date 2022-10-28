let callBackGetSuccess = function(data) {
    let element = document.getElementById("zone_meteo");
    element.innerHTML = "La temperature est de " + data.main.temp;
}

function buttonClickGET() {
    let url = "https://api.openweathermap.org/data/3.0/onecall?lat=48.45&lon=1.5&appid=24218e78144df4c35f56bed770ab3ff4"


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