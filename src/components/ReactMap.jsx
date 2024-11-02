import React from "react";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import { geoPath, geoOrthographic } from "d3-geo";

// Define the data points
const connections = [
  { name: "U.S.A", coordinates: [-100, 40] },
  { name: "Canada", coordinates: [-106, 56] },
  { name: "Mexico", coordinates: [-102.5528, 23.6345] },
  // Add other countries similarly
  { name: "India", coordinates: [78.9629, 20.5937] },
];

const bangladesh = { name: "Bangladesh", coordinates: [90.4125, 23.8103] };

const WorldMap = () => {
  return (
    <ComposableMap projection={geoOrthographic()}>
      <Geographies geography="/path-to-your-world-map-geojson.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" stroke="#D6D6DA" />
          ))
        }
      </Geographies>

      {/* Bangladesh Marker */}
      <Marker coordinates={bangladesh.coordinates}>
        <circle r={10} fill="#FF5533" />
        <text textAnchor="middle" fill="#F53">
          {bangladesh.name}
        </text>
      </Marker>

      {/* Country Connections */}
      {connections.map((country, i) => (
        <React.Fragment key={i}>
          <Line
            from={bangladesh.coordinates}
            to={country.coordinates}
            stroke="#00f"
            strokeWidth={1}
            strokeLinecap="round"
          />
          <Marker coordinates={country.coordinates}>
            <circle r={4} fill="#00f" />
            <text textAnchor="middle" fill="#000">
              {country.name}
            </text>
          </Marker>
        </React.Fragment>
      ))}
    </ComposableMap>
  );
};

export default WorldMap;
