import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #202024;
`;
const Button = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #29292E
`;

export default function Home({ navigation }: any) {
  return (
    <Container>
      <Text>Home</Text>
      <Button>
        <Text onPress={()=> navigation.navigate('Turma')}>
            Ir para tela de turma
        </Text>
      </Button>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202024'
  }
})