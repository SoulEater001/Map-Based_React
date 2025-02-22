const directionsService = new window.google.maps.DirectionsService();
const directionsRenderer = new window.google.maps.DirectionsRenderer();

directionsService.route(
  {
    origin: userPosition,
    destination: destinationPosition, // Define the destination
    travelMode: window.google.maps.TravelMode.WALKING, // Walking mode for indoor navigation
  },
  (result, status) => {
    if (status === 'OK') {
      directionsRenderer.setDirections(result);
      directionsRenderer.setMap(map);
    } else {
      console.error('Error fetching directions', result);
    }
  }
);
