import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { forwardChain } from '../backend/ForwardChain'

const Container = styled.div`
    background-color: gray;
    padding-left: 3rem;
`

const AllConditions = styled.div``

const Condition = styled.h1``

const Division = styled.section``

const Choice = styled.section``

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
    const [choiceNum, setChoiceNum] = useState(0)
    const [children, setChildren] = useState([])
    const [choicesText, setChoicesText] = useState([])
    const [question, setQuestion] = useState('')
    const [sequence, setSequnce] = useState(0)

    const [decisionTree, setDecisionTree] = useState([])

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

    const addNewChoice = () => {
        setChoiceNum(choiceNum + 1)
        let copy = [...choicesText, {
            choiceText: '',
            nextQuestion: -1
        }]
        setChoicesText(copy)
    }

    const saveQuestion = () => {
        // Call API save question, question gets its ID by default, Sequence
        let copyTree = [...decisionTree, {
            id: sequence,
            questionText: question,
            choices: [...choicesText]
        }]
        setSequnce(sequence + 1)
        setDecisionTree(copyTree)
        setChoiceNum(0)
        setChildren([])
        setChoicesText([])
        setQuestion('')
    }

    useEffect(() => {
        // console.log(JSON.stringify(KB))
        let copy = []
        for (let i = 0; i < choiceNum; i += 1) {
            copy.push(
                <Choice>
                    <Input
                        placeholder='Write Choice'
                        id={i}
                        value={choicesText[i].choiceText}
                        onChange={(e) => {
                            let copyArray = [...choicesText]
                            copyArray[e.target.id] = {
                                choiceText: e.target.value,
                                nextQuestion: copyArray[e.target.id].nextQuestion
                            }
                            setChoicesText(copyArray)
                        }}
                    />
                    <Input
                        placeholder='Next Question'
                        id={i}
                        value={choicesText[i].nextQuestion}
                        onChange={e => {
                            let copyArray = [...choicesText]
                            copyArray[e.target.id] = {
                                choiceText: copyArray[e.target.id].choiceText,
                                nextQuestion: e.target.value
                            }
                            setChoicesText(copyArray)
                        }}
                    />
                </Choice>
            )
        }
        setChildren(copy)
    }, [KB, choicesText, choiceNum])

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

            {/* Build decision tree */}
            <Division style={{ marginTop: "4rem" }}>
                <Input
                    placeholder='Question text'
                    onChange={(e) => setQuestion(e.target.value)}
                    value={question}
                />
                {children}
                <Btn onClick={addNewChoice}>Add choice</Btn>
                <Btn onClick={saveQuestion}>Save Question</Btn>
            </Division>

            <Division>
                {
                    choicesText.map(choice => {
                        return (
                            <div>
                                {choice.choiceText} : {choice.nextQuestion}
                            </div>
                        )
                    })
                }
            </Division>

            {/* Display All Questions */}
            <Division style={{ border: '3px solid red', marginTop: '2rem' }}>
                {
                    decisionTree.map(question => {
                        return (
                            <div>
                                <p>id: {question.id}</p>
                                <p>text: {question.questionText}</p>
                                <p>
                                    choices: {
                                        question.choices.map(choice => {
                                            return (
                                                <div>
                                                    <p>choiceText: {choice.choiceText}</p>
                                                    <p>next Q: {choice.nextQuestion}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </p>
                            </div>
                        )
                    })
                }
            </Division>
        </Container>
    )
}

export default ExpertSystem