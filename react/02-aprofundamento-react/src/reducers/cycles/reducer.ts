import { produce } from 'immer'

import { ActionTypes } from './actions'
import { Cycle } from '../../@types/globals'

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      return produce(state, (draft) => {
        const currentCycleIndex = draft.cycles.findIndex(
          (cycle) => cycle.id === draft.activeCycleId
        )

        if (currentCycleIndex < 0) {
          return state
        }

        draft.cycles[currentCycleIndex].interruptedDate = new Date()
        draft.activeCycleId = null
      })
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED:
      return produce(state, (draft) => {
        const currentCycleIndex = draft.cycles.findIndex(
          (cycle) => cycle.id === draft.activeCycleId
        )

        if (currentCycleIndex < 0) {
          return state
        }

        draft.cycles[currentCycleIndex].finishedDate = new Date()
        draft.activeCycleId = null
      })
  }

  return state
}
