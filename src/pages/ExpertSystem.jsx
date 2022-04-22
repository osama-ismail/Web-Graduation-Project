import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { forwardChain } from '../backend/ForwardChain'

const Container = styled.div`
    background-color: gray;
`

const AllConditions = styled.div``

const Condition = styled.h1``

const Division = styled.section``

const Input = styled.input``

const Btn = styled.button``

const ExpertSystem = () => {

    const conditionsArray = [
        {
            attribute: 'car type',
            value: 'Range Rover'
        },
        {
            attribute: 'Battery State',
            value: 'Bad'
        },
    ]

    const [counter, setCounter] = useState(0)
    const [conditions, setConditions] = useState([])

    const [KB, setKB] = useState([{
        premises: [{
            attribute: 'Car type',
            value: 'BMW'
        },
        {
            attribute: 'Oil light',
            value: 'off'
        },
        {
            attribute: 'Temperature',
            value: 112
        }],
        conclusion: { attribute: 'Electrical', value: 'Battery is hot' }
    },
    {
        premises: [{
            attribute: 'Car type',
            value: 'Fyat'
        },
        {
            attribute: 'Oil light',
            value: 'on'
        },
        {
            attribute: 'Temperature',
            value: 112
        }],
        conclusion: { attribute: 'Maintenace', value: 'Motor is defective' }
    },
    {
        premises: [{
            attribute: 'Maintenace',
            value: 'Motor is defective'
        }],
        conclusion: { attribute: 'Reason', value: 'More power on motor could harm it' }
    },
    {
        premises: [{
            attribute: 'Reason',
            value: 'More power on motor could harm it'
        }],
        conclusion: { attribute: 'Solution', value: 'Change the outer seat' }
    }
    ])

    const [rule, setRule] = useState({
        premises: [...conditions],
        conclusion: { attribute: '', value: '' }
    })
    const [attribute, setAttribute] = useState('')
    const [value, setValue] = useState('')

    const handleClickOnCondition = (e, obj) => {
        setCounter(e.target.id)
        setAttribute(obj.attribute)
        setValue(obj.value)
    }

    const addCondition = () => {
        setConditions([...conditions, {
            attribute: attribute,
            value: value
        }])
        setAttribute('')
        setValue('')
    }

    const editCondition = () => {
        let copy = [...conditions]
        copy[counter].attribute = attribute
        copy[counter].value = value
        setConditions(copy)
        setRule({
            premises: [...conditions],
            conclusion: rule.conclusion
        })
        setAttribute('')
        setValue('')
    }

    const addConclusion = () => {
        setRule({
            premises: [...conditions],
            conclusion: { attribute: attribute, value: value }
        })
        setAttribute('')
        setValue('')
    }

    const save = () => {
        // Call API
        // let string = JSON.stringify(rule)
        // console.log(string)
        // console.log(JSON.parse(string))
        setKB([...KB, rule])
        setConditions([])
        setAttribute('')
        setValue('')
        setRule({
            premises: [],
            conclusion: { attribute: '', value: '' }
        })
    }

    const matching = () => {
        let response = forwardChain(KB, [{
            attribute: 'Car type',
            value: 'Fyat'
        },
        {
            attribute: 'Oil light',
            value: 'on'
        },
        {
            attribute: 'Temperature',
            value: 112
        }])
        console.log("Response = ")
        console.log(response)
    }

    useEffect(() => {
        // console.log(JSON.stringify(KB))
    }, [KB])

    return (
        <Container>
            Click on one to edit
            <AllConditions>
                {
                    conditions.map((condition, index) => {
                        return (
                            <Condition
                                id={index}
                                onClick={(e) => handleClickOnCondition(e, condition)}
                            >
                                {condition.attribute}:{condition.value}
                            </Condition>
                        )
                    })
                }
            </AllConditions>
            <Division>
                <Input
                    onChange={(e) => setAttribute(e.target.value)}
                    placeholder='Add attribute'
                    value={attribute}
                />
                <Input
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='Add value'
                    value={value}
                />
                <Btn onClick={addCondition}>Add condition</Btn>
                <Btn onClick={addConclusion}>Add conclusion</Btn>
                <Btn onClick={editCondition}>Edit the condition</Btn>
                <Btn onClick={save}>Save Rule</Btn>
                <p>{rule.conclusion.attribute}:{rule.conclusion.value}</p>
                <p>{rule.premises.map(condition => {
                    return (
                        <div>
                            <p>attribute: {condition.attribute}</p>
                            <p>value: {condition.value}</p>
                        </div>
                    )
                })}</p>
            </Division>
            <p>Counter = {counter}</p>
            <Btn onClick={matching}>Run Algorithm</Btn>
        </Container>
    )
}

export default ExpertSystem