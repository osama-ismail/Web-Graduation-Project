import React, { Component } from 'react';
import styled from "styled-components";
import { MediumScreen } from '../../responsive/Responsive';

import "./styles.css";
import manWaving from "./img/R.png";

const Container = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: ${props => props.borderRadius};

    ${MediumScreen({ width: "100%" })}
`

let tt = null;
let map = null;
let markers = [];
let marker = null;


// From Taxi app
let passengerInitCoordinates = undefined;

let passengerMarker;

let taxiPassengerBatchCoordinates = [];
let taxiConfig = [];


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

    addMarker(obj, [lng, lat]) {
        var marker = new this.tt.Marker(obj)
            .setLngLat([lng, lat])
            .addTo(this.map)     // Don't forget to specify a map to be display
        return marker
    }

    addMarkerClick(e, obj) {
        if (marker != null)
            marker.remove();
        marker = new this.tt.Marker(obj)
            .setLngLat(e.lngLat)
            .addTo(this.map)     // Don't forget to specify a map to be display
        // console.log(e.lngLat)
        // console.log(e.lngLat.lng + " " + e.lngLat.lat)
        // setLocation(e.lngLat);
        window.ReactNativeWebView.postMessage(`${e.lngLat.lng},${e.lngLat.lat}`)
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

        var trafficIncidentsConfig = {
            key: "q2yukmABGuRvQD9NhkGAABCOYtIMoHFD",
            incidentTiles: {
                style: 'tomtom://vector/1/s2'
            },
            incidentDetails: {
                style: 's2'
            }
        };

        const self = this
        map.on('load', () => {
            var userlongitude = parseFloat(new URL(window.location).pathname.split('/')[2])
            var userlatitude = parseFloat(new URL(window.location).pathname.split('/')[3])
            var garagelongitude = parseFloat(new URL(window.location).pathname.split('/')[4])
            var garagelatitude = parseFloat(new URL(window.location).pathname.split('/')[5])

            const garageMarker = this.addMarker({
                color: 'orange',
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
                new tt.Popup({ offset: 45 }).setHTML("<h1>Driver is here</h1>"));
            markers.push(passengerMarker);
            markers.push(garageMarker)
            passengerMarker.togglePopup();
            map.addTier(new tt.TrafficIncidentTier(trafficIncidentsConfig));
            // map.addTier(new tt.TrafficFlowTilesTier(trafficFlowConfig));
            calculateRoute();
        });

        map.on('click', (event) => {
            this.addMarkerClick(event, {
                color: 'blue',
                width: '40',
                height: '50'
            });
        })
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