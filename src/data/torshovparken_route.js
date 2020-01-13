module.exports = {
  id: 'torshovparken',
  type: 'line',
  source: {
    type: 'geojson',
    data: {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: [
          [ 10.76939, 59.93402 ],
          [ 10.77359, 59.93514 ],
          [ 10.77186, 59.93628 ],
          [ 10.76862, 59.93646 ],
          [ 10.76897, 59.93503 ],
          [ 10.76841, 59.93425 ],
          [ 10.76841, 59.93425 ],
          [ 10.76936, 59.93399 ],
        ],
      },
    },
  },
  layout: {
    'line-join': 'round',
    'line-cap': 'round',
  },
  paint: {
    'line-color': '#888',
    'line-width': 8,
  },
};
