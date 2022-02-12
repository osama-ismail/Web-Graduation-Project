import React, { Component } from 'react';
import styled from "styled-components";
import { MediumScreen } from '../../responsive/Responsive';

const Container = styled.div`
    height: 350px;
    width: 600px;

    ${MediumScreen({ width: "80%" })}
`

let tt = null;
let map = null;

export default class App extends Component {
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

        new this.tt.Marker({
            color: '#0f0f0f',
            width: '40',
            height: '50'
        })
            .setLngLat([35.21633, 31.76904])
            .addTo(this.map) // Don't forget to specify a map to be display
    }

    render() {
        return (
            // <Container id="map" style={{ border: '1px solid red', height: '100vh' }} />
            <Container id="map" />
        );
    }
}