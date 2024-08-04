function draw(result) {
  const ctx = document.getElementById('myChart');
  lbls=[];lblset=[];
  result.hourly.time.forEach(element => {
    lbls.push(element)
  });
  result.hourly.temperature_2m.forEach(element => {
    lblset.push(element)
  });
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: lbls, 
      datasets: [{
        label: 'Temperature (Farenheit)',
        data: lblset,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
function coords(lat,long) {
  var link='https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+long+'&hourly=temperature_2m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto'
  $.ajax({
      method: 'GET',
      url: link, 
      contentType: 'application/json',
      success: function(result) {
          console.log(result);
          console.log(link);
          draw(result);
      },
      error: function ajaxError(jqXHR) {
        alert(('Error: ', jqXHR.responseText))
      }
  });
}
function success(test) {
  alert(test.coords.latitude+", "+test.coords.longitude)
  console.log(test.coords)
}
function error(test){
  alert("Unable to retrieve your location")
  console.log("error")
}
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
function loc() {
  navigator.geolocation.getCurrentPosition(success, error, options); 
}