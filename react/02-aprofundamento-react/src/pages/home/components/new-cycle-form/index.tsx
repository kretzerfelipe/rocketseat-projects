import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './style'
import { CyclesContext } from '../..'

export function NewCycleForm() {
  const { activeCycleId } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        list="task-suggestions"
        id="task"
        placeholder="Dê um nome para seu projeto"
        disabled={!!activeCycleId}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="projeto01"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        step={5}
        type="number"
        id="minutesAmount"
        placeholder="00"
        min={5}
        max={60}
        disabled={!!activeCycleId}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
