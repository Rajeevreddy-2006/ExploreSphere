const map = new mapboxgl.Map({
    accessToken: mapToken,
    container: 'map',
    center: heritage.geometry.coordinates,
    zoom: 9
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(heritage.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${heritage.title}</h3><p>${heritage.location}</p>`
            )
    )
    .addTo(map);