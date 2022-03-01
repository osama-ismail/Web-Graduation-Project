import React, { Component } from 'react';
import styled from "styled-components";
import { MediumScreen } from '../../responsive/Responsive';
import axios from 'axios';

const Container = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: ${props => props.borderRadius};

    ${MediumScreen({ width: "80%" })}
`

let tt = null;
let map = null;

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

export default class App extends Component {
    addMarkerOnClick(e, obj) {
        new this.tt.Marker(obj)
            .setLngLat(e.lngLat)
            .addTo(this.map)     // Don't forget to specify a map to be display
        // console.log(e.lngLat)
        // console.log(e.lngLat.lng + " " + e.lngLat.lat)
        this.flyToLocation({
            center: {
                lng: e.lngLat.lng,
                lat: e.lngLat.lat
            },
            zoom: 10, // you can also specify zoom level
        })
    }

    flyToLocation(obj) {
        this.map.flyTo(obj);
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
        // snip

        const self = this
        map.on('load', () => {
            this.map.flyTo({
                center: {
                    lng: 35.21633,
                    lat: 31.76904,
                },
                zoom: 10, // you can also specify zoom level
            })
        })

        map.on('click', (event) => {
            this.addMarkerOnClick(event, {
                color: 'rgb(190, 18, 47)',
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