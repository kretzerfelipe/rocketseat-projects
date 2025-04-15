import { differenceInSeconds as calculateDifferenceInSeconds } from 'date-fns'
import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'
import { Cycle } from '../@types/globals'
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction
} from '../reducers/cycles/actions'
import { cyclesReducer } from '../reducers/cycles/reducer'

interface CyclesContextInterface {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  setCurrentCycleAsFinished: () => void
  amountSecondsPassed: number
  handleAmountSecondsPassed: (seconds: number) => void
  createNewCicle: (data: CreateCycleData) => void
  handleStopCycle: () => void
}

interface CreateCycleData {
  task: string
  minutesAmount: number
}

export const CyclesContext = createContext({} as CyclesContextInterface)

export function CyclesContextProvider({ children }: { children: ReactNode }) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null
    },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem('@pomodoro-timer:cycles-state-1.0.0')

      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }

      return initialState
    }
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return calculateDifferenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const statetJSON = JSON.stringify(cyclesReducer)

    localStorage.setItem('@pomodoro-timer:cycles-state-1.0.0', statetJSON)
  }, [cyclesState])

  function setCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  function handleAmountSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewCicle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    dispatch(addNewCycleAction(newCycle))

    setAmountSecondsPassed(0)
  }

  function handleStopCycle() {
    dispatch(interruptCurrentCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        setCurrentCycleAsFinished,
        amountSecondsPassed,
        handleAmountSecondsPassed,
        createNewCicle,
        handleStopCycle,
        cycles: cyclesState.cycles
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
