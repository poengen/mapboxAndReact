module.exports = {
  id: 'points',
  type: 'symbol',
  source: {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [ 7.42, 62.433 ],
          },
          properties: {
            title: 'Hytta til Pål',
            icon: 'harbor',
          },
        },
      ],
    },
  },
  layout: {
    'icon-image': '{icon}-15',
    'text-field': '{title}',
    'text-font': [
      'Open Sans Semibold',
      'Arial Unicode MS Bold',
    ],
    'text-offset': [ 0, 0.6 ],
    'text-anchor': 'top',
  },
};
