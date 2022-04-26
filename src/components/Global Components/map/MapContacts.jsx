import axios from 'axios';
import React, { Component } from 'react';
import styled from "styled-components";
import { MediumScreen } from '../../responsive/Responsive';

const Container = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: ${props => props.borderRadius};

    ${MediumScreen({ width: "80%" })}
`

let tt = null;
let map = null;

export default class App extends Component {
    addMarker(obj, [lng, lat]) {
        new this.tt.Marker(obj)
            .setLngLat([lng, lat])
            .addTo(this.map)     // Don't forget to specify a map to be display
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
        // snip

        const self = this
        map.on('load', () => {
            axios.get(`http://localhost:8080/garages/${this.props.userId}/location`).then(response => {
                this.map.flyTo({
                    center: {
                        lng: response.data[0],
                        lat: response.data[1],
                    },
                    zoom: 10, // you can also specify zoom level
                })
                this.addMarker({
                    color: 'rgb(190, 18, 47)',
                    width: '40',
                    height: '50'
                }, [response.data[0], response.data[1]])
            })
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