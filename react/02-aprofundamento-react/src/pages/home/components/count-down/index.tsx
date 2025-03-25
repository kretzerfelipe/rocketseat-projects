import { differenceInSeconds as calculateDifferenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { ContdownContainer, Separator } from './styles'
import { CyclesContext } from '../../../../contexts/cycles-context'


export function CountDown() {
  const { activeCycle, activeCycleId, setCurrentCycleAsFinished, amountSecondsPassed, handleAmountSecondsPassed } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const differenceInSeconds = calculateDifferenceInSeconds(new Date(), activeCycle.startDate)
      
        if (differenceInSeconds >= totalSeconds) {
          setCurrentCycleAsFinished()

          handleAmountSecondsPassed(totalSeconds)

          clearInterval(interval)
        } else {
          handleAmountSecondsPassed(differenceInSeconds)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId, handleAmountSecondsPassed])

  useEffect(() => {
    document.title = activeCycle
      ? `${activeCycle.task} - ${minutes}:${seconds}`
      : 'Pomodoro Kresaut'
  }, [minutes, seconds, activeCycle])
  
  return (
    <ContdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </ContdownContainer>
  )
}
