import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ServiceWindow from '../service-window/ServiceWindow';
import { MediumScreen } from '../../responsive/Responsive';

const Container = styled.div`
    color: white;
    transform: translateY(-5rem);
    margin: 0 2rem;
    display: flex;
    flex-direction: column;

    ${MediumScreen({ transform: 'translateY(0)' })}
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

    ${MediumScreen({ flexDirection: 'column', alignItems: 'center' })}
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

const Row = styled.div``

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

    ${MediumScreen({ marginRight: '5px' })}
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

    ${MediumScreen({ marginTop: '0.4rem' })}
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

const Status = styled.span`
    text-align: center;
    font-size: 120%;
    color: #d63031;
`

const SubRow = styled.div`
    display: flex;
    padding: 0.5rem 0;

    ${MediumScreen({ flexDirection: 'column' })}
`

const Slots = styled.section`
    margin: 0 0.5rem;
    flex: 1;
`

const SlotRow = styled.section`
    display: flex;
`

const Slot = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #636e72;
    border-radius: 5px;
    cursor: pointer;
    flex: 1;
`

const SlotSpan = styled.span`
    color: #dfe6e9;
    font-size: 110%;
    padding-left: 5px;
`

const SlotInput = styled.input`
    background-color: #2d3436;
    border: none;
    color: #dfe6e9;
    outline: none;
    padding: 5px;
    margin: 1px;
    border-radius: 5px;
`

const SlotBtn = styled.button`
    flex: 0.2;
    margin-left: 5px;
    border: 0;
    background-color: #d63031;
    color: #dfe6e9;
    border-radius: 5px;
    cursor: pointer;
    transition: 300ms;

    &:hover {
        background-color: #ff7675;
    }
`

const GarageServices = () => {

    const [maintenance, setMaintenance] = React.useState([])
    const [electrical, setElectrical] = React.useState([])
    const [carWashing, setCarWashing] = React.useState([])
    const [garageId, setGarageId] = React.useState(localStorage.getItem('loggedIn'))
    const [garage, setGarage] = React.useState(null)
    const [currentService, setCurrentService] = React.useState(null)
    const [windowVisible, setWindowVisible] = React.useState(false)
    const [refresh, setRefresh] = React.useState(false)
    const [status, setStatus] = React.useState('')

    const [slotId, setSlotId] = React.useState()
    const [canEdit, setCanEdit] = React.useState(false)
    const [slotDate, setSlotDate] = React.useState('')
    const [slotStart, setSlotStart] = React.useState('')
    const [slotEnd, setSlotEnd] = React.useState('')

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
    }, [refresh])

    const handleSaveSlot = () => {
        setCanEdit(false)
        // Call API
        axios.post(
            `http://localhost:8080/services/${slotId}/editSlotTime`,
            {
                "date": slotDate,
                "startTime": slotStart,
                "endTime": slotEnd
            },
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Accept": "application/json"
                }
            }
        ).then(response => {
            setStatus('Slot Updated')
            setRefresh(!refresh)
        })
    }

    return (
        <Container>
            <Section>
                <Button
                    onClick={() => {
                        setCurrentService(null)
                        setWindowVisible(true)
                    }}
                >Add New Service</Button>
            </Section>
            <Section>
                <Status>{status}</Status>
            </Section>
            <Section>
                <AllServices>
                    <Collection>
                        <CollectionTitle>Maintenance</CollectionTitle>
                        {
                            maintenance.length === 0 ? (
                                <NoAvailable>No Service Available</NoAvailable>
                            ) : null
                        }
                        <Services>
                            {
                                maintenance.map(service => {
                                    return (
                                        <Row>
                                            <SubRow>
                                                <Service
                                                    onClick={() => {
                                                        currentService && currentService.serviceID === service.serviceID ?
                                                            setCurrentService(null)
                                                            : setCurrentService(service)
                                                    }}
                                                >
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
                                                <EditBtn
                                                    onClick={() => {
                                                        setCurrentService(service)
                                                        setWindowVisible(true)
                                                    }}
                                                >Edit</EditBtn>
                                            </SubRow>
                                            {currentService &&
                                                currentService.serviceID === service.serviceID &&
                                                service.slotTimes.length ? (
                                                <SubRow>
                                                    <Slots>
                                                        {
                                                            service.slotTimes.map(slot => {
                                                                return (
                                                                    <SlotRow>
                                                                        {canEdit ? (
                                                                            <Slot>
                                                                                <SlotInput
                                                                                    placeholder='Date'
                                                                                    onChange={e => setSlotDate(e.target.value)}
                                                                                />
                                                                                <SlotInput
                                                                                    placeholder='Start Time'
                                                                                    onChange={e => setSlotStart(e.target.value)}
                                                                                />
                                                                                <SlotInput
                                                                                    placeholder='End Time'
                                                                                    onChange={e => setSlotEnd(e.target.value)}
                                                                                />
                                                                            </Slot>
                                                                        ) : (
                                                                            <Slot>
                                                                                <SlotSpan>Date: {slot.date}</SlotSpan>
                                                                                <SlotSpan>Start Time: {slot.startTime}</SlotSpan>
                                                                                <SlotSpan>End Time: {slot.endTime}</SlotSpan>
                                                                            </Slot>
                                                                        )}
                                                                        {canEdit ? (
                                                                            <SlotBtn onClick={handleSaveSlot}>Save</SlotBtn>
                                                                        ) : (
                                                                            <SlotBtn onClick={() => {
                                                                                setCanEdit(true)
                                                                                setSlotId(slot.slotTimeID)
                                                                            }}>Edit</SlotBtn>
                                                                        )}
                                                                        {canEdit ? (
                                                                            <SlotBtn onClick={() => setCanEdit(false)}>Cancel</SlotBtn>
                                                                        ) : (
                                                                            <SlotBtn>Delete</SlotBtn>
                                                                        )}
                                                                    </SlotRow>
                                                                )
                                                            })
                                                        }
                                                    </Slots>
                                                </SubRow>
                                            ) : null}
                                        </Row>
                                    )
                                })
                            }
                        </Services>
                    </Collection>
                    <Collection>
                        <CollectionTitle>Electrical</CollectionTitle>
                        {
                            electrical.length === 0 ? (
                                <NoAvailable>No Service Available</NoAvailable>
                            ) : null
                        }
                        <Services>
                            {
                                electrical.map(service => {
                                    return (
                                        <Row>
                                            <SubRow>
                                                <Service
                                                    onClick={() => {
                                                        currentService && currentService.serviceID === service.serviceID ?
                                                            setCurrentService(null)
                                                            : setCurrentService(service)
                                                    }}
                                                >
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
                                                <EditBtn
                                                    onClick={() => {
                                                        setCurrentService(service)
                                                        setWindowVisible(true)
                                                    }}
                                                >Edit</EditBtn>
                                            </SubRow>
                                            {currentService &&
                                                currentService.serviceID === service.serviceID &&
                                                service.slotTimes.length ? (
                                                <SubRow>
                                                    <Slots>
                                                        {
                                                            service.slotTimes.map(slot => {
                                                                return (
                                                                    <SlotRow>
                                                                        {canEdit ? (
                                                                            <Slot>
                                                                                <SlotInput
                                                                                    placeholder='Date'
                                                                                    onChange={e => setSlotDate(e.target.value)}
                                                                                />
                                                                                <SlotInput
                                                                                    placeholder='Start Time'
                                                                                    onChange={e => setSlotStart(e.target.value)}
                                                                                />
                                                                                <SlotInput
                                                                                    placeholder='End Time'
                                                                                    onChange={e => setSlotEnd(e.target.value)}
                                                                                />
                                                                            </Slot>
                                                                        ) : (
                                                                            <Slot>
                                                                                <SlotSpan>Date: {slot.date}</SlotSpan>
                                                                                <SlotSpan>Start Time: {slot.startTime}</SlotSpan>
                                                                                <SlotSpan>End Time: {slot.endTime}</SlotSpan>
                                                                            </Slot>
                                                                        )}
                                                                        {canEdit ? (
                                                                            <SlotBtn onClick={handleSaveSlot}>Save</SlotBtn>
                                                                        ) : (
                                                                            <SlotBtn onClick={() => {
                                                                                setCanEdit(true)
                                                                                setSlotId(slot.slotTimeID)
                                                                            }}>Edit</SlotBtn>
                                                                        )}
                                                                        {canEdit ? (
                                                                            <SlotBtn onClick={() => setCanEdit(false)}>Cancel</SlotBtn>
                                                                        ) : (
                                                                            <SlotBtn>Delete</SlotBtn>
                                                                        )}
                                                                    </SlotRow>
                                                                )
                                                            })
                                                        }
                                                    </Slots>
                                                </SubRow>
                                            ) : null}
                                        </Row>
                                    )
                                })
                            }
                        </Services>
                    </Collection>
                    <Collection>
                        <CollectionTitle>Car Washing</CollectionTitle>
                        {
                            carWashing.length === 0 ? (
                                <NoAvailable>No Service Available</NoAvailable>
                            ) : null
                        }
                        <Services>
                            {
                                carWashing.map(service => {
                                    return (
                                        <Row>
                                            <SubRow>
                                                <Service
                                                    onClick={() => {
                                                        currentService && currentService.serviceID === service.serviceID ?
                                                            setCurrentService(null)
                                                            : setCurrentService(service)
                                                    }}
                                                >
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
                                                <EditBtn
                                                    onClick={() => {
                                                        setCurrentService(service)
                                                        setWindowVisible(true)
                                                    }}
                                                >Edit</EditBtn>
                                            </SubRow>
                                            {currentService &&
                                                currentService.serviceID === service.serviceID &&
                                                service.slotTimes.length ? (
                                                <SubRow>
                                                    <Slots>
                                                        {
                                                            service.slotTimes.map(slot => {
                                                                return (
                                                                    <SlotRow>
                                                                        {canEdit ? (
                                                                            <Slot>
                                                                                <SlotInput
                                                                                    placeholder='Date'
                                                                                    onChange={e => setSlotDate(e.target.value)}
                                                                                />
                                                                                <SlotInput
                                                                                    placeholder='Start Time'
                                                                                    onChange={e => setSlotStart(e.target.value)}
                                                                                />
                                                                                <SlotInput
                                                                                    placeholder='End Time'
                                                                                    onChange={e => setSlotEnd(e.target.value)}
                                                                                />
                                                                            </Slot>
                                                                        ) : (
                                                                            <Slot>
                                                                                <SlotSpan>Date: {slot.date}</SlotSpan>
                                                                                <SlotSpan>Start Time: {slot.startTime}</SlotSpan>
                                                                                <SlotSpan>End Time: {slot.endTime}</SlotSpan>
                                                                            </Slot>
                                                                        )}
                                                                        {canEdit ? (
                                                                            <SlotBtn onClick={handleSaveSlot}>Save</SlotBtn>
                                                                        ) : (
                                                                            <SlotBtn onClick={() => {
                                                                                setCanEdit(true)
                                                                                setSlotId(slot.slotTimeID)
                                                                            }}>Edit</SlotBtn>
                                                                        )}
                                                                        {canEdit ? (
                                                                            <SlotBtn onClick={() => setCanEdit(false)}>Cancel</SlotBtn>
                                                                        ) : (
                                                                            <SlotBtn>Delete</SlotBtn>
                                                                        )}
                                                                    </SlotRow>
                                                                )
                                                            })
                                                        }
                                                    </Slots>
                                                </SubRow>
                                            ) : null}
                                        </Row>
                                    )
                                })
                            }
                        </Services>
                    </Collection>
                </AllServices>
            </Section>
            {windowVisible ?
                (
                    <ServiceWindow
                        refresh={refresh}
                        setRefresh={setRefresh}
                        setStatus={setStatus}
                        currentService={currentService}
                        setWindowVisible={setWindowVisible}
                    />
                ) : null
            }
        </Container>
    )
}

export default GarageServices