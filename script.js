mapboxgl.accessToken =
  "pk.eyJ1IjoiamJlYW5ueSIsImEiOiJjbGM3dGt5dGIwM2xpM3BsaDcwdXd6djVmIn0.c8mlOzAqh-zNM4RDR-NCxg";
const map = new mapboxgl.Map({
  attributionControl: false,
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [104.888535, 11.562108],
  zoom: 10,
});

map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
    showUserHeading: true,
  })
);

map.addControl(new mapboxgl.NavigationControl(), "top-right");

map.addControl(
  new mapboxgl.AttributionControl({
    customAttribution: "Map design by Sotharoth Yim",
  })
);

map.addControl(
  new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  }),
  "top-left"
);

console.log(map.getCenter());
