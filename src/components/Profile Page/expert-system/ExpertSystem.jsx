import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { forwardChain } from '../../../backend/ForwardChain'
import axios from 'axios'

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

const Rule = styled.div`
    border: 1px solid red;
    margin: 10px 0;
`

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
    const [selectedRuleId, setSelectedRuleId] = useState(-1)
    const [conditions, setConditions] = useState([])
    const [choiceNum, setChoiceNum] = useState(0)
    const [children, setChildren] = useState([])
    const [choicesText, setChoicesText] = useState([])
    const [question, setQuestion] = useState('')
    const [sequence, setSequnce] = useState(0)
    const [questionId, setQuestionId] = useState(-1)
    const [chosenQuestionId, setChosenQuestionId] = useState(-1)
    const [nextId, setNextId] = useState(0)
    const [assertions, setAssertions] = useState([])

    const [decisionTree, setDecisionTree] = useState([])

    // const [KB, setKB] = useState([{
    //     premises: [{
    //         attribute: 'Car type',
    //         value: 'BMW'
    //     },
    //     {
    //         attribute: 'Oil light',
    //         value: 'off'
    //     },
    //     {
    //         attribute: 'Temperature',
    //         value: 112
    //     }],
    //     conclusion: { attribute: 'Electrical', value: 'Battery is hot' }
    // },
    // {
    //     premises: [{
    //         attribute: 'Car type',
    //         value: 'Fyat'
    //     },
    //     {
    //         attribute: 'Oil light',
    //         value: 'on'
    //     },
    //     {
    //         attribute: 'Temperature',
    //         value: 112
    //     }],
    //     conclusion: { attribute: 'Maintenace', value: 'Motor is defective' }
    // },
    // {
    //     premises: [{
    //         attribute: 'Maintenace',
    //         value: 'Motor is defective'
    //     }],
    //     conclusion: { attribute: 'Reason', value: 'More power on motor could harm it' }
    // },
    // {
    //     premises: [{
    //         attribute: 'Reason',
    //         value: 'More power on motor could harm it'
    //     }],
    //     conclusion: { attribute: 'Solution', value: 'Change the outer seat' }
    // }
    // ])

    const [KB, setKB] = useState([])

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

    const deleteCondition = () => {
        let copy = [...conditions]
        copy.splice(counter, 1)
        setConditions(copy)
        setRule({
            premises: [...copy],
            conclusion: rule.conclusion
        })
        setAttribute('')
        setValue('')
    }

    const editConclusion = () => {
        let copy = [...KB]
        for (let i = 0; i < copy.length; i += 1) {
            if (copy[i].id === selectedRuleId) {
                copy[i].conclusion.attribute = attribute
                copy[i].conclusion.value = value
            }
        }
        setKB(copy)
    }

    const addConclusion = () => {
        setRule({
            premises: [...conditions],
            conclusion: { attribute: attribute, value: value }
        })
        setAttribute('')
        setValue('')
    }

    const cancel = () => {
        setConditions([])
        setAttribute('')
        setValue('')
        setRule({
            premises: [],
            conclusion: { attribute: '', value: '' }
        })
        setSelectedRuleId(-1)
    }

    useEffect(() => {
        console.log(KB)
    }, [KB])

    const save = () => {
        // Call API
        // let string = JSON.stringify(rule)
        // console.log(string)
        // console.log(JSON.parse(string))
        setConditions([])
        setAttribute('')
        setValue('')
        setRule({
            premises: [],
            conclusion: { attribute: '', value: '' }
        })

        if (selectedRuleId < 0) {
            setKB([...KB, rule])
            axios.post(
                `http://localhost:8080/addRule/`,
                JSON.stringify(rule),
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Accept": "application/json"
                    }
                }
            ).then(response => alert('New Rule Added'))
        } else {
            let copy = [...KB]
            for (let i = 0; i < copy.length; i += 1) {
                if (copy[i].id === selectedRuleId) {
                    copy[i].premises = [...conditions]
                    copy[i].conclusion = rule.conclusion
                }
            }
            setKB(copy)
            setSelectedRuleId(-1)
            axios.post(
                `http://localhost:8080/updateKB/${selectedRuleId}`,
                JSON.stringify(rule),
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Accept": "application/json"
                    }
                }
            ).then(response => {
                alert('Rule Updated')
                setSelectedRuleId(-1)
            })
        }
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
        let copyTree = [...decisionTree]
        let exist = copyTree.some(question => {
            return questionId == question.id
        })
        if (exist) {
            copyTree[questionId].questionText = question
            copyTree[questionId].choices = [...choicesText]
        } else {
            copyTree.push({
                id: sequence,
                questionText: question,
                choices: [...choicesText]
            })
            setSequnce(sequence + 1)
        }
        setDecisionTree(copyTree)
        setChoiceNum(0)
        setChildren([])
        setChoicesText([])
        setQuestion('')
        setQuestionId(-1)
    }

    const handleEdit = (id) => {
        let question = decisionTree[id]
        setQuestionId(id)
        setChoiceNum(question.choices.length)
        setChoicesText(question.choices)
        setQuestion(question.questionText)
    }

    const handleChoose = (id) => {
        setChosenQuestionId(id)
    }

    // Get KB from DB
    useEffect(() => {
        axios.get(`http://localhost:8080/gatAllKB/`).then(response => {
            let temp = []
            response.data.map(row => {
                let getRule = JSON.parse(row.rule)
                let obj = {
                    id: row.id,
                    premises: getRule.premises,
                    conclusion: getRule.conclusion
                }
                temp.push(obj)
            })
            setKB(temp)
            // console.log(temp)
            // console.log(response.data)
        })
    }, [])

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
                <Btn onClick={editCondition}>Edit the condition</Btn>
                <Btn onClick={deleteCondition}>Delete the condition</Btn>
                <Btn onClick={addConclusion}>Add conclusion</Btn>
                <Btn onClick={editConclusion}>Edit conclusion</Btn>
                <Btn onClick={save}>Save Rule</Btn>
                <Btn onClick={cancel}>Cancel Selection on Rule</Btn>
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
            <p>Selected Rule = {selectedRuleId}</p>
            <p>Selected Condition = {counter}</p>

            {/* Show All Rules */}
            <Division>
                {
                    KB ? KB.map(rule => {
                        return (
                            <Rule onClick={() => {
                                setConditions(rule.premises)
                                setSelectedRuleId(rule.id)
                                setRule(rule)
                            }}>
                                <p>{rule.id}</p>
                                {
                                    rule.premises.map(premise => {
                                        return (
                                            <p>{premise.attribute}:{premise.value}</p>
                                        )
                                    })
                                }
                                <p>{rule.conclusion.attribute}:{rule.conclusion.value}</p>
                            </Rule>
                        )
                    })
                        : null}
            </Division>

            {/* <Btn onClick={matching}>Run Algorithm</Btn> */}


            {/* Build decision tree */}
            {/* <Division style={{ marginTop: "4rem" }}>
                <p>You have chosen question has id = {chosenQuestionId}</p>
                <Input
                    placeholder='Question text'
                    onChange={(e) => setQuestion(e.target.value)}
                    value={question}
                />
                {children}
                <Btn onClick={addNewChoice}>Add choice</Btn>
                <Btn onClick={saveQuestion}>Save Question</Btn>
            </Division> */}

            {/* <Division>
                {
                    choicesText.map(choice => {
                        return (
                            <div>
                                {choice.choiceText} : {choice.nextQuestion}
                            </div>
                        )
                    })
                }
            </Division> */}

            <Division style={{ backgroundColor: '#ddd', marginTop: '2rem' }}>

            </Division>

            {/* Display All Questions */}
            {/* <Division style={{ marginTop: '2rem' }}>
                {
                    decisionTree.map(question => {
                        return (
                            <div style={{ border: '2px solid orange' }}>
                                <Btn onClick={() => handleEdit(question.id)}>Edit</Btn>
                                <Btn onClick={() => handleChoose(question.id)}>Choose</Btn>
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
            </Division> */}

            {/* User Interface */}
            {/* {decisionTree.length != 0 && nextId > -1 ? (
                <Division style={{ border: '2px solid green', marginTop: '1rem' }}>
                    <p>{decisionTree[nextId].questionText}</p>
                    {
                        decisionTree[nextId].choices.map(choice => {
                            return (
                                <Btn onClick={() => {
                                    setNextId(choice.nextQuestion)
                                    let assertionsCopy = [...assertions]
                                    assertionsCopy.push({
                                        attribute: decisionTree[nextId].questionText,
                                        value: choice.choiceText
                                    })
                                    console.log(assertionsCopy)
                                    setAssertions(assertionsCopy)
                                }}>
                                    {choice.choiceText}
                                </Btn>
                            )
                        })
                    }
                </Division>
            ) : null} */}
        </Container>
    )
}

export default ExpertSystem