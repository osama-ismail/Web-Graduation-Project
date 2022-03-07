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
var locations = ""

export var directionsRoutes = []

export const clearMarkers = () => {
    markers.map(marker => marker.remove())
    markers = []
    locations = ""
    map.removeLayer('route')
    map.removeSource('route')
}

export const searchPlace = (place) => {
    axios.get(
        "https://api.tomtom.com/search/2/search/" + place + ".json?limit=1&minFuzzyLevel=1&maxFuzzyLevel=2&view=Unified&relatedPois=off&key=q2yukmABGuRvQD9NhkGAABCOYtIMoHFD"
    ).then((response) => {
        // console.log(response.data)
        map.flyTo({
            center: response.data.results[0].position,
            zoom: 13, // you can also specify zoom level
        })
    });
}

export async function calculateRoute() {
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

    tt.services.calculateRoute(routeOptions).go()
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
                    'line-width': 5
                }
            })
        })

    const { routes } = await tt.services.calculateRoute({
        locations,
        instructionsType: 'text',
        key: "q2yukmABGuRvQD9NhkGAABCOYtIMoHFD",
    }).go()
    const routesDirections = routes.map(route => {
        const { instructions } = route.guidance
        return instructions.map(i => {
            let result = ''

            switch (i.maneuver) {
                case 'TURN_LEFT':
                    result += '↰ '
                    break
                case 'TURN_RIGHT':
                    result += '↱ '
                    break
                case 'ARRIVE_RIGHT':
                case 'ARRIVE_LEFT':
                case 'WAYPOINT_REACHED':
                    result += '☑ '
                    break
            }
            result += i.message.replace('waypoint', 'pickup area')
            return result
        })
    })
    // console.log(routesDirections[0])
    directionsRoutes = routesDirections[0]
}

export const lookingFor = (place, radius) => {
    var lng = undefined, lat = undefined;
    navigator.geolocation.getCurrentPosition(position => {
        lng = position.coords.longitude;
        lat = position.coords.latitude;
        axios.get("https://api.tomtom.com/search/2/search/" + place + ".json?lat=" + lat + "&lon=" + lng + "&radius=" + radius + "&minFuzzyLevel=1&maxFuzzyLevel=2&view=Unified&relatedPois=off&key=q2yukmABGuRvQD9NhkGAABCOYtIMoHFD").then((response) => {
            // console.log(response.data)
        })
    })
}

export default class App extends Component {
    addMarkerOnClick(e, obj) {
        var marker = new this.tt.Marker(obj)
            .setLngLat(e.lngLat)
            .addTo(this.map)     // Don't forget to specify a map to be display
        // console.log(e.lngLat)
        // console.log(e.lngLat.lng + " " + e.lngLat.lat)

        if (markers.length == 0)
            locations += "" + e.lngLat.lng + "," + e.lngLat.lat
        else
            locations += ":" + e.lngLat.lng + "," + e.lngLat.lat

        // console.log(locations)

        markers.push(marker);

        this.flyToLocation({
            center: {
                lng: e.lngLat.lng,
                lat: e.lngLat.lat
            },
            zoom: 13,   // you can also specify zoom level
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
            var popup = new tt.Popup({ offset: popupOffsets }).setHTML('<div><a style="color: black;text-decoration: none; display:flex; flex-direction: column; align-items: center" href="/garage-login/' + `${garagesPopups[i].id}` + '"><h2>' + `${garagesPopups[i].name}` + '</h2><br /><img width="90%" height="90%" src="' + `${require("../../../assets/images/garages-images/" + imagesNames[i])}"` + 'alt="image" /></a></div>');
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
            // this.map.flyTo({
            //     center: {
            //         lng: 35.21633,
            //         lat: 31.76904,
            //     },
            //     zoom: 10, // you can also specify zoom level
            // });
            var longitude = undefined, latitude = undefined;
            navigator.geolocation.getCurrentPosition(position => {
                longitude = position.coords.longitude;
                latitude = position.coords.latitude;
                this.map.flyTo({
                    center: {
                        lng: longitude,
                        lat: latitude
                    },
                    zoom: 13,
                })
            })
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