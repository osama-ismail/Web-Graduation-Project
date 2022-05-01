import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { forwardChain } from '../../../backend/ForwardChain'
import axios from 'axios'

const Container = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-grow: 1;
    margin: 0 2rem;
    transform: translateY(-5rem);
`

const MainSection = styled.section`
    flex: 1;
    border: 5px solid rgb(210, 210, 210, 0.8);
    border-radius: 40px;
    border-top: none;
    background-color: gray;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.2rem;
`

const SectionTitle = styled.h1`
    text-align: center;
    text-transform: uppercase;
`

const KnowledgeForm = styled.div`
    margin-top: 1rem;
`

const Inputs = styled.div`
    display: flex;
    margin: 15px 0;
`

const Cover = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0.3rem;
`

const Label = styled.label`
    font-size: 110%;
    font-weight: bold;
    color: #ddd;
`

const Input = styled.input`
    background-color: #1a1a1a;
    border: 2px solid #1a1a1a;
    outline: none;
    padding: 4px 7px;
    border-radius: 3px;
    margin-left: 8px;
    color: white;
    font-size: 110%;
    width: 12rem;
    transition: 300ms;

    &:focus {
        border: 2px solid rgb(190, 18, 48);
    }
`

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ButtonGroup = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const Btn = styled.button`
    margin: 5px 1rem;
    border-radius: 4px;
    width: 10rem;
    background-color: rgb(190, 18, 48);
    border: none;
    color: white;
    cursor: pointer;
    padding: 4px 10px;
    transition: 300ms;
    font-size: 105%;

    &:hover {
        background-color: #0a0a0a;
        color: rgb(210, 210, 210);
    }
`

const SelectedRule = styled.section`
    background-color: #1a1a1a;
    margin: 0.5rem;
    padding: 0.4rem 0.8rem;
    color: #a0a0a0;
    border-radius: 5px;
`

const InnerTitle = styled.h2``

const RulePremises = styled.div``

const Premise = styled.h4`
    display: flex;
    flex-direction: column;
    color: rgb(190, 18, 48);
    transition: 300ms;
    cursor: pointer;

    &:hover {
        background-color: #777;
    }
`

const RuleConclusion = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.4rem 0;
    cursor: pointer;
    transition: 300ms;

    &:hover {
        background-color: #777;
    }
`

const Info = styled.span`
    color: rgb(190, 18, 48);
    margin-left: 5px;
`

const DB = styled.div`
    padding: 0 0.5rem;
    margin: 0.5rem 0;
`

const Rule = styled.div`
    background-color: #2a2a2a;
    padding: 0.4rem;
    border-radius: 5px;
    margin: 0.5rem 0;
    display: flex;
    flex-direction: column;
    transition: 300ms;
    cursor: pointer;

    &:hover {
        background-color: #444;
    }
`

const AllPremises = styled.div`
    color: #ddd;
    margin-top: 0.5rem;
`

const AllConclusions = styled.div`
    color: #ddd;
    margin-top: 0.5rem;
`

const Span = styled.span`
    font-size: 120%;
    font-weight: bold;
    color: rgb(190, 180, 48);
    margin: 0.4rem;
`

const Division = styled.section``

const Question = styled.div`
    background-color: #222;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    transition: 300ms;
    margin: 0.3rem;

    &:hover {
        background-color: #444;
    }
`

const ChoicesDiv = styled.div``

const Choice = styled.section`
    margin: 0.3rem 0;
`

const ExpertSystem = () => {

    // Knowledge-Base States
    const [counter, setCounter] = useState(0)
    const [selectedRuleId, setSelectedRuleId] = useState(-1)
    const [conditions, setConditions] = useState([])

    // Decision Tree States
    const [choiceNum, setChoiceNum] = useState(0)
    const [choicesText, setChoicesText] = useState([])
    const [question, setQuestion] = useState('')
    const [questionId, setQuestionId] = useState(-1)
    const [sequence, setSequnce] = useState(0)
    const [children, setChildren] = useState([])
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

    const handleClickInConclusion = (conclusion) => {
        setAttribute(conclusion.attribute)
        setValue(conclusion.value)
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
        // Send Assertions
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
            let index = -1
            for (let i = 0; i < copyTree.length; i += 1) {
                if (copyTree[i].id === questionId) {
                    index = i
                }
            }
            copyTree[index].questionText = question
            copyTree[index].choices = [...choicesText]
            // Update the object in DB
            axios.post(
                `http://localhost:8080/updateQuestion/${questionId}`,
                JSON.stringify({
                    questionText: question,
                    choices: [...choicesText]
                }),
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Accept": "application/json"
                    }
                }
            ).then(response => alert('Question Updated'))
        } else {
            let newQuestion = {
                questionText: question,
                choices: [...choicesText]
            }
            copyTree.push(newQuestion)
            setSequnce(sequence + 1)
            // Add the object to DB
            axios.post(
                `http://localhost:8080/addQuestion/`,
                JSON.stringify(newQuestion),
                {
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Accept": "application/json"
                    }
                }
            ).then(response => alert('New Question Added'))
        }
        setDecisionTree(copyTree)
        setChoiceNum(0)
        setChildren([])
        setChoicesText([])
        setQuestion('')
        setQuestionId(-1)
    }

    const handleEdit = (id) => {
        let question = undefined
        for (let i = 0; i < decisionTree.length; i += 1) {
            if (decisionTree[i].id === id) {
                question = decisionTree[i]
            }
        }
        setQuestionId(id)
        setChoiceNum(question.choices.length)
        setChoicesText(question.choices)
        setQuestion(question.questionText)
    }

    const handleChoose = (id) => {
        setChosenQuestionId(id)
    }

    useEffect(() => {
        console.log('KB = ')
        console.log(KB)
    }, [KB])

    useEffect(() => {
        console.log('DT = ')
        console.log(decisionTree)
    }, [decisionTree])

    // Get data from DB
    useEffect(() => {
        // Get Knowledge-Base
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

        // Get Decision-Tree
        axios.get(`http://localhost:8080/getAllQuestions`).then(response => {
            let temp = []
            response.data.map(row => {
                let getQuestion = JSON.parse(row.question)
                let obj = {
                    id: row.id,
                    questionText: getQuestion.questionText,
                    choices: [...getQuestion.choices]
                }
                temp.push(obj)
            })
            setDecisionTree(temp)
        })
    }, [])

    useEffect(() => {
        // console.log(JSON.stringify(KB))
        let copy = []
        for (let i = 0; i < choiceNum; i += 1) {
            copy.push(
                <Choice>
                    <Inputs>
                        <Cover>
                            <Label>Choice</Label>
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
                        </Cover>

                        <Cover>
                            <Label>Next Question ID</Label>
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
                        </Cover>
                    </Inputs>
                </Choice>
            )
        }
        setChildren(copy)
    }, [KB, choicesText, choiceNum])


    return (
        <Container>
            {/* Knowledge Base System */}
            <MainSection>
                <SectionTitle>Knowledge Base System</SectionTitle>
                <KnowledgeForm>
                    <Inputs>
                        <Cover>
                            <Label>Attribute</Label>
                            <Input
                                onChange={(e) => setAttribute(e.target.value)}
                                placeholder='Add attribute'
                                value={attribute}
                            />
                        </Cover>
                        <Cover>
                            <Label>Value</Label>
                            <Input
                                onChange={(e) => setValue(e.target.value)}
                                placeholder='Add value'
                                value={value}
                            />
                        </Cover>
                    </Inputs>

                    <Buttons>
                        <ButtonGroup>
                            <Btn onClick={addCondition}>Add Premise</Btn>
                            <Btn onClick={editCondition}>Edit Premise</Btn>
                            <Btn onClick={deleteCondition}>Delete Premise</Btn>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Btn onClick={addConclusion}>Add Conclusion</Btn>
                            <Btn onClick={editConclusion}>Edit conclusion</Btn>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Btn onClick={cancel}>Unselect Rule</Btn>
                            <Btn onClick={save}>Save Rule</Btn>
                        </ButtonGroup>
                    </Buttons>
                </KnowledgeForm>

                <SelectedRule>
                    <Span>Selected Rule Id: {selectedRuleId > 0 ? selectedRuleId : 'None'}</Span>
                    <RulePremises>
                        <InnerTitle>Selected Rule Premises</InnerTitle>
                        {conditions.map((condition, index) => {
                            return (
                                <Premise
                                    id={index}
                                    onClick={e => handleClickOnCondition(e, condition)}
                                >
                                    {condition.attribute}: {condition.value}
                                </Premise>
                            )
                        })}
                    </RulePremises>
                    <InnerTitle>Selected Rule Conclusion</InnerTitle>
                    <RuleConclusion onClick={() => handleClickInConclusion(rule.conclusion)}>
                        <Cover>
                            <Label>Attribute:</Label>
                            <Info>{rule.conclusion.attribute}</Info>
                        </Cover>
                        <Cover>
                            <Label>Value:</Label>
                            <Info>{rule.conclusion.value}</Info>
                        </Cover>
                    </RuleConclusion>
                </SelectedRule>

                {/* Show All Rules */}
                <DB>
                    <InnerTitle>All Rules</InnerTitle>
                    {
                        KB ? KB.map(rule => {
                            return (
                                <Rule onClick={() => {
                                    setConditions(rule.premises)
                                    setSelectedRuleId(rule.id)
                                    setRule(rule)
                                }}>
                                    <Cover>
                                        <Label>Rule Id:</Label>
                                        <Info>{rule.id}</Info>
                                    </Cover>
                                    <AllPremises>
                                        <InnerTitle>Rule Premises</InnerTitle>
                                        {
                                            rule.premises.map(premise => {
                                                return (
                                                    <div>
                                                        <Cover>
                                                            <Label>Attribule:</Label>
                                                            <Info>{premise.attribute}</Info>
                                                        </Cover>
                                                        <Cover>
                                                            <Label>Value:</Label>
                                                            <Info>{premise.value}</Info>
                                                        </Cover>
                                                    </div>
                                                )
                                            })
                                        }
                                    </AllPremises>

                                    <AllConclusions>
                                        <InnerTitle>Rule Conlcusion</InnerTitle>
                                        <Cover>
                                            <Label>Attribute:</Label>
                                            <Info>{rule.conclusion.attribute}</Info>
                                        </Cover>
                                        <Cover>
                                            <Label>Value:</Label>
                                            <Info>{rule.conclusion.value}</Info>
                                        </Cover>
                                    </AllConclusions>
                                </Rule>
                            )
                        })
                            : null}
                </DB>
            </MainSection>


            {/* Decision Tree System */}
            <MainSection>
                <SectionTitle>Questions and taking decision system</SectionTitle>

                <Division>
                    <Span>Selected question ID = {chosenQuestionId}</Span>
                    <Inputs>
                        <Cover>
                            <Label>Question Text</Label>
                            <Input
                                placeholder='Question text'
                                onChange={(e) => setQuestion(e.target.value)}
                                value={question}
                            />
                        </Cover>
                    </Inputs>
                    {children}
                    <Buttons>
                        <ButtonGroup>
                            <Btn onClick={addNewChoice}>Add choice</Btn>
                            <Btn onClick={saveQuestion}>Save Question</Btn>
                        </ButtonGroup>
                    </Buttons>
                </Division>

                {/* Display All Questions */}
                <Division>
                    <InnerTitle>All Questions</InnerTitle>
                    {
                        decisionTree.map(question => {
                            return (
                                <Question>
                                    <Cover>
                                        <Label>Question ID:</Label>
                                        <Info>{question.id}</Info>
                                    </Cover>
                                    <Cover>
                                        <Label>text:</Label>
                                        <Info>{question.questionText}</Info>
                                    </Cover>

                                    <InnerTitle>Question Choices</InnerTitle>
                                    <ChoicesDiv>
                                        {
                                            question.choices.map(choice => {
                                                return (
                                                    <Choice>
                                                        <Cover>
                                                            <Label>Choice Text:</Label>
                                                            <Info>{choice.choiceText}</Info>
                                                        </Cover>
                                                        <Cover>
                                                            <Label>Next Question ID:</Label>
                                                            <Info>{choice.nextQuestion}</Info>
                                                        </Cover>
                                                    </Choice>
                                                )
                                            })
                                        }
                                    </ChoicesDiv>
                                    <Buttons>
                                        <ButtonGroup>
                                            <Btn onClick={() => handleEdit(question.id)}>Edit</Btn>
                                            <Btn onClick={() => handleChoose(question.id)}>Choose</Btn>
                                        </ButtonGroup>
                                    </Buttons>
                                </Question>
                            )
                        })
                    }
                </Division>
            </MainSection>


            {/* Copy this line to mobile app */}
            {/* <Btn onClick={matching}>Run Algorithm</Btn> */}


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