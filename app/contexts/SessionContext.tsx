import React from "react"
import { ITurma } from "../types/Types"

interface SessionContextData{
    turmas: Array<ITurma>
    setTurmas: Function
    registrarIntegrante: Function
    registrarTurma: Function
    removerIntegrante: Function
    removerTurma: Function
}
interface props{
    children: React.ReactNode
}

const Context = React.createContext<SessionContextData>({} as SessionContextData)

export function useSession(){
    const context = React.useContext(Context)

    return context
}

export const SessionProvider: React.FC<props> = ({ children }: props) => {
    const [turmas, setTurmas] = React.useState<Array<ITurma>>([])

    function registrarTurma(name: string, navigation: any){
        setTurmas((prevTurmas: Array<ITurma>) => {
            return (
                [...prevTurmas,
                    {
                        id: turmas.length,
                        name: name,
                        timeA: [],
                        timeB: []
                    }
                ]
            )
        })
        navigation.goBack()
    }

    function registrarIntegrante(turma: ITurma, time: string, name: string){
        if(!name.length)
            return null
        setTurmas((prevTurmas: Array<ITurma>) =>
            prevTurmas.map((item) =>
              item.id === turma.id
                ? (time === 'timeA' ? { ...item, timeA: [...item.timeA, name] } : { ...item, timeB: [...item.timeB, name] }) 
                : item
            )
        );
    }
    function removerIntegrante(turma: ITurma, time: string, name: string){
        setTurmas((prevTurmas: Array<ITurma>) =>
            prevTurmas.map((item) =>
                item.id === turma.id
                  ? time === 'timeA'
                    ? { ...item, timeA: item.timeA.filter((player) => player !== name) }
                    : { ...item, timeB: item.timeB.filter((player) => player !== name) }
                  : item
            )
        );
    }
    function removerTurma(turma: ITurma, navigation: any){
        setTurmas((prevTurmas: Array<ITurma>) => {
            return (
                prevTurmas.filter(arrTurma => arrTurma.id !== turma.id)
            )
        })
        navigation.goBack()
    }

    return(
        <Context.Provider 
            value={{
                turmas, 
                setTurmas,
                registrarIntegrante,
                registrarTurma,
                removerIntegrante,
                removerTurma
            }}>
            {children}
        </Context.Provider>
    )
}

export type { SessionContextData }
export default Context