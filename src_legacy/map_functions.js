exports.loadRoute = function(map) {
  map.addLayer({
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
              coordinates: [ 7.36, 62.4 ],
            },
            properties: {
              title: 'Midt imillå',
              icon: 'harbor',
            },
          },
        ],
      },
    },
    layout: {
      'icon-image': '{icon}-15',
      'text-field': '{title}',
      'text-font': [ 'Open Sans Semibold', 'Arial Unicode MS Bold' ],
      'text-offset': [ 0, 0.6 ],
      'text-anchor': 'top',
    },
  });
};

exports.loadMountains = function(map) {
  map.on('load', function() {
    map.addLayer({
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
                coordinates: [ 10.757933, 59.911491 ],
              },
              properties: {
                title: 'OshloGrøttååå',
                icon: 'harbor',
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [ 7.4, 62.435 ],
              },
              properties: {
                title: 'Bøstølen',
                icon: 'harbor',
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [ 7.44, 62.439 ],
              },
              properties: {
                title: 'Bærællj',
                icon: 'harbor',
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [ 7.43778, 62.42018 ],
              },
              properties: {
                title: 'Gamlestølsfjellet',
                icon: 'mountain',
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [ 7.49592, 62.42292 ],
              },
              properties: {
                title: 'Hesten',
                icon: 'mountain',
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [ 7.39453, 62.45653 ],
              },
              properties: {
                title: 'Nonstinden',
                icon: 'mountain',
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [ 7.36181, 62.41316 ],
              },
              properties: {
                title: 'Taskedalskollen',
                icon: 'mountain',
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [ 7.4483, 62.39817 ],
              },
              properties: {
                title: 'Sjøboltinden',
                icon: 'mountain',
              },
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [ 7.32191, 62.42348 ],
              },
              properties: {
                title: 'Kammen',
                icon: 'mountain',
              },
            },
          ],
        },
      },
      layout: {
        'icon-image': '{icon}-15',
        'text-field': '{title}',
        'text-font': [ 'Open Sans Semibold', 'Arial Unicode MS Bold' ],
        'text-offset': [ 0, 0.6 ],
        'text-anchor': 'top',
      },
    });
  });
};
