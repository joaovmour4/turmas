import React from 'react'
import styled, { css } from 'styled-components/native'
import { ITurma } from '../types/Types';
import { useSession } from '../contexts/SessionContext';

const View = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #202024;
  padding: 0 0 30px;
`
const Container = styled.View<{ $primary?: boolean; }>`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 30px; 
  ${props => props.$primary && css`
      flex-grow: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
      gap: 10px;
      width: 100%;
    `
  }
`;
const ListContainer = styled.View`
  width: 100%;
  flex-grow: 1;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
  gap: 10px;
`
const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color: #29292E;
  height: 96px;
  border-radius: 6px;
  gap: 15px;
  padding-left: 15px
`;
const ImageButton = styled.Image`
`
const CreateTurma = styled.TouchableOpacity`
  align-self: stretch;
  height: 56px;
  background-color: #00875F;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`
const Text = styled.Text<{ $primary?: boolean; }>`
  color: white;

  ${props => props.$primary && css`
      font-family: roboto;
      font-size: 24px;
      font-weight: 700;
    `
  }
`
const Description = styled.Text`
  font-family: roboto;
  font-weight: 400;
  font-size: 16px;
  color: #7C7C8A;
`
const Logo = styled.Image`
  height: 55px;
  width: 46px;
`

export default function Home({ navigation }: any) {

  const { turmas, setTurmas } = useSession()

  const handleNavigate = (id: number) => {
    navigation.navigate('Turma', { id })
  }

  return (
    <View>
      <Container $primary>
        <Logo source={require('../../assets/images/logo.png')} />
        <Text $primary>Turmas</Text>
        <Description>jogue com a sua turma</Description>
      </Container>
      <ListContainer>
        {turmas.map(turma => {
          return(
            <Button key={turma.name} onPress={()=> handleNavigate(turma.id)}>
              <ImageButton 
                source={require('../../assets/images/image-turma.png')}
              />
              <Text>
                {turma.name}
              </Text>
            </Button>
          )
        })}
      </ListContainer>
      <Container $primary>
        <CreateTurma onPress={()=> navigation.navigate('Nova Turma')}>
          <Text>
            Criar Nova Turma
          </Text>
        </CreateTurma>
      </Container>
    </View>
  )
}