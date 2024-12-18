import { StyleSheet } from 'react-native'
import React from 'react'
import { useSession } from '../contexts/SessionContext'
import styled from 'styled-components/native'
import { ITurma } from '../types/Types'

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #202024;
  padding: 0 20px 0 20px;
  gap: 30px;
`
const Image = styled.Image`
`
const TitleContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-family: Roboto;
  font-weight: 700;
  font-size: 24px;
  color: #FFFFFF;
`
const Description = styled.Text`
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  color: #7C7C8A;
`
const FormContainer = styled.View`
  width: 100%;
  gap: 15px;
`
const InputContainer = styled.View`
  flex-direction: row;  
  gap: 20px;
`
const Input = styled.TextInput`
  flex: 1;
  color: white;
  height: 56px;
  background-color: #121214;
  padding-left: 20px;
  border-radius: 6px;
`
const Criar = styled.TouchableOpacity`
  align-self: stretch;
  height: 56px;
  background-color: #00875F;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`
const Text = styled.Text`
  color: white;
`


export default function CreateTurma({ navigation }: any) {
  const { setTurmas, registrarTurma } = useSession()
  const [text, setText] = React.useState('')

  const classHandler = () => {
    if(!text.length)
      return null
    setTurmas((prevTurmas: Array<ITurma>) => {
      return (
        [...prevTurmas,
          {
            id: prevTurmas.length,
            name: text,
            timeA: [],
            timeB: []
          }
        ]
      )
    })
  }

  return (
    <Container>
      <Image 
        source={require('../../assets/images/group-icon.png')}
      />
      <TitleContainer>
        <Title>Nova Turma</Title>
        <Description>crie uma turma para adicionar pessoas</Description>
      </TitleContainer>
      <FormContainer>
        <InputContainer>
          <Input 
            value={text}
            placeholder='Nome da turma'
            placeholderTextColor={'#7C7C8A'}
            onChangeText={setText}
          />
        </InputContainer>
        <Criar onPress={()=> {
          registrarTurma(text, navigation)
        }}>
          <Text>Criar</Text>
        </Criar>
      </FormContainer>
    </Container>
  )
}