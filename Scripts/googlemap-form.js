// JavaScript source code
function initMap(user_position) {
    console.log(user_position);
    var myLatlng = new google.maps.LatLng(user_position.lat, user_position.lng);
    var mapProp = {
        center: myLatlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Hello World!',
        draggable: true
    });
    document.getElementById('lat').value = user_position.lat;
    document.getElementById('lng').value = user_position.lng;
    // marker drag event
    google.maps.event.addListener(marker, 'drag', function (event) {
        document.getElementById('lat').value = event.latLng.lat();
        document.getElementById('lng').value = event.latLng.lng();
    });

    // double click event
    google.maps.event.addListener(map, 'dblclick', function (e) {
        var positionDoubleclick = e.latLng;
        marker.setPosition(positionDoubleclick);

        document.getElementById('lat').value = e.latLng.lat();
        document.getElementById('lng').value = e.latLng.lng();
        // if you don't do this, the map will zoom in
        e.stopPropagation();
    });

    //marker drag event end
    google.maps.event.addListener(marker, 'dragend', function (event) {
        document.getElementById('lat').value = event.latLng.lat();
        document.getElementById('lng').value = event.latLng.lng();
    });
}

