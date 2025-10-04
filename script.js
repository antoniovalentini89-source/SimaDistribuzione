```javascript
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 39.6277, lng: 16.5211 } // Esempio: Corigliano-Rossano
  });

  const stops = [
    { lat: 39.625, lng: 16.520, label: "1" },
    { lat: 39.627, lng: 16.523, label: "2" },
    { lat: 39.630, lng: 16.518, label: "3" },
    // Aggiungi fino a 10 tappe
  ];

  stops.forEach(stop => {
    new google.maps.Marker({