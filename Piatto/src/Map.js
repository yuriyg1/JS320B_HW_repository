import React, { useRef, useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import bluePin from "./media/bluePin.png";
import redPin from "./media/redPin.png";

function Map({ data }) {
  const mapRef = useRef(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) { // check if data has data
      // Create a new map instance and set the initial view
      const map = L.map(mapRef.current);

      // hold markers
      const markers = [];

      // MapTiler Light tile layer
      L.tileLayer(
        "https://api.maptiler.com/maps/dataviz-light/{z}/{x}/{y}.png?key=sbkrKzYe4EX1cAqg3FZh",
        {
          tileSize: 512,
          zoomOffset: -1,
          minZoom: 0,
          maxZoom: 18,
          attribution: "OpenStreetMap | Styled with MapTilers",
          crossOrigin: true,
        }
      ).addTo(map);

      // Loop through all the elements in the data array
      data.forEach((element) => {
        // stick marker on map
        const marker = L.marker(
          [element.coordinates.latitude, element.coordinates.longitude],
          {
            icon: L.icon({
              iconUrl:
                selectedRestaurant === element ? bluePin : redPin,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              tooltipAnchor: [16, -28],
            }),
          }
        ).addTo(map);

        marker.bindPopup(`<b>${element.name}</b>`);
        marker.on("click", (event) => {
          setSelectedRestaurant(element);

          // Chanhe to blue marker
          marker.setIcon(
            L.icon({
              iconUrl: bluePin,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              tooltipAnchor: [16, -28],
            })
          );
        });

        markers.push(marker);
      });

      // fit map to show all markers
      const markersFeatureGroup = L.featureGroup(markers);
      map.fitBounds(markersFeatureGroup.getBounds());

      return () => {
        map.remove();
      };
    }
  }, [selectedRestaurant, data]);

  return data && data.length > 0 ? ( // only render if the map div only if data has data
    <div ref={mapRef} style={{ height: "100%", width: "100%"}}></div>
  ) : null;
}


export default Map;
