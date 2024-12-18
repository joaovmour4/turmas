import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
    flex-direction: row;
    gap: 3px;
    height: 54px;
    background-color: #29292E;
`
const Icon = styled.Image`
    height: 24;
`

interface Props {
    personName: string
}

export default function PersonCard(props: Props) {
  return (
    <Container>
        <Icon source={require('../../assets/images/person.png')} />
        <Text>{props.personName}</Text>
    </Container>
  )
}