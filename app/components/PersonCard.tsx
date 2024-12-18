import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { useSession } from '../contexts/SessionContext'
import { ITurma } from '../types/Types'

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 10px 0 10px;
  gap: 15px;
  height: 54px;
  background-color: #29292E;
`
const Icon = styled.Image`
    height: 24px;
`
const Name = styled.Text`
  color: #C4C4CC;
  flex: 1;
`
const X = styled.Image`

`

interface Props {
    turma: ITurma
    time: string
    personName: string
}

export default function PersonCard(props: Props) {
  const { removerIntegrante } = useSession()
  return (
    <Container>
        <Icon source={require('../../assets/images/person.png')} />
        <Name>{props.personName}</Name>
        <TouchableOpacity onPress={()=> removerIntegrante(props.turma, props.time, props.personName)}>
          <X
            source={require('../../assets/images/x.png')}
          />
        </TouchableOpacity>
    </Container>
  )
}