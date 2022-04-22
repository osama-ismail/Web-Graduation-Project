import React, { Component } from 'react';
import styled from "styled-components";
import { MediumScreen } from '../../responsive/Responsive';
import { setLocation } from '../../Landing Page/mapForm/MapForm';

const Container = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: ${props => props.borderRadius};

    ${MediumScreen({ width: "100%" })}
`

let tt = null;
let map = null;
let marker = null;

export default class App extends Component {
    addMarker(e, obj) {
        if (marker != null)
            marker.remove();
        marker = new this.tt.Marker(obj)
            .setLngLat(e.lngLat)
            .addTo(this.map)     // Don't forget to specify a map to be display
        // console.log(e.lngLat)
        // console.log(e.lngLat.lng + " " + e.lngLat.lat)
        setLocation(e.lngLat);
        window.ReactNativeWebView.postMessage(`${e.lngLat.lng},${e.lngLat.lat}`)
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
            this.addMarker(event, {
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