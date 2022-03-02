import React, { Component } from 'react';
import styled from "styled-components";
import { MediumScreen } from '../../responsive/Responsive';
import { garagesPopups } from '../../../iterated_variables/garagesPopups';
import axios from 'axios';

const Container = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: ${props => props.borderRadius};

    ${MediumScreen({ width: "80%" })}
`

let tt = null;
let map = null;
let markers = [];

export const clearMarkers = () => {
    markers.map(marker => marker.remove())
    markers = []
}

export const searchPlace = (place) => {
    axios.get(
        "https://api.tomtom.com/search/2/search/" + place + ".json?limit=1&minFuzzyLevel=1&maxFuzzyLevel=2&view=Unified&relatedPois=off&key=q2yukmABGuRvQD9NhkGAABCOYtIMoHFD"
    ).then((response) => {
        console.log(response.data);
        map.flyTo({
            center: response.data.results[0].position,
            zoom: 10, // you can also specify zoom level
        })
    });
}

export const calculateRoute = () => {
    let i;
    let query = '';
    alert(markers[0].getLngLat())
    // for(i=0; i < markers.length; ++i) {
    //     query += markers[i].getLng()
    // }
    axios.get(
        "https://api.tomtom.com/routing/1/calculateRoute/52.50931%2C13.42936%3A52.50274%2C13.43872/json?traffic=true&travelMode=car&key=q2yukmABGuRvQD9NhkGAABCOYtIMoHFD"
    ).then((response) => {
        console.log(response.data)
    });
}

export default class App extends Component {
    addMarkerOnClick(e, obj) {
        var marker = new this.tt.Marker(obj)
            .setLngLat(e.lngLat)
            .addTo(this.map)     // Don't forget to specify a map to be display
        // console.log(e.lngLat)
        console.log(e.lngLat.lng + " " + e.lngLat.lat)

        markers.push(marker);

        this.flyToLocation({
            center: {
                lng: e.lngLat.lng,
                lat: e.lngLat.lat
            },
            zoom: 10, // you can also specify zoom level
        });
    }

    flyToLocation(obj) {
        this.map.flyTo(obj);
    }

    displayPopups(popupOffsets) {
        var i = 0;
        var markersPositions = []
        var imagesNames = []

        garagesPopups.map(garagePopup => {
            imagesNames.push(garagePopup.img)
            markersPositions.push(
                new this.tt.Marker()
                    .setLngLat(garagePopup.position)
                    .addTo(this.map))
        });

        for (i = 0; i < garagesPopups.length; ++i) {
            var popup = new tt.Popup({ offset: popupOffsets }).setHTML('<div style="background-color: rgb(190, 18, 48)"><a style="color: white;text-decoration: none" href="/garage-login/' + `${garagesPopups[i].id}` + '">Garage ' + eval(i + 1) + '<br /><img width="60px" height="40px" src="../../../assets/images/garages-images/"' + `${imagesNames[i]}` + 'alt="image" /></a></div>');
            markersPositions[i].setPopup(popup).togglePopup();
        }
    }

    componentDidMount() {
        // snip
        tt = window.tt

        map = tt.map({
            key: "q2yukmABGuRvQD9NhkGAABCOYtIMoHFD",
            container: 'map',
            style: 'tomtom://vector/1/basic-main',
            language: 'english'
        })
        map.addControl(new tt.FullscreenControl())
        map.addControl(new tt.NavigationControl())

        this.map = map
        this.tt = tt
        this.points = [] // for management of points

        // Display traffic and flow incident
        var trafficFlowConfig = {
            key: "q2yukmABGuRvQD9NhkGAABCOYtIMoHFD",
            theme: {
                style: 'relative-delay',
                source: 'vector'
            },
            refresh: 3000
        };

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
        var popupOffsets = {
            top: [0, 0],
            bottom: [0, -30],
            'bottom-right': [0, -70],
            'bottom-left': [0, -70],
            left: [25, -35],
            right: [-25, -35]
        }

        this.displayPopups(popupOffsets);

        const self = this
        map.on('load', () => {
            this.map.flyTo({
                center: {
                    lng: 35.21633,
                    lat: 31.76904,
                },
                zoom: 10, // you can also specify zoom level
            });
            map.addTier(new tt.TrafficIncidentTier(trafficIncidentsConfig));
            // map.addTier(new tt.TrafficFlowTilesTier(trafficFlowConfig));
        });

        map.on('click', (event) => {
            this.addMarkerOnClick(event, {
                color: 'rgb(190, 18, 47)',
                width: '40',
                height: '50'
            });
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