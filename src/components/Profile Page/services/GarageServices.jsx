import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'

const Container = styled.div`
    color: white;
    transform: translateY(-30%);
    margin: 0 2rem;
    display: flex;
    flex-direction: column;
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

const Button = styled.button`
    margin: 1rem 0;
    padding: 0.4rem 1rem;
    font-size: 130%;
    border: none;
    background-color: #d63031;
    color: white;
    cursor: pointer;
    transition: 300ms;
    border-radius: 5px;
    align-self: center;

    &:hover {
        background-color: #636e72;
    }
`

const AllServices = styled.div`
    margin: 0.5rem 2rem;
    display: flex;
    flex-grow: 1;
`

const Collection = styled.div`
    border: 2px solid white;
    border-top: 0;
    border-radius: 15px;
    margin: 1rem;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
`

const CollectionTitle = styled.div`
    font-size: 120%;
    font-weight: bold;
`

const Services = styled.div`
    width: 100%;
    margin: 1rem 0;
`

const Row = styled.div`
    display: flex;
    padding: 1rem 0;
`

const Service = styled.div`
    background-color: #d63031;
    padding: 0.4rem;
    border-radius: 5px;
    cursor: pointer;
    transition: 300ms;
    flex: 1;
    margin-left: 0.4rem;
    transition: 300ms;
    display: flex;
    flex-direction: column;

    &:hover {
        background-color: #2d3436;
    }
`

const Name = styled.h2`
    color: white;
`

const Part = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.3rem 0;
`

const By = styled.span`
    color: white;
`

const Price = styled.span`
    color: white;
`

const EditBtn = styled.button`
    padding: 5px 0.8rem;
    margin: 0 0.4rem;
    background-color: #636e72;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 120%;
`

const NoAvailable = styled.span`
    color: #d63031;
    font-size: 130%;
    text-align: center;
    width: 100%;
    margin-top: 2rem;
    font-weight: bold;
    font-style: italic;
`

const GarageServices = () => {

    const [maintenance, setMaintenance] = React.useState([])
    const [electrical, setElectrical] = React.useState([])
    const [carWashing, setCarWashing] = React.useState([])
    const [garageId, setGarageId] = React.useState(localStorage.getItem('loggedIn'))
    const [garage, setGarage] = React.useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8080/garages/${garageId}`).then(response => {
            setGarage(response.data)
        })
        axios.get(`http://localhost:8080/garages/${garageId}/getGarageServicesByType/Maintenance`)
            .then(response => {
                setMaintenance(response.data)
            })
        axios.get(`http://localhost:8080/garages/${garageId}/getGarageServicesByType/Electrical`)
            .then(response => {
                setElectrical(response.data)
            })
        axios.get(`http://localhost:8080/garages/${garageId}/getGarageServicesByType/Car%20Washing`)
            .then(response => {
                setCarWashing(response.data)
            })
    }, [])

    return (
        <Container>
            <Section>
                <Button>Add New Service</Button>
            </Section>
            <Section>
                <AllServices>
                    <Collection>
                        <CollectionTitle>Maintenance</CollectionTitle>
                        {
                            maintenance.length == 0 ? (
                                <NoAvailable>No Service Available</NoAvailable>
                            ) : null
                        }
                        <Services>
                            {
                                maintenance.map(service => {
                                    return (
                                        <Row>
                                            <Service>
                                                <Name>{service.serviceName}</Name>
                                                <Part>
                                                    {garage ? (
                                                        <By>
                                                            By: {garage.garageName}
                                                        </By>
                                                    ) : null}
                                                    <Price>${service.price}</Price>
                                                </Part>
                                            </Service>
                                            <EditBtn>Edit</EditBtn>
                                        </Row>
                                    )
                                })
                            }
                        </Services>
                    </Collection>
                    <Collection>
                        <CollectionTitle>Electrical</CollectionTitle>
                        {
                            electrical.length == 0 ? (
                                <NoAvailable>No Service Available</NoAvailable>
                            ) : null
                        }
                        <Services>
                            {
                                electrical.map(service => {
                                    return (
                                        <Row>
                                            <Service>
                                                <Name>{service.serviceName}</Name>
                                                <Part>
                                                    {garage ? (
                                                        <By>
                                                            By: {garage.garageName}
                                                        </By>
                                                    ) : null}
                                                    <Price>${service.price}</Price>
                                                </Part>
                                            </Service>
                                            <EditBtn>Edit</EditBtn>
                                        </Row>
                                    )
                                })
                            }
                        </Services>
                    </Collection>
                    <Collection>
                        <CollectionTitle>Car Washing</CollectionTitle>
                        {
                            carWashing.length == 0 ? (
                                <NoAvailable>No Service Available</NoAvailable>
                            ) : null
                        }
                        <Services>
                            {
                                carWashing.map(service => {
                                    return (
                                        <Row>
                                            <Service>
                                                <Name>{service.serviceName}</Name>
                                                <Part>
                                                    {garage ? (
                                                        <By>
                                                            By: {garage.garageName}
                                                        </By>
                                                    ) : null}
                                                    <Price>${service.price}</Price>
                                                </Part>
                                            </Service>
                                            <EditBtn>Edit</EditBtn>
                                        </Row>
                                    )
                                })
                            }
                        </Services>
                    </Collection>
                </AllServices>
            </Section>
        </Container>
    )
}

export default GarageServices