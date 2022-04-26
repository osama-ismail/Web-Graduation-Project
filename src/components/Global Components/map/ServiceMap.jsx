import React, { Component } from 'react';
import styled from "styled-components";
import { MediumScreen } from '../../responsive/Responsive';
import { garagesPopups } from '../../../iterated_variables/garagesPopups';
import axios from 'axios';

import "./styles.css";
import manWaving from "./img/man-waving-arm_32.png";

const Container = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: ${props => props.borderRadius};

    ${MediumScreen({ width: "100%" })}
`

let tt = null;
let map = null;
let markers = [];
var locations = ""


// From Taxi app
const apiKey = 'q2yukmABGuRvQD9NhkGAABCOYtIMoHFD';

let passengerInitCoordinates = undefined;

let passengerMarker;

let taxiPassengerBatchCoordinates = [];
let taxiConfig = [];

// function setDefaultTaxiConfig() {
//     // taxiConfig = [
//     //     createTaxi('CAR #1', '#006967', [4.902642, 52.373627], cab1),
//     //     createTaxi('CAR #2', '#EC619F', [4.927198, 52.365927], cab2),
//     //     createTaxi('CAR #3', '#002C5E', [4.893488, 52.347878], cab3),
//     //     createTaxi('CAR #4', '#F9B023', [4.858433, 52.349447], cab4),
//     // ];
//     let length = garagesPopups.length;
//     for (let i = 0; i < length; i = i + 1) {
//         taxiConfig[i] = createTaxi('Garage #' + garagesPopups[i].id, '#006967', garagesPopups[i].position, 'none')
//     }
// }

// function createTaxi(name, color, coordinates, iconFilePath, iconWidth = 55, iconHeight = 55) {
//     return {
//         name: name,
//         color: color,
//         // icon: "<img src=" + `${iconFilePath}` + " style='width: " + iconWidth + "px; height: " + iconHeight + "px;'>",
//         icon: null,
//         coordinates: coordinates
//     };
// }

function updateTaxiBatchLocations(passengerCoordinates) {
    taxiPassengerBatchCoordinates = [];
    taxiConfig.forEach(taxi => {
        taxiPassengerBatchCoordinates.push(taxi.coordinates + ':' + passengerCoordinates);
    });
}

function createPassengerMarker(markerCoordinates, popup) {
    const passengerMarkerElement = document.createElement('div');
    passengerMarkerElement.innerHTML = `<img src=${manWaving} style='width: 40px; height: 40px';>`;
    return new tt.Marker({ element: passengerMarkerElement }).setLngLat(markerCoordinates).setPopup(popup).addTo(map);
}

// From Taxi app

export var directionsRoutes = []

export function calculateRoute() {
    var routeOptions = {
        key: "q2yukmABGuRvQD9NhkGAABCOYtIMoHFD",
        locations: [],
        instructionsType: 'text',
        travelMode: 'car'
    }
    let i = 0;

    for (i = 0; i < markers.length; ++i) {
        routeOptions.locations.push(markers[i].getLngLat());
    }

    // Execute the routing API

    tt.services.calculateRoute(routeOptions)
        .then(function (routeData) {
            console.log(routeData);
            var geo = routeData.toGeoJson();
            map.addLayer({
                'id': 'route',
                'type': 'line',
                'source': {
                    'data': geo,
                    'type': 'geojson'
                },
                'paint': {
                    'line-color': 'red',
                    'line-width': 7
                }
            })
        })
}

export default class App extends Component {
    // displayPopups(popupOffsets) {
    //     var i = 0;
    //     var markersPositions = []
    //     var imagesNames = []

    //     garagesPopups.map(garagePopup => {
    //         imagesNames.push(garagePopup.img)
    //         markersPositions.push(
    //             new this.tt.Marker()
    //                 .setLngLat(garagePopup.position)
    //                 .addTo(this.map))
    //     });

    //     for (i = 0; i < garagesPopups.length; ++i) {
    //         var popup = new tt.Popup({ offset: popupOffsets }).setHTML(`<div id="${garagesPopups[i].id}" onclick="window.ReactNativeWebView.postMessage(this.id)"><a style="color: black;text-decoration: none; display:flex; flex-direction: column; align-items: center" href="#"><h2>` + `${garagesPopups[i].name}` + '</h2><br /><img width="90%" height="90%" src="' + `${require("../../../assets/images/garages-images/" + imagesNames[i])}"` + 'alt="image" /></a></div>');
    //         markersPositions[i].setPopup(popup).togglePopup();
    //     }
    // }

    addMarker(obj, [lng, lat]) {
        var marker = new this.tt.Marker(obj)
            .setLngLat([lng, lat])
            .addTo(this.map)     // Don't forget to specify a map to be display
        return marker
    }

    componentDidMount() {
        // snip
        tt = window.tt

        map = tt.map({
            key: "q2yukmABGuRvQD9NhkGAABCOYtIMoHFD",
            container: 'map',
            style: 'tomtom://vector/1/basic-main',
            language: 'ar'
        })
        map.addControl(new tt.FullscreenControl())
        map.addControl(new tt.NavigationControl())

        this.map = map
        this.tt = tt
        this.points = [] // for management of points

        // Display traffic and flow incident
        // var trafficFlowConfig = {
        //     key: "q2yukmABGuRvQD9NhkGAABCOYtIMoHFD",
        //     theme: {
        //         style: 'relative-delay',
        //         source: 'vector'
        //     },
        //     refresh: 3000
        // };

        var trafficIncidentsConfig = {
            key: "q2yukmABGuRvQD9NhkGAABCOYtIMoHFD",
            incidentTiles: {
                style: 'tomtom://vector/1/s2'
            },
            incidentDetails: {
                style: 's2'
            }
        };

        // Display popups for garages on the map
        // var popupOffsets = {
        //     top: [0, 0],
        //     bottom: [0, -30],
        //     'bottom-right': [0, -70],
        //     'bottom-left': [0, -70],
        //     left: [25, -35],
        //     right: [-25, -35]
        // }

        // this.displayPopups(popupOffsets);

        const self = this
        map.on('load', () => {
            var userlongitude = parseFloat(new URL(window.location).pathname.split('/')[2])
            var userlatitude = parseFloat(new URL(window.location).pathname.split('/')[3])
            var garagelongitude = parseFloat(new URL(window.location).pathname.split('/')[4])
            var garagelatitude = parseFloat(new URL(window.location).pathname.split('/')[5])

            const garageMarker = this.addMarker({
                color: 'rgb(190, 18, 47)',
                width: '40',
                height: '50'
            }, [garagelongitude, garagelatitude])

            this.map.flyTo({
                center: {
                    lng: userlongitude,
                    lat: userlatitude
                },
                zoom: 13,
            })
            passengerInitCoordinates = [userlongitude, userlatitude]
            updateTaxiBatchLocations(passengerInitCoordinates);
            tt.setProductInfo('Taxi dispatcher example application', '1.00');

            passengerMarker = createPassengerMarker(passengerInitCoordinates,
                new tt.Popup({ offset: 45 }).setHTML("<h1>You are here</h1>"));
            markers.push(passengerMarker);
            markers.push(garageMarker)
            passengerMarker.togglePopup();
            map.addTier(new tt.TrafficIncidentTier(trafficIncidentsConfig));
            // map.addTier(new tt.TrafficFlowTilesTier(trafficFlowConfig));
            calculateRoute();
        });
    }

    render() {
        return (
            <Container
                id="map"
                width={this.props.width}
                height={this.props.height}
                borderRadius={this.props.borderRadius}
            />
        );
    }
}