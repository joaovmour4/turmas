import React from "react"
import { ITurma } from "../types/Types"

interface SessionContextData{
    turmas: Array<ITurma>
    setTurmas: Function
    registrarIntegrante: Function
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
    const [turmas, setTurmas] = React.useState<Array<ITurma>>([
        {
            id: 0,
            name: '9º Ano A',
            timeA: [],
            timeB: []
        },
        {
            id: 1,
            name: '9º Ano B',
            timeA: [],
            timeB: []
        },
    ])

    function registrarTurma(name: string){
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
    }

    function registrarIntegrante(turma: ITurma, time: string, name: string){
        const findTurma = turmas.find(arrayElement => arrayElement.id === turma.id)
        if(time === 'timeA'){
            findTurma?.timeA.push(name)
        }else{
            findTurma?.timeB.push(name)
        }
        setTurmas(turmas)
    }

    return(
        <Context.Provider 
            value={{
                turmas, 
                setTurmas,
                registrarIntegrante
            }}>
            {children}
        </Context.Provider>
    )
}

export type { SessionContextData }
export default Context