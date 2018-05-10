function initMap(){jQuery.get('/assets/portfolio/map_data.csv',function(csv){var latLng=new google.maps.LatLng(-8.064903,-34.896872)
var mapElement=document.getElementById('portfolio-map');var mapOptions={zoom:3,center:{lat:40.1254145,lng:-101.5449548},mapTypeControl:false,streetViewControl:false,minZoom:2,maxZoom:5,gestureHandling:'cooperative',zoomControl:true,fullscreenControl:false,styles:[{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f0f0f0"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#3e7a97"},{"visibility":"on"}]}]};var map=new google.maps.Map(mapElement,mapOptions);var data=$.csv.toObjects(csv);var markers=data.map(function(location,i){return new google.maps.Marker({map:map,position:{lat:parseFloat(location.Latitude),lng:parseFloat(location.Longitude)},icon:{url:"/assets/img/markerclusterer/dot-marker.png",}});});google.maps.event.addListener(map,'click',function(){helloworld();});google.maps.event.addListener(map,'zoom_changed',function(){helloworld();});google.maps.event.addListener(map,'dragend',function(){helloworld();});});function helloworld(){$('#portfolio-map-stats').addClass('active');}}