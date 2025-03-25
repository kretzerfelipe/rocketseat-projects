import { createContext, ReactNode, useState } from 'react'
import { Cycle } from '../@types/globals'

interface CyclesContextInterface {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  setCurrentCycleAsFinished: () => void
  amountSecondsPassed: number
  handleAmountSecondsPassed: (seconds: number) => void
  createNewCicle: (data: CreateCycleData) => void
  handleStopCycle: () => void;
}

interface CreateCycleData {
  task: string;
  minutesAmount: number
}

export const CyclesContext = createContext({} as CyclesContextInterface)

export function CyclesContextProvider({children}: {children: ReactNode}) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      })
    )

    setActiveCycleId(null)
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

    setCycles((lastState) => [...lastState, newCycle])
    setActiveCycleId(newCycle.id)
    setAmountSecondsPassed(0)
  }

  function handleStopCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      })
    )

    setActiveCycleId(null)
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
        cycles
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
