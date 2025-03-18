import { Pause, Play } from 'phosphor-react'
import { createContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { CountDown } from './components/count-down'
import { NewCycleForm } from './components/new-cycle-form'
import { HomeContainer } from './styles'
import { Cycle, NewCicleFormData } from '../../@types/globals'
import { Button } from '../../components/button/styles'

interface CyclesContextInterface {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  setCurrentCycleAsFinished: () => void
  amountSecondsPassed: number
  handleAmountSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext({} as CyclesContextInterface)

export default function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const newCycleForm = useForm<NewCicleFormData>({
    defaultValues: {
      task: '',
      minutesAmount: 5
    }
  })

  const { handleSubmit, watch, reset } = newCycleForm

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
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function handleCreateNewCicle(data: NewCicleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    setCycles((lastState) => [...lastState, newCycle])
    setActiveCycleId(newCycle.id)
    setAmountSecondsPassed(0)

    reset()
  }

  function handleStopCycle() {
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

  const taskInput = watch('task')
  const minutesAmountInput = watch('minutesAmount')
  const isSubmitDisabled = !taskInput || minutesAmountInput > 60 || minutesAmountInput < 5

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCicle)}>
        <CyclesContext.Provider value={{ activeCycle, activeCycleId, setCurrentCycleAsFinished, amountSecondsPassed, handleAmountSecondsPassed }}>
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <CountDown />
        </CyclesContext.Provider>
        {activeCycleId ? (
          <Button variant="red" type="submit" onClick={handleStopCycle}>
            <Pause />
            Finalizar
          </Button>
        ) : (
          <Button disabled={isSubmitDisabled} type="submit">
            <Play />
            Começar
          </Button>
        )}
      </form>
    </HomeContainer>
  )
}
