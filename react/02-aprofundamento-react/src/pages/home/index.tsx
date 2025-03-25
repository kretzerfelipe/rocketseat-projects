import { Pause, Play } from 'phosphor-react'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { CountDown } from './components/count-down'
import { NewCycleForm } from './components/new-cycle-form'
import { HomeContainer } from './styles'
import { NewCicleFormData } from '../../@types/globals'
import { Button } from '../../components/button/styles'
import { CyclesContext } from '../../contexts/cycles-context'

export default function Home() {
  const { createNewCicle, handleStopCycle, activeCycleId } = useContext(CyclesContext)
  const newCycleForm = useForm<NewCicleFormData>({
    defaultValues: {
      task: '',
      minutesAmount: 5
    }
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const taskInput = watch('task')
  const minutesAmountInput = watch('minutesAmount')
  const isSubmitDisabled = !taskInput || minutesAmountInput > 60

  function handleCreateNewCycle(data: NewCicleFormData) {
    createNewCicle(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />
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
