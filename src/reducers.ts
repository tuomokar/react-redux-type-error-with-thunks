import { IncreaseSumAction, IncreaseCountAction } from './actions'

export interface CounterState {
  sum: number
  count: number
}

type Action = IncreaseSumAction | IncreaseCountAction

const initialState: CounterState = {
  sum: 0,
  count: 0
}

const counterReducer = (state: CounterState = initialState, action: Action): CounterState => {
  switch (action.type) {
    case 'INCREASE_AMOUNT':
      return { ...state, sum: action.amount + state.sum }
    case 'INCREASE_COUNT':
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}

export default counterReducer