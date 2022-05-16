import React, { useState } from 'react';
import styled from 'styled-components';
import { MediumScreen } from '../../responsive/Responsive';
import axios from 'axios';

const Container = styled.div`
    padding: 1rem 5rem;
    margin: 0 4rem;
    border-radius: 5px;
    background-color: #636e72;
    box-shadow: 0 0 2px #dfe6e9;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 45%;
    transform: translateY(-40%) translateX(-55%);
`

const Input = styled.input`
    background-color: #2d3436;
    border: 2px solid #2d3436;
    padding: 0.6rem 1rem;
    color: white;
    font-size: 120%;
    margin-top: 6px;
    outline: none;
    border-radius: 7px;

    &:focus {
        border: 2px solid rgb(190, 18, 48);
    }
`

const TextArea = styled.textarea`
    background-color: #2d3436;
    border: 2px solid #2d3436;
    padding: 0.6rem 1rem;
    color: white;
    font-size: 120%;
    margin-top: 6px;
    outline: none;
    border-radius: 5px;

    &:focus {
        border: 2px solid rgb(190, 18, 48);
    }
`

const Label = styled.label`
    color: #dfe6e9;
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 1rem;

    &:last-child {
        margin-bottom: 0;
    }

    ${MediumScreen({ marginBottom: "1rem", alignItems: "stretch" })}
`

const SelectList = styled.select`
    background-color: #2d3436;
    padding: 0.5rem;
    margin: 1rem 0;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-size: 120%;
    outline: none;
`

const Option = styled.option``

const Button = styled.button`
    border: none;
    background-color: ${props => props.backgroundColor};
    padding: 1rem 0;
    margin-top: 1rem;
    color: white;
    font-size: 130%;
    cursor: pointer;
    transition: 300ms;
    border-radius: 5px;
    align-self: center;
    width: 15rem;

    &:hover {
        box-shadow: 0 0 10px #dfe6e9;
    }
`

const ServiceWindow = ({ currentService, setWindowVisible, refresh, setRefresh, setStatus }) => {

    const [serviceName, setServiceName] = useState(currentService ? currentService.serviceName : '')
    const [price, setPrice] = useState(currentService ? currentService.price : '')
    const [serviceTime, setServiceTime] = useState(currentService ? currentService.serviceTime : '')
    const [serviceType, setServiceType] = useState(currentService ? currentService.serviceType : '')
    const [serviceCanDeliver, setServiceCanDeliver] = useState(currentService ? currentService.canDeliver : false)
    const [serviceDesc, setServiceDesc] = useState(currentService ? currentService.serviceDescription : '')

    const [api, setApi] = useState(currentService ? `http://localhost:8080/services/${currentService.serviceID}/editService` : `http://localhost:8080/garages/${localStorage.getItem('loggedIn')}/services/addServiceToGarage`)

    const handleSubmit = () => {
        if (serviceName !== '' && serviceDesc !== '' && !Number.isNaN(price) && serviceTime !== '' && serviceType !== '') {
            axios.post(
                api,
                {
                    "serviceName": serviceName,
                    "serviceType": serviceType,
                    "serviceDescription": serviceDesc,
                    "price": price,
                    "serviceTime": serviceTime,
                    "canDeliver": serviceCanDeliver
                },
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Accept": "application/json"
                    }
                }
            ).then(response => {
                if (currentService) {
                    setStatus('Service Updated')
                } else {
                    setStatus('New Service Added')
                }
                setWindowVisible(false)
                setRefresh(!refresh)
            })
        } else {
            alert('Check all fields filled')
        }
    }

    return (
        <Container>
            <Section>
                <Label>Serivce Name</Label>
                <Input
                    type="text"
                    placeholder='Service Name'
                    value={serviceName}
                    onChange={e => setServiceName(e.target.value)}
                />
            </Section>

            <Section>
                <Label>Price</Label>
                <Input
                    type="number"
                    placeholder='Price'
                    value={price}
                    onChange={e => setPrice(parseFloat(e.target.value))}
                />
            </Section>

            <Section>
                <Label>Service Time</Label>
                <Input
                    type="text"
                    placeholder='Service Time: hh:mm:ss'
                    value={serviceTime}
                    onChange={e => setServiceTime(e.target.value)}
                />
            </Section>

            <Section>
                <Label>Service Type</Label>
                <SelectList value={serviceType} onChange={e => setServiceType(e.target.value)}>
                    <Option value="Maintenance">Maintenance</Option>
                    <Option value="Electrical">Electrical</Option>
                    <Option value="Car Washing">Car Washing</Option>
                </SelectList>
            </Section>

            <Section>
                <Label>Can Deliver</Label>
                <SelectList
                    value={serviceCanDeliver}
                    onChange={e => setServiceCanDeliver(e.target.value === 'false' ? false : true)}
                >
                    <Option value={false}>False</Option>
                    <Option value={true}>True</Option>
                </SelectList>
            </Section>

            <Section>
                <Label>Description</Label>
                <TextArea value={serviceDesc} rows="4" onChange={e => setServiceDesc(e.target.value)} />
            </Section>

            <Section>
                <Button
                    backgroundColor="rgb(190, 18, 48)"
                    onClick={handleSubmit}
                >Save</Button>
            </Section>

            <Section>
                <Button
                    backgroundColor="#2d3436"
                    onClick={() => setWindowVisible(false)}
                >Cancel</Button>
            </Section>
        </Container>
    )
}

export default ServiceWindow