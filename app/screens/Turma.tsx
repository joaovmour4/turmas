import { StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import React from 'react'
import { ITurma } from '../types/Types'
import styled from 'styled-components/native'
import { useSession } from '../contexts/SessionContext'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const View = styled.View`
  background-color: #202024;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 30px;
`;
const Tytle = styled.Text`
  color: white;
  font-family: roboto;
  font-size: 24px;
  font-weight: 700;
`
const Description = styled.Text`
  font-family: roboto;
  font-weight: 400;
  font-size: 16px;
  color: #7C7C8A;
`
const Header = styled.View`
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px 0 20px;
  gap: 10px;
  width: 100%;
`
const RemoveTurma = styled.TouchableOpacity`
  align-self: stretch;
  height: 56px;
  background-color: #AA2834;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`
const Text = styled.Text`
  color: white;
`
const Container = styled.View`
  width: 100%;
  flex-grow: 1;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  gap: 10px;
`
const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  color: white;
  height: 56px;
  background-color: #121214;
  padding-left: 20px;
  border-radius: 6px;
`
const Input = styled.TextInput`
  flex: 1;
`
const AddIcon = styled.Image`
  height: 24px;
  width: 24px;
  margin-right: 10px;
`
export default function Turma() {
  const route = useRoute()
  const { turmas, setTurmas, registrarIntegrante } = useSession()
  const { turma } = route.params as { turma: ITurma }
  const [text, setText] = React.useState('')
  return (
    <View>
      <Header>
        <Tytle>Turma {turma.name}</Tytle>
        <Description>adicione a galera e separe os times</Description>
      </Header>
      <Container>
        <InputContainer>
          <Input 
            value={text}
            placeholder='Nome do participante'
            placeholderTextColor={'#7C7C8A'}
            onChangeText={setText}
          />
          <TouchableOpacity
            onPress={()=> registrarIntegrante()}
          >
            <AddIcon 
              source={require('../../assets/images/add-icon.png')}
            />
          </TouchableOpacity>
        </InputContainer>
      </Container>
      <RemoveTurma>
        <Text>
          Remover Turma
        </Text>
      </RemoveTurma>
    </View>
  )
}

const styles = StyleSheet.create({})