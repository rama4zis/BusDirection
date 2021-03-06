const shadowContainer = document.querySelector("main-container").shadowRoot;
// const shadowView = document.querySelector("map-view");

function initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: {
            lat: -7.243256,
            lng: 112.74138
        },
    });

    directionsRenderer.setMap(map);

    const onChangeHandler = () => {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    };

    shadowContainer.querySelector("#submitForm").addEventListener("click", (e) => {
        e.preventDefault();

        // show maps 
        document.querySelector(".map-container").classList.remove("hide");

        onChangeHandler();
    });


    // GET Current Location 
    const infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "Get My Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

                    

                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Your Location.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation ?
        "Error: The Geolocation service failed." :
        "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}


function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService
        .route({
            origin: {
                query: shadowContainer.getElementById("search-value").value
            },
            destination: {
                query: shadowContainer.getElementById("search-value-target").value
            },
            // Travel Mode Transit BUS
            travelMode: google.maps.TravelMode.TRANSIT,
        })
        .then((response) => {
            directionsRenderer.setDirections(response);
        })
        .catch((e) => window.alert("Directions request failed due to " + status));
}

window.initMap = initMap;